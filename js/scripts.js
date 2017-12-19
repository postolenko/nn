//Slider and carousel

$(document).ready(function () {

    var mainCarousel = $('.owl-carousel.carousel-main-slider').owlCarousel({
        loop:false,
        mouseDrag: false,
        touchDrag: true,
        dots: true,
        nav: true,
        onInitialized: activeThumb,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1

            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    mainCarousel.on('changed.owl.carousel', function(event) {

        var sliderNameAttr = $(this).attr("data-slider");

        if( $("[data-slider-nav = '" + sliderNameAttr + "' ]").length > 0 ) {

            var hashAttr = $(this).find(".owl-item:eq("+ event.item.index +") .carousel-item").attr("data-hash");

            var miniaturesNav = $("[data-slider-nav = '"+ sliderNameAttr +"']");

            miniaturesNav.find(".slide_nav").each(function() {

                if( $(this).attr("href") == "#"+ hashAttr ) {

                    $(this).addClass("active");

                } else {

                    $(this).removeClass("active");

                }

            });            

        }

    });

    function activeThumb(event) {

        var sliderName = $(event.target);

        var sliderNameAttr = sliderName.attr("data-slider");

        if( $("[data-slider-nav = '" + sliderNameAttr + "' ]").length > 0 ) {

            var hashAttr = sliderName.find(".owl-item.active .carousel-item").attr("data-hash");

            var miniaturesNav = $("[data-slider-nav = '"+ sliderNameAttr +"']");

            miniaturesNav.find(".slide_nav").each(function() {

            if( $(this).attr("href") == "#"+ hashAttr ) {

                    $(this).addClass("active");

                } else {

                    $(this).removeClass("active");

                }

            });

        }

    }

    // ------------------------------------------

    var sliderName;
    var sliderNameAttr;
    var slideDesc;
    var slideDescTxt;
    var item;
    var hashAttr;
    var miniaturesNav;

    var gkSlider =  $('.gk-slider').owlCarousel({
        loop: true,
        mouseDrag: false,
        touchDrag: true,
        dots: true,
        nav: true,
        onInitialized: showItem,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1

            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    gkSlider.on('changed.owl.carousel', function(event) {

        item = event.item.index;

        hashAttr = $(this).find(".owl-item:eq("+ item +") .carousel-item").attr("data-hash");

        miniaturesNav = $("[data-slider-miniatures = '"+ sliderNameAttr +"']");

        miniaturesNav.find(".nav-thumb").each(function() {

            if( $(this).attr("href") == "#"+ hashAttr ) {

                $(this).addClass("active");

            } else {

                $(this).removeClass("active");

            }

        });

        slideDesc  = $(".slide-descript-row[data-slider-desc = '"+ sliderNameAttr + "']");

        slideDescTxt = $(this).find(".owl-item:eq("+ item +") .carousel-item").attr("data-descript");

        slideDesc.text(slideDescTxt);

    });

    function showItem(event) {

        sliderName = $(event.target);

        sliderNameAttr = sliderName.attr("data-slider");

        hashAttr = sliderName.find(".owl-item.active .carousel-item").attr("data-hash");

        miniaturesNav = $("[data-slider-miniatures = '"+ sliderNameAttr +"']");

        miniaturesNav.find(".nav-thumb").each(function() {

            if( $(this).attr("href") == "#"+ hashAttr ) {

                $(this).addClass("active");

            } else {

                $(this).removeClass("active");

            }

        });

        slideDesc  = $(".slide-descript-row[data-slider-desc = '"+ sliderNameAttr + "']");

        slideDescTxt = $(event.target).find(".owl-item.active .carousel-item").attr("data-descript");

        slideDesc.text(slideDescTxt);

    }

    var photoGallery =  $('.photogallery-slider').owlCarousel({
        loop:false,
        mouseDrag: false,
        touchDrag: true,
        dots: true,
        nav: true,
        onInitialized: showItem2,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1

            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    photoGallery.on('changed.owl.carousel', function(event) {

        item = event.item.index;

        sliderNameAttr = $(this).attr("data-slider");

        slideDesc  = $(".slide-descript-row[data-slider-desc = '"+ sliderNameAttr + "']");

        slideDescTxt = $(this).find(".owl-item:eq("+ item +") .carousel-item").attr("data-descript");

        slideDesc.text(slideDescTxt);

    });

    function showItem2(event) {

        sliderName = $(event.target);

        sliderNameAttr = sliderName.attr("data-slider");

        slideDesc  = $(".slide-descript-row[data-slider-desc = '"+ sliderNameAttr + "']");

        slideDescTxt = $(event.target).find(".owl-item.active .carousel-item").attr("data-descript");

        slideDesc.text(slideDescTxt);

    }

    // ---------------------------

    var videoSlider =  $('.video-slider').owlCarousel({
        loop: true,
        mouseDrag: false,
        touchDrag: true,
        dots: true,
        nav: true,
        onInitialized: showItem3,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1

            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    videoSlider.on('changed.owl.carousel', function(event) {

        item = event.item.index;
        
        sliderNameAttr = $(this).attr("data-slider");

        hashAttr = $(this).find(".owl-item:eq("+ item +") .carousel-item").attr("data-hash");

        miniaturesNav = $("[data-slider-miniatures = '"+ sliderNameAttr +"']");

        miniaturesNav.find(".nav-thumb").each(function() {

            if( $(this).attr("href") == "#"+ hashAttr ) {

                $(this).addClass("active");

            } else {

                $(this).removeClass("active");

            }

        });

        slideDesc  = $(".slide-descript-row[data-slider-desc = '"+ sliderNameAttr + "']");

        slideDescTxt = $(this).find(".owl-item:eq("+ item +") .carousel-item").attr("data-descript");

        slideDesc.text(slideDescTxt);

    });

    function showItem3(event) {

        sliderName = $(event.target);

        sliderNameAttr = sliderName.attr("data-slider");

        hashAttr = sliderName.find(".owl-item.active .carousel-item").attr("data-hash");

        miniaturesNav = $("[data-slider-miniatures = '"+ sliderNameAttr +"']");

        miniaturesNav.find(".nav-thumb").each(function() {

            if( $(this).attr("href") == "#"+ hashAttr ) {

                $(this).addClass("active");

            } else {

                $(this).removeClass("active");

            }

        });

        slideDesc  = $(".slide-descript-row[data-slider-desc = '"+ sliderNameAttr + "']");

        slideDescTxt = $(event.target).find(".owl-item.active .carousel-item").attr("data-descript");

        slideDesc.text(slideDescTxt);

    }

    // ---------------------------

    var objectSecondary =  $('.object-secondary_slider').owlCarousel({
        loop:false,
        mouseDrag: false,
        touchDrag: true,
        dots: true,
        nav: true,
        onInitialized: showItem4,
        responsiveClass: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1

            },
            992:{
                items:1
            },
            1200:{
                items:1
            }
        }
    });

    objectSecondary.on('changed.owl.carousel', function(event) {

        var item = event.item.index;

        var sliderNameAttr = $(this).attr("data-slider");

        var slideDesc  = $(".slide-descript-row[data-slider-desc = '"+ sliderNameAttr + "']");

        var slideDescTxt = $(this).find(".owl-item:eq("+ item +") .carousel-item").attr("data-descript");

        slideDesc.text(slideDescTxt);

    });

    function showItem4(event) {

        var sliderName = $(event.target);

        var sliderNameAttr = sliderName.attr("data-slider");

        var slideDesc  = $(".slide-descript-row[data-slider-desc = '"+ sliderNameAttr + "']");

        var slideDescTxt = $(event.target).find(".owl-item.active .carousel-item").attr("data-descript");

        slideDesc.text(slideDescTxt);

    }

    if( $(".gk-slider-2").length > 0 ) {

        $(".gk-slider-2").owlCarousel({
            loop: true,
            mouseDrag: false,
            touchDrag: true,
            dots: false,
            nav: true,
            onInitialized: showItem,
            responsiveClass: true,
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:1

                },
                992:{
                    items:1
                },
                1200:{
                    items:1
                }
            }
        });

    }

    // ---------------------------

    $( "#price-slider" ).slider({
        range: true,
        values: [ 17, 67 ]
    });

    // ---------------------------

});

//Active Class in menu

    var menuActiveItem = (function() {
    var menuItems   = $('.menu > li > a');
    var activeClass = "active";

    return {
        addActiveClass : function() {
            var _this = this;
            menuItems.click(function () {
                var linkLocation = location.href;
                var link = this.href;
                if(linkLocation == link) {
                    _this.removeActiveClass();
                    $(this).addClass(activeClass);
                }
            });
        },
        removeActiveClass : function() {
            menuItems.removeClass(activeClass);
        }
    }
}());

$(function() {
    menuActiveItem.addActiveClass();
});