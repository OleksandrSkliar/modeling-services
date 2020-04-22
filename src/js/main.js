jQuery(document).ready(function($) {
	var menu = $('.menu__link');
	var menu_active = $('.menu__link--active');

	menu.click(function() {
		menu.toggleClass('menu__link--active');
	});
	menu_active.click(function() {
		menu_active.removeClass('menu__link--active');
	});
});