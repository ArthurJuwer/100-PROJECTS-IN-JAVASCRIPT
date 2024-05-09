const coordinates = document.querySelector(".box-info h1")
window.addEventListener("mousemove", (e) =>{
    let xPos = e.clientX
    let yPos = e.clientY
    coordinates.innerHTML = `<h1><span>X:</span>${xPos}px <span>Y:</span>${yPos}px</h1>`
})