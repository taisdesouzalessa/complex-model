
$(window).on('scroll', function () {
    if ($(window).scrollTop() >= 324) {
        $('.dropdown').addClass('fixed');
    } else {
        $('.dropdown').removeClass('fixed');
    }
});
