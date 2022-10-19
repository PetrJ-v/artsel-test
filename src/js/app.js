import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

let menuBtn = document.getElementById('mobile-menu');
menuBtn.onclick = () => {
	menuBtn.classList.toggle("active");
};
document.addEventListener('DOMContentLoaded', () => {
	setTimeout( () => {
		document.querySelector('.h1-title').classList.add('ready');
		let servicesArr = document.querySelectorAll('.service__item-img');
		let i = 1;
		servicesArr.forEach( (item) => {
			setTimeout( () => {
				item.classList.add('ready');
			}, i*400);
			i++;
		});
	}, 1000)
});

