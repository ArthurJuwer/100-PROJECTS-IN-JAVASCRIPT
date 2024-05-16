const inputSearch = document.querySelector("#search")


inputSearch.addEventListener("input", search)
let cards = document.querySelectorAll(".card")
function search(){

    if(inputSearch.value != ''){

        let resultSearchToLower = inputSearch.value.toLowerCase()

        for(let card of cards){
            let titleCard = card.querySelector("h2")

            let titleCardToLower = titleCard.textContent.toLowerCase()

            if(!titleCardToLower.includes(resultSearchToLower)){
                card.style.display = 'none' 
            }
            else {
                card.style.display = 'flex'
            }
        }
    } else {
        for(let card of cards){
            card.style.display = 'flex'
        }
    }
    
    

    
    
}