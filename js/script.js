// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.
// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso alto o basso, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


const imgContainer = document.querySelector('.img-container')
const thumbnailsContainer =document.querySelector('.thumbnails-container')


images.forEach((selectedImage) => {
    const newImage = `
    <div class="selected-img">
        <img src="${selectedImage.image}">
    
        <div class="selected-img-text">
            <h3>${selectedImage.title}</h3>
            <p>${selectedImage.text}</p>
        </div>
    </div>
    `
    imgContainer.innerHTML += newImage

    const newThumbnail = `
    <div class="thumbnail">
    <img src="${selectedImage.image}">
    </div>
    `
    thumbnailsContainer.innerHTML += newThumbnail
})

const selectedImg = document.querySelectorAll('.selected-img')
const selectedThumbnail = document.querySelectorAll('.thumbnail')

let activeItem =  0;
selectedImg[activeItem].classList.add('active')
selectedThumbnail[activeItem].classList.add('active')

const btnNext = document.querySelector('.down')
const btnPrevious = document.querySelector('.up')


btnNext.addEventListener('click', function (){
    activeItem = activeItem + 1
    selectedImg[activeItem - 1].classList.remove('active')
    selectedThumbnail[activeItem - 1].classList.remove('active')
    selectedImg[activeItem].classList.add('active')
    selectedThumbnail[activeItem].classList.add('active')
})

btnPrevious.addEventListener('click', function (){
    activeItem = activeItem - 1
    selectedImg[activeItem + 1].classList.remove('active')
    selectedThumbnail[activeItem + 1].classList.remove('active')
    selectedImg[activeItem].classList.add('active')
    selectedThumbnail[activeItem].classList.add('active')
    console.log(activeItem)
})

