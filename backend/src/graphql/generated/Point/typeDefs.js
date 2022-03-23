const { default: gql } = require('graphql-tag')

const Point = gql`
  type Point {
    id: String!
    address: String!
    lat: Float!
    lng: Float!
    fn: String!
    owner: String!
    checks(
      where: CheckWhereInput
      orderBy: CheckOrderByWithRelationInput
      cursor: CheckWhereUniqueInput
      take: Int
      skip: Int
      distinct: CheckScalarFieldEnum
    ): [Check!]!
    _count: PointCountOutputType!
  }

  type Query {
    findUniquePoint(where: PointWhereUniqueInput!): Point
    findFirstPoint(
      where: PointWhereInput
      orderBy: [PointOrderByWithRelationInput]
      cursor: PointWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PointScalarFieldEnum]
    ): Point
    findManyPoint(
      where: PointWhereInput
      orderBy: [PointOrderByWithRelationInput]
      cursor: PointWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PointScalarFieldEnum]
    ): [Point!]
    findManyPointCount(
      where: PointWhereInput
      orderBy: [PointOrderByWithRelationInput]
      cursor: PointWhereUniqueInput
      take: Int
      skip: Int
      distinct: [PointScalarFieldEnum]
    ): Int!
    aggregatePoint(
      where: PointWhereInput
      orderBy: [PointOrderByWithRelationInput]
      cursor: PointWhereUniqueInput
      take: Int
      skip: Int
    ): AggregatePoint
  }

  type Mutation {
    createOnePoint(data: PointCreateInput!): Point!
    updateOnePoint(
      data: PointUpdateInput!
      where: PointWhereUniqueInput!
    ): Point!
    deleteOnePoint(where: PointWhereUniqueInput!): Point
    upsertOnePoint(
      where: PointWhereUniqueInput!
      create: PointCreateInput!
      update: PointUpdateInput!
    ): Point
    deleteManyPoint(where: PointWhereInput): BatchPayload
    updateManyPoint(
      data: PointUpdateManyMutationInput!
      where: PointWhereInput
    ): BatchPayload
  }
`

module.exports = {
  Point,
}
