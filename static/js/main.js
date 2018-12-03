$(document).ready(function() {

    //Border animation for nav items
    $('.navbar-nav li a').addClass('border-animation');


    // Homepage button animation
    $('.btn-sub1').hover(
        function() {
            $('.fa-angle-right').css({
                "transform" : "rotate(180deg)",
                "margin-left" : "5px"
            });
        },

        function() {
            $('.fa-angle-right').css({
                "transform" : "rotate(0deg)",
                "margin-left" : "0px"
            });
        }
    );

    $('.btn-sub2').hover(
        function() {
            $('.fa-angle-double-right').css({
                "transform" : "rotate(180deg)",
                "margin-right" : "5px"
            })
        },
        
        function() {
            $('.fa-angle-double-right').css({
                "transform" : "rotate(0deg)",
                "margin-right" : "0px"
            });
        }
    );
});