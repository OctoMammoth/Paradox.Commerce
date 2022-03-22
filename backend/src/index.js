const express = require('express');
const { ApolloServer } = require('apollo-server-express')
const { ApolloServerPluginLandingPageDisabled, ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core')
const { PrismaClient } = require('@prisma/client')
const { graphqlUploadExpress } = require('graphql-upload')
const { BaseRedisCache } = require('apollo-server-cache-redis')
const responseCachePlugin = require('apollo-server-plugin-response-cache')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { applyMiddleware } = require('graphql-middleware')
const { PrismaSelect } = require('@paljs/plugins')
const Redis = require('ioredis')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken')

const { typeDefs } = require('./graphql/typeDefs')
const { resolvers } = require('./graphql/resolvers')
const { permissions } = require('./utils/permissions')
const { checkRole } = require('./utils/auth')
// const { DataSourceAPI } = require('./utils/api')

dotenv.config()

const prisma = new PrismaClient()
const redis = new Redis({
    port: 6379,
    host: "127.0.0.1"
})

const selects = async (resolve, root, args, context, info) => {
    const result = new PrismaSelect(info).value
    if (Object.keys(result.select).length > 0) {
        args = {
            ...args,
            ...result
        }
    }
    return resolve(root, args, context, info)
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

const startServer = async () => {
    const server = new ApolloServer({
        schema: applyMiddleware(schema, selects, permissions),
        context: async (ctx) => {
            const { authorization } = ctx.req.headers
            const token = authorization ? authorization.replace('Bearer ', '') : ''
            const verify = await jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
                if (err) {
                    return null
                }
                return decoded
            })
            const checkToken = async () => {
                const roles = ['USER', 'ADMIN']
                const checks = await Promise.all(
                    roles.map(async (role) => {
                        return await checkRole(authorization, role, prisma, false)
                    })
                )
                const find = checks.find((object) => object)
                if (!find) throw new Error('Token timeout')
                return find
            }
            return {
                sessionId,
                prisma,
                verify,
                checkToken
            }
        },
        plugins: [
            responseCachePlugin(),
            process.env.NODE_ENV === 'production'
                ? ApolloServerPluginLandingPageDisabled()
                : ApolloServerPluginLandingPageGraphQLPlayground(),
        ],
        cache: new BaseRedisCache({
            client: redis
        }),
        // dataSources: () => ({
        //     dataSource: new DataSourceAPI()
        // })
    })
    await server.start()
    const app = express()
    app.use(graphqlUploadExpress())
    app.use('/uploads', express.static(__dirname + '/../../uploads'))
    server.applyMiddleware({ app })
    await new Promise(promises => app.listen({ port: 4000 }, promises))
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
}

startServer()