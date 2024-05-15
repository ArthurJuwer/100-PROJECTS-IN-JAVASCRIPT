class Playlist{
    constructor(autor, title, url, stage){
        this.autor = autor
        this.title = title
        this.url = url
        this.stage = stage
    }
    create () {        
        let div = document.createElement('div');
        div.setAttribute("class","playlist")

        div.innerHTML = `<img src='${this.url}'</img>
        <p>${this.title}</p>
        <p>created by: ${this.autor}</p>`

        this.stage.appendChild(div);        
    }
}

const btnShowDialog = document.querySelector(".showDialog"),
 btnCloseDialog = document.querySelector(".closeDialog"),
 btnSubmitDialog = document.querySelector(".submitdialog"),
 dialog = document.querySelector("dialog"),
 stage = document.querySelector(".container")
 

btnShowDialog.addEventListener("click",()=>{
    dialog.showModal()    
})

btnCloseDialog.addEventListener("click",()=>{
    dialog.close()
    
})
btnSubmitDialog.addEventListener("click", ()=>{
    let autorValue = document.querySelector("#autor"),
    titleValue = document.querySelector("#title"),
    urlimageValue = document.querySelector("#urlimage")

    let inputsVoid = autorValue.value == '' && titleValue.value == '' && urlimageValue.value == ''

    if(!inputsVoid){
        let addplaylist = new Playlist(autorValue.value,titleValue.value,urlimageValue.value, stage )
        addplaylist.create()
        dialog.close()
        autorValue.value = ''
        titleValue.value = ''
        urlimageValue.value = ''
    }
} )

