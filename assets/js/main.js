(function ($) {
    "use strict";


    // Reputation Management carousel
    $(".reputation-crs").owlCarousel({
        items: 1,
        autoPlay: 55000,
        stopOnHover: true,
        center: true,
        navigation: false,
        pagination: true,
        singleItem: true,
        autoHeight: false,
        responsive: true,
        responsiveRefreshRate: 200,
    });

    // Perfect SEO Expert carousel
    $(".perfect-seo-crs").owlCarousel({
        items: 1,
        autoPlay: 5500,
        stopOnHover: true,
        center: true,
        navigation: true,
        pagination: false,
        rewindNav: false,
        singleItem: true,
        autoHeight: true,
        responsive: true,
        slideSpeed: 700,
        responsiveRefreshRate: 200,
    });

   
    // owlCarousel
// $('.hero-slider').owlCarousel({
//     loop:true,
//     nav:true,
//     dots:true,
//     autoplay:true,
//     navText: [ '<span class="fa fa-angle-left">', '<span class="fa fa-angle-right">' ],
//     responsive:{
//         0:{
//             items:1,
//             nav:false
//         },
//         767:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// })

// service - active
$('.hero-slider').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });



})(jQuery);	