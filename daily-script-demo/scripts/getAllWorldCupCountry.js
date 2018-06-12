let worldCupJSON = require('../data/world-cup.json');;

let allRoundsMatches = []
let allCountries = []
let allCountryCodes = []

worldCupJSON.rounds.map((round) => {
    allRoundsMatches = allRoundsMatches.concat(round.matches)
})

allRoundsMatches.map((match, index) => {
    for (let i = 1; i < 3; i++) {
        let currentCode = match['team' + i].code;
        if (allCountryCodes.findIndex((code) => code == currentCode) == -1) {
            allCountryCodes.push(currentCode)
            allCountries.push(match['team' + i])
        }
    }
})
console.info('allCountryCodes', allCountryCodes)
console.info('allCountries', allCountries)
