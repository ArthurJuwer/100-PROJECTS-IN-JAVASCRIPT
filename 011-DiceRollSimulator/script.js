const btnRollDice = document.querySelector(".simulator-box button")


btnRollDice.addEventListener("click", ()=>{

    let randomNumber = ~~(Math.random(1) * 7)

    if(randomNumber == 0){
        randomNumber = ~~(Math.random(1) * 7)
    }
    

    switch(randomNumber){
        case 1: 
            toReplaceImage(1)
            break
        case 2:
            toReplaceImage(2)
            break
        case 3:
            toReplaceImage(3)
            break
        case 4:
            toReplaceImage(4)
             break
        case 5:
            toReplaceImage(5)
            break
        case 6:
            toReplaceImage(6)
            break
        default:
            alert("Erro Numero Invalido.")
    }
})

function toReplaceImage(diceCase){
    let imageDice = document.querySelector(".simulator img")
    imageDice.src = `/011-DiceRollSimulator/images/dice${diceCase}.png`
}


