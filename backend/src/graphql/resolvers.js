const { resolvers: generated } = require('./generated/resolvers')
const { resolvers: User } = require("./User")

const resolvers = [
    ...generated,
    User
]

module.exports = { resolvers }
