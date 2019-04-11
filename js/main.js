/*--------VIDEO----------*/
$(document).ready(function() {
    $('.video').parent().click(function () {
        if ($(this).children(".video").get(0).paused) {
            $(this).children(".video").get(0).play();
            $(this).children(".video-overlay").fadeOut();
            $(this).children(".playpause").fadeOut();
        } else {
            $(this).children(".video").get(0).pause();
            $(this).children(".video-overlay").fadeIn();
            $(this).children(".playpause").fadeIn();

        }
    });
});

/*-----------MENU--------------*/
$(document).ready(function() {
        $('.menu .sub-menu>li').hover(function () {
            $('.menu .sub-menu>li').removeClass('active');
            $(this).addClass('active');
        });
});

/*--------------MOBILE MENU----------------*/
$(document).on('click','.header-menu-touch',function(){
    $('.header-menu-touch').toggleClass('active');
    $('.menu-mobile').animate({heigth: 'toggle'}, 200);
});
$(document).ready(function() {
    $(".menu-mobile .sub-menu:first").hide();
    $(".menu-mobile .sub-menu:not(:first)").hide();
    $('.item-has-children').children('a').on('click', function (event) {
        event.preventDefault();
        $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
    });
});
$(document).ready(function(){
    var topNav = $('.menu-mobile');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 66) {
            topNav.animate({top:'0'}, 50);
        } else {
            topNav.animate({top:'66px'}, 50);
        }
    });
});
/*----------------SUBCHAT--------------*/
$(document).ready(function(){
    if (window.innerWidth < 768) {
        $('.sub-chat').hide();
    }
    else {
        $('.sub-chat').hide();
        setTimeout(function () {
            $('.sub-chat').show();
        }, 20000);
    }

    $('.sub-chat-close').on('click', function () {
        $('.sub-chat').hide();
    })

    function hideBanner() {
        var bottomBanner = document.querySelector('.banner_up_footer');
        var btnClose = document.querySelector('.banner_up_close');
        if (bottomBanner) {
            btnClose.onclick = function() {
                bottomBanner.style.opacity = '0';
            }
        }
    }
    hideBanner();

    function elementInViewport(footer, banner) {
        if (footer && banner) {
            var ftop = footer.offsetTop;
            var visibleFooter = ftop - window.pageYOffset - window.innerHeight;
            if (visibleFooter <= 0) {
                banner.style.bottom = visibleFooter * (-1) + 'px';
            } else {
                banner.style.bottom = 0 + 'px';
            }
        }
    }
    var footer = document.querySelector('.sec-footer');
    var banner = document.querySelector('.banner_up_footer');
    elementInViewport(footer, banner);

    window.onscroll = function() {
        elementInViewport(footer, banner);
    }
});

/*----------CONTACT FORM------------*/
$(document).ready(function(){

    $('.contact-form-content').find('.form-control').each(function() {
        var targetItem = $(this).parent();
        if ($(this).val()) {
            $(targetItem).find('label').css({
                'bottom': '0',
            });
        }
    })
    $('.contact-form-content').find('.form-control').focus(function() {
        $(this).parent('.input-block').addClass('focus');
        $(this).parent().find('label').animate({
            'bottom': '10px',
        }, 300);
    })
    $('.contact-form-content').find('.form-control').blur(function() {
        if ($(this).val().length == 0) {
            $(this).parent('.input-block').removeClass('focus');
            $(this).parent().find('label').animate({
                'bottom': '0',
            }, 300);
        }
    })
});

/*--------------SIDEBAR AcCORDEON---------------*/
$(document).ready(function(){
    $(".children:first").hide();
    $(".children:not(:first)").hide();

    $(".cat li").click(function(){
        $(this).next(".children").slideToggle("slow")
            .siblings(".children:visible").slideUp("slow");
        $(this).toggleClass("active");
        $(this).siblings(".cat li").removeClass("active");
    });
});

/*-----------READ MORE----------------*/
$(document).ready(function() {
        var hiddenInfo = $(".hidden-info");
        var readMoreTrigger = $(".read-more-trigger");
        hiddenInfo.hide();
        readMoreTrigger.on("click", function () {
            hiddenInfo.toggle();
            if (readMoreTrigger.text() == "Show More") {
                readMoreTrigger.text("Show Less");
                $(this).addClass("active");
            }
            else {
                readMoreTrigger.text("Show More");
                $(this).removeClass("active");
            }
        });
});
/*--------------FLASHCARDS SLIDER------------------------*/
$(document).ready(function(){
        $('.slick-slider-flashcards').slick({
            //centerMode: true,
            dots:true,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
            infinite: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2,
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
});

/*-----------------FLIP---------------*/
$(document).ready(function() {
    $('.card-show').hover(function () {
        $(this).addClass('hover');
        $(this).parents(".f1_container").addClass("hide");
    }, function(){
        $(this).removeClass('hover');
        $(this).parents(".f1_container").removeClass("hide");
    });

    $('.card-show').click(function (){
        $('.f1_container').removeClass("active");
        $(this).parents(".f1_container").toggleClass("active");
        return false;
    });
    $('.card-hide').click(function (){
        $(this).parents(".f1_container").toggleClass("active");
    });
});
/*-----------------------------------*/
$(window).bind('scroll',function(e){
    parallaxScroll();
});

function parallaxScroll(){
    var scrolled = $(window).scrollTop();
    $('.parallax-container').css('top',(0-(scrolled*.25))+'px');
}