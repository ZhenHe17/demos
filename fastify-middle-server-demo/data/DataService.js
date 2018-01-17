'use strict'
const fakeData = [{
  name: 'aa',
  id: 1
}, {
  name: 'bb',
  id: 2
}]

const getFakeData = function () {

}

class DataService {

  getFakeData() {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() < 0.5) {
          resolve(fakeData)
        } else {
          reject({ message: 'fake error' })
        }
      }, 200)
    })
  }

}

module.exports = DataService
