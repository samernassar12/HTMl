
    if ($(window).width() > 768) {
                var i = 0;
                $('.dropdown').hover(function () {
                    if (i == 0) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(500);
    i = 1;
}
                    else {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(400);

    i = 0;
}
});
}

