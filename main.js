
// Dark Mode
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const toggleModeButton = document.getElementById('Mode_sombre');
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
        body.classList.add(savedMode);
    }

    toggleModeButton.addEventListener('click', function() {
        body.classList.toggle('dark-mode');

        const currentMode = body.classList.contains('dark-mode') ? 'dark-mode' : '';
        localStorage.setItem('mode', currentMode);
        const pages = document.querySelectorAll('.page');
        pages.forEach(page => {
            page.classList.toggle('dark-mode', body.classList.contains('dark-mode'));
        });
    });
});

/*Carrousel d'images*/
const slide = ["./images/data1.png", "./images/data2.jpg", "./images/data3.jpg", "./images/data4.png","./images/data5.png"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}


//fonction retourner en haut
(function() {
  "use strict";
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }
    const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }
 })()
 
/*Changement de lettre*/ 
 const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;

function changeTextLetter(event) {
  let iteration = 0;

  const initText = event.target.innerText;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = initText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.textValue[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (iteration >= event.target.dataset.textValue.length) {
      clearInterval(interval);
    }

    iteration += 1 / 10;
  }, 20);
}

const animTexts = document.querySelectorAll(".animated-text");

animTexts.forEach((element) => {
  element.addEventListener("mouseover", () => {
    changeTextLetter(event);
  });
});