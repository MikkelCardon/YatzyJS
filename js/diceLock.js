for (const die of dice) {
    die.addEventListener("click", () =>{
        die.classList.toggle("isLocked")
    })
}