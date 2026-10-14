(function ($) {
    "use strict";


    jQuery(document).ready(function ($) {


        /*---------------------------------------------*
        * Carousel
        ---------------------------------------------*/
        $('#Carousel').carousel({
                interval: 5000,
                item: 2
            })
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
