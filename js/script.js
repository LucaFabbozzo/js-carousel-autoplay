// **Consegna**
// Copiamo la repo del carousel in una nuova cartella (attenzione ad eliminare la cartella .git) e facciamo funzionare il carousel, oltre che con i bottoni anche in autoplay al caricamento della pagina.
// **BONUS:**
// Passando con il mouse sopra le immagini l’autoplay si ferma per poi ripartire quando il mouse esce dallo slider

const slider = document.querySelector('.items-wrapper');
const sliderThumb = document.querySelector('.items-wrap-small');
const next = document.querySelector('.top');
const prev = document.querySelector('.bottom');


const images = [
  '01.jpg',
  '02.jpg',
  '03.jpg',
  '04.jpg',
  '05.jpg',
];


let imagesTags = '';
let thumbTags = '';
let counterImages = 0;
let clock;


for(let i = 0; i < images.length; i++) { 
  imagesTags += `
    <img class="item" src="./img/${images[i]}" alt="${images[i]}">
  `;

  thumbTags += `
      <img class="small" src="./img/${images[i]}" alt="${images[i]}">
  `;
 
}

slider.innerHTML += imagesTags;
sliderThumb.innerHTML +=thumbTags;

const items = document.getElementsByClassName('item');
const thumbs = document.getElementsByClassName('small');

items[counterImages].classList.add('active');
thumbs[counterImages].classList.add('active');


next.addEventListener('click', nextSlide);
next.addEventListener('click', pauseCounter);
prev.addEventListener('click', prevSlide);
prev.addEventListener('click', pauseCounter);
slider.addEventListener('mouseover', pauseCounter);
slider.addEventListener('mouseout', playCounter);
sliderThumb.addEventListener('mouseover', pauseCounter);
sliderThumb.addEventListener('mouseout', playCounter);


clock = setInterval(nextSlide, 1000);


function pauseCounter() {
   clearInterval(clock);
 }


function playCounter() {
  clock = setInterval(nextSlide, 1000);
}


function nextSlide() {
   items[counterImages].classList.remove('active');
  thumbs[counterImages].classList.remove('active');
  counterImages++
  if(counterImages === images.length) counterImages = 0;
  items[counterImages].classList.add('active');
  thumbs[counterImages].classList.add('active');
}


function prevSlide() {
  items[counterImages].classList.remove('active');
  thumbs[counterImages].classList.remove('active');
  counterImages--
  if(counterImages < 0 ) counterImages = images.length - 1;
  items[counterImages].classList.add('active');
  thumbs[counterImages].classList.add('active');
}






