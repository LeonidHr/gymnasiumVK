// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
import { getDigFormat } from "./functions.js";

import { addClass } from "./functions.js";
import { removeClassForArray } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

if (window.innerWidth > 767) {
  window.addEventListener("scroll", smallingMainscreenSlide);
}

// Убираем position: sticky при доскролливании до последнего слайда mainscreen

function smallingMainscreenSlide() {
  if (document.querySelector('.mainscreen')) {
    const slides = document.querySelectorAll('.mainscreen__section');
    const lastSlide = slides[slides.length - 1];
  
    if (lastSlide.getBoundingClientRect().top < window.innerHeight) {
      slides.forEach(slide => {
        slide.style.position = 'relative';
      });
    }
  
    if (lastSlide.getBoundingClientRect().top >= window.innerHeight) {
      slides.forEach(slide => {
        slide.style.position = 'sticky';
      });
    }
  }
}

// Добавление класса активности контейнеру при активном последнем слайде

if (window.innerWidth > 767) {
  if (document.querySelector('.founder-slider__wrapper')) {
    document.querySelector('.founder-slider__wrapper').addEventListener("transitionend", addActiveForColtainer);
  }
}

function addActiveForColtainer() {
  const container = document.querySelector('.founder');
  const slides = container.querySelectorAll('.founder-slider__slide');
  const lastSlide = slides[slides.length - 1];

  container.classList.remove('_active');

  if (lastSlide.classList.contains('swiper-slide-active')) {
    container.classList.add('_active');
  }


}

// Range в квизе со счетчиком

updateRange();

function updateRange() {
  const range = document.querySelector('.popup-quiz-slider__range');
  const input = range.querySelector('.noUi-handle');
  const log = document.querySelector('#range-num span');

  input.addEventListener('mousemove', e => updateValue(input));
  updateValue(input);
  
  function updateValue(inp) {
    log.textContent = getDigFormat(inp.ariaValueText);
  }
}

// Добавление клика на ценах на моб устройствах

function addClickPrices() {
  if (document.querySelector('.item-prices')) {
    const prices = document.querySelectorAll('.item-prices');

    addClass(prices[1], '_hover');
  
    prices.forEach(item => {
      item.addEventListener('click', e => {
        const target = e.currentTarget;
    
        removeClassForArray('.item-prices', '_hover');
        addClass(target, '_hover');
        });
    });
  }
}

if (isMobile.any()) {
  addClickPrices();
}
