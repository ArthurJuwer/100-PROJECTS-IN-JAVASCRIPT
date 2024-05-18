const inputPassowrd = document.querySelector("input")
const progressLevel = document.querySelector("#level")
const textLevel = document.querySelector("label")

inputPassowrd.addEventListener("input", updateProgress)

let atualevel = 'easy'


function updateProgress(){

    let password = inputPassowrd.value

    let score = 0;

    if (password.length >= 8){
        score++
    }
    
    if (password.match(/[a-z]/g)) {
        score++;
    }
    if (password.match(/[A-Z]/g)) {
        score++;
    }
    if (password.match(/[0-9]/g)) {
        score++;
    }
    let symbolRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

    if (password.match(symbolRegex)) {
        score++
    }


    switch(score){
        case 0:{
            progressLevel.style.background = 'rgba(255,0,0,1)'
            atualevel = 'very easy'
            break
        }
        case 1:
            progressLevel.style.background = 'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(231,160,16,1) 100%)';
            atualevel = 'easy'
            break
        case 2:
            progressLevel.style.background = 'linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(255,223,0,1) 75%)'
            atualevel = 'moderate'
            break
        case 3:
            progressLevel.style.background = 'linear-gradient(90deg, rgba(255,0,0,1) 0%,rgba(255,223,0,1) 25%, rgba(255,223,0,1) 50%, rgba(1,255,0,1) 100%)'
            atualevel = 'medium'
            break
        case 4:
            progressLevel.style.background = 'linear-gradient(90deg, rgba(255,175,0,1) 0%, rgba(254,224,12,1) 21%, rgba(249,255,0,1) 46%, rgba(1,255,0,1) 100%)'
            atualevel = 'hard'
            break
        default:
            progressLevel.style.background = 'rgba(1,255,0,1)' 
            atualevel = 'ultra secure'
            break
    }
    textLevel.innerText = atualevel

}

