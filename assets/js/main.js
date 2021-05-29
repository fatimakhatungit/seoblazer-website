(function ($) {
    "use strict";

    // owlCarousel
$('.hero-slider').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    autoplay:true,
    navText: [ '<span class="fa fa-angle-left">', '<span class="fa fa-angle-right">' ],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        767:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

})(jQuery);	