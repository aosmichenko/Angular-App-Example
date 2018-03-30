jQuery(document).ready(function ($) {

	$('.close-container-btn').on('click', function(e){
		$('.tr-main-table.open').removeClass('open');
		$('body').removeClass('no-scroll');
	    console.log('popup-close');
	});

    $('.tr-main-table').on('click', function(e){
	    if(0 === $(e.target).closest('.popup-window').length) {
		    $('.tr-main-table.open').removeClass('open');
	        $(this).addClass('open');
		    $('body').addClass('no-scroll');
		    console.log('tr');
	    }
    });

	$('.popup-container-btn-close').on('click', function(e){
		$('.popup-container.open').removeClass('open');
		$('.icon-popup-container-wrap.active').removeClass('active');
		console.log('mini-close');
	});

	$('.icon-popup-container-wrap').on('click', function(e){
		if(0 === $(e.target).closest('.popup-container').length) {
			$('.popup-container.open').removeClass('open');
			$('.icon-popup-container-wrap.active').removeClass('active');
			$(this).addClass('active');
			$(this).find('.popup-container').addClass('open');
		    console.log('mini-popup');
		}
	});

	$(document).on('click', function(e){
		if(0 === $(e.target).closest('.popup-window').length && 0 === $(e.target).closest('.tr').length) {
			$('.tr-main-table.open').removeClass('open');
			$('body').removeClass('no-scroll');
			console.log('outoftr');
		}
		if(0 === $(e.target).closest('.popup-container').length && 0 === $(e.target).closest('.icon-popup-container-wrap').length) {
			$('.popup-container.open').removeClass('open');
			$('.icon-popup-container-wrap.active').removeClass('active');
			console.log('outofmini-popup');
		}
	});

});
