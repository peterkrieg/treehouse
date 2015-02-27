$(document).ready(function(){

	$('.button').on('click', function(){
		$('.safe').hide().html('<p> snape kills dumbledore </p>').fadeIn(1000);
		$(this).hide();
	});






	// Image overlay part

	var $overlay = $('.sec2 .overlay');
	$overlay.hide();


	$('#imgGallery a img').on('click', function(e){
		console.log($(this).attr('alt'));
		e.preventDefault();
		$('.sec2').append($overlay);
		$overlay.slideToggle(500).addClass('visible');
		var $pic = $(this);
		$('.picture').append($pic.clone());
		$('.caption').append($(this).attr('alt'));



		if($overlay.hasClass('visible')){
			$('.close').on('click', function(){
				$overlay.slideUp(500);
				$('.picture').html('');
				$('.caption').html('');
			})
		}
	});






});