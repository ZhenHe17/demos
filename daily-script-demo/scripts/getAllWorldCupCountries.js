let worldCupJSON = require('../data/world-cup.json');;

let allRoundsMatches = []
let allWorldCupCountries = []
let allWorldCupCountryCodes = []

worldCupJSON.rounds.map((round) => {
    allRoundsMatches = allRoundsMatches.concat(round.matches)
})

allRoundsMatches.map((match, index) => {
    for (let i = 1; i < 3; i++) {
        let currentCode = match['team' + i].code;
        if (allWorldCupCountryCodes.findIndex((code) => code == currentCode) == -1) {
            allWorldCupCountryCodes.push(currentCode)
            allWorldCupCountries.push(match['team' + i])
        }
    }
})
console.info('allWorldCupCountryCodes', allWorldCupCountryCodes)
console.info('allWorldCupCountries', allWorldCupCountries)
