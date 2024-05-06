const btnRefreshGenerator = document.querySelector(".box-input-generator button"),
 btnSubmitCaptcha = document.querySelector(".box-submit button")

captchaGenerator()

btnRefreshGenerator.addEventListener("click", ()=>{
    captchaGenerator()
})
btnSubmitCaptcha.addEventListener("click", ()=>{
    captchaVerification()
})


function captchaGenerator(){
    let minChairs=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
    let captchaAtual = []

    for(let i = 0; i <= 5; i++){
        
        const randomIndex = Math.floor(Math.random() * minChairs.length);
        const randomElement = minChairs[randomIndex];

        let randomNumber = Math.floor(Math.random(1) * 10)

        if(i % 2 == 0){
            captchaAtual[i] = randomNumber
        }
        else{

            captchaAtual[i] = randomElement

        }
    }
    

    
    let captchaFormat = captchaAtual.toString().replace(/,/g,'')
    
    let inputGenerator = document.querySelector(".box-input-generator input")
    inputGenerator.value = captchaFormat
    
}
function captchaVerification(){
    let inputGenerator = document.querySelector(".box-input-generator input"),
     inputVerification = document.querySelector(".box-input-tofill input")

    const equalsValues = inputGenerator.value == inputVerification.value

    if(equalsValues){
        alert("Verificado")
        inputVerification.style.borderColor = "green"
    } else {
        alert("Errou")
        inputVerification.style.borderColor = "red"
    }
}

