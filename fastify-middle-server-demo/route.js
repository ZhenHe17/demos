async function routes (fastify, options) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world' }
  })
  fastify.get('/list', async (request, reply) => {
    return { data: [1,2,3] }
  })
}

module.exports = routes