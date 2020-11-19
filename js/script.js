$('.menu-open').click(function () {
    $('.menu ul').css('right', '0');
})
$('.menu-close').click(function () {
    $('.menu ul').css('right', '-500px');
})

$(function ($) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 140) {
            $('nav').addClass('nav-fixed');
            $('nav').css('top', '0px');
        } else if ($(this).scrollTop() < 140) {
            $('nav').removeClass('nav-fixed');
            $('nav').css('top', '-100px');
        }
    });
});