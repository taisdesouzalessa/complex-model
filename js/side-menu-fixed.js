$(window).on('scroll', function () {
    if ($(window).scrollTop() >= 387) {
        $('.desktop-menu').addClass('fixed-side');
    } else {
        $('.desktop-menu').removeClass('fixed-side');
    }
});