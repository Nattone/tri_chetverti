$(document).ready(function () {

    //play on video
    $(document).on('click', '.video-wrapper', function () {
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

    $('.results .slider').slick({
        centerMode: true,
        centerPadding: '60px',
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });



});