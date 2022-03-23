const { default: gql } = require('graphql-tag')

const Position = gql`
  type Position {
    id: String!
    name: String!
    actualPrice: Price!
    priceId: String!
    prices(
      where: PriceWhereInput
      orderBy: PriceOrderByWithRelationInput
      cursor: PriceWhereUniqueInput
      take: Int
      skip: Int
      distinct: PriceScalarFieldEnum
    ): [Price!]!
    checkouts(
      where: CheckoutWhereInput
      orderBy: CheckoutOrderByWithRelationInput
      cursor: CheckoutWhereUniqueInput
      take: Int
      skip: Int
      distinct: CheckoutScalarFieldEnum
    ): [Checkout!]!
    _count: PositionCountOutputType!
  }

  type Query {
    findUniquePosition(where: PositionWhereUniqueInput!): Position
    findFirstPosition(
      where: PositionWhereInput
      orderBy: [PositionOrderByWithRelationInput]
      cursor: PositionWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PositionScalarFieldEnum]
    ): Position
    findManyPosition(
      where: PositionWhereInput
      orderBy: [PositionOrderByWithRelationInput]
      cursor: PositionWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PositionScalarFieldEnum]
    ): [Position!]
    findManyPositionCount(
      where: PositionWhereInput
      orderBy: [PositionOrderByWithRelationInput]
      cursor: PositionWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PositionScalarFieldEnum]
    ): Int!
    aggregatePosition(
      where: PositionWhereInput
      orderBy: [PositionOrderByWithRelationInput]
      cursor: PositionWhereUniqueInput
      take: Int
      skip: Int
    ): AggregatePosition
  }

  type Mutation {
    createOnePosition(data: PositionCreateInput!): Position!
    updateOnePosition(
      data: PositionUpdateInput!
      where: PositionWhereUniqueInput!
    ): Position!
    deleteOnePosition(where: PositionWhereUniqueInput!): Position
    upsertOnePosition(
      where: PositionWhereUniqueInput!
      create: PositionCreateInput!
      update: PositionUpdateInput!
    ): Position
    deleteManyPosition(where: PositionWhereInput): BatchPayload
    updateManyPosition(
      data: PositionUpdateManyMutationInput!
      where: PositionWhereInput
    ): BatchPayload
  }
`

module.exports = {
  Position,
}
