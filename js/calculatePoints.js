let diceValues = []

function updateDiceValues(){
    diceValues = []
    dice.forEach(die =>{
        diceValues.push(parseInt(die.dataset.dieValue))
    })
    console.log(diceValues)
}

function uppersection(number){
    let count = 0;

    for (const die of diceValues){
        if(die === number) count++
    }
    return count * number
}

function pairFinder(howManyInARow = 2, startIndex = 6){
    let occurences = (diceValues, numberToFind) => diceValues.filter(diceValue => diceValue === numberToFind).length

    for (let index = startIndex; index > 0; index--) {
        if(occurences(diceValues, index) >= howManyInARow){
            return howManyInARow * index
        }
    }
    return 0;
}

function onePair(){
    return pairFinder()
}

function twoPairs(){
    let biggestPair = onePair();
    let secoundPair = pairFinder(2, (biggestPair / 2)-1);

    return biggestPair > 0 && secoundPair > 0 ? biggestPair+secoundPair : 0; 
}

function threeSame(){
    return pairFinder(3)
}

function fourSame(){
    return pairFinder(4)
}

function fullHouse(){
    let threeSame = pairFinder(3)
    let pair = pairFinder(2, Math.floor(threeSame / 3)-1)

    return threeSame > 0 && pair > 0 ? threeSame+pair : 0; 
}

function smallStraight(){
    for (let index = 1; index < 6; index++) {
         if(!diceValues.includes(index)){
            return 0;
         }
    }
    return 15;
}

function largeStraight(){
    for (let index = 2; index <= 6; index++) {
            if(!diceValues.includes(index)){
                return 0;
            }
        }
        return 20;
}

function chance(){
    let sum = 0;

    for (const value of diceValues) {
        sum += value
    }

    return sum;
}

function yatzy(){
    let result = pairFinder(5);
    return result > 0 ? 50 : 0; 
}

const calculationFunctions = [
    onePair,
    twoPairs,
    threeSame,
    fourSame,
    fullHouse,
    smallStraight,
    largeStraight,
    chance,
    yatzy
]

