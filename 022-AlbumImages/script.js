const btnShow = document.querySelector("#show")
const inputNumber = document.querySelector('input')

btnShow.addEventListener("click", ()=>{

    async function addImages() {
        
        let id = inputNumber.value
    
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/photos')
            const objct = await response.json();
            return objct[id].url
        } catch(err) {
            alert('ERROR: SELECT A NUMBER IN THE RANGE 0-4999!')
        }
    }

    addImages().then(url =>{
        let imageAlt = document.querySelector("#imageAlt")
        imageAlt.src = url
    })
    
})
