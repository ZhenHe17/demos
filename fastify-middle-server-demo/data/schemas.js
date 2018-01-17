'use strict'

const dataSchema = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          status: { type: 'string' },
          message: { type: 'string' },
          data: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                name: { type: 'string' },
                id: { type: 'integer' },
              }
            }
          }
        }
      }
    },
    additionalProperties: false
  }
}

module.exports = {
  dataSchema
}
