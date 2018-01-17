'use strict'

const data = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'string'
        }
      }
    }
  }
}

module.exports = {
  dataSchema: data
}
