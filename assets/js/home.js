$(document).ready(function () {
    var windowWidth = $(window).width();
    var window_width = $(window).width();
    var TM = TweenMax;
    var tl = new TimelineMax();
    console.log('Designed & Developed by Dcastalia');
    $('body').prepend('<div class="Overlay"></div><div class="form-overlay"></div>');


    // Jquery to open and close menu
    $('.menu__header__icon_box').click(function () {
        $('.menu').css({"right": "-110%"});
    });
    $('.open-slider').click(function () {
        $windowWidth2 = window.innerWidth;
        $('.menu').css({"right": "0"});
    });

    // modal responsive

    if($('.modal .close').length > 0){
        $main = $('.menu__header__logo img').offset().left + 8;
        $('.modal .csr_image .csr_image_wrapper').css('right',$main);
    }
    $(window).on('resize', function () {
        if($('.modal .close').length > 0){
            $main = $('.menu__header__logo img').offset().left;

            $('.modal .csr_image .csr_image_wrapper').css('right',$main);
        }
    });

    //------------ Light gallery
    if ($('.Light').length > 0) {
        $(".Light").lightGallery({
            selector: 'a'
        });
    }

    //------------ Light gallery with thumbnail
    if ($('.LightThumb').length > 0) {
        $(".Light").lightGallery({
            selector: 'a',
            exThumbImage: 'data-exthumbimage'
        });
    }



    // Slick slider fuad
    if ($('.testimonial__init').length > 0) {
        $('.testimonial__init').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            prevArrow: $('.slick-prev'),
            nextArrow: $('.slick-next'),
            // asNavFor: '.achivements__init',
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,

                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        // dots: true,

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,

                    }
                }

            ]

        });
    }

    //------------ nice select
    if ($('.Select').length > 0) {
        $('.Select select').niceSelect();
    }


    //------------ tab change in mobile using nice select
    $('.TabSelect').on('change', function (e) {
        $('.TabMenus li a').eq($(this).val()).tab('show');
    });


    //------ form validation
    $('form .dynamic_submit_btn').click(function () {
        $('.form-overlay').addClass('doit');
    });

    $(document).on('click', '.form-overlay.doit,.ok-class', function () {
        $('.form-overlay.doit, .form-message-container').hide();
    });

    $('.btn , button').click(function () {
        $('.form-overlay.doit, .form-message-container').removeAttr('style');
    });

    $('.dynamic_submit_btn').on('click', function () {
        setTimeout(function () {
            $('.form-overlay.doit').hide();
        }, 15000);
    });
    //------ form validation


//-------------- animation

    // if (767 < window_width) {
        // blast init
        if ($('.textUp').length > 0) {
            $('.textUp').blast({delimiter: "character"});
        }
        if ($('.fadeRightWord').length > 0) {
            $('.fadeRightWord').blast({delimiter: "word"});
        }

        if ($('.fadeRight').length > 0) {
            $('.fadeRight').blast({
                delimiter: "character"
            });
        }

        var get_first = $('.home-slider'),
            get_half = $(window).height() / 1.1;

        $(window).scroll(function () {
            var w_scroll = $(window).scrollTop();
            if ($('.anim').length > 0) {
                $('.anim').each(function () {
                    if (w_scroll > $(this).offset().top - get_half) {
                        $(this).addClass('anim-active');
                    }
                    // if (get_first.position().top === w_scroll) {
                    //     $('.anim').removeClass('anim-active');
                    // }

                });
            }
        })

    // }
    $('.anim').each(function () {
        if ($(this).visible(true)) {
            $(this).addClass('anim-active');
        }
    });


//-------------- animation end






    // scroll to section
    $('.target-next-btn').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target ||
                $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body')
                    .animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });

    // disable scroll
    $('.menu').bind('mousewheel DOMMouseScroll hover', function(e) {
        var scrollTo = null;

        if (e.type == 'mousewheel') {
            scrollTo = (e.originalEvent.wheelDelta * -1);
        }
        else if (e.type == 'DOMMouseScroll') {
            scrollTo = 40 * e.originalEvent.detail;
        }

        if (scrollTo) {
            e.preventDefault();
            $(this).scrollTop(scrollTo + $(this).scrollTop());
        }
    });



    // jquery code for banner
    if ($(`.home_banner_slider_images_init`).length > 0) {
        $(`.home_banner_slider_images_init`).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            autoplay: false,
            speed: 1000,
            autoplaySpeed: 3500,
            cssEase: 'linear'
        });
    }
    if ($(`.home_slider_images_init`).length > 0) {
        $(`.home_slider_images_init`).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: false,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 3500,
            fade: true,
            cssEase: 'linear'
        });
    }


    // sticky menu
    screenPosition = 0;
    $(window).scroll(function () {
        scrolled = $(window).scrollTop();
        //check if header-nav has navbar-fixed or not
        if ($('.header-nav').hasClass('fixed-header-nav')) {
            // if header-nav has fixed-header-nav
            // do nothing
        } else {
            if (screenPosition - scrolled > 0) {
                // $('.header-nav').removeClass('show-sticky-header');
                $('.header-nav').css({"top": "0px"});
                $('.logo-img-desk').attr("src", "assets/images/static/logo.svg");
                $(".header-nav").addClass("show-sticky-header");
            } else {
                $('.header-nav').css({"top": "-100px"});
                $(".header-nav").removeClass("show-sticky-header");
                $('.logo-img-desk').attr("src", "assets/images/static/logo-white.svg");
            }
            screenPosition = scrolled;
            var first_section = $('body').position().top + 500;
            $(window).scroll(function () {
                if ($(window).scrollTop() <= first_section) {
                    $('.header-nav').css({"top": "40px"});
                    $('.logo-img-desk').attr("src", "assets/images/static/logo-white.svg");
                    $(".header-nav").removeClass("show-sticky-header");
                }
            });
        }
    });



    $('.sub_link_parent').click(function () {
        if ($(this).hasClass('active-link')) {
            $('.sub_link_parent').removeClass('active-link');
        } else {
            $(this).addClass('active-link');
            $('.sub_link_parent').not($(this)).removeClass('active-link');
        }
    });


    // Slick Slider
    if ($('.our-projects-section__projects-slider__img__init').length > 0) {
        $('.our-projects-section__projects-slider__img__init').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            autoplaySpeed: 2000,
            prevArrow: $('.project-prev'),
            nextArrow: $('.project-next'),
            responsive: [
                {
                    breakpoint: 1101,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 860,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '90px',
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
// End Slick Slider


    //---------- about us page count down  start
    function DataCounter() {
        $('.countIt').each(function (e) {
            var start = $(this).attr("data-count-start");
            var end = $(this).attr("data-count-end");
            $(this).countTo({
                from: start,
                to: end,
                speed: 1200,
                onComplete: null
            });
        })

    }

    var CheckOnce = false;

    if ($('.counter-section').length > 0) {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $('.counter-section').offset().top / 1.2) {
                if (CheckOnce == false) {
                    DataCounter();
                    CheckOnce = true;
                }

            }
        });
    }

    // counter section padding

    let getOffset = $('.content').offset().left + 15;
    if ($('.content').length > 0) {
        $('.counter-card').css({'margin-left': getOffset})
    }

    $(window).resize(() => {
        if (window.screen.width > 767) {
            let getOffset = $('.content').offset().left + 15;
            if ($('.content').length > 0) {
                $('.counter-card').css({'margin-left': getOffset})
            }
        }
    });


    $("#mobile_code").intlTelInput({
        initialCountry: "in",
        separateDialCode: true,
        // utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.4/js/utils.js"
    });


});//document.ready





