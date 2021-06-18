const button = document.querySelector('.content-area__button-1');
const header = document.querySelector('.header');
button.addEventListener('click', () => {
	header.classList.toggle('head-visibility');
})
