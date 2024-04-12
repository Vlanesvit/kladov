/* ====================================
Меню
==================================== */
function menuFunction() {
	const menus = document.querySelectorAll('.rs-header__menu');

	// Бургер-кнопка
	function menuBurger() {
		menus.forEach(menu => {
			const menuBurgerBtns = document.querySelectorAll('.icon-menu');

			if (menuBurgerBtns) {
				menuBurgerBtns.forEach(btn => {
					// Открываем меню
					btn.addEventListener("click", function (e) {
						if (document.documentElement.classList.contains("menu-open")) {
							menuClose();
						} else {
							menuOpen()
						}
					});
				});
			}
		});
	};
	menuBurger()

	// Меню
	function menuInit() {
		const menuBlock = document.querySelector('.menu__block');
		const menuItem = document.querySelectorAll('.menu__block .menu__wrap ul > li');

		// Добавляем иконки в пункты с выпадающим меню
		menuItem.forEach(item => {
			const menuLink = item.querySelector('a');
			let icon = document.createElement('i');
			icon.classList.add('menu__dropdown-arrow')
			menuLink.append(icon);
		});

		menus.forEach(menu => {
			// Все пункты с выпадающим меню
			const menuItemDropdowns = menuBlock.querySelectorAll('.menu__list .menu__dropdown');
			const menuItemDropdownsMenu = menuBlock.querySelectorAll('.menu__list .menu__dropdown_block');

			// 0-ой уровень
			const menuItemDropdownsNull = menuBlock.querySelectorAll('.menu__list > .menu__dropdown');
			const menuItemDropdownsMenuNull = menuBlock.querySelectorAll('.menu__list > .menu__dropdown > .menu__dropdown_block');

			// 1-ый уровень
			const menuItemDropdownsFirst = menuBlock.querySelectorAll('.menu__list > .menu__dropdown > .menu__dropdown_block > .menu__dropdown_body > .menu__wrap > ul > .menu__dropdown');
			const menuItemDropdownsMenuFirst = menuBlock.querySelectorAll('.menu__list > .menu__dropdown > .menu__dropdown_block > .menu__dropdown_body > .menu__wrap > ul > .menu__dropdown > .menu__dropdown_block');

			// 2-ой уровень
			const menuItemDropdownsTwo = menuBlock.querySelectorAll('.menu__list > .menu__dropdown > .menu__dropdown_block > .menu__dropdown_body > .menu__wrap > ul > .menu__dropdown > .menu__dropdown_block > .menu__dropdown');
			const menuItemDropdownsMenuTwo = menuBlock.querySelectorAll('.menu__list > .menu__dropdown > .menu__dropdown_block > .menu__dropdown_body > .menu__wrap > ul > .menu__dropdown > .menu__dropdown_block > .menu__dropdown > .menu__dropdown_block');

			/* Один и тот же код для отдельных уровней меню, 
			чтобы открывался только один пункт, а открытые - закрывались, кроме тех, кто выше уровнем */
			function openLvlMenu(li, ul) {
				li.forEach(item => {
					const menuItemIcons = item.querySelector('a > i');
					const menuItemBack = item.querySelector('.menu__dropdown_back');

					if (menuItemBack) {
						menuItemBack.addEventListener('click', (e) => {
							e.preventDefault();
							if (menuItemIcons.closest('.menu__dropdown').classList.contains('_open-menu')) {
								menuItemIcons.closest('.menu__dropdown').classList.remove('_open-menu');
								menuDropClose()
							}
						})
					}

					// Открытие меню при клике на иконку
					menuItemIcons.addEventListener('click', (e) => {
						console.log('1');
						e.preventDefault();
						// Проходимся по всем пунктам и ищем активные классы, убираем их и добавляем активный класс кликнутому пункту
						if (!menuItemIcons.closest('.menu__dropdown').classList.contains('_open-menu')) {
							li.forEach(itemDrop => {
								if (itemDrop.classList.contains('_open-menu')) {
									itemDrop.classList.remove('_open-menu')
								}
							});
							menuDropOpen()
							menuItemIcons.closest('.menu__dropdown').classList.add('_open-menu');
						} else if (menuItemIcons.closest('.menu__dropdown').classList.contains('_open-menu')) {
							menuItemIcons.closest('.menu__dropdown').classList.remove('_open-menu');
							menuDropClose()
						}
					});
				});
			}
			// Пункты 0-го уровня меню
			openLvlMenu(menuItemDropdownsNull, menuItemDropdownsMenuNull)
			// Пункты 1-го уровня меню
			openLvlMenu(menuItemDropdownsFirst, menuItemDropdownsMenuFirst)
			// Пункты 2-го уровня меню
			openLvlMenu(menuItemDropdownsTwo, menuItemDropdownsMenuTwo)

			// При клике на бургер убираем открые меню и активные класс
			document.addEventListener("click", function (e) {
				if (e.target.closest('.menu__icon')) {
					menuItemDropdowns.forEach(item => {
						item.classList.remove('_open-menu');
					});
				}
			});
		});
	}
	menuInit()

	function showImgHover() {
		const menuItem = document.querySelectorAll('.rs-header__burger_body .rs-header__menu .menu__body ul li a')
		const menuImg = document.querySelectorAll('.rs-header__burger_imgs img')

		if (menuItem.length > 0 && menuImg.length > 0) {
			menuItem.forEach((item, index) => {
				item.addEventListener('mouseenter', function (e) {
					e.preventDefault()

					menuItem.forEach((itemOther) => {
						itemOther.classList.remove('_show-link')
					});
					item.classList.add('_show-link')

					menuImg.forEach(img => {
						img.classList.remove('_show-img')
					});
					menuImg[index].classList.add('_show-img')
				})
			});
		}
	}
	showImgHover()

	// Функции открытия бургер-меню с блокировкой скролла
	function menuOpen() {
		bodyLock();
		document.documentElement.classList.add("menu-open");
	}
	function menuClose() {
		bodyUnlock();
		document.documentElement.classList.remove("menu-open");
	}
	function menuToggle() {
		bodyLockToggle();
		document.documentElement.classList.toggle("menu-open");
	}
	// Функции открытия бургер-меню с блокировкой скролла
	function menuDropOpen() {
		document.documentElement.classList.add("drop-menu-open");
	}
	function menuDropClose() {
		document.documentElement.classList.remove("drop-menu-open");
	}
	function menuDropToggle() {
		document.documentElement.classList.toggle("drop-menu-open");
	}
}
menuFunction()

