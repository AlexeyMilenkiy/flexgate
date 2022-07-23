;(function() {
	'use strict';

	// обеспечиваем короссбраузерноть для использования встроенного
	// в браузеры API requestAnimationFrame
	var requestAnimationFrame = window.requestAnimationFrame ||
								window.mozRequestAnimationFrame ||
								window.webkitRequestAnimationFrame ||
								window.msRequestAnimationFrame;
	window.requestAnimationFrame = requestAnimationFrame;

		// получаем объект menu
	var menu = document.querySelector('.header_navbar'),
		// коллекция объектов SPAN, которые используются, как
		// управляющие элементы для прокручивания страницы
		items = menu.querySelectorAll('span'),
		// коллекция объектов DIV, которые будем прокручивать
		// к верхнему краю экрана
		// containers = document.querySelectorAll('.wrap > div');
		containers = document.querySelectorAll('section');


		// высота документа (страницы)
		//определить размер страницы с учетом прокрутки можно, взяв максимум из нескольких свойств
		var pageHeight = Math.max(
				document.body.scrollHeight, document.documentElement.scrollHeight,
				document.body.offsetHeight, document.documentElement.offsetHeight,
				document.body.clientHeight, document.documentElement.clientHeight
			);

	menu.onclick = function(e) {
		// используя делегирование основанное на всплытии событий,
		// находим элемент SPAN по которому был сделан клик
		if (e.target.tagName != 'SPAN') return;
		// переключаем элемент SPAN в активное состояние и
		// получаем его индекс в составе коллекции 'items'
		var current = switchLinks(e.target);
		// на основании полученного индекса находим DIV из 
		// коллекции 'containers', который и будем прокручивать
		// до верхнего края экрана
		// из этой же функции запускаем сколл страницы
		selectContainer(current);
	}

	// изменяем стиль отображения элемента SPAN, по которому
	// был сделан клик
	function switchLinks(el) {
		var current;
		// перебираем коллекцию элементов SPAN
		[].forEach.call(items, function(item, index) {
			// у каждого элемента удаляем класс 'active',
			// если он был прописан
			item.classList.remove('active');
			// если элемент в текущей итерации совпадает с
			// элементом, по которому был сделан клик, то
			// добавляем ему класс 'active'
			if (item === el) {
				item.classList.add('active');
				// запоминаем индекс этого элемента
				// по этому индексу будет найден DIV из коллекции
				// containers, к которому применим анимацию
				current = index;
			}
		});
		return current;
	}

	// по полученному ранее индексу, находим DIV, который будет прокручиваться
	// к верхней части экрана
	function selectContainer(current) {
		// перебираем коллекцию элементов DIV
		[].forEach.call(containers, function(container, index) {
			// индекс элемента в текущей итерации совпадает
			// с полученным ранее индексом элемента меню, по
			// которому был сделан клик
			if (index == current) {
					// Y-координата верхней границы выбранного элемента относительно
					// верхнего края окна браузера с учётом высоты шапки
				var startY		= container.getBoundingClientRect().top - 96,
					// направление скролла зависит от положения верхней границы контейнера
					// относительно верхней границы окна браузера
					// нужный нам контейнер может находится выше или ниже окна браузера,
					// соответственно, страницу нужно скроллить вверх или вниз
					direction	= (startY < 0) ? -1 : (startY > 0) ? 1 : 0;
				// верхняя граница контейнера, к которому собираемся перейти, находится
				// сразу под шапкой - нет необходимости прокручивать страницу
				if (direction == 0) return;
				// запускаем функцию прокручивания страницы до выбранного контейнера
				scroll(container, direction);
			}
		});
	}

	function scroll(el, direction) {
			// длительность прокручивания страницы
		var duration = 200,
			// старт анимации прокручивания страницы
			start = new Date().getTime();

		var fn = function() {
				// текущее положение верхней границы контейнера с учётом высоты шапки с меню
				// при прокрутке контейнер не должен заходить под шапку
			var top = el.getBoundingClientRect().top - 96,
				// время прошедшее от начала прокрутки страницы
				now = new Date().getTime() - start,
				// на сколько должна быть прокручена страница
				result = Math.round(top * now / duration);

			// корректируем значение 'result', чтобы контейнер остановился
			// точно по нижней границе шапки
			result = (result > direction * top) ? top : (result == 0) ? direction : result;

			// определяем есть необходимость прокручивать страницу дальше или нет
			// применение этого условия необходимо, когда высота последнего контейнера
			// меньше высоты экрана и верхняя граница контейнера физически не может
			// достигнуть верхней границы экрана, в нашей вёрстке - это container 6
			// window.pageYOffset - текущая прокрутка страницы
			// document.documentElement.clientHeigh - размер видимой части окна
			if (direction * top > 0 && (pageHeight - window.pageYOffset) > direction * document.documentElement.clientHeight) {
				window.scrollBy(0,result);
				// рекурсивно запускаем функцию анимации прокрутки страницы
				requestAnimationFrame(fn);
			}
		}
		// старт прокрутки страницы
		requestAnimationFrame(fn);
	}
})();