const Point = {
  Query: {
    findUniquePoint: (_parent, args, { prisma }) => {
      return prisma.point.findUnique(args)
    },
    findFirstPoint: (_parent, args, { prisma }) => {
      return prisma.point.findFirst(args)
    },
    findManyPoint: (_parent, args, { prisma }) => {
      return prisma.point.findMany(args)
    },
    findManyPointCount: (_parent, args, { prisma }) => {
      return prisma.point.count(args)
    },
    aggregatePoint: (_parent, args, { prisma }) => {
      return prisma.point.aggregate(args)
    },
  },
  Mutation: {
    createOnePoint: (_parent, args, { prisma }) => {
      return prisma.point.create(args)
    },
    updateOnePoint: (_parent, args, { prisma }) => {
      return prisma.point.update(args)
    },
    deleteOnePoint: async (_parent, args, { prisma }) => {
      return prisma.point.delete(args)
    },
    upsertOnePoint: async (_parent, args, { prisma }) => {
      return prisma.point.upsert(args)
    },
    deleteManyPoint: async (_parent, args, { prisma }) => {
      return prisma.point.deleteMany(args)
    },
    updateManyPoint: (_parent, args, { prisma }) => {
      return prisma.point.updateMany(args)
    },
  },
}

module.exports = {
  Point,
}
