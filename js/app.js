// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$(document).ready(function(){
	// $('#arrow').show().animate({ top: 305 }, {duration: 1000, easing: 'easeOutBounce'});
	// alert("yo");
	// $('.nav-arrow').animate({ top: 305 }, {duration: 1000, easing: 'easeOutBounce'});
	var welcomediv = $('.welcome-content');
	var storydiv = $('.story-content');
	var weddingdiv = $('.wedding-content');

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
		if($(window).scrollTop()>800){
			storydiv.fadeIn("slow");
			// $( ".story-content" ).fadeIn("slow").animate({marginLeft: "50px"}, 500);

			// $( ".story-content" ).animate({marginLeft: "50px"}, 500);
		}
		else {
			storydiv.fadeOut("fast");
		}
		
	});

	$(window).scroll(function(){
		if($(window).scrollTop()<1300){
			weddingdiv.fadeOut("fast");
		}
		else {
			weddingdiv.fadeIn("slow");
		}
		
	});
});