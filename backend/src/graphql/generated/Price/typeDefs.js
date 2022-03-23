const { default: gql } = require('graphql-tag')

const Price = gql`
  type Price {
    id: String!
    value: Float!
    positions(
      where: PositionWhereInput
      orderBy: PositionOrderByWithRelationInput
      cursor: PositionWhereUniqueInput
      take: Int
      skip: Int
      distinct: PositionScalarFieldEnum
    ): [Position!]!
    actualPrices(
      where: PositionWhereInput
      orderBy: PositionOrderByWithRelationInput
      cursor: PositionWhereUniqueInput
      take: Int
      skip: Int
      distinct: PositionScalarFieldEnum
    ): [Position!]!
    checkouts(
      where: CheckoutWhereInput
      orderBy: CheckoutOrderByWithRelationInput
      cursor: CheckoutWhereUniqueInput
      take: Int
      skip: Int
      distinct: CheckoutScalarFieldEnum
    ): [Checkout!]!
    _count: PriceCountOutputType!
  }

  type Query {
    findUniquePrice(where: PriceWhereUniqueInput!): Price
    findFirstPrice(
      where: PriceWhereInput
      orderBy: [PriceOrderByWithRelationInput]
      cursor: PriceWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PriceScalarFieldEnum]
    ): Price
    findManyPrice(
      where: PriceWhereInput
      orderBy: [PriceOrderByWithRelationInput]
      cursor: PriceWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PriceScalarFieldEnum]
    ): [Price!]
    findManyPriceCount(
      where: PriceWhereInput
      orderBy: [PriceOrderByWithRelationInput]
      cursor: PriceWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PriceScalarFieldEnum]
    ): Int!
    aggregatePrice(
      where: PriceWhereInput
      orderBy: [PriceOrderByWithRelationInput]
      cursor: PriceWhereUniqueInput
      take: Int
      skip: Int
    ): AggregatePrice
  }

  type Mutation {
    createOnePrice(data: PriceCreateInput!): Price!
    updateOnePrice(
      data: PriceUpdateInput!
      where: PriceWhereUniqueInput!
    ): Price!
    deleteOnePrice(where: PriceWhereUniqueInput!): Price
    upsertOnePrice(
      where: PriceWhereUniqueInput!
      create: PriceCreateInput!
      update: PriceUpdateInput!
    ): Price
    deleteManyPrice(where: PriceWhereInput): BatchPayload
    updateManyPrice(
      data: PriceUpdateManyMutationInput!
      where: PriceWhereInput
    ): BatchPayload
  }
`

module.exports = {
  Price,
}
