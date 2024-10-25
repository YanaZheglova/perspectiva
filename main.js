
'use strict'

//menu
const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');
const menuLink = document.querySelectorAll('.nav__link');

navBtn.onclick = () => {
	if (nav.classList.toggle('open')) {
		navBtnImg.src = "./img/close-bar.svg";
		document.body.classList.toggle('_lick');
	} else {
		navBtnImg.src = "./img/nav-bar.svg";
		document.body.classList.toggle('_lick');
	}
};
//close menu after click link


const links = Array.from(menuLink);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
	navBtnImg.src = "./img/nav-bar.svg";
  nav.classList.remove("open");
  body.classList.remove("noscroll");
}


//scroll
(function () {

	const smoothScroll = function (targetEl, duration) {
			const headerElHeight =  document.querySelector('.header').clientHeight;
			let target = document.querySelector(targetEl);
			let targetPosition = target.getBoundingClientRect().top - headerElHeight;
			let startPosition = window.pageYOffset;
			let startTime = null;
	
			const ease = function(t,b,c,d) {
					t /= d / 2;
					if (t < 1) return c / 2 * t * t + b;
					t--;
					return -c / 2 * (t * (t - 2) - 1) + b;
			};
	
			const animation = function(currentTime){
					if (startTime === null) startTime = currentTime;
					const timeElapsed = currentTime - startTime;
					const run = ease(timeElapsed, startPosition, targetPosition, duration);
					window.scrollTo(0,run);
					if (timeElapsed < duration) requestAnimationFrame(animation);
			};
			requestAnimationFrame(animation);

	};

	const scrollTo = function () {
			const links = document.querySelectorAll('.js-scroll');
			links.forEach(each => {
					each.addEventListener('click', function () {
							const currentTarget = this.getAttribute('href');
							smoothScroll(currentTarget, 1000);
					});
			});
	};
	scrollTo();
}());





//accordion
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));

