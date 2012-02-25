$(function() {
	
  	// Some simple dialog close on click function
	$('#close-dialog').click(function(e) {
		e.preventDefault();
		$('#dialog').hide();
		// If you change it to $('#dialog').toggle() the test will fail
		// $('#dialog').toggle();
	});

	$('form').submit(function(e) {
		e.preventDefault();
		
		// Regex for a valid email address
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		
		if (!filter.test($('form input#email').val())) {
			// Add error class if the mail address is wrong
			$('form input#email').addClass('error');
		} else {
			// Submit the form...or remove error class
			$('form input#email').removeClass('error');
		}
	});

});