const signUpBtn = document.querySelector(".sign-up-btn");
const menuBtn = document.querySelector(".menu-btn");
const headerNavbar = document.querySelector(".header-navbar");
const bodyDoc = document.body || document.getElementsByTagName('body')[0];
const fluid = window.matchMedia("(min-width: 726px)");
const paralOne = document.querySelector(".paral-1");
const paralTwo = document.querySelector(".paral-2");

signUpBtn.addEventListener("mousedown", function() {
    this.style.border = "none";
});

signUpBtn.addEventListener("mouseup", function() {
    this.style.borderBottom = "3px solid #ebeaea";
});

menuBtn.addEventListener("click", function() {
    headerNavbar.classList.toggle("active");
})

bodyDoc.addEventListener("mousemove", function(e) {
    if(fluid.matches) {
        paralOne.style.transform = `translate(${e.clientX/14}px, ${e.clientY/14}px)`;
        paralTwo.style.transform = `translate(${e.clientX/14}px, ${e.clientY/14}px)`;
    }
})