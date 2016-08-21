
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

//Parallax Effect
$('.parallax-window').parallax({
	"imageSrc":"succulent.jpg",
	"iosFix":"true"
});

});
