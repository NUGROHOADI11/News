var defaultOption = document.querySelector(".defaultOption");
var options = document.querySelector(".options");

function toggleOptions() {
  options.classList.toggle("active");
}

function selectOption(listItem) {
  var value = listItem.innerHTML;
  defaultOption.innerHTML = value;
  options.classList.remove("active");
}

document.addEventListener("click", function (event) {
  var targetElement = event.target;
  var isClickInside =
    options.contains(targetElement) || defaultOption.contains(targetElement);
  if (!isClickInside) {
    options.classList.remove("active");
  }
});

// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// when click
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
};

// click outside navbar
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-button');

document.addEventListener('click', function(e){
    if(!hm.contains(e.target)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
    if(!sb.contains(e.target)&& !searchForm.contains(e.target)){
        searchForm.classList.remove('active');
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



 