// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$(document).ready(function(){
	// alert("yo");
	var divs = $('.welcome-content');
	$(window).scroll(function(){
		if($(window).scrollTop()<500){
			divs.fadeOut("fast");
		}
		else {
			divs.fadeIn("slow");
		}
	});
});