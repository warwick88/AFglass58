
// Adding Smooth Scrolling to the website on nav a links
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;
	  
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){
   
        // Adds hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
  
// Closes responsive menu when a scroll trigger link is clicked
$('.js-scroll-trigger').click(function() {
	$('.navbar-collapse').collapse('hide');
});





  
  

  
