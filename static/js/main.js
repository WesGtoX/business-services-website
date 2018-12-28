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


    // Pro animation border
    var pro_span = '.pro .pro-span:nth-child';

    $('.pro #pro-button').hover(

        function() {
            
            $(pro_span + '(1)').css({
                "height" : "100%",
                "bottom" : "0%"
            });
            
            $(pro_span + '(2)').css({
                "height" : "100%",
                "bottom" : "0%"
            });
        },

        function() {
            
            $(pro_span + '(1)').css({
                "height" : "130px",
                "bottom" : "40%"
            });
            
            $(pro_span + '(2)').css({
                "height" : "130px",
                "bottom" : "40%"
            });
        }
    );


    // Our Services
    $('.content-4 .nav-tabs:nth-child(1)').css({
        "background-color" : "#ffffff",
        "border-top" : "3px solid #E30022"
    });

    //first tab
    $('.content-4 .nav-tabs:nth-child(1)').on('focusin', function() {
        $(this).css({
            "background-color" : "#ffffff",
            "border-top" : "3px solid #E30022"
        })
    });

    $('.content-4 .nav-tabs:nth-child(1)').on('focusout', function() {
        $(this).css({
            "background-color" : '#EDF2F4',
            "border-top" : "0px"
        })
    });

    //second tab
    $('.content-4 .nav-tabs:nth-child(2)').on('focusin', function() {

        $('.content-4 .nav-tabs:nth-child(1)').css({
            "background-color" : '#EDF2F4',
            "border-top" : "0px"
        })

        $(this).css({
            "background-color" : "#ffffff",
            "border-top" : "3px solid #E30022"
        })
    });

    $('.content-4 .nav-tabs:nth-child(2)').on('focusout', function() {
        $(this).css({
            "background-color" : '#EDF2F4',
            "border-top" : "0px"
        })
    });

    //third tab
    $('.content-4 .nav-tabs:nth-child(3)').on('focusin', function() {
        $(this).css({
            "background-color" : "#ffffff",
            "border-top" : "3px solid #E30022"
        })
    });

    $('.content-4 .nav-tabs:nth-child(3)').on('focusout', function() {
        $(this).css({
            "background-color" : '#EDF2F4',
            "border-top" : "0px"
        })
    });

    //forth tab
    $('.content-4 .nav-tabs:nth-child(4)').on('focusin', function() {
        $(this).css({
            "background-color" : "#ffffff",
            "border-top" : "3px solid #E30022"
        })
    });

    $('.content-4 .nav-tabs:nth-child(4)').on('focusout', function() {
        $(this).css({
            "background-color" : '#EDF2F4',
            "border-top" : "0px"
        })
    });


    // Form validation

    //email validation
    function validationEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($email);
    }

    $('#email').on('focusout', function() {

        if($(this).val() != "") {
            if(validationEmail($(this).val())) {
                $(this).css('border','1px solid green');
                $('#error').text('');
            } else {
                $(this).css('border','1px solid red');
                $('#error').text('Invalid Email Address');
            }

        } else {
            $(this).css('border','1px solid red');
            $('#error').text('Email is Required');
        }
    });

    //message validation
    $('#comment').on('focusout', function() {

        if($(this).val() != "") {
            $(this).css('border','1px solid green');
            $('#error').text('');
        } else {
            $(this).css('border','1px solid red');
            $('#error').text('Message is Required');
        }
    });

    //name and subject validation
    $('#name, #subject').on('focusout', function() {

        if($(this).val() != "") {
            $(this).css('border','1px solid green');
        } else {
            $(this).css('border','1px solid rgb(212, 212, 212');
        }
    });


    // Scroll up
    $('.top a').on("click", function() {
        
        $('html, body').animate({
            scrollTop : 0
        }, 1500);
    });


    // Sticky navbar
    $(window).scroll(function() {
        
        if($(document).scrollTop() > 250) {
            $('nav').addClass('fixed-top').addClass('sticky');
        } else {
            $('nav').removeClass('fixed-top').removeClass('sticky');
        }
    });


    // Navigation link
    $('.navbar-brand #logo').on('click', function() {
        $('html, body').animate({ scrollTop : 0}, 1000)
    });

    $('.nav-item #home').on('click', function() {
        $('html, body').animate({ scrollTop : 0}, 1000)
    });

    $('.nav-item #features').on('click', function() {
        $('html, body').animate({ scrollTop : 450}, 1000)
    });

    $('.nav-item #pricing').on('click', function() {
        $('html, body').animate({ scrollTop : 1470}, 1000)
    });

    $('.nav-item #services').on('click', function() {
        $('html, body').animate({ scrollTop : 1950}, 1000)
    });

    $('.nav-item #about-us').on('click', function() {
        $('html, body').animate({ scrollTop : 2470}, 1000)
    });

    $('.nav-item #contact-us').on('click', function() {
        $('html, body').animate({ scrollTop : 2980}, 1000)
    });
    
});