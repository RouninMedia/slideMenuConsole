# slideMenuConsole
A console containing a menu where each menu option reveals an individual slide

## Markup:
```html
<button type="button" class="openConsoleButton" title="Open Console">Open Console</button>

<aside class="console">

  <div class="slide red">
    
    <h2 class="heading">Red Slide</h2>
    
    <button type="button" class="consoleIcon --back" title="Back to Slide Menu">
      <svg class="backIcon" viewBox="0 0 768 768"><title>Back Icon</title><use href="#backIconPath" /></svg>
    </button>
    
    <button type="button" class="consoleIcon --close" title="Close Console">
      <svg viewBox="0 0 410 410"><title>Close Icon</title><use href="#closeIconGroup" /></svg>
    </button>
  </div>


  <div class="slide orange">
    
    <h2 class="heading">Orange Slide</h2>
    
    <button type="button" class="consoleIcon --back" title="Back to Slide Menu">
      <svg class="backIcon" viewBox="0 0 768 768"><title>Back Icon</title><use href="#backIconPath" /></svg>
    </button>
    
    <button type="button" class="consoleIcon --close" title="Close Console">
      <svg viewBox="0 0 410 410"><title>Close Icon</title><use href="#closeIconGroup" /></svg>
    </button>
  </div>


  <div class="slide yellow">
    
    <h2 class="heading">Yellow Slide</h2>
    
    <button type="button" class="consoleIcon --back" title="Back to Slide Menu">
      <svg class="backIcon" viewBox="0 0 768 768"><title>Back Icon</title><use href="#backIconPath" /></svg>
    </button>
    
    <button type="button" class="consoleIcon --close" title="Close Console">
      <svg viewBox="0 0 410 410"><title>Close Icon</title><use href="#closeIconGroup" /></svg>
    </button>
  </div>


  <div class="slide green">
    
    <h2 class="heading">Green Slide</h2>
    
    <button type="button" class="consoleIcon --back" title="Back to Slide Menu">
      <svg class="backIcon" viewBox="0 0 768 768"><title>Back Icon</title><use href="#backIconPath" /></svg>
    </button>
    
    <button type="button" class="consoleIcon --close" title="Close Console">
      <svg viewBox="0 0 410 410"><title>Close Icon</title><use href="#closeIconGroup" /></svg>
    </button>
  </div>


  <div class="slide blue">
    
    <h2 class="heading">Blue Slide</h2>
    
    <button type="button" class="consoleIcon --back" title="Back to Slide Menu">
      <svg class="backIcon" viewBox="0 0 768 768"><title>Back Icon</title><use href="#backIconPath" /></svg>
    </button>
    
    <button type="button" class="consoleIcon --close" title="Close Console">
      <svg viewBox="0 0 410 410"><title>Close Icon</title><use href="#closeIconGroup" /></svg>
    </button>
  </div>


  <div class="slide indigo">
    
    <h2 class="heading">Indigo Slide</h2>
    
    <button type="button" class="consoleIcon --back" title="Back to Slide Menu">
      <svg class="backIcon" viewBox="0 0 768 768"><title>Back Icon</title><use href="#backIconPath" /></svg>
    </button>
    
    <button type="button" class="consoleIcon --close" title="Close Console">
      <svg viewBox="0 0 410 410"><title>Close Icon</title><use href="#closeIconGroup" /></svg>
    </button>
  </div>


  <div class="slide violet">
    
    <h2 class="heading">Violet Slide</h2>
    
    <button type="button" class="consoleIcon --back" title="Back to Slide Menu">
      <svg class="backIcon" viewBox="0 0 768 768"><title>Back Icon</title><use href="#backIconPath" /></svg>
    </button>
    
    <button type="button" class="consoleIcon --close" title="Close Console">
      <svg viewBox="0 0 410 410"><title>Close Icon</title><use href="#closeIconGroup" /></svg>
    </button>
  </div>


  <div class="menu slide">
    <h2 class="heading">Slide Menu Console</h2>

    <button type="button" class="slideButton --red" title="Reveal Red Slide">Reveal Red Slide</button>
    <button type="button" class="slideButton --orange" title="Reveal Orange Slide">Reveal Orange Slide</button>
    <button type="button" class="slideButton --yellow" title="Reveal Yellow Slide">Reveal Yellow Slide</button>
    <button type="button" class="slideButton --green" title="Reveal Green Slide">Reveal Green Slide</button>
    <button type="button" class="slideButton --blue" title="Reveal Blue Slide">Reveal Blue Slide</button>
    <button type="button" class="slideButton --indigo" title="Reveal Indigo Slide">Reveal Indigo Slide</button>
    <button type="button" class="slideButton --violet" title="Reveal Violet Slide">Reveal Violet Slide</button>

    
    <button type="button" class="consoleIcon --back" title="Back to Slide Menu">
      <svg xmlns="http://www.w3.org/2000/svg"
           lang="en-GB"
           class="backIcon"
           viewBox="0 0 768 768">

        <title>Back Icon</title>

        <path id="backIconPath" d="m 200.38858,497.90572 v -40.5 h -40.58333 c -26.03979,0 -40.46388,-0.35089 -40.25,-0.97915 0.49299,-1.44815 267.81161,-257.02086 268.83332,-257.02086 1.02171,0 268.34035,255.57271 268.83334,257.02086 0.21388,0.62826 -14.21021,0.97915 -40.25,0.97915 h -40.58333 v 40.5 40.5 H 388.38857 200.38858 M 200 550,575 550,575 650,200 650 M 200 662,575 662,575 762,200 762 Z" />
      </svg>
    </button>
  
    <button type="button" class="consoleIcon --close" title="Close Console">
      
      <svg xmlns="http://www.w3.org/2000/svg"
           lang="en-GB"
           class="closeIcon"
           viewBox="0 0 410 410">

        <title>Close Icon</title>
        
        <g id="closeIconGroup">
          <rect x="48" y="164" width="314" height="82" />
          <rect x="164" y="48" width="82" height="314" />
        </g>
      </svg>
    </button>
  </div>

</aside>
```

## Styles:
```css
body {
  background-color: rgb(191, 191, 255);
}

.openConsoleButton {
  cursor: pointer;
}

.console .heading {
  position: absolute;
  top: 0;
  left: 0;
  width: 101%;
  margin: 0;
  padding: 0;
  color: rgb(255, 255, 255);
  font-family: sans-serif;
  font-size: 5vh;
  line-height: 10vh;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  transition: transform 0.6s linear;
}

.consoleIcon {
  position: absolute;
  top: 6px;
  width: calc(10vh - 11px);
  height: calc(10vh - 12px);
  padding: 0;
  background-color: rgba(0, 0, 0, 0.25);
  background-position: center;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  cursor: pointer;
  box-sizing: border-box;
}

.consoleIcon.\--back {
  left: 6px;
}

.consoleIcon.\--close {
  right: 6px;
}

.menu.slide .consoleIcon.\--back {
  display: none;
}

.console {
  position: fixed;
  top: 10vh;
  left: 20vw;
  width: 60vw;
  height: 80vh;
  color: rgb(255, 255, 255);
  background-color: rgb(191, 191, 255);
  border: 1.5vh solid rgb(255, 255, 255);
  border-radius: 1.5vh;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.8);
  opacity: 0;
  box-sizing: border-box;
  overflow: hidden;
  transform: translateY(100vh);
  pointer-events: none;
  transition: transform 0.6s ease-in-out;
}

.console.\--activated {
  opacity: 1;
  pointer-events: auto;
}

.console.\--activated.\--raised {
  transform: translateY(0);
}

.console .slide {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: calc(60vw - 2.90vh);
  height: calc(80vh - 2.90vh);
  padding: 12vh 12px 6px;
  box-sizing: border-box;
  transform: translateX(calc(60vw - 1.5vh));
  transition: transform 0.4s ease-out;
}

.console .slide.red {
  background-color: red;
}

.console .slide.orange {
  background-color: orange;
}

.console .slide.yellow {
  background-color: yellow;
}

.console .slide.green {
  background-color: green;
}

.console .slide.blue {
  background-color: blue;
}

.console .slide.indigo {
  background-color: indigo;
}

.console .slide.violet {
  background-color: violet;
}

.slide.menu,
.console .slide.\--activeSlide {
  transform: translateX(0);
}

.console .slide.\--activeSlide ~ .slide.menu {
  transform: translateX(calc(1.5vh - 60vw));
}

.slideButton {
  flex: 0 1 25%;
  margin: 24px;
  cursor: pointer;
}

.backIcon {
  transform: rotate(270deg);
}

#backIconPath {
  fill: rgb(255, 255, 255);
  transform: translateY(-108px);
}

#closeIconGroup rect {
  fill: rgb(255, 255, 255);
  opacity: 1;
}

#closeIconGroup {
  transform-origin: 50% 50%;
  transform: rotate(45deg);
}

.veil {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  cursor: pointer;
  transition: opacity 0.6s ease-out;
}

.veil.\--activated {
  opacity: 1;
}
```

## Scripts:
```js
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
```
