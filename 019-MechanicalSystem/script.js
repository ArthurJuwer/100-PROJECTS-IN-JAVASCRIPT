const sectionResult = document.querySelector(".result-stage")

let itens = []

function renderInfo(){


    sectionResult.innerHTML = '';


    itens.forEach((item, index) => {
        const ul = document.createElement("ul")
        ul.setAttribute("class", "result-content")
        ul.innerHTML = `
        <li class="image">
        <span></span>
        </li>
        <li>${item.plate}</li>
        <li>${item.brand}</li>
        <li>${item.year}</li>
        <li>${item.dateEntry}</li>
        <li>${item.problem}</li>
        <li class="actions">
                <button onclick="toggleStatus(${index})"> 
                    <span style="background-color: ${item.colorStats};"></span>
                    <div class="balao-mensagem">
                        <p>${item.stats}</p>
                    </div>
                </button>
                <button onclick="removeItems(${index})"> 
                    <img src="/019-MechanicalSystem/images/trash.png" alt="">
                </button>
            </li>
        `
        sectionResult.appendChild(ul)
    });

    
}

function addItems(plate, brand, year, dateEntry, problem, stats, colorStats){

    const item = {plate, brand, year, dateEntry, problem, stats, colorStats}
    itens.push(item)
    renderInfo()
}

function removeItems(index){
    itens.splice(index, 1)
    renderInfo()    
}
function toggleStatus(index){    

    if(itens[index].stats == 'Pending'){
        itens[index].stats = 'Approved'
        itens[index].colorStats = 'green'
        
    } else {
        itens[index].stats = 'Pending'
        itens[index].colorStats = '#FFBF00'
    }
    renderInfo()
}
const btnRegister = document.querySelector('#buttonRegister')

btnRegister.addEventListener("click", ()=>{
    let plateValue = document.querySelector("#plate")
    let brandValue = document.querySelector("#brand")
    let yearValue = document.querySelector("#year")
    let dateEntryValue = document.querySelector("#dateEntry")
    let problemValue = document.querySelector("#problem")
    let radios = document.querySelectorAll("[id='quest']");
    let selectedValue = 'Pending';
    let colorStats = '#FFBF00'

    if(plateValue.value, brandValue.value, yearValue.value, dateEntryValue.value, problemValue.value == ''){
        alert("insert the values bellow:")
        return
    } 

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedValue = radios[i].nextElementSibling.textContent.trim();
        }
    }
    
    if(selectedValue == 'Approved'){
        colorStats = 'green'
    }

    addItems(plateValue.value,brandValue.value, yearValue.value, dateEntryValue.value, problemValue.value, selectedValue, colorStats)
})

renderInfo()
