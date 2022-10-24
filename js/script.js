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


next.addEventListener('click', function() {

  items[counterImages].classList.remove('active');
  thumbs[counterImages].classList.remove('active');
  counterImages--
  if(counterImages < 0 ) counterImages = images.length - 1;
  items[counterImages].classList.add('active');
  thumbs[counterImages].classList.add('active');
})

prev.addEventListener('click', function() {

  items[counterImages].classList.remove('active');
  thumbs[counterImages].classList.remove('active');
  counterImages++
  if(counterImages === images.length) counterImages = 0;
  items[counterImages].classList.add('active');
  thumbs[counterImages].classList.add('active');
});






