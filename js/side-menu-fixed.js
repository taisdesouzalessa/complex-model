$(window).on('scroll', function () {
    if ($(window).scrollTop() >= 297 && $(window).scrollTop() <= $('.second-container').height()+56) {
        $('.desktop-menu').addClass('fixed-side');
    } else {
        $('.desktop-menu').removeClass('fixed-side');
    }
});