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
				$('.js-t-counter').html('1&nbsp;&nbsp;/&nbsp;&nbsp;' + this.items().length)
			}
		});

		// Подсчет слайдов при перелистывании
		$topSlider.on('changed.owl.carousel', function(e) {
			$('.js-t-counter').html(++e.item.index  + '&nbsp;&nbsp;/&nbsp;&nbsp;' + e.item.count)
		});
	}
});