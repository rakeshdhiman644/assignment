
$(document).ready(function () {
	$('.image-slider').slick({
		dots: false,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 2000
	});
});

function prevSlide() {
	$('.image-slider').slick('slickPrev');
}

function nextSlide() {
	$('.image-slider').slick('slickNext');
}

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
document.getElementById('year').innerText = currentYear;