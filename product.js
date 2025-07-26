//sidenav content toggle
let menu = document.getElementById("menuicon")
let closenav = document.getElementById("closenav")
let sidenav = document.getElementById("sidenav")

menu.addEventListener("click", () => {
    sidenav.style.right = "50%"
})
closenav.addEventListener("click", () => {
    sidenav.style.right = "150%"
})

//checkbox filter
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".filter-checkbox");
    const productCards = document.querySelectorAll(".grid > div");

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", filterProducts);
    });

    function filterProducts() {
        const activeFilters = Array.from(checkboxes)
            .filter(c => c.checked)
            .map(c => c.value);

        productCards.forEach(card => {
            if (activeFilters.length === 0) {
                card.style.display = "block";
                return;
            }

            const cardClasses = card.className.split(" ");
            const match = activeFilters.every(f => cardClasses.includes(f));
            card.style.display = match ? "block" : "none";
        });
    }
});
//heartbtn
const heartButtons = document.querySelectorAll("#heart, .heart");

heartButtons.forEach((heart) => {
    heart.addEventListener("click", () => {
        const isFilled = heart.classList.contains("fa-solid");

        if (isFilled) {
            heart.classList.remove("fa-solid");
            heart.classList.add("fa-regular");
            heart.style.color = "white";
            heart.style.transform = "scale(1)";
        } else {
            heart.classList.remove("fa-regular");
            heart.classList.add("fa-solid");
            heart.style.color = "red";
            heart.style.transform = "scale(1.3)";
        }
    });
});
//searchitems bar
function myfunction() {
    let input = document.getElementById("myinput");
    let filter = input.value.toLowerCase();
    let items = document.querySelectorAll(".grid > div");

    items.forEach(item => {
        let text = item.textContent || item.innerText;
        if (text.toLowerCase().indexOf(filter) > -1) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}




