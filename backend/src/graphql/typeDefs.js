const { default: gql } = require("graphql-tag")
const { typeDefs: generated } = require("./generated/typeDefs")
const { mergeTypeDefs } = require("@graphql-tools/merge")
// const { typeDefs: User } = require("./User")
const { typeDefs: Check } = require("./Check")

const Initial = gql`
	scalar DateTime
`

const typeDefs = mergeTypeDefs([
	Initial,
	generated,
	// User,
	Check,
])

module.exports = { typeDefs }
