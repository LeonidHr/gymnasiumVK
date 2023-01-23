/*
Документація по роботі у шаблоні: 
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/


// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Mousewheel, EffectFade, Controller, Thumbs, Autoplay, FreeMode } 
from 'swiper';
import WheelIndicator from 'wheel-indicator';
import { isMobile } from "./functions.js";


/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss";
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';
// 
// Ініціалізація слайдерів
function initSliders() {
	// Список слайдерів
	// Перевіряємо, чи є слайдер на сторінці
	// if (document.querySelector('.swiper')) { // Вказуємо склас потрібного слайдера
	// 	// Створюємо слайдер
	// 	new Swiper('.swiper', { // Вказуємо склас потрібного слайдера
	// 		// Підключаємо модулі слайдера
	// 		// для конкретного випадку
	// 		modules: [Navigation],
	// 		observer: true,
	// 		observeParents: true,
	// 		slidesPerView: 1,
	// 		spaceBetween: 0,
	// 		autoHeight: true,
	// 		speed: 800,

	// 		//touchRatio: 0,
	// 		//simulateTouch: false,
	// 		//loop: true,
	// 		//preloadImages: false,
	// 		//lazy: true,

	// 		/*
	// 		// Ефекти
	// 		effect: 'fade',
	// 		autoplay: {
	// 			delay: 3000,
	// 			disableOnInteraction: false,
	// 		},
	// 		*/

	// 		// Пагінація
	// 		/*
	// 		pagination: {
	// 			el: '.swiper-pagination',
	// 			clickable: true,
	// 		},
	// 		*/

	// 		// Скроллбар
	// 		/*
	// 		scrollbar: {
	// 			el: '.swiper-scrollbar',
	// 			draggable: true,
	// 		},
	// 		*/

	// 		// Кнопки "вліво/вправо"
	// 		navigation: {
	// 			prevEl: '.swiper-button-prev',
	// 			nextEl: '.swiper-button-next',
	// 		},
	// 		/*
	// 		// Брейкпоінти
	// 		breakpoints: {
	// 			640: {
	// 				slidesPerView: 1,
	// 				spaceBetween: 0,
	// 				autoHeight: true,
	// 			},
	// 			768: {
	// 				slidesPerView: 2,
	// 				spaceBetween: 20,
	// 			},
	// 			992: {
	// 				slidesPerView: 3,
	// 				spaceBetween: 20,
	// 			},
	// 			1268: {
	// 				slidesPerView: 4,
	// 				spaceBetween: 30,
	// 			},
	// 		},
	// 		*/
	// 		// Події
	// 		on: {

	// 		}
	// 	});
	// }

	if (document.querySelector('.founder-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		const founderSlider = new Swiper('.founder-slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [ Pagination, Mousewheel, FreeMode ],
			observer: true,
			observeParents: true,
			spaceBetween: 0,
			autoHeight: true,
			speed: 600,
			lazy: true,
			mousewheel: {
				eventsTarget: 'body',
				releaseOnEdges: true,
			},

			// Пагінація

			pagination: {
				el: '.founder-slider__pagination',
				clickable: true,
			},
		
			
			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				450: {
					slidesPerView: "auto",
				},
				768: {
					slidesPerView: "auto",
					centeredSlides: true,
				},
			},
		});

		if (!isMobile.any()) {
			founderSlider.disable();

			document.addEventListener("wheel", e => {
				console.log(e);
				if (e.deltaY > 0  && document.querySelector('.founder-slider').classList.contains('_watcher-view')) {
					stoppedViewport("down", founderSlider, '.founder-slider');
				}
				if (e.deltaY < 0  && document.querySelector('.founder-slider').classList.contains('_watcher-view')) {
					stoppedViewport("up", founderSlider, '.founder-slider');
				}
			});

			// var indicator = new WheelIndicator({
			// 	callback: function(e){
		
			// 		if (e.direction === 'down' && document.querySelector('.founder-slider').classList.contains('_watcher-view')) {
			// 			stoppedViewport(e.direction, founderSlider, '.founder-slider');
			// 		}
			// 		if (e.direction === 'up' && document.querySelector('.founder-slider').classList.contains('_watcher-view')) {
			// 			stoppedViewport(e.direction, founderSlider, '.founder-slider');
			// 		}
			// 	},
			// 	preventMouse: false
			// });
		}
	}

	if (document.querySelector('.whom-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		const whomSlider = new Swiper('.whom-slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [ Navigation, Pagination, Mousewheel, EffectFade ],
			speed: 400,
			// mousewheel: true,
			mousewheel: {
				eventsTarget: 'body',
				releaseOnEdges: true,
			},
			spaceBetween: 30,
			effect: "fade",
			allowTouchMove: false,

			mousewheel: {
				eventsTarget: 'body',
				releaseOnEdges: true,
			},

			navigation: {
				nextEl: ".whom-slider .swiper-button-next",
				prevEl: ".whom-slider .swiper-button-prev",
			},

			// Пагінація

			pagination: {
				el: '.whom-slider__pagination',
				clickable: true,
			},
		});

		if (!isMobile.any()) {
			whomSlider.disable();

			document.addEventListener("wheel", e => {
				console.log(e);
				if (e.deltaY > 0  && document.querySelector('.whom-slider').classList.contains('_watcher-view')) {
					stoppedViewport("down", whomSlider, '.whom-slider');
				}
				if (e.deltaY < 0  && document.querySelector('.whom-slider').classList.contains('_watcher-view')) {
					stoppedViewport("up", whomSlider, '.whom-slider');
				}
			});
		}
	}

	if (document.querySelector('.you-get-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.you-get-slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [ Navigation, Pagination ],
			observer: true,
			observeParents: true,
			autoHeight: true,
			speed: 800,
			spaceBetween: 32,

			navigation: {
				nextEl: ".you-get-slider .swiper-button-next",
				prevEl: ".you-get-slider .swiper-button-prev",
			},

			// Пагінація

			pagination: {
				el: '.you-get-slider__pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return `<span class="${className} num">${index + 1 < 10 ? '0' : ''}${(index + 1)}</span>`;
				},
			},
			
			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				480: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 4,
				},
			},
		});
	
	}

	if (document.querySelector('.coursers-img-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.coursers-img-slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [ Pagination, Mousewheel ],
			speed: 800,
			mousewheel: true,
			slidesPerView: 1,

			// Пагінація

			pagination: {
				el: '.coursers-img-slider__pagination',
				clickable: true,
			},
		});
	}

	if (document.querySelector('.histories-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.histories-slider', { // Вказуємо склас потрібного слайдера
			modules: [ Pagination, EffectFade, Navigation ],
			speed: 800,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},

			// Пагінація

			pagination: {
				el: '.histories-slider__pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return `<span class="${className} num">${index + 1 < 10 ? '0' : ''}${(index + 1)}</span>`;
				},
			},

			navigation: {
				nextEl: ".histories-slider__content .swiper-button-next",
				prevEl: ".histories-slider__content .swiper-button-prev",
			},
		});

	}

	if (document.querySelector('.histories-img-slider-main')) { // Вказуємо склас потрібного слайдера

		document.querySelectorAll('.histories-img-slider').forEach((slider, i) => {

			new Swiper('.histories-img-slider-main', {
				modules: [ Pagination, Controller, Thumbs, Mousewheel, Autoplay ],
	
				slideClass: 'histories-img-slider-main__slide',
					slidesPerView: 1,
					slideToClickedSlide: true,
					speed: 800,
					mousewheel: true,
					pagination: {
						el: '.histories-img-slider-main__pagination',
						clickable: true,
					},
					thumbs: {
						swiper: {
							el: `.histories-slider__slide_${i} .histories-img-slider`, 
							slideToClickedSlide: true,
							slidesPerView: 4,

							breakpoints: {
								320: {
									spaceBetween: 8,
								},
								767: {
									spaceBetween: 24,
								}
							}
						},	
					},
			});
		});
	}

	if (document.querySelector('.popup-quiz-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.popup-quiz-slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [ Pagination, Navigation, EffectFade ],
			observer: true,
			observeParents: true,
			spaceBetween: 0,
			autoHeight: true,
			slidesPerView: 1,
			speed: 300,
			effect: "fade",
			allowTouchMove: false,

			// Пагінація

			navigation: {
				nextEl: ".popup-quiz-slider .swiper-button-next",
				prevEl: ".popup-quiz-slider .swiper-button-prev",
			},

			pagination: {
				el: '.popup-quiz-slider__pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return `<button type="button" class="${className}">${(index + 1)}</button>`;
				},
			},
		
			
			// Брейкпоінти
			// breakpoints: {
			// 	320: {
			// 		slidesPerView: 1,
			// 	},
			// 	450: {
			// 		slidesPerView: "auto",
			// 	},
			// 	768: {
			// 		slidesPerView: "auto",
			// 		centeredSlides: true,
			// 	},
			// },
		});
	}

	if (document.querySelector('.about-reviews-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.about-reviews-slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [ Navigation, Pagination ],
			observer: true,
			observeParents: true,
			autoHeight: true,
			speed: 800,

			navigation: {
				nextEl: ".about-reviews-slider .swiper-button-next",
				prevEl: ".about-reviews-slider .swiper-button-prev",
			},

			// Пагінація

			pagination: {
				el: '.about-reviews-slider__pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return `<span class="${className} num">${index + 1 < 10 ? '0' : ''}${(index + 1)}</span>`;
				},
			},
			
			// Брейкпоінти
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 16,
				},
				560: {
					slidesPerView: 2,
					spaceBetween: 32,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 32,
				},
			},
		});
	
	}

	if (document.querySelector('.review-slider')) { // Вказуємо склас потрібного слайдера
		// Створюємо слайдер
		new Swiper('.review-slider', { // Вказуємо склас потрібного слайдера
			// Підключаємо модулі слайдера
			// для конкретного випадку
			modules: [ Navigation, Pagination ],
			observer: true,
			observeParents: true,
			autoHeight: true,
			speed: 800,

			navigation: {
				nextEl: ".review-slider .swiper-button-next",
				prevEl: ".review-slider .swiper-button-prev",
			},

			// Пагінація

			pagination: {
				el: '.review-slider__pagination',
				clickable: true,
				renderBullet: function (index, className) {
					return `<span class="${className} num">${index + 1 < 10 ? '0' : ''}${(index + 1)}</span>`;
				},
			},
			
			// Брейкпоінти
			breakpoints: {
				300: {
					slidesPerView: 2,
					spaceBetween: 23,
				},
				650: {
					slidesPerView: 3,
					spaceBetween: 23,
				},
				767: {
					slidesPerView: 4,
					spaceBetween: 32,
				},
			},
		});
	
	}
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск ініціалізації слайдерів
	initSliders();
	// Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
	//initSlidersScroll();
});




function stoppedViewport(direction, sliderObj, sliderClass) {
	const slider = document.querySelector(sliderClass);
	const slides = slider.querySelectorAll('.swiper-slide');


	if (direction === 'down') {
		if (window.innerHeight / 2	 > slider.getBoundingClientRect().top) {
			enableSlider(sliderObj);

			if (slides[slides.length - 1].classList.contains('swiper-slide-active')) {
				disableSlider(sliderObj);
			}
		}
	} 
	if (direction === 'up')  {
		if (window.innerHeight / 1.5 < slider.getBoundingClientRect().bottom) {
			enableSlider(sliderObj);

			if (slides[0].classList.contains('swiper-slide-active')) {
				disableSlider(sliderObj);
			}
		}
	}
}

function enableSlider(slider) {
	document.documentElement.classList.add('lock');
	slider.enable();
	slider.init();
}

function disableSlider(slider) {
	document.documentElement.classList.remove('lock');
	slider.disable();
	slider.init();
}



