const { default: gql } = require("graphql-tag")

const typeDefs = gql`
    input CompareCheckInput {
        address: String!
        cashier: String!
        fn: String!
        fpd: String!
        givenDate: DateTime!
        i: String!
        inn: String
        owner: String!
        rn: String!
        shiftId: String!
        shiftDocId: String!
        title: String!
        userInn: String!
    }

    type Mutation {
        compareCheck:Boolean
    }
`

module.exports = typeDefs
