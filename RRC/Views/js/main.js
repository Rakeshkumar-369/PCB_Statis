(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {


        /*---------------------------------------------*
        * Carousel (Bootstrap 5)
        ---------------------------------------------*/
        var rrcCarousel = document.getElementById('Carousel');
        if (rrcCarousel && window.bootstrap) {
            new bootstrap.Carousel(rrcCarousel, { interval: 5000 });
        }
            /*------------------------*/

    });

    /*---------------------------------------------*
        * STICKY scroll
    ---------------------------------------------*/

    if ($.fn.localScroll) { $.localScroll(); }

    /**************************/


    jQuery(window).on('load', function () {


    });



}(jQuery));
