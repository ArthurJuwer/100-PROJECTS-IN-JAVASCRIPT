class Playlist{
    constructor(autor, title, stage){
        this.autor = autor
        this.title = title
        // this.description = description

        this.stage = stage

        

    }
    create () {
        
        let div = document.createElement('div');
        div.setAttribute("class","playlist")

        div.innerHTML = `<div class="img src=''"></div><p>${this.title}</p><p>${this.autor}</p>`

        this.stage.appendChild(div);
        
    }
}

const btnShowDialog = document.querySelector(".showDialog"),
 btnCloseDialog = document.querySelector(".closeDialog"),
 btnSubmitDialog = document.querySelector(".submitdialog")
 dialog = document.querySelector("dialog"),
 stage = document.querySelector(".container")

let autorValue = document.querySelector("#autor")
let titleValue = document.querySelector("#title")
let descriptionValue = document.querySelector("#description")
 

btnShowDialog.addEventListener("click",()=>{
    dialog.showModal()
    
    
})

btnCloseDialog.addEventListener("click",()=>{
    dialog.close()
    
})
btnSubmitDialog.addEventListener("click", ()=>{
    
    if(autorValue.value != '' && titleValue.value != '' && descriptionValue.value != ''){
        let playlist = new Playlist(autorValue.value,titleValue.value,stage )
        playlist.create()
        dialog.close()
        valuesIsZero()
    }
    
    
    
    
} )

function valuesIsZero(){
    autorValue.value = ''
    titleValue.value = ''
    descriptionValue.value = ''
}


