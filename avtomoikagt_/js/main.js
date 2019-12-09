(function ($) {
    "use strict";

	/*==============================================[ Load page ]==*/
	
		$(".animsition").animsition({
			inClass: 'fade-in',
			outClass: 'fade-out',
			inDuration: 1500,
			outDuration: 800,
			linkElement: '.animsition-link',
		    // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
		    loading: true,
		    loadingParentElement: 'html', //animsition wrapper element
		    loadingClass: 'animsition-loading',
		    loadingInner: '', // e.g '<img src="loading.svg" />'
		    timeout: false,
		    timeoutCountdown: 5000,
		    onLoadEvent: true,
		    browser: [ 'animation-duration', '-webkit-animation-duration'],
		    // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser.
		    // The default setting is to disable the "animsition" in a browser that does not support "animation-duration".
		    overlay : false,
		    overlayClass : 'animsition-overlay-slide',
		    overlayParentElement : 'html',
		    transition: function(url){ window.location.href = url; }
		});
	

	/*==============================================[ Check checkbox checkout page ]==*/
	$('#different-address').on('click',function(){
		if($('#different-address').is(":checked")){
			$('.wrap-input-different-address').slideDown();
		}
		else $('.wrap-input-different-address').slideUp();
	})


	/*==============================================[ Select2 & Daterangepicker ]==*/
	$(".chose-people").select2();
	$(".chose-time").select2();
	$(".chose-sort").select2({
		minimumResultsForSearch: Infinity
	});

	$('.my-calendar').daterangepicker({
		"singleDatePicker": true,
		"showDropdowns": true,
	});


	/*==============================================[ back to top ]==*/
	var windowH = $(window).height()/2;

	$(window).on('scroll',function(){
		if ($(this).scrollTop() > windowH) {
			$("#myBtn").css('display','flex');
		} else {
			$("#myBtn").css('display','none');
		}
	});

	$('#myBtn').on("click", function(){
		$('html, body').animate({scrollTop: 0}, 300);
	});




	/*==============================================[ Show side menu ]==*/
	

	$('.show-side-menu').on('click',function(){
		$('.restyle-home-outgrid .wrap-vertcal-menu').css('right','0px');
	});

	$('.hide-side-menu').on('click',function(){
		$('.restyle-home-outgrid .wrap-vertcal-menu').css('right','-16%');
	});



	/*==============================================[ dropdown menu ]==*/
	$('.btn-show-menu-mobile').on('click', function(){
		$(this).toggleClass('is-active');
		$('.wrap-side-menu').slideToggle();
	});

	var arrowMainMenu = $('.arrow-main-menu');

	for(var i=0; i<arrowMainMenu.length; i++){
		$(arrowMainMenu[i]).on('click', function(){
			$(this).next('.sub-menu').slideToggle();
			$(this).toggleClass('turn-arrow');
		})
	}

	$(window).resize(function(){
		if($(window).width() >= 1100){
			if($('.wrap-side-menu').css('display') == 'block'){
				$('.wrap-side-menu').css('display','none');
				$('.btn-show-menu-mobile').toggleClass('is-active');
			}
			if($('.sub-menu').css('display') == 'block'){
				$('.sub-menu').css('display','none');
				$('.arrow-main-menu').removeClass('turn-arrow');
			}
		}
	});

})
(jQuery);