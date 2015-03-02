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






	// Mobile Navigatoin Menu Part


	var $link = $('.navbar a');
	var $select = $('.navbar select');
	$link.each(function(){
		var href = $(this).attr('href');
		var text = $(this).text();
		$select.append('<option value="' + text + '">' + text + '</option>');
	})



	// Password Confirmation Part

	var $input = $('.index7 input');
	$input.each(function(){
		$(this).next().append('<span class="pwhint"> Password Must be 8 character or more </span>')
		$('.pwhint').hide();
		$(this).on('focus', function(){
			$(this).next().children().fadeIn(500);
		$(this).on('blur', function(){
			$(this).next().children().fadeOut(300);
		})
		})
	})

	var $pw = $('.index7 input.password');
	var $pw2 = $('.index7 input.password2');

	$pw.on('keydown', function(e){
		if($pw.val().length + 1 > 8){
			$(this).next().children().fadeOut(200);
		}
		else{
				$(this).next().children().fadeIn(200);
			}
	})

	$pw2.keydown(function(e){
		console.log($pw.val());
		console.log($pw2.val());
		if($pw.val() === $pw2.val()){
			$(this).next().children().text('passwords match!!');
		}
		else{
			$(this).next().children().text("they don't match");
		}
	})



// Drawing app part

var $color = $('.index8 ul div');

$color.each(function(){
	$(this).css('background', $(this).attr('class'));
})





















































});