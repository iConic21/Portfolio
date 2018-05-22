$(window).on('load', function () {
    setTimeout(function () {
        $('body').addClass('loaded');
        setTimeout(function () {
            $('#loader-wrapper').hide();
            $('.anim-delay-1, .anim-delay-2, .anim-delay-3').addClass('play');
        }, 800);
    }, 200);
});
M.AutoInit();