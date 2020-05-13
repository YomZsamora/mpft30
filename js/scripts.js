$(document).ready(function(){

	$('.squads').hide();

	$('#squadsinput').on('focus', function(){
		$('.squads').show();
	});

	$('#squadsinput').on('focusout', function(){
		$('.squads').hide();
	});


	$('.hide-image').click(function(){
		$('.img-small').addClass('display-none');
	});

	$('#squadsinput').keyup(function(){
		$('.img-small').addClass('animate__animated animate__bounce');
	});




});