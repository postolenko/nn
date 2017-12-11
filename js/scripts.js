//Slider and carousel

$(document).ready(function () {
    $('.owl-carousel.carousel-main-slider').owlCarousel({
        loop:false,
        mouseDrag: false,
        touchDrag: true,
        dots: true,
        nav: true,
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

    // ------------------------------------------

    var sliderName;
    var sliderNameAttr;
    var slideDesc;
    var slideDescTxt;
    var item;

    var gkSlider =  $('.gk-slider').owlCarousel({
        loop:false,
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

        sliderNameAttr = $(this).attr("data-slider");

        slideDesc  = $(".slide-descript-row[data-slider-desc = '"+ sliderNameAttr + "']");

        console.log(sliderNameAttr);

        slideDescTxt = $(this).find(".owl-item:eq("+ item +") .carousel-item").attr("data-descript");

        slideDesc.text(slideDescTxt);

        console.log(slideDescTxt);

    });

    function showItem(event) {

        sliderName = $(event.target);

        sliderNameAttr = sliderName.attr("data-slider");

        slideDesc  = $(".slide-descript-row[data-slider-desc = '"+ sliderNameAttr + "']");

        slideDescTxt = $(event.target).find(".owl-item.active .carousel-item").attr("data-descript");

        slideDesc.text(slideDescTxt);

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