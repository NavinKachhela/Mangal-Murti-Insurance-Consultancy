$('.carousel').carousel({
    interval: 4000
});
$('.counter').counterUp({
    delay: 10,
    time: 3000,
    triggerOnce: true
});
var x = window.matchMedia("(max-width: 360px)")

if (x.matches) {
    $('div').removeClass('py-5').addClass('py-2');
}

new WOW().init();
