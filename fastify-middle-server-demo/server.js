// server.js
'use strict'

module.exports = async function (fastify, opts) {
  fastify.register(require('./data'), { prefix: '/api/data' })
}