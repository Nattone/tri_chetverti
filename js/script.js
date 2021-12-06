$(document).ready(function () {

    //play video
    $(document).on('click', '.video__wrapper', function () {
        const video = $(this).children('video')[0];
        if ($(this).hasClass('play')) {
            video.pause();
        } else {
            video.play();
        }
        $(this).toggleClass('play');
    });

    // slick slider 
    $('.about-us .slider').slick({

    });


});