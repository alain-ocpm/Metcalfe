var init = function() {
  if($('.home-slider').length != 0) {
    $('.home-slider').slick({
      autoplay: false,
      autoplaySpeed: 2000,
      dots: true,
      pauseOnDotsHover: true,
      pauseOnFocus: false,
      prevArrow: "",
      nextArrow: "",
      speed: 1000
    });

    /*$('.slick-arrow').wrap( '<li></li>');

    $('.home-slider li:has(.slick-prev)').prependTo(".home-slider .slick-dots");
    $('.home-slider li:has(.slick-next)').appendTo(".home-slider .slick-dots");*/
  }
}
