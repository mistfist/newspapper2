$(function() {


// $(window).scroll(function(){ 
//   if($(window).scrollTop()>1500){ 
//     $('.post').show() 
//   } else 
//    { $('.post').hide() };
// });

	//E-mail Ajax Send
	$("#mail-form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});


// 	$(document).ready(function() {
// 		$("#a1").animated("zoomInUp", "zoomOutDown");
// 		$("#a2").animated("zoomInUp", "zoomOutDown");
// 		$("#a3").animated("zoomInUp", "zoomOutDown");
// 		$("#a4").animated("zoomInUp", "zoomOutDown");
// 		$("#a5").animated("zoomInUp", "zoomOutDown");
// 	});
	
// 	//Animate CSS + WayPoints javaScript Plugin
// 	//Example: $(".element").animated("zoomInUp", "zoomOutDown");
// 	//Author URL: http://webdesign-master.ru
// 	(function($) {
// 		$.fn.animated = function(inEffect, outEffect) {
// 				$(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
// 						if (dir === "down") {
// 								$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
// 						};
// 				}, {
// 						offset: "90%"
// 				});
// 		};
// 	})(jQuery);
	
});
