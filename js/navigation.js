let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", function() {

    hamburger.classList.toggle("is-active");
    nav.classList.toggle("is-active");


});

// let nav = document.querySelector(".mobile-nav");

// hamburger.addEventListener("click", function() {

//     hamburger.classList.toggle("is-active");

// });