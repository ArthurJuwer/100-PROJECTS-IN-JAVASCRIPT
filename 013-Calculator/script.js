let btnNumber = document.querySelectorAll(".number"),
 btnSignal = document.querySelectorAll(".signal"),
 inputText = document.querySelector("#textCalculator")

for(let i = 0; i < btnNumber.length; i++){
    btnNumber[i].addEventListener("click", ()=>{
        for(let everySignal = 0; everySignal < btnSignal.length; everySignal++){
            if(inputText.value == btnSignal[everySignal].value){
                clearText()
            }
        }
        let maxLenght = inputText.value.length <= 10

        const addNumber = `${btnNumber[i].value}`
        const maxLengthMessage = "maximum length numbers";

        maxLenght ? inputText.value += addNumber : alert(maxLengthMessage);
    })
}
let saveOldText = 0,number1 = 0,number2 = 0, saveSignal, result

for(let i = 0; i < btnSignal.length; i++){
    btnSignal[i].addEventListener("click", ()=>{
        
        let saveNewText = inputText.value

        number1 = Number(saveNewText)
        number2 = Number(saveOldText)

        if(btnSignal[i].value == '='){
            

            switch(true){
                case saveSignal == '+':
                    result = number2 + number1
                    break
                case saveSignal == '-':
                    result = number2 - number1
                    break
                case saveSignal == 'x':
                    result = number2 * number1
                    break
                case saveSignal == '/':
                    if(number1 != 0 ){
                        result = number2 / number1
                    } else {
                        alert("No number is divisible by 0")
                        result = ''
                    }
                    break

            }
            inputText.value = `${result}`

        } else if(btnSignal[i].value == 'xq'){
            
            if(number1 != 0 ){
                result =  number1 * number1
            } else {
                alert("0 has no defined root")
                result = ''
            }
            inputText.value = `${result}`
        }
        else if(btnSignal[i].value == ','){ 
            let addComma = number1+='.'
            inputText.value = `${addComma}`

        } else if(btnSignal[i].value == 'C'){
            clearText()
        } else if(btnSignal[i].value == 'CE'){
            saveOldText = 0
            saveNewText = 0
            clearText()
        } else if(btnSignal[i].value == '<-'){
            inputText.value = inputText.value.slice(0,-1)
        }
        else {
            saveOldText = inputText.value
            saveSignal = btnSignal[i].value
            inputText.value = `${btnSignal[i].value}`
        }
    })
}
function clearText(){
    inputText.value = ''
}
