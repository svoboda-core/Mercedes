$(function(){
	$('.desing-slider').slick({
		dots: false,
		slidesToShow: 4,
		variableWidth: true,
		prevArrow: '<img class="arrow arrow-left" src="images/arrow-2.svg" alt="">',
		nextArrow: '<img class="arrow arrow-right" src="images/arrow-1.svg" alt="">',
		responsive: [
			{
				breakpoint: 361,
				settings: {
					slidesToShow: 1,
					variableWidth: false,
				
				}
			},]
	});
});