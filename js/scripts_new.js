$(document).ready(function() {
	
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