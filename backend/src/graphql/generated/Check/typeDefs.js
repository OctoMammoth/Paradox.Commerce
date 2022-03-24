const { default: gql } = require('graphql-tag')

const Check = gql`
  type Check {
    id: String!
    fd: String!
    cashier: String!
    fpd: String!
    givenDate: DateTime!
    userInn: String!
    inn: String
    shiftDocId: String!
    shiftId: String!
    type: String!
    summ: Float!
    checkouts(
      where: CheckoutWhereInput
      orderBy: CheckoutOrderByWithRelationInput
      cursor: CheckoutWhereUniqueInput
      take: Int
      skip: Int
      distinct: CheckoutScalarFieldEnum
    ): [Checkout!]!
    point: Point!
    pointId: String!
    _count: CheckCountOutputType!
  }

  type Query {
    findUniqueCheck(where: CheckWhereUniqueInput!): Check
    findFirstCheck(
      where: CheckWhereInput
      orderBy: [CheckOrderByWithRelationInput]
      cursor: CheckWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CheckScalarFieldEnum]
    ): Check
    findManyCheck(
      where: CheckWhereInput
      orderBy: [CheckOrderByWithRelationInput]
      cursor: CheckWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CheckScalarFieldEnum]
    ): [Check!]
    findManyCheckCount(
      where: CheckWhereInput
      orderBy: [CheckOrderByWithRelationInput]
      cursor: CheckWhereUniqueInput
      take: Int
      skip: Int
      distinct: [CheckScalarFieldEnum]
    ): Int!
    aggregateCheck(
      where: CheckWhereInput
      orderBy: [CheckOrderByWithRelationInput]
      cursor: CheckWhereUniqueInput
      take: Int
      skip: Int
    ): AggregateCheck
  }

  type Mutation {
    createOneCheck(data: CheckCreateInput!): Check!
    updateOneCheck(
      data: CheckUpdateInput!
      where: CheckWhereUniqueInput!
    ): Check!
    deleteOneCheck(where: CheckWhereUniqueInput!): Check
    upsertOneCheck(
      where: CheckWhereUniqueInput!
      create: CheckCreateInput!
      update: CheckUpdateInput!
    ): Check
    deleteManyCheck(where: CheckWhereInput): BatchPayload
    updateManyCheck(
      data: CheckUpdateManyMutationInput!
      where: CheckWhereInput
    ): BatchPayload
  }
`

module.exports = {
  Check,
}
