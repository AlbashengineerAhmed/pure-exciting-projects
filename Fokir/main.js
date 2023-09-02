const navMenu = document.getElementById('sidebar');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');
const toggleIcon = document.querySelector('.nav__toggle i');

/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle('show-sidebar');
        toggleIcon.classList.toggle('uil-bars');
        toggleIcon.classList.toggle('uil-times');
    });
}

if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove('show-sidebar');
        toggleIcon.classList.remove('uil-times');
        toggleIcon.classList.add('uil-bars');
    });
}

const clickSecNav = document.querySelectorAll('.nav__list li');
clickSecNav.forEach(press => {
    press.addEventListener('click', () => {
        navMenu.classList.remove('show-sidebar');
        toggleIcon.classList.remove('uil-times');
        toggleIcon.classList.add('uil-bars');
    });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.port-img', {
    selectors: {
        target: '.port-photo',
    },
    animation: {
        duration: 300,
    },
});
