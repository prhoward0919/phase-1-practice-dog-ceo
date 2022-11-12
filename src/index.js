console.log('%c HI', 'color: firebrick')

//constants
const imgUrl = 'https://dog.ceo/api/breeds/image/random/4';
const container = document.getElementById('dog-image-container');
const breedsUrl = 'https://dog.ceo/api/breeds/list/all';
const ulContainer = document.querySelector('#dog-breeds');
const dropDown = document.querySelector('#breed-dropdown');

let breedsArray = [];

//event listeners

ulContainer.addEventListener('click', handleClick);
dropDown.addEventListener('change', handleChange);

//challenge 1


function getImages () {
    fetch(imgUrl)
    .then(resp => resp.json())
    .then(images => {
        const imgs = images.message
        let imgsArray = createImgElement(imgs); 
        renderElement(imgsArray);
    })
}
function createImgElement(imgs) { 
    return imgs.map((img) => {
        let i = `<img src=${img}>`;
        return i;
    })
}       
function renderImgs(imgsArray) {
    imgsArray.forEach(element => {
        renderElement(element);
       
    })
}
function renderElement(element) {
    container.innerHTML += element
}
 
//challenge 2

function getBreeds() {
    fetch(breedsUrl)
    .then(resp => resp.json())
    .then(breeds => {
        const breedsArray = Object.keys(breeds.message);
        let  breedsObj = createLiElement(breedsArray);
        renderLis(breedsObj);
    })
}
        
function createLiElement(breedsArray) {
    return breedsArray.map((breed) => {
        let li = `<li>${breed}</li>`
        return li;
                
    })
}

function renderLis(breedsObj) {
    breedsObj.forEach(element => {
        renderLiElement(element);

    })
}

function renderLiElement(e) {
    ulContainer.innerHTML += e;
}

  
//challenge 3

    
function handleClick(event) {
    event.target.style.color = 'red';
}
    



//challenge 4
function handleChange(event){
    const letter = event.target.value;
    const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter));
    const filteredBreedsList = createLiElement(filteredBreeds);
    ulContainer.innerHTML = '';
    renderLis(filteredBreedsList);
}


getImages();
getBreeds();









