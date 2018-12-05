$(document).ready(function() {

    // Border animation for nav items
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


    // Content-1 animation
    $('.content-1 .col-md-4 .curcle').hover(
        function() {
            $(this).css({
                "width" : "105px",
                "height" : "105px",
                "color" : "#3F494C"
            });
        },
        
        function() {
            $(this).css({
                "width" : "100px",
                "height" : "100px",
                "color" : "#EF233C"
            });
        }
    );


    // Progress bar animation
    const x = 854;
    const y = 672;

    $(window).on("scroll", function() {

        // test
        // var scrollh = $(document).height();
        var scrollt = $(document).scrollTop();

        if(x < scrollt) {
            $('.pro-1').css('width','90%');
            $('.pro-2').css('width','94%');
            $('.pro-3').css('width','89%');
        } else if(y > scrollt) {
            $('.pro-1, .pro-2, .pro-3').css('width','0');
        }

        // test
        // $('.progress .sp-1').text(scrollh);
        // $('.progress .sp-2').text(scrollt);
        // $('.progress .sp-3').text(scrollt);
    });





});