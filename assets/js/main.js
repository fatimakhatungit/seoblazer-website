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
        navText: [ '<span class="fa fa-angle-left">', '<span class="fa fa-angle-right">' ],
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

   /*START WOW ANIMATION JS*/
   new WOW().init(); 
   /*END WOW ANIMATION JS*/



})(jQuery);	