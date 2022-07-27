import './styles/style.sass';

import './images/logos/logo_main.png';
import './images/logos/logo_visa.svg';
import './images/logos/logo_mir.svg';
import './images/logos/logo_mastercard.svg';
import './images/logos/logo_google.svg';
import './images/logos/logo_yandex.svg';
import './images/logos/logo_2gis.svg';
import './images/logos/logo_whatsapp.svg';
import './images/logos/logo_telegram.svg';
import './images/logos/logo_instagram.svg';

import './images/slider_00.png';
import './images/slider_01.png';
import './images/slider_02.png';
import './images/slider_03.png';
import './images/slider_04.png';

import './images/arrow.svg';
import './images/example_one.png';
import './images/example_two.png';
import './images/logos/telephone.svg';
import './images/logos/telegram.svg';
import './images/logos/whatsapp.svg';
import './images/yandex_maps.jpg';
import './images/yandex_maps.webp';
import './scripts/form';
import './scripts/modal';
import './scripts/scroll';

console.log('Hello...');
console.log('mode', process.env.NODE_ENV);

let elements = document.querySelectorAll("a[href^='#'");
console.log('elements :>> ', elements);
for (let i = 0; i < elements.length; i++) {
  elements[i].classList.remove('active');
  elements[i].onclick = function (event) {
    console.log('ONCLICK');
    //remove all active class
    removeClass();
    if (event.target.innerHTML === this.innerHTML) {
      this.classList.add('active');
    }
  };
}

function removeClass() {
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.remove('active');
  }
}

function Scroll() {
  document.querySelectorAll("a[href^='#'").forEach((link) => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      console.log(e);
      let href = this.getAttribute('href').substring(1);
      //   console.log(href)
      e.target.classList.remove('active');
      this.classList.add('active');
      const scrollTarget = document.getElementById(href);
      // const topOffset = document.querySelector(".scrollto").offsetHeight;
      const topOffset = 0; // если не нужен отступ сверху
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });
}

// Scroll();
