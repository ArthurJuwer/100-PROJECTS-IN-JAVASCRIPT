let atualTime = document.querySelector(".timer input")

let interval;
let timeLeft = 1500

updateTimer()


function updateTimer(){

    let minutes = Math.floor(timeLeft / 60)
    let seconds = timeLeft % 60
    let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2,"0")}`

    atualTime.value = formattedTime

}

function startTimer(){
    interval = setInterval(() => {
            timeLeft--;
            updateTimer()
            if(timeLeft === 0){
                clearInterval(interval)
                alert("Times's Up!")
            }
        }, 1000);
}

function stopTimer(){
    clearInterval(interval)
    updateTimer()
}
function resetTimer(){
    clearInterval(interval)
    timeLeft = 1500
    updateTimer()
}


const btnStart = document.querySelector("#start")
const btnStop = document.querySelector("#stop")
const btnReset = document.querySelector("#reset")


btnStart.addEventListener("click", startTimer)
btnStop.addEventListener("click", stopTimer)
btnReset.addEventListener("click", resetTimer)
