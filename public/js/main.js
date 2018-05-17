$(document).ready(function () {

	// --------- Слайдер в шапке ----------
	var $topSlider = $('.js-top-slider');

	if ($topSlider.length) {
		$topSlider.owlCarousel({
			items: 1,
			nav: true,
			dots: false,
			navText : ["<i></i><i></i>","<i></i><i></i>"],
			onInitialized: function(e) {
				$('.js-t-counter').html('1&nbsp;&nbsp;/&nbsp;&nbsp;' + this.items().length);
				$('.owl-item.active').addClass('anim-text');
			}
		});

		// Подсчет слайдов при перелистывании
		$topSlider.on('changed.owl.carousel', function(e) {
			$('.js-t-counter').html(++e.item.index  + '&nbsp;&nbsp;/&nbsp;&nbsp;' + e.item.count);
			var current = e.item.index - 1;
			var $elCurrent = $(e.target).find(".owl-item").eq(current);
			if ($elCurrent.hasClass("anim-text")) {
				$elCurrent.removeClass('anim-text');
				$elCurrent.addClass('no-anim-text');
			}else if($elCurrent.hasClass("no-anim-text")){
			}else{
				$elCurrent.addClass('anim-text');
			}
		});

	}
});