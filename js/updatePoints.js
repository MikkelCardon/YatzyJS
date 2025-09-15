const scoreAreas = document.querySelectorAll(".scoreArea")
const valueBox = Array.from(document.querySelectorAll(".valueBox"))

const lowerSectionValueBox = valueBox.slice(6)

function updatePoints(){
    updateDiceValues()

    pointsUpperSection()
    pointsLowerSection()
}

function pointsUpperSection(){
    let sumUpperSection = 0;

    for (let index = 1; index <= 6; index++) {
        let currentValueBox = valueBox[index-1]
        if(!currentValueBox.classList.contains("pointsLocked")){
            const points = uppersection(index)
            currentValueBox.textContent = points
        }
    }
}

function pointsLowerSection(){
    for (let index = 0; index < lowerSectionValueBox.length; index++) {
        if(!lowerSectionValueBox[index].classList.contains("pointsLocked")){
            const points =  calculationFunctions[index]()
            lowerSectionValueBox[index].textContent = points
        }
    }
}

function pointTotalUpper(){
    let sumUpperSection = 0;

    for (let index = 1; index <= 6; index++) {
        let currentValueBox = valueBox[index-1]
        if(currentValueBox.classList.contains("pointsLocked")){
            sumUpperSection += parseInt(currentValueBox.textContent)
        }
    }
    
    document.getElementById("upperSectionTotal").textContent = sumUpperSection

    if(sumUpperSection >= 63){
        document.getElementById("upperSectionBonus").textContent = 50
    }
}

function pointsTotal(){
    let sumLowerSection

    for (const valueBox of lowerSectionValueBox) {
        if(valueBox.classList.contains("pointsLocked")){
            sumLowerSection += parseInt(valueBox.textContent)
        }
    }
    let sumUpper = document.getElementById("upperSectionTotal")
    let bonus = document.getElementById("upperSectionBonus")

    document.getElementById("total").textContent = sumLowerSection + parseInt(sumUpper.textContent) + parseInt(bonus)
}