const ipad = window.matchMedia('screen and (max-width: 767px)');
const menuBurger = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');

ipad.addListener(validation);

function validation(event) {
    if(event.matches) {
        burgerButton.addEventListener('click', hideShow);
    }else {
        burgerButton.removeEventListener('click', hideShow);
    }
}

validation(ipad);

function hideShow() {
    menuBurger.classList.toggle('is-active');
}

$(function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 600
    });
});