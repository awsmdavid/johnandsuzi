// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$(document).ready(function(){
	// alert("yo");
	var welcomediv = $('.welcome-content');
	var storydiv = $('.story-content');
	var weddingdiv = $('.wedding-content');

	$(window).scroll(function(){
		if($(window).scrollTop()<500){
			welcomediv.fadeOut("fast");
		}
		else {
			welcomediv.fadeIn("slow");
		}

	});

	$(window).scroll(function(){
		if($(window).scrollTop()<1000){
			storydiv.fadeOut("fast");
		}
		else {
			storydiv.fadeIn("slow");
		}
		
	});

	$(window).scroll(function(){
		if($(window).scrollTop()<1500){
			weddingdiv.fadeOut("fast");
		}
		else {
			weddingdiv.fadeIn("slow");
		}
		
	});
});