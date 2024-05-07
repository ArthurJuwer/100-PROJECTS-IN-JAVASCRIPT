let currentPercentage = document.querySelector(".currentPercentage")
let progressBar = document.querySelector("progress")

let interval = setInterval(() => {
    progressBar.value += 5

    currentPercentage.style.left = `${progressBar.value}%`

    currentPercentage.innerHTML = `${progressBar.value}%`
    
    if(progressBar.value === 100){
        clearInterval(interval)
        alert("Finalizado")
    }
}, 200); // 0.2 seg



