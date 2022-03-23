const Check = {
  Query: {
    findUniqueCheck: (_parent, args, { prisma }) => {
      return prisma.check.findUnique(args)
    },
    findFirstCheck: (_parent, args, { prisma }) => {
      return prisma.check.findFirst(args)
    },
    findManyCheck: (_parent, args, { prisma }) => {
      return prisma.check.findMany(args)
    },
    findManyCheckCount: (_parent, args, { prisma }) => {
      return prisma.check.count(args)
    },
    aggregateCheck: (_parent, args, { prisma }) => {
      return prisma.check.aggregate(args)
    },
  },
  Mutation: {
    createOneCheck: (_parent, args, { prisma }) => {
      return prisma.check.create(args)
    },
    updateOneCheck: (_parent, args, { prisma }) => {
      return prisma.check.update(args)
    },
    deleteOneCheck: async (_parent, args, { prisma }) => {
      return prisma.check.delete(args)
    },
    upsertOneCheck: async (_parent, args, { prisma }) => {
      return prisma.check.upsert(args)
    },
    deleteManyCheck: async (_parent, args, { prisma }) => {
      return prisma.check.deleteMany(args)
    },
    updateManyCheck: (_parent, args, { prisma }) => {
      return prisma.check.updateMany(args)
    },
  },
}

module.exports = {
  Check,
}
