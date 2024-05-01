let currentSlideIndex = 1;
const totalSlides = 4; 
const slide = document.getElementById("slide")

function prevSlide() {
    showSlide(currentSlideIndex -= 1);
}

function nextSlide() {
    showSlide(currentSlideIndex += 1);
}

function showSlide(n) {
    const slide = document.getElementById('slide');
    if (n > totalSlides) { currentSlideIndex = 1; }
    if (n < 1) { currentSlideIndex = totalSlides; }
    slide.src = `./images/image${currentSlideIndex}.jpg`;
}
