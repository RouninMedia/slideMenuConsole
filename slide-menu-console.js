const openConsoleButton = document.querySelector('.openConsoleButton');

const console = document.querySelector('.console');
const consoleCloseIcons = document.querySelectorAll('.consoleIcon.\--close');
const consoleBackIcons = document.querySelectorAll('.consoleIcon.\--back');
const slides = document.querySelectorAll('.slide');
const menuSlide = document.querySelector('.menu.slide');
const slideButtons = menuSlide.querySelectorAll('.slideButton');

const redSlide = document.querySelector('.slide.red');


const closeConsole = () => {

  const veil = document.querySelector('.veil');

  console.classList.remove('--raised');
  setTimeout(() => console.classList.remove('--activated'), 1000);
  setTimeout(() => console.removeAttribute('style'), 1200);

  setTimeout(() => {

    slides.forEach((slide) => {
      slide.classList.remove('--activeSlide'); 
    });
  }, 1200);

  setTimeout(() => veil.classList.remove('--activated'), 300);
  setTimeout(() => veil.remove(), 920);
}



const openConsole = () => {

  const veil = document.createElement('div');
  veil.classList.add('veil');
  veil.addEventListener('click', closeConsole, false);

  document.body.insertBefore(veil, console);
  setTimeout(() => veil.classList.add('--activated'), 10);
  setTimeout(() => console.classList.add('--activated'), 20);
  setTimeout(() => console.classList.add('--raised'), 40);
}


const revealSlide = (e) => {

  const colour = e.target.className.split('--')[1];

  const activeSlide = document.querySelector('.slide.' + colour); 

  activeSlide.classList.add('--activeSlide');
}



const returnToMenu = (e) => {

  e.currentTarget.parentNode.classList.remove('--activeSlide');
}


openConsoleButton.addEventListener('click', openConsole, false);
consoleCloseIcons.forEach((consoleCloseIcon) => consoleCloseIcon.addEventListener('click', closeConsole, false));
consoleBackIcons.forEach((consoleBackIcon) => consoleBackIcon.addEventListener('click', returnToMenu, false));
slideButtons.forEach((slideButton) => slideButton.addEventListener('click', revealSlide, false));
