const { resolvers: generated } = require('./generated/resolvers')
// const { resolvers: User } = require("./User")
const { resolvers: Check } = require("./Check")

const resolvers = [
    ...generated,
    // User,
    Check,
]

module.exports = { resolvers }
