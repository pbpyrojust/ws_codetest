$(document).ready(function(){
	$('.home').click(function(){
		$(this).addClass('active');
		$('.about,.take').removeClass('active');
		$('h2').text("Welcome home. I hope you enjoy your stay!");
	});
	$('.about').click(function(){
		$(this).addClass('active');
		$('.home,.take').removeClass('active');
		$('h2').text("Welcome to about us. I hop you find what you're looking for!");
	});
	$('.take').click(function(){
		$(this).addClass('active');
		$('.home,.about').removeClass('active');
		$('h2').text("Welcome to the WSI mark up challenge. Good luck!");
	});
});