/* ====================================
Якорные ссылки
==================================== */
// data-goto - указать ID блока
// data-goto-header - учитывать header
// data-goto-top - недокрутить на указанный размер
// data-goto-speed - скорость (только если используется доп плагин)
let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
	const targetBlockElement = document.querySelector(targetBlock);
	if (targetBlockElement) {
		let headerItem = "";
		let headerItemHeight = 0;
		if (noHeader) {
			headerItem = ".rs-header";
			const headerElement = document.querySelector(headerItem);
			if (!headerElement.classList.contains("_header-scroll")) {
				headerElement.style.cssText = `transition-duration: 0s;`;
				headerElement.classList.add("_header-scroll");
				headerItemHeight = headerElement.offsetHeight;
				headerElement.classList.remove("_header-scroll");
				setTimeout((() => {
					headerElement.style.cssText = ``;
				}), 0);
			} else headerItemHeight = headerElement.offsetHeight;
		}
		let options = {
			speedAsDuration: true,
			speed,
			header: headerItem,
			offset: offsetTop,
			easing: "linear"
		};
		document.documentElement.classList.contains("menu-open") ? menuClose() : null;
		if ("undefined" !== typeof SmoothScroll) (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
			let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
			targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
			targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
			window.scrollTo({
				top: targetBlockElementPosition,
				behavior: "smooth"
			});
		};
	};
}
function pageNavigation() {
	document.addEventListener("click", pageNavigationAction);
	document.addEventListener("watcherCallback", pageNavigationAction);
	function pageNavigationAction(e) {
		if ("click" === e.type) {
			const targetElement = e.target;
			if (targetElement.closest("[data-goto]")) {
				const gotoLink = targetElement.closest("[data-goto]");
				const gotoLinkSelector = gotoLink.dataset.goto ? gotoLink.dataset.goto : "";
				const noHeader = gotoLink.hasAttribute("data-goto-header") ? true : false;
				const gotoSpeed = gotoLink.dataset.gotoSpeed ? gotoLink.dataset.gotoSpeed : 500;
				const offsetTop = gotoLink.dataset.gotoTop ? parseInt(gotoLink.dataset.gotoTop) : 0;
				gotoblock_gotoBlock(gotoLinkSelector, noHeader, gotoSpeed, offsetTop);
				e.preventDefault();
			}
		} else if ("watcherCallback" === e.type && e.detail) {
			const entry = e.detail.entry;
			const targetElement = entry.target;
			if ("navigator" === targetElement.dataset.watch) {
				document.querySelector(`[data-goto]._navigator-active`);
				let navigatorCurrentItem;
				if (targetElement.id && document.querySelector(`[data-goto="#${targetElement.id}"]`)) navigatorCurrentItem = document.querySelector(`[data-goto="#${targetElement.id}"]`); else if (targetElement.classList.length) for (let index = 0; index < targetElement.classList.length; index++) {
					const element = targetElement.classList[index];
					if (document.querySelector(`[data-goto=".${element}"]`)) {
						navigatorCurrentItem = document.querySelector(`[data-goto=".${element}"]`);
						break;
					}
				}
				if (entry.isIntersecting) navigatorCurrentItem ? navigatorCurrentItem.classList.add("_navigator-active") : null; else navigatorCurrentItem ? navigatorCurrentItem.classList.remove("_navigator-active") : null;
			}
		}
	}
}
pageNavigation();

/* ====================================
Header при скролле
==================================== */
function headerFixed() {
	const header = document.querySelector('.rs-header');
	const headerTag = document.querySelector('header');

	function headerClassAdd() {
		header.classList.toggle('_header-scroll', window.scrollY > 0)
		header.classList.toggle('_header-show', window.scrollY > 500)
	}

	window.addEventListener('scroll', function () {
		headerClassAdd()
	})
	window.addEventListener('load', function () {
		headerClassAdd()

		if (!header.classList.contains('_header-transparent')) {
			headerTag.style.height = header.clientHeight + 'px';
		}
	})
	window.addEventListener('resize', function () {
		headerClassAdd()

		if (!header.classList.contains('_header-transparent')) {
			headerTag.style.height = header.clientHeight + 'px';
		}
	})
}
headerFixed()
