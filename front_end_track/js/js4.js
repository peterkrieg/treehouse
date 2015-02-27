$(function() {
	$('header p').hide().fadeIn(400);
	$('section p').hide().fadeIn(800);
	$('footer p').hide().fadeIn(3000);

	$footerp = $('footer p');
	footertext = $footerp.html();
	console.log(footertext);

	$footerp.prepend(' this is cool')
	.append('what what')
	.prepend('heyooo');




	$listitem = $('section.sec1 li');

	$listitem.each(function() {
		$(this).append(' and it is a cool item ');
	});

	$listitem.on('click', function(e) {
		console.log(e.type);
		if(!$listitem.hasClass('color')){
			$listitem.addClass('color');
		}
		else{
			$listitem.removeClass('color');
		}
	});





	// Scrolling practice 

	var $window = $(window);
	var $indicator = $('.indicator')

	$window.on('scroll', function(e) {
		$('.indicator span').html($window.scrollTop());
		if ($window.scrollTop() > 145){
			$indicator.addClass('fixIt');
		}
		else{
			$indicator.removeClass('fixIt');
			}
	});



});