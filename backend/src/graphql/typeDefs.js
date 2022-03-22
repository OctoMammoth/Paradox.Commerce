const { typeDefs: generated } = require("./generated/typeDefs")
const { mergeTypeDefs } = require("@graphql-tools/merge")
const { typeDefs: User } = require("./User")

const typeDefs = mergeTypeDefs([
	generated,
	User
])

module.exports = { typeDefs }
