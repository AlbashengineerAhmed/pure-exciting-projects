window.addEventListener('scroll', function() {
    var nav = document.querySelector('.navbar');
    var homeSection = document.getElementById('home');

    if (window.scrollY >= homeSection.offsetHeight) {
        nav.classList.add('navbar-scrolled');
    } else {
        nav.classList.remove('navbar-scrolled');
    }
});
