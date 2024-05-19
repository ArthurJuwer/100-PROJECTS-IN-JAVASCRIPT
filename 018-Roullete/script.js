const wheel = document.querySelector(".wheel")
const spinBtn = document.querySelector(".spinBtn")


spinBtn.addEventListener("click", ()=>{
    let randomNumber = ~~(Math.random() * 720)
    wheel.style.transform = `rotate(${randomNumber}deg)`
    console.log(randomNumber)
    setTimeout(() => {
        switch(true){
            case (randomNumber >= 25  && randomNumber <= 65) || (randomNumber >= 25+360 && randomNumber <= 65+360):
                alert("45")
                break
            case (randomNumber >= 66  && randomNumber <= 110) || (randomNumber >= 66+360 && randomNumber <= 110+360):
                alert("70")
                break
            case (randomNumber >= 111  && randomNumber <= 155) || (randomNumber >= 111+360 && randomNumber <= 155+360):
                alert("10")
                break
            case (randomNumber >= 156  && randomNumber <= 200) || (randomNumber >= 156+360 && randomNumber <= 200+360):
                alert("0")
                break
            case (randomNumber >= 201  && randomNumber <= 245) || (randomNumber >= 201+360 && randomNumber <= 245+360):
                alert("55")
                break
            case (randomNumber >= 246  && randomNumber <= 290) || (randomNumber >= 246+360 && randomNumber <= 290+360):
                alert("20")
                break
            case (randomNumber >= 291  && randomNumber <= 335) || (randomNumber >= 291+360 && randomNumber <= 335+360):
                alert("1")
                break 
            case (randomNumber >= 335  || randomNumber <= 24) || (randomNumber >= 335+360 || randomNumber <= 24+360):
                alert("100")
                break
        }
    }, 3000);
    


})

