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


    // ---------------------------

    $( "#price-slider" ).slider({
        range: true,
        values: [ 17, 67 ]
    });

    // ---------------------------

    var parentBlock;
    var slidingBlock;
    var slidingBtn;

    $(".sliding-block_wrapp").each(function() {

        slidingBlock = $(this).find(".sliding-block");

        slidingBtn = $(this).find(".sliding-btn");

        if( $(this).hasClass("active")) {           

            slidingBlock.slideDown(30);

            slidingBtn.addClass("active");

        } else {

            slidingBlock.slideUp(30);

            slidingBtn.removeClass("active");

        }

    });

    $(".sliding-btn").click(function() {

        parentBlock = $(this).closest(".sliding-block_wrapp");

        slidingBlock = parentBlock.find(".sliding-block");

        if(slidingBlock.is(":visible")) {

            slidingBlock.slideUp(600);

            $(this).removeClass("active");

        } else {

            slidingBlock.slideDown(600);

            $(this).addClass("active");

        }

    });

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