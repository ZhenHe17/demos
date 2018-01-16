const getFakeData = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let fakeData = [{
                name: 'a',
                age: 1
            }, {
                name: 'b',
                age: 2
            }]
            if (Math.random() < 0.5) {
                resolve(fakeData)
            } else {
                reject('fake error')
            }
        }, 200)
    })
}

module.exports = getFakeData 