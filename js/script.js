$(document).ready(function () {
  //play on video
  $(document).on("click", ".video-wrapper", function () {
    const video = $(this).children("video")[0];
    if ($(this).hasClass("play")) {
      video.pause();
    } else {
      video.play();
    }
    $(this).toggleClass("play");
  });

  // slick slider
  $(".about-us .slider").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: false,
          centerPadding: "40px",
        },
      },
    ],
  });

  $(".results .slider").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".teachers .slider").slick({
    centerMode: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  // open mobile menu
  $(document).on("click", ".menu-btn", function () {
    $(".header-wrapper").toggleClass("open");
  });

  // input mask
  $('input[type="tel"]').inputmask({
    mask: "+7 (999) 999-9999",
    placeholder: "x",
  });

  // open popup
  $(document).on("click", ".btn-popup", function () {
    $(".popup").addClass("open");
    $("body").addClass("with-popup");
  });
  // close popup
  $(document).on("click", ".btn-close", function () {
    $(".popup").removeClass("open");
    $("body").removeClass("with-popup");
  });

  // open popup-big
  $(document).on("click", ".btn-popup-big", function () {
    $(".popup-big").addClass("open");
    $("body").addClass("with-popup");
  });
  // close popup-big
  $(document).on("click", ".btn-close", function () {
    $(".popup-big").removeClass("open");
    $("body").removeClass("with-popup");
  });
});
