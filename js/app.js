// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
/*
function doBounce(times, distance, speed) {
	for(var i = 0; i < times; i++) {
		$('#arrow').animate({marginTop: '-='+distance}, speed)
		.animate({marginTop: '+='+distance}, speed);
	}
}
*/

$(document).ready(function(){

	// Check if desktop
    if (/Android|BlackBerry|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) === false) {
		
		// doBounce(3, '10px', 300);
		$('#arrow').hover(function(){
			$('#arrow').css('cursor','pointer');
		});
		$("#arrow").click(function() {
			$('#arrow').hide();
			$('html, body').animate({
				scrollTop: $("#welcome").offset().top-100
			}, 2000, function(){
				$('#arrow').show();
			});
		});


		// $('#arrow').show().animate({ top: 305 }, {duration: 1000, easing: 'easeOutBounce'});
		// alert("yo");
		// $('.nav-arrow').animate({ top: 305 }, {duration: 1000, easing: 'easeOutBounce'});
		var welcomediv = $('.welcome-content');
		var storydiv = $('.story-content');
		var proposaldiv = $('.proposal-content');
		var weddingdiv = $('.wedding-content');
		var weddingheaderdiv = $('.wedding-header');
		$(window).scroll(function(){
			if($(window).scrollTop()>1400){
				welcomediv.fadeIn("slow");
			}
			else {
				// $( ".story-content" ).animate({marginLeft: "0px"}, 500);
				welcomediv.fadeOut("fast");
			}

		});

		$(window).scroll(function(){
			if($(window).scrollTop()>1650){
				storydiv.fadeIn("slow");
				// $( ".story-content" ).fadeIn("slow").animate({marginLeft: "50px"}, 500);

				// $( ".story-content" ).animate({marginLeft: "50px"}, 500);
			}
			else {
				storydiv.fadeOut("fast");
			}
			
		});

		$(window).scroll(function(){
			if($(window).scrollTop()<2050){
				proposaldiv.fadeOut("fast");
			}
			else {
				proposaldiv.fadeIn("slow");
			}
			
		});

		$(window).scroll(function(){
			if($(window).scrollTop()<2700){
				weddingheaderdiv.fadeOut("fast");
			}
			else {
				weddingheaderdiv.fadeIn("slow");
			}
			
		});

		$(window).scroll(function(){
			if($(window).scrollTop()<2800){
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

	/*countdown*/

	var end = new Date('09/19/2015 12:01 AM');

var _second = 1000;
var _minute = _second * 60;
var _hour = _minute * 60;
var _day = _hour * 24;
var timer;

function showRemaining() {
    var now = new Date();
    var distance = end - now;
    var days = Math.floor(distance / _day);
    if (days === 0) {
        try{
            clearInterval(timer);
			document.getElementById('#countdowndays').innerHTML = "Today is the day!";
            return;
        }
        catch(err){}
    }
    if (distance > 0) {
		try{
			document.getElementById('countdowndays').innerHTML = days + " days to go!";
        }
        catch(err){}
    }

    if (distance < 0) {
        try{
            clearInterval(timer);
			document.getElementById('countdowndays').innerHTML = -days + " days married!";
            return;
        }
        catch(err){}
    }

}

timer = setInterval(showRemaining, 1000);




/* carosel*/

});

