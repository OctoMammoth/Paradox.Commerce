const { Price } = require('./Price/typeDefs')
const { Position } = require('./Position/typeDefs')
const { Checkout } = require('./Checkout/typeDefs')
const { Check } = require('./Check/typeDefs')
const { Point } = require('./Point/typeDefs')
const { mergeTypeDefs } = require('@graphql-tools/merge')
const { sdlInputs } = require('@paljs/plugins')

const typeDefs = mergeTypeDefs([
  sdlInputs(),
  Point,
  Check,
  Checkout,
  Position,
  Price,
])

module.exports = { typeDefs }
