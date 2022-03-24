const { default: gql } = require('graphql-tag')

const Checkout = gql`
  type Checkout {
    id: String!
    count: Float!
    isCash: Boolean!
    time: DateTime!
    position: Position!
    positionId: String!
    price: Float!
    check: Check
    checkId: String
  }

  type Query {
    findUniqueCheckout(where: CheckoutWhereUniqueInput!): Checkout
    findFirstCheckout(
      where: CheckoutWhereInput
      orderBy: [CheckoutOrderByWithRelationInput]
      cursor: CheckoutWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CheckoutScalarFieldEnum]
    ): Checkout
    findManyCheckout(
      where: CheckoutWhereInput
      orderBy: [CheckoutOrderByWithRelationInput]
      cursor: CheckoutWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CheckoutScalarFieldEnum]
    ): [Checkout!]
    findManyCheckoutCount(
      where: CheckoutWhereInput
      orderBy: [CheckoutOrderByWithRelationInput]
      cursor: CheckoutWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CheckoutScalarFieldEnum]
    ): Int!
    aggregateCheckout(
      where: CheckoutWhereInput
      orderBy: [CheckoutOrderByWithRelationInput]
      cursor: CheckoutWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateCheckout
  }

  type Mutation {
    createOneCheckout(data: CheckoutCreateInput!): Checkout!
    updateOneCheckout(
      data: CheckoutUpdateInput!
      where: CheckoutWhereUniqueInput!
    ): Checkout!
    deleteOneCheckout(where: CheckoutWhereUniqueInput!): Checkout
    upsertOneCheckout(
      where: CheckoutWhereUniqueInput!
      create: CheckoutCreateInput!
      update: CheckoutUpdateInput!
    ): Checkout
    deleteManyCheckout(where: CheckoutWhereInput): BatchPayload
    updateManyCheckout(
      data: CheckoutUpdateManyMutationInput!
      where: CheckoutWhereInput
    ): BatchPayload
  }
`

module.exports = {
  Checkout,
}
