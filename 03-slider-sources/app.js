const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const container = document.querySelector('.container');

const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const slideCount = mainSlide.querySelectorAll('div').length

sidebar.style.top = `-${(slideCount - 1) * 100}vh`;

let activeSlideIndex = 0;

downBtn.addEventListener('click', () => {
	changeSlide('down');
})

upBtn.addEventListener('click', () => {
	changeSlide('up');
})

function changeSlide(direction) {
	if (direction === 'up') {
		activeSlideIndex++;
		if (activeSlideIndex === slideCount) {
			activeSlideIndex = 0;
		}
	} else if (direction === 'down') {
		activeSlideIndex--;
		if (activeSlideIndex < 0){
			activeSlideIndex = slideCount - 1;
		}
	}

	const height = container.clientHeight;

	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}