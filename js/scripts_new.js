var parentBlock;
var slidingBlock;
var slidingBtn;

var thumbnailsHeights = [];

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

$(window).on("load",function(){

	// $(".scroll-box").mCustomScrollbar();

});

$(window).resize(function() {

	bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

});

$(document).ready(function() {

    getSliderHeight();

    getGreyBg();

    getThumbnailsHeght();

	$(window).resize(function() {

		bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

		$(".gk-slider-2 .carousel-item").css({
			"height" : "auto"
		});

		getSliderHeight();

		getGreyBg();

		getThumbnailsHeght();

	});

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


	$(".play-btn-big").click(function() {

		parentBlock = $(this).closest(".carousel-item");

		parentBlock.find(".owl-video-play-icon").click();

		$(this).css({
            "display" : "none"
        });

	});

    $(".sharesthumb_2").each(function () {
        var thumb = $(this).find(".sharethumb_2");
        thumb.each(function() {
            if( $(this).index() % 6 == 0 && $(this).index() == 0) {
                $(this).addClass("count");
            }
        });
    });

// ------------------------------------------------------


    $(".filter_select_title").on("click", function(e) {
        e.preventDefault();
        var parentBlock = $(this).closest(".filter_select_wrapp");
        var dropdownTitle = $(this);
        var dropdownSelect = parentBlock.find(".filter_dropdown");
        if( dropdownSelect.is(":hidden") ) {
            parentBlock.addClass("active");
            dropdownSelect.fadeIn(300);
        } else {
            parentBlock.removeClass("active");
            dropdownSelect.fadeOut(300);
        }
    });

    $(this).keydown(function(eventObject){
        if (eventObject.which == 27) {
            if ( $(".filter_dropdown").is(":visible") ) {
                $(".filter_dropdown").fadeOut(300);
                $(".filter_select_wrapp").removeClass("active");
            }
        }
    });

	$(document).mouseup(function (e){
        hide_element = $(".filter_dropdown");
        if (!hide_element.is(e.target)
            && hide_element.has(e.target).length === 0) {
            hide_element.fadeOut(300);
        	hide_element.closest(".filter_select_wrapp").removeClass("active");
        }
    });

   //  $(".filter_dropdown .checkbox input").on("change", function() {

   //  	var ch = $(this);
   //  	var labelVal = $(this).closest("label").find("span").text();

   //  	var dropdownTitle = $(this).closest(".filter_select_wrapp").find(".filter_select_title input");
   //  	var dropdownTitleVal =  dropdownTitle.val();

   //  	if( ch.prop( "checked" ) ) {

   //  		console.log(labelVal);

   //  		var result = dropdownTitleVal.match(labelVal);

   //  		console.log(result);

   //  		if( dropdownTitleVal != "") {
   //  			if(dropdownTitleVal.match(labelVal) == null) {
   //  				dropdownTitle.val(dropdownTitleVal + "," + labelVal);
   //  			}				
   //  		} else {
   //  			dropdownTitle.val(labelVal);
   //  		}

   //  	} else {
			// var mass = dropdownTitleVal.split(", ");
			// var res = "";
			// mass.forEach(el => {
			//  if (el === labelVal) return;
			//  res += el + ", ";
			// });
			// dropdownTitle.val(res);
   //  	}

   //  });

// ------------------------------------------------------

	function getSliderHeight() {

		if( bodyWidth >= 901 ) {
		
			var sliderHeight = $("#colHeight").height();

			$(".gk-slider-2 .carousel-item").css({
				"height" : sliderHeight + "px"
			});

		} else {
			$(".gk-slider-2 .carousel-item").css({
				"height" : 385 + "px"
			});
		}

	}

	function getGreyBg() {

		$(".grey-sect").find(".grey-bg").each( function(){

			$(this).css({
				"width" : $(window).width() + "px"
			});

			$(this).offset({left: 0});


		});

	}

	function getThumbnailsHeght() {

		var thumbInnerBox;
		var thmbHeight;
		var thumbnailsHeight;

		$(".thumb-5").find(".inner").css({
			"height" : "auto"
		});

		if( bodyWidth > 768) {


			$(".thumbnails-5").each(function() {

				var thumbnailsHeights = [];

				$(this).find(".thumb-5").each(function() {

					thumbInnerBox = $(this).find(".inner");

					thmbHeight = thumbInnerBox.outerHeight();

					thumbnailsHeights.push(thmbHeight);				

				});

				thumbnailsHeight =  Math.max.apply(null, thumbnailsHeights);

				$(this).find(".thumb-5 .inner").css({
					"height" : thumbnailsHeight + "px"
				});

			});

		}

	}

});