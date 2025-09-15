const dice = document.querySelectorAll(".dice");
const rollButton = document.querySelector("button")
const turnCounter = document.getElementById("turnCounter")

rollButton.addEventListener("click", () => rollDice())


function rollDice(){
    if(turnCounter.textContent >= 3){
        alert("Choose a combination")
        return
    }
    turnCounter.textContent = parseInt(turnCounter.textContent)+1
    
    for (const die of dice) {
        if(!die.classList.contains("isLocked")){
            let newValue = Math.floor((Math.random()*6)+1)
            die.dataset.dieValue = newValue
            die.classList.remove("diceBorder")
            die.innerHTML = `<img src="images/${newValue}face.jpg" alt=""></img>"`
        }
    }
    updatePoints()
}