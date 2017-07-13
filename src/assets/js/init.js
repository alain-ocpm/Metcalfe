function searchBar(e) {
  e.preventDefault;
  console.log(e)
  $(".nav-main-search .custom-search-box").toggleClass("hide");
  $("#nav-main-search-submit").toggleClass("active");
  $(".nav-main-search .custom-search-box").focus();
}

var mouseEventsHandler = function() {
 if($('.nav-main-search').lenth != 0)
   $("#nav-main-search-submit").on("click", searchBar );
}

var focusEventsHandler = function() {
  if($('.nav-main-search').lenth != 0)
    $(".nav-main-search .custom-search-box").on("focusout", searchBar );
}

var init = function() {
  if($('.home-slider').length != 0) {
    $('.home-slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      pauseOnDotsHover: true,
      pauseOnFocus: false,
      prevArrow: "",
      nextArrow: "",
      responsive: [
      {
        breakpoint: 640,
        settings: {
          dots: false
        }
      }],
      speed: 1000
    });

    /*$('.slick-arrow').wrap( '<li></li>');

    $('.home-slider li:has(.slick-prev)').prependTo(".home-slider .slick-dots");
    $('.home-slider li:has(.slick-next)').appendTo(".home-slider .slick-dots");*/
  }

  mouseEventsHandler();
  //focusEventsHandler();
}
