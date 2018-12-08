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


    // Pricing Animation

    //basic
    var basic_span = ".basic .basic-border:nth-child";
    
    $('.basic a').hover(

        function() {
            
            $(basic_span + '(1)').css("width","100%");
            $(basic_span + '(2)').css("height","100%");
            $(basic_span + '(3)').css("height","100%");
            $(basic_span + '(4)').css("width","100%");

            $('.basic hr').css("background-color","red");
        },

        function() {

            $(basic_span + '(1)').css("width","30px");
            $(basic_span + '(2)').css("height","30px");
            $(basic_span + '(3)').css("height","30px");
            $(basic_span + '(4)').css("width","30px");

            $('.basic hr').css("background-color","inherit");
        },
    );
    
    //enterprise
    var enterprise_span = ".enterprise .basic-border:nth-child";
    
    $('.enterprise a').hover(
        
        function() {

            $(enterprise_span + '(1)').css("width","100%");
            $(enterprise_span + '(2)').css("height","100%");
            $(enterprise_span + '(3)').css("height","100%");
            $(enterprise_span + '(4)').css("width","100%");

            $('.enterprise hr').css("background-color","red");                
        },

        function() {

            $(enterprise_span + '(1)').css("width","30px");
            $(enterprise_span + '(2)').css("height","30px");
            $(enterprise_span + '(3)').css("height","30px");
            $(enterprise_span + '(4)').css("width","30px");

            $('.enterprise hr').css("background-color","inherit");                    
        }
    );




    
});