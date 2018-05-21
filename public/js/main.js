$(document).ready(function () {

	// --------- Слайдер в шапке ----------
	var $topSlider = $('.js-top-slider');

	if ($topSlider.length) {
		$topSlider.owlCarousel({
			items: 1,
			nav: true,
			dots: false,
			thumbs: false,
			navText : ['<i></i><i></i>','<i></i><i></i>'],
			onInitialized: function(e) {
				$('.js-t-counter').html('1&nbsp;&nbsp;/&nbsp;&nbsp;' + this.items().length);
				$('.owl-item.active').addClass('anim-text');
			}
		});

		// Подсчет слайдов при перелистывании
		$topSlider.on('changed.owl.carousel', function(e) {
			$('.js-t-counter').html(++e.item.index  + '&nbsp;&nbsp;/&nbsp;&nbsp;' + e.item.count);
			var current = e.item.index - 1;
			var $elCurrent = $(e.target).find('.owl-item').eq(current);
			if ($elCurrent.hasClass('anim-text')) {
				$elCurrent.removeClass('anim-text');
				$elCurrent.addClass('no-anim-text');
			}else if($elCurrent.hasClass('no-anim-text')){
			}else{
				$elCurrent.addClass('anim-text');
			}
		});

	}

	//  --------- Слайдер 'о компании' ---------
	var $aboutSlider = $('.js-slider-about');
	if ($aboutSlider.length) {
		$('.js-slider-about').owlCarousel({
			items: 1,
			thumbs: true,
			nav: false,
			dots: false,
			thumbsPrerendered: true,
			animateOut: 'fadeOut',
		});
	}

	// --------- Слайдер 'новости' ---------
	var $newsSlider = $('.js-slider-news');
	if ($newsSlider.length) {
		$newsSlider.owlCarousel({
			items: 3,
			thumbs: false,
			nav: true,
			dots: false,
			margin: 30,
			responsive:{
				0:{
					items:1,
				},
				768:{
					items:2,
				},
				992:{
					items:3,
					nav:true,
				}
			}
		});
	}

	//  --------- Слайдер 'История' ---------
	var $historySlider = $('.js-history-slider');
	if ($historySlider.length) {
		$('.js-history-slider').owlCarousel({
			items: 1,
			thumbs: true,
			nav: false,
			dots: false,
			thumbsPrerendered: true,
		});
	}

	// --------- Плавный переход к ссылке ---------
	if ($('.js-link-move').length) {
		$('body').on('click','.js-link-move', function (event) {
			event.preventDefault();
			var id  = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top}, 1000);

			// Проверка наличия анимации
			productAnim(1);
		});
	}

	// --------- Анимация блоков продукция ---------
	function productAnim(delay){
		var $productBox = $('.js-product-list');
		if ($productBox.length) {
			if (!$productBox.hasClass('anim')) {
				$productBox.addClass('anim');

				$('.js-product-item').each(function(indx, element){
					$(this).css({'animation-delay': delay+'s', '-webkit-animation-delay': delay+'s'})
					delay = parseFloat(delay);
					delay = delay + 0.2;
					delay = delay.toFixed(1);
				});
			}
		}
	}

	// Включение анимации при скролле
	if ($('.js-product-list').length) {
		var topProduct = $('.js-product-list').offset().top;
		var topProductScroll = topProduct - $('.js-product-list').outerHeight()/2;

		$(window).scroll(function(){
			if($(this).scrollTop()>=topProductScroll){
				productAnim(0);
			}
		});
	}

	// --------- Анимация съезжающего текста ---------
	if ($('.js-moving-text').length) {
		var topMoveText = $('.js-moving-text').offset().top;
		var topMoveTextScroll = topMoveText - $(window).outerHeight();

		$(window).scroll(function(){
			if(($(this).scrollTop()>=topMoveTextScroll) && (!$('.js-moving-text').hasClass('anim'))){
				$('.js-moving-text').addClass('anim');
			}
		});
	}

	//---------- Вывод сообщения в web-форме -------------
	$('.js-form-validator').each(function(){
		$(this).on('submit',function(e){
			$(this).find('input[type="submit"]').after('<span class="alert alert-success" role="alert">Ваше сообщение успешно отправлено</span>');
			$(this)[0].reset();
			e.preventDefault();
		});
	});

	//---------- Маска для телефона -------------
	$.mask.definitions['~'] = "[+-]";
	$("#phone").mask("(999) 999-9999");

	// --------- Мобильное меню ---------
	if ($('.js-hamburger').length) {
		$('.js-hamburger').click(function() {
			$(this).toggleClass('active');
			$('.js-page').toggleClass('no-scroll');
			$('.js-header-nav').toggleClass('open');

			if ($('.js-header-nav').hasClass('open')) {
				var heightTopMenu = $('.js-top-menu').height();
				console.log(heightTopMenu);
				$('.js-header-nav').css('height', heightTopMenu);
			}else{
				$('.js-header-nav').css('height', '0');
			}
			// $('.js-top-panel-menu').slideToggle(300);
		});

		// $(document).click(function(event) {
		// 	if ($(event.target).closest(".js-top-panel-menu").length) return;
		// 	if ($(event.target).closest(".js-hamburger").length) return;
			
		// 	$('.js-hamburger').removeClass('active');
		// 	$('.js-top-panel-menu').slideUp(300);
		// 	event.stopPropagation();
		// });
	}
});