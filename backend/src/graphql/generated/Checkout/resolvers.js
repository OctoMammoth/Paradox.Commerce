const Checkout = {
  Query: {
    findUniqueCheckout: (_parent, args, { prisma }) => {
      return prisma.checkout.findUnique(args)
    },
    findFirstCheckout: (_parent, args, { prisma }) => {
      return prisma.checkout.findFirst(args)
    },
    findManyCheckout: (_parent, args, { prisma }) => {
      return prisma.checkout.findMany(args)
    },
    findManyCheckoutCount: (_parent, args, { prisma }) => {
      return prisma.checkout.count(args)
    },
    aggregateCheckout: (_parent, args, { prisma }) => {
      return prisma.checkout.aggregate(args)
    },
  },
  Mutation: {
    createOneCheckout: (_parent, args, { prisma }) => {
      return prisma.checkout.create(args)
    },
    updateOneCheckout: (_parent, args, { prisma }) => {
      return prisma.checkout.update(args)
    },
    deleteOneCheckout: async (_parent, args, { prisma }) => {
      return prisma.checkout.delete(args)
    },
    upsertOneCheckout: async (_parent, args, { prisma }) => {
      return prisma.checkout.upsert(args)
    },
    deleteManyCheckout: async (_parent, args, { prisma }) => {
      return prisma.checkout.deleteMany(args)
    },
    updateManyCheckout: (_parent, args, { prisma }) => {
      return prisma.checkout.updateMany(args)
    },
  },
}

module.exports = {
  Checkout,
}
