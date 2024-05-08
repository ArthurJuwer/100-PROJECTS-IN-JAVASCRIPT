const milliseconds = document.querySelector("#milliseconds"),
 seconds = document.querySelector("#seconds"),
 minutes = document.querySelector("#minutes"),
  btnStart = document.querySelector("#start"), 
  btnPause = document.querySelector("#pause"),
  btnReset = document.querySelector("#reset")

btnStart.addEventListener("click", start)
btnPause.addEventListener("click", pause)
btnReset.addEventListener("click", reset)

let interval, isPaused

function start(){

    isPaused = false
    clearInterval(interval)

    interval = setInterval(()=>{

        if(seconds.value >= 60){
            seconds.value = 0
            minutes.value++
        }
        if(milliseconds.value >= 1000){
            milliseconds.value = 0
            seconds.value++
            
        }
        
        if(!isPaused){
            milliseconds.value = Number(milliseconds.value) + 5
        }
        toFormatText(minutes)
        toFormatText(seconds)
        toFormatText(milliseconds)
    
    }, 5)
}
function pause(){
    isPaused = true   
}
function reset(){
    clearInterval(interval)
    milliseconds.value = 0
    seconds.value = 0
    minutes.value = 0
    toFormatText(minutes)
    toFormatText(seconds)
    toFormatText(milliseconds)
}



function toFormatText(time){
    zeroQuantity = 2

    if(time == milliseconds){
        zeroQuantity = 3 
    }
    time.value = time.value.toString().padStart(zeroQuantity, '0')
}
