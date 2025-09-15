for (const area of valueBox) {
    area.addEventListener("click", () =>{
        if(area.classList.contains("pointsLocked")) return
        //event.tstopPropagation()
        if(turnCounter.textContent === "3"){
            area.classList.add("pointsLocked")
            resetRound()
        }else{
            alert("still have turns left")
        }
    })
}

function resetRound(){
    pointTotalUpper()
    pointsTotal()

    turnCounter.textContent = "0"

    for (const die of dice) {
        die.classList.remove("isLocked")
        die.innerHTML = ""
    }

    for (const box of valueBox) {
        if(!box.classList.contains("pointsLocked")){
            box.textContent = ""
        }
    }
}