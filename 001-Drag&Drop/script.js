// Dom Elements

const boxes = document.querySelectorAll(".box"),
 image = document.querySelector(".image")

boxes.forEach((box) => {    

    if(box.contains(image) == false){
        box.innerHTML = '<p>DROP</p>'
    }
    box.addEventListener("dragover", (e) =>{
        e.preventDefault()
        box.innerHTML = ''
        box.classList.add("hovered")
       
        
    });

    box.addEventListener("dragleave", ()=>{
        box.innerHTML = '<p>DROP</p>'
        box.classList.remove("hovered")
        
        
    })

    box.addEventListener("drop", ()=>{
        box.appendChild(image)
    })
    
});