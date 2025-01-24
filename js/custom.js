
$(document).ready(function () {
	$('.image-slider').slick({
				dots: false, // Add navigation dots if desired
				arrows: false, // Disable default slick slider arrows
				autoplay: false, // Set to true for autoplay
				autoplaySpeed: 2000 // Set the speed of autoplay
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