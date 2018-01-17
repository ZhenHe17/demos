'use strict'

const {
  dataSchema
} = require('./schemas')
const DataService = require('./DataService')

module.exports = async function (fastify, opts) {

  fastify.register(function (fastify, opts, done) {
    fastify.register(registerRoutes)
    done()
  })

}

async function registerRoutes(fastify, opts) {

  const dataService = new DataService()

  fastify.get('/data', dataSchema, function (req, reply) {
    return dataService.getFakeData()
  })

}
