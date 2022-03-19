const slide = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("dot");
let slideIndex = 1;

function showSlides(n) {

    const slideLenght = slide.length;
    const dotsLenght = dots.length;
    if (n > slideLenght) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slideLenght;
    }

    for (let i = 0; i < slideLenght; i++) {
        slide[i].style.display = "none";
    }
    for (let i = 0; i < dotsLenght; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slide[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
showSlides(showSlides);

function slidesShow(n) {
    showSlides(slideIndex += n)
}

function dotsShow(n) {
    showSlides(slideIndex = n), 3000
}