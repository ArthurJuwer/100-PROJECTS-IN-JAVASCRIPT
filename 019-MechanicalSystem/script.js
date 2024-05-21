const sectionResult = document.querySelector(".result-stage")
const formAdd = document.querySelector("#form-add")
const plateInput = document.querySelector("#plate")
const brandInput = document.querySelector("#brand")
const yearInput = document.querySelector("#year")
const dateEntryInput = document.querySelector("#dateEntry")
const problemInput = document.querySelector("#problem")

let items = []

function renderInfo() {
    sectionResult.innerHTML = '';
    items.forEach((item, index) => {
        const ul = document.createElement("ul")
        ul.setAttribute("class", "result-content")
        ul.innerHTML = `
        <li class="image">
            <div class="image-input">
                <input type="file" accept="image/*" id="imageInput-${index}" onchange="newImage(${index})">
                <label for="imageInput-${index}" class="image-button" id="imageLabel-${index}" style="display: ${item.imageSrc ? 'none' : 'flex'};">
                    <img src="/019-MechanicalSystem/images/upload.png" alt="Upload">
                </label>
                <img src="${item.imageSrc}" class="image-preview change-image" id="imagePreview-${index}" onclick="changeImage(${index})" style="display: ${item.imageSrc ? 'block' : 'none'};">
            </div>
        </li>
        <li>${item.plate}</li>
        <li>${item.brand}</li>
        <li>${item.year}</li>
        <li>${item.dateEntry}</li>
        <li>${item.problem}</li>
        <li class="actions">
            <button onclick="toggleStatus(${index})"> 
                <span style="background-color: ${item.statsColor};"></span>
                <div class="balao-mensagem">
                    <p>${item.statsChecked}</p>
                </div>
            </button>
            <button onclick="removeItems(${index})"> 
                <img src="/019-MechanicalSystem/images/trash.png" alt="Delete">
            </button>
        </li>
        `
        sectionResult.appendChild(ul)
    });
}

function addItems(plate, brand, year, dateEntry, problem, statsChecked, statsColor, imageSrc = '') {
    const item = { plate, brand, year, dateEntry, problem, statsChecked, statsColor, imageSrc }
    items.push(item)
    renderInfo()
}

function removeItems(index) {
    items.splice(index, 1)
    renderInfo()
}

function toggleStatus(index) {
    items[index].statsChecked = (items[index].statsChecked === 'Pending') ? 'Approved' : 'Pending';
    items[index].statsColor = (items[index].statsChecked === 'Approved') ? 'green' : '#FFBF00';
    renderInfo()
}

formAdd.addEventListener("submit", (e) => {
    e.preventDefault()
    let plate = plateInput.value.trim()
    let brand = brandInput.value.trim()
    let year = parseInt(yearInput.value)
    let dateEntry = dateEntryInput.value
    let problem = problemInput.value.trim()
    let statsChecked = document.querySelector('input[name="quest"]:checked').value
    let statsColor = statsChecked === 'Approved' ? 'green' : '#FFBF00'
    
    if (!isNaN(year) && year >= 1886) {
        addItems(plate, brand, year, dateEntry, problem, statsChecked, statsColor)
    } else {
        alert('Invalid values')
    }
})

function newImage(index) {
    let input = document.getElementById(`imageInput-${index}`);
    let imagePreview = document.getElementById(`imagePreview-${index}`);
    let label = document.getElementById(`imageLabel-${index}`);

    if (input.files && input.files[0]) {
        let fileReader = new FileReader()
        fileReader.onload = function (event) {
            imagePreview.src = event.target.result
            items[index].imageSrc = event.target.result
            label.style.display = 'none'
            imagePreview.style.display = 'block'
        }
        fileReader.readAsDataURL(input.files[0]);
    }
}

function changeImage(index) {
    let input = document.getElementById(`imageInput-${index}`)
    let label = document.getElementById(`imageLabel-${index}`)
    let imagePreview = document.getElementById(`imagePreview-${index}`)
    
    input.value = ''
    items[index].imageSrc = ''
    label.style.display = 'flex' 
    imagePreview.style.display = 'none'
}

renderInfo();
