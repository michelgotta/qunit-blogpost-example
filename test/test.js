// On DOM Ready
$q(function() {
	// fire event when iframe is ready 
	$q('#testframe').load(function() {
		// Get the jQuery Object from the original code  
		$ = window.frames[0].jQuery;

		test('check if dialog closes', 3, function() {  
			// On start this is visible  
			ok($('#dialog').is(':visible'), 'Should be visible');  
			// Simulate a click  
			$('#close-dialog').click();  
			// Now #dialog should be hidden...  
			ok(!$('#dialog').is(':visible'), 'Should be hidden...');  
			// Click again  
			$('#close-dialog').click();  
			// #dialog should still be hidden...  
			ok(!$('#dialog').is(':visible'), 'Should STILL be hidden.');  
		});

		test('check if form throws error on email validation', function() {  
			// Write some invalid values to the email field  
			$('form input#email').val('somewrong.email.com');  
			// submit the form  
			$('form').submit();  
			// check if the input field gets an error  
			ok($('input#email').hasClass('error'), 'With a wrong mail address it should have an error after the submit');
		
			// Write some invalid values to the email field  
			$('form input#email').val('someright@email.com');  
			// submit the form  
			$('form').submit();  
			// check if the input field gets an error  
			ok(!$('input#email').hasClass('error'), 'With a right mail address it souldn\'t have an error');
		
		});
		
	});
});
