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

  fastify.get('/data', dataSchema, async function (req, reply) {
    let payload;
    try {
      payload = {
        status: 'OK',
        message: 'get data success'
      }
      payload.data = await dataService.getFakeData()
    } catch (error) {
      payload = {
        status: 'NG',
        message: error.message
      }
      reply.code(400)
    }
    reply.send(payload)
  })

}
