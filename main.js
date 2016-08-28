
$(document).ready(function(){

// ScrollTo Section
$('#take-me-about').click(function(){
  $.scrollTo('#all-about-me', 800);
});

$('#my-work-button').click(function(){
  $.scrollTo('#my-work-section', 800);
});

$('#take-me-project').click(function(){
  $.scrollTo('#my-work-section', 800);
});

$('#take-me-form').click(function(){
  $.scrollTo('#see-my-form', 800);
});

// Parallax Effect

var isiOS = /iPhone|iPad|iPod/i.test(navigator.userAgent)
if (isiOS){
	$(".parallax-window").css({
		"background":"url('succulent@2x.png')",
		"height":"auto",
		"position":"top center"
	});
} else {
	$('.parallax-window').parallax({imageSrc:"succulent.jpg"});

	$(".parallax-slider").removeClass("hidden");

	$(".parallax-window").attr("data-parallax", "scroll");

	$(".parallax-window").attr("data-image-src", "succulent.jpg");
}

});
