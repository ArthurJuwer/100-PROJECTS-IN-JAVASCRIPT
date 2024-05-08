const buttonCreateNotes = document.querySelector(".header-button button")
let containerElement = document.querySelector("ul"),
 textArea = document.querySelector("textarea")

buttonCreateNotes.addEventListener("click", appendCard)
containerElement.addEventListener("click", actionsCard)

function appendCard(){
    let newCard = document.createElement('li');

    newCard.classList.add("main-card")

    newCard.innerHTML = `<div class="main-card-text">
    <textarea name="" id=""></textarea>
    </div>
    <div class="main-card-icons">
    <img src="/008-PaddleClone/images/edit.png" class="edit" alt="">
    <img src="/008-PaddleClone/images/uppercase.png" class="upper" alt="">
    <img src="/008-PaddleClone/images/delete.png" class="delete" alt="">

    </div>`

    containerElement.appendChild(newCard);
}   
function actionsCard(e) {
    if (e.target.classList.contains('delete')) {
        if (confirm("Do you want to remove this item?")) {
            e.target.parentElement.parentElement.remove();
        }
    }
    if (e.target.classList.contains('edit')) {
        let cardText = e.target.parentElement.parentElement.querySelector(".main-card-text textarea");
        let newText = prompt("Edit Note:", cardText.value);
        if (newText !== null) {
            cardText.value = newText;
        }
    }
    if (e.target.classList.contains('upper')) {
        let cardText = e.target.parentElement.parentElement.querySelector(".main-card-text textarea");
        if (confirm("Do you want to UpperCase this text? ")) {
            cardText.value = cardText.value.toUpperCase()
        }
        
    }
}

