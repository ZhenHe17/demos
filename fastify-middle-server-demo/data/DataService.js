'use strict'

const getFakeData = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let fakeData = [{
        name: 'aa',
        id: 1
      }, {
        name: 'bb',
        id: 2
      }]
      if (Math.random() < 0.5) {
        resolve(fakeData)
      } else {
        reject('fake error')
      }
    }, 200)
  })
}

class DataService {

  async getFakeData() {
    let data = await getFakeData().catch((err) => { console.error(err) })
    return {
      status: 'OK',
      message: 'get data success',
      data
    }
  }

}

module.exports = DataService
