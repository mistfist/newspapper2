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
			alert("Спасибо, Ваше сообщение отправлено!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

// Модальное окно
	$(function() {
	    // Проверяем запись в куках о посещении
	    // Если запись есть - ничего не делаем
	    //if (!$.cookie('hideModal')) {
	   // если cookie не установлено появится окно
	   // с задержкой 5 секунд
	    var delay_popup = 5000;
	    setTimeout("document.getElementById('overlay').style.display='block'", delay_popup);
	    // }
	    // Запоминаем в куках, что посетитель уже заходил
	    // $.cookie('hideModal', true, {
	    // // Время хранения cookie в днях
	    //     expires: 1,
	    //     path: '/'
	    // });
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

function initMap() {
	var uluru = {lat: 46.966404, lng: 31.989216};
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 15,
	  center: uluru,
	  disableDefaultUI: true,
	  styles: [{"elementType":"geometry","stylers":[{"color":"#242f3e"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#746855"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#242f3e"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#263c3f"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#6b9a76"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#38414e"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#212a37"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#9ca5b3"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#746855"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#1f2835"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#f3d19c"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#2f3948"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#17263c"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#515c6d"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#17263c"}]}]
  });
	var marker = new google.maps.Marker({
	  position: uluru,
	  map: map,
	  icon: 'img/map-marker.png'
  });
}