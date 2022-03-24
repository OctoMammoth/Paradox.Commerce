const Position = {
  Query: {
    findUniquePosition: (_parent, args, { prisma }) => {
      return prisma.position.findUnique(args)
    },
    findFirstPosition: (_parent, args, { prisma }) => {
      return prisma.position.findFirst(args)
    },
    findManyPosition: (_parent, args, { prisma }) => {
      return prisma.position.findMany(args)
    },
    findManyPositionCount: (_parent, args, { prisma }) => {
      return prisma.position.count(args)
    },
    aggregatePosition: (_parent, args, { prisma }) => {
      return prisma.position.aggregate(args)
    },
  },
  Mutation: {
    createOnePosition: (_parent, args, { prisma }) => {
      return prisma.position.create(args)
    },
    updateOnePosition: (_parent, args, { prisma }) => {
      return prisma.position.update(args)
    },
    deleteOnePosition: async (_parent, args, { prisma }) => {
      return prisma.position.delete(args)
    },
    upsertOnePosition: async (_parent, args, { prisma }) => {
      return prisma.position.upsert(args)
    },
    deleteManyPosition: async (_parent, args, { prisma }) => {
      return prisma.position.deleteMany(args)
    },
    updateManyPosition: (_parent, args, { prisma }) => {
      return prisma.position.updateMany(args)
    },
  },
}

module.exports = {
  Position,
}
