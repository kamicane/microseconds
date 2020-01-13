'use strict'

const now = require('./now')
const parse = require('./parse')

const since = (micro) => now() - micro

exports.now = now
exports.since = since
exports.parse = parse
