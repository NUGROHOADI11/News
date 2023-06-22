// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// when click
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// click outside navbar
const hamburger = document.querySelector('#hamburger-menu');
document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});

const toTop = document.querySelector(".goTopBtn");

window.addEventListener("scroll", ()=>{
    if(window.pageYOffset > 100){
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})



 