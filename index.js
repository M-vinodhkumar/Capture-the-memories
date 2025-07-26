
//for image hidden and block
const slides = document.querySelectorAll('.slider-img');
let currentIndex = 0;

const showSlide = (index) => {
    slides.forEach((slide, i) => {
        slide.classList.toggle('hidden', i !== index);
        slide.classList.toggle('block', i === index);
    });
};
document.getElementById("rightarr").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

document.getElementById("leftarr").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

// Initial slide
showSlide(currentIndex);

let menu = document.getElementById("menuicon")
let closenav = document.getElementById("closenav")
let sidenav = document.getElementById("sidenav")

menu.addEventListener("click", () => {
    sidenav.style.right = "50%"
})
closenav.addEventListener("click", () => {
    sidenav.style.right = "150%"
})
//offer tab
let offer = document.getElementById("offer")
let closeoffer = document.getElementById("closeoffer")
closeoffer.addEventListener("click", () => {
    offer.style.display = "none"
})
//newsletter button function
function myfunction() {
    alert("Thank you for subscribing to our newsletter!");

}