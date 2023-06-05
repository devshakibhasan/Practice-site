const navEl = document.querySelector('.navbar');
const navbarImg = document.querySelector('.navbar-brand');
const collapse = document.querySelector('.show');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        navEl.classList.add('navbar-scrolled');
        navEl.classList.add('logo');  
    } else if(window.scrollY < 100){
        navEl.classList.remove('navbar-scrolled');
        navEl.classList.remove('logo');
    }
})
