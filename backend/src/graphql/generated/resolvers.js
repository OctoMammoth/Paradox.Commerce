const { Position } = require('./Position/resolvers')
const { Checkout } = require('./Checkout/resolvers')
const { Check } = require('./Check/resolvers')
const { Point } = require('./Point/resolvers')

const resolvers = [Point, Check, Checkout, Position]

module.exports = { resolvers }
