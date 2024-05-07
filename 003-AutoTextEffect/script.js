const container = document.querySelector('.container')

const carrers = ['Student', 'Programmer', 'Web Developer']

let carrerIndex = 0;
let characterIndex = 0

updateText()

function updateText(){
    container.innerHTML = `<h1>I am a ${carrers[carrerIndex].slice(0,characterIndex+1)}</h1>`
    characterIndex ++
    if(characterIndex === carrers[carrerIndex].length){
        carrerIndex++;
        characterIndex = 0;
    }

    if(carrerIndex === carrers.length){
        carrerIndex = 0
    }
    setTimeout(updateText, 400)
}

