// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$(document).ready(function(){
	// Check if desktop
    if (/Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) === false) {

		// $('#arrow').show().animate({ top: 305 }, {duration: 1000, easing: 'easeOutBounce'});
		// alert("yo");
		// $('.nav-arrow').animate({ top: 305 }, {duration: 1000, easing: 'easeOutBounce'});
		var welcomediv = $('.welcome-content');
		var storydiv = $('.story-content');
		var weddingdiv = $('.wedding-content');
		var weddingheaderdiv = $('.wedding-header');
		$(window).scroll(function(){
			if($(window).scrollTop()>500){
				welcomediv.fadeIn("slow");
			}
			else {
				// $( ".story-content" ).animate({marginLeft: "0px"}, 500);
				welcomediv.fadeOut("fast");
			}

		});

		$(window).scroll(function(){
			if($(window).scrollTop()>700){
				storydiv.fadeIn("slow");
				// $( ".story-content" ).fadeIn("slow").animate({marginLeft: "50px"}, 500);

				// $( ".story-content" ).animate({marginLeft: "50px"}, 500);
			}
			else {
				storydiv.fadeOut("fast");
			}
			
		});

		$(window).scroll(function(){
			if($(window).scrollTop()<1600){
				weddingheaderdiv.fadeOut("fast");
			}
			else {
				weddingheaderdiv.fadeIn("slow");
			}
			
		});

		$(window).scroll(function(){
			if($(window).scrollTop()<1800){
				// weddingdiv.hide(1000);
				weddingdiv.fadeOut("800");
				// weddingdiv.fadeOut({ duration: 700, queue: false }).slideUp(800);

			}
			else {
				// weddingdiv.fadeIn({ duration: 700, queue: false }).slideDown(800); 
				// weddingdiv.show(1000);
				weddingdiv.fadeIn("800");
			}
			
		});
	}
});