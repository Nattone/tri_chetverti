$(document).ready(function () {

    //play on video
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
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    centerMode: false,
                    centerPadding: '40px',
                }
            }
        ]

    });



});