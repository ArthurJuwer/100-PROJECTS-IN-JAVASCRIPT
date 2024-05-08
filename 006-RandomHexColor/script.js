const boxes = document.querySelectorAll(".box")

for(let i = 0; i < boxes.length; i++){
    boxes[i].innerHTML =  "#000000".replace(/0/g,
    function(){
        let atualColor = (~~(Math.random() * 16)).toString(16);
        console.log(atualColor)
        return atualColor
    }); 
    boxes[i].style.background = boxes[i].textContent
}





