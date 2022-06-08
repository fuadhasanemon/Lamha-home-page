$(document).ready(function () {
    var windowWidth = $(window).width();
    var window_width = $(window).width();
    var w_scroll = $(window).scrollTop();
    var get_first = $('.home-slider'),
        get_half = $(window).height() / 1.2;
    var TM = TweenMax;
    var tl = new TimelineMax();
    console.log('Designed & Developed by Dcastalia');
    $('body').prepend('<div class="Overlay"></div><div class="form-overlay"></div>');


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
            selector: 'a',
            download: false
        });
    }

    //------------ Light gallery with thumbnail
    if ($('.LightThumb').length > 0) {
        $(".Light").lightGallery({
            selector: 'a',
            exThumbImage: 'data-exthumbimage'
        });
    }

    if($('.mcustomscrollbar').length>0){
        $(".mcustomscrollbar").mCustomScrollbar();
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

            // concern line draw
            if ($('.asConcernGroup').length > 0) {
                $('.asConcernGroup').each(function () {
                    if (w_scroll > $(this).offset().top - get_half) {
                        $(this).addClass('active');
                    }
                });
            }
        })

    // }
    $('.anim').each(function () {
        if ($(this).visible(true)) {
            $(this).addClass('anim-active');
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



//-------------- animation end
    // sticky menu
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
                $('.header-nav img').attr("src", "assets/images/static/logo.svg");
                $(".header-nav").addClass("show-sticky-header");
            } else {
                $('.header-nav').css({"top": "-100px"});
                $(".header-nav").removeClass("show-sticky-header");
                $('.header-nav img').attr("src", "assets/images/static/logo-white.svg");
            }
            screenPosition = scrolled;
            var first_section = $('body').position().top + 500;
            $(window).scroll(function () {
                if ($(window).scrollTop() <= first_section) {
                    $('.header-nav').css({"top": "40px"});
                    $('.header-nav img').attr("src", "assets/images/static/logo-white.svg");
                    $(".header-nav").removeClass("show-sticky-header");
                }
            });
        }
    });


    // Jquery to open and close menu
    $('.menu__header__icon_box').click(function () {
        $('.menu').css({"right": "-110%"});
    });
    $('.open-slider').click(function () {
        $windowWidth2 = window.innerWidth;
        $('.menu').css({"right": "0"});
    });


    // jquery to add margin bottom on click menu link
    $('.sub_link_parent').click(function () {
        if ($(this).hasClass('active-link')) {
            $('.sub_link_parent').removeClass('active-link');
        } else {
            $(this).addClass('active-link');
            $('.sub_link_parent').not($(this)).removeClass('active-link');
        }
    });
    // js code to prevent scrolling

    $('.dropdown_search').niceSelect();
});//document.ready


//------------ Device Image with background image
// function deviceImage() {
//     // window min width 1401 -- large screen
//     var window_width = $(window).width();
//     if (1400 < window_width) {
//         $('.modify-bg').each(function () {
//             var large = $(this).attr('data-image-large');
//             $(this).css('background', "url(" + large + ")");
//         });
//         console.log('large');
//     }
//     // window max-width 1400 -- standard screen
//     if (1400 >= window_width && 992 <= window_width) {
//         $('.modify-bg').each(function () {
//             var standard = $(this).attr('data-image-standard');
//             $(this).css('background', "url(" + standard + ")");
//         });
//         console.log('standard');
//     }
//     // window max-width 991 -- mobile device
//     if (991 >= window_width) {
//         $('.modify-bg').each(function () {
//             var small = $(this).attr('data-image-small');
//             $(this).css('background', "url(" + small + ")");
//         });
//         console.log('small');
//     }
// }
//
// deviceImage();


//============= Slick Slider
if ($('.management-team-slider-section__slider__img__init').length > 0) {
    $('.management-team-slider-section__slider__img__init').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: $('.project-prev'),
        nextArrow: $('.project-next'),
        responsive: [
            {
                breakpoint: 1101,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
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
                    centerPadding: '60px',
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}
//============= End Slick Slider

//============= CSR slick start

if ($('.news-events-details__init').length > 0) {
    $('.news-events-details__init').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.project-prev'),
        nextArrow: $('.project-next'),

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
                breakpoint: 600,
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

}

//============= CSR slick end


