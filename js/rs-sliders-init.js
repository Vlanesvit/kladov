/*
Документация слайдера: https://swiperjs.com/
*/

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	if (document.querySelector('.rs-slider__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-slider__slider');

		sliderBlocks.forEach(slider => {
			const arrowPrev = slider.querySelector('.rs-slider__button-prev');
			const arrowNext = slider.querySelector('.rs-slider__button-next');
			const pagination = slider.querySelector('.rs-slider__pagination');

			const swiperMain = new Swiper(slider, {
				// Автопрокрутка
				autoplay: {
					// Пауза между прокруткой
					delay: 10000,
					// Закончить на последнем слайде
					stopOnLastSlide: false,
					// Отключить после ручного переключения
					disableOnInteraction: false,
				},

				// Кол-во показываемых слайдов
				slidesPerView: 1,

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: false,
				allowTouchMove: false,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,
				// Cобытие touchstart (pointerdown)
				touchStartPreventDefault: false,

				// Цикличность слайдера
				loop: true,

				// Анимация переключения
				effect: 'fade',

				// Курсор перетаскивания
				grabCursor: true,

				// Стрелки
				navigation: {
					prevEl: arrowPrev,
					nextEl: arrowNext,
				},

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					type: 'fraction',
				},
			});
		});
	}

	if (document.querySelector('.rs-text-block__desc_slider') && (document.querySelector('.rs-text-block__picture_slider'))) {
		const sliderTextBlocks = document.querySelectorAll('.rs-text-block__desc_slider');
		const sliderPictureBlocks = document.querySelectorAll('.rs-text-block__picture_slider');

		sliderTextBlocks.forEach(slider => {
			const arrowPrev = slider.querySelector('.rs-text-block__desc_button-prev');
			const arrowNext = slider.querySelector('.rs-text-block__desc_button-next');
			const pagination = slider.querySelector('.rs-text-block__desc_pagination');

			const swiperTextMain = new Swiper(slider, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Кол-во показываемых слайдов
				slidesPerView: 1,

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				allowTouchMove: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,
				// Cобытие touchstart (pointerdown)
				touchStartPreventDefault: false,

				// Цикличность слайдера
				loop: true,

				// Анимация переключения
				effect: 'fade',

				// Курсор перетаскивания
				grabCursor: true,

				// Стрелки
				navigation: {
					prevEl: arrowPrev,
					nextEl: arrowNext,
				},

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					type: 'fraction',
				},
			});

			sliderPictureBlocks.forEach(slider => {
				const arrowPrev = slider.querySelector('.rs-text-block__picture_button-prev');
				const arrowNext = slider.querySelector('.rs-text-block__picture_button-next');
				const pagination = slider.querySelector('.rs-text-block__picture_pagination');

				const swiperPictureMain = new Swiper(slider, {
					// // Автопрокрутка
					// autoplay: {
					// 	// Пауза между прокруткой
					// 	delay: 10000,
					// 	// Закончить на последнем слайде
					// 	stopOnLastSlide: false,
					// 	// Отключить после ручного переключения
					// 	disableOnInteraction: false,
					// },

					// Кол-во показываемых слайдов
					slidesPerView: 1,

					// Обновить свайпер
					// при изменении элементов слайдера
					observer: true,
					// при изменении родительских элементов слайдера
					observeParents: true,
					// при изменении дочерних элементов слайдера
					observeSlideChildren: true,

					// Скорость смены слайдов
					speed: 500,

					// Включение/отключение
					// перетаскивание на ПК
					simulateTouch: true,
					allowTouchMove: true,
					// Чувствительность свайпа
					touchRadio: 1,
					// Угол срабатывания свайпа/перетаскивания
					touchAngle: 45,
					// Cобытие touchstart (pointerdown)
					touchStartPreventDefault: false,

					// Цикличность слайдера
					loop: true,

					// Анимация переключения
					effect: 'fade',

					// Курсор перетаскивания
					grabCursor: true,

					// Стрелки
					navigation: {
						prevEl: arrowPrev,
						nextEl: arrowNext,
					},

					// Пагинация
					pagination: {
						el: pagination,
						clickable: true,
						type: 'fraction',
						formatFractionCurrent: addZero,
						formatFractionTotal: addZero
					},
				});

				// Связка слайдеров
				swiperTextMain.controller.control = swiperPictureMain;
				swiperPictureMain.controller.control = swiperTextMain;
			});
		});
	}

	if (document.querySelector('.rs-services')) {
		const sliderBlocks = document.querySelectorAll('.rs-services');

		sliderBlocks.forEach(slider => {
			const sliderSwiper = slider.querySelectorAll('.rs-services__slider');
			const arrowNext = slider.querySelector('.rs-services__button-next');
			const arrowPrev = slider.querySelector('.rs-services__button-prev');
			const pagination = slider.querySelector('.rs-services__pagination');

			sliderSwiper.forEach(sliderInit => {
				const swiperMain = new Swiper(sliderInit, {
					// Автопрокрутка
					autoplay: {
						// Пауза между прокруткой
						delay: 10000,
						// Закончить на последнем слайде
						stopOnLastSlide: false,
						// Отключить после ручного переключения
						disableOnInteraction: false,
					},

					slidesPerView: 'auto',
					spaceBetween: 24,

					// Обновить свайпер
					// при изменении элементов слайдера
					observer: true,
					// при изменении родительских элементов слайдера
					observeParents: true,
					// при изменении дочерних элементов слайдера
					observeSlideChildren: true,

					// Скорость смены слайдов
					speed: 500,

					// Включение/отключение
					// перетаскивание на ПК
					simulateTouch: true,
					allowTouchMove: true,
					// Чувствительность свайпа
					touchRadio: 1,
					// Угол срабатывания свайпа/перетаскивания
					touchAngle: 45,
					// Cобытие touchstart (pointerdown)
					touchStartPreventDefault: false,

					// Цикличность слайдера
					loop: true,

					// Анимация переключения
					// effect: 'fade',

					// Курсор перетаскивания
					grabCursor: true,

					// Стрелки
					navigation: {
						prevEl: arrowPrev,
						nextEl: arrowNext,
					},

					// Пагинация
					pagination: {
						el: pagination,
						clickable: true,
						type: 'fraction',
					},
				});
			});
		});
	}

	if (document.querySelector('.rs-logo__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-logo__slider');

		sliderBlocks.forEach(slider => {
			const arrowPrev = slider.querySelector('.rs-logo__button-prev');
			const arrowNext = slider.querySelector('.rs-logo__button-next');
			const pagination = slider.querySelector('.rs-logo__pagination');

			const swiperMain = new Swiper(slider, {
				// Автопрокрутка
				autoplay: {
					// Пауза между прокруткой
					delay: 10000,
					// Закончить на последнем слайде
					stopOnLastSlide: false,
					// Отключить после ручного переключения
					disableOnInteraction: false,
				},

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				allowTouchMove: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,
				// Cобытие touchstart (pointerdown)
				touchStartPreventDefault: false,

				// Цикличность слайдера
				loop: true,

				// Анимация переключения
				// effect: 'fade',

				// Курсор перетаскивания
				grabCursor: true,

				// Стрелки
				navigation: {
					prevEl: arrowPrev,
					nextEl: arrowNext,
				},

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					type: 'fraction',
				},

				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 2,
						spaceBetween: 24,
					},
					539.98: {
						slidesPerView: 3,
						spaceBetween: 24,
					},
					767.98: {
						slidesPerView: 4,
						spaceBetween: 30,
					},
					1169.98: {
						slidesPerView: 5,
						spaceBetween: 30,
					},
					1169.98: {
						slidesPerView: 6,
						spaceBetween: 39,
					},
				},
			});
		});
	}

	if (document.querySelector('.rs-slider-block__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-slider-block__slider');

		sliderBlocks.forEach(slider => {
			const arrowPrev = slider.querySelector('.rs-slider-block__button-prev');
			const arrowNext = slider.querySelector('.rs-slider-block__button-next');
			const pagination = slider.querySelector('.rs-slider-block__pagination');

			const swiperMain = new Swiper(slider, {
				// Автопрокрутка
				autoplay: {
					// Пауза между прокруткой
					delay: 10000,
					// Закончить на последнем слайде
					stopOnLastSlide: false,
					// Отключить после ручного переключения
					disableOnInteraction: false,
				},

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				allowTouchMove: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,
				// Cобытие touchstart (pointerdown)
				touchStartPreventDefault: false,

				// Цикличность слайдера
				loop: true,

				// Анимация переключения
				// effect: 'fade',

				// Курсор перетаскивания
				grabCursor: true,

				// Стрелки
				navigation: {
					prevEl: arrowPrev,
					nextEl: arrowNext,
				},

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					type: 'fraction',
				},

				centeredSlides: true,
				centeredSlidesBounds: true,

				// Брекпоинты (адаптив)
				breakpoints: {
					320: {
						slidesPerView: 1,
						spaceBetween: 24,
					},
					1169.98: {
						spaceBetween: 30,
					},
					1439.98: {
						slidesPerView: 1.6218,
						spaceBetween: 90,
					},
				},
			});
		});
	}

	function addZero(num) {
		return (num > 9) ? num : '0' + num;
	}
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
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
	// Запуск инициализации слайдеров
	if (document.querySelector('.swiper')) {
		initSliders();
	}
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});