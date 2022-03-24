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
        cart: [Item]
        cash: Float!
        notCash: Float!
        sum: Float!
    }
    input Item {
        count: Int!
        name: String!
        nds: String!
        price: Float!
    }

    type Mutation {
        compareCheck(scrapped: CompareCheckInput!):Boolean
    }
`

module.exports = typeDefs
