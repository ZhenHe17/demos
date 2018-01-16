let getFakeData = require('./getFakeData')

async function routes (fastify, options) {
  fastify.get('/', async (request, reply) => {
    let fakeData = await getFakeData().catch(error => console.error(error));
    return fakeData
  })
  fastify.get('/list', async (request, reply) => {
    return { data: [1,2,3] }
  })
}

module.exports = routes