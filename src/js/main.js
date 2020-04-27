jQuery(document).ready(function ($) {
	var menu = $('.menu__link');
	var menu_active = $('.menu__link--active');

	menu.click(function () {
		menu.toggleClass('menu__link--active');
	});
	menu_active.click(function () {
		menu_active.removeClass('menu__link--active');
	});

	// Валидация формы
	function validateFormHero(form) {
		$(form).validate({
			errorClass: "invalid",
			errorElement: "div",
			rules: {
				// simple rule, converted to {required:true}
				userName: {
					required: true,
					minlength: 2,
					maxlength: 15
				},
				userPhone: {
					required: true,
					minlength: 17
				},
				// compound rule
				userEmail: {
					required: true,
					email: true
				}
			},
			messages: {
				userName: {
					required: "Заполните поле Имя",
					minlength: "Слишком короткое имя",
					maxlength: "Имя не должно превышать 15 символов"
				},
				userPhone: {
					required: "Заполните поле Телефон",
					minlength: "Некорректно введен номер"
				},
				userEmail: {
					required: "Заполните поле Email",
					email: "Формат name@domain.com"
				}
			},
			submitHandler: function (form) {
				$.ajax({
					type: "POST",
					url: "send.php",
					data: $(form).serialize(),
					success: function (response) {
						console.log('Ajax сработал. Oтвет сервера: ' + response);
						alert('Форма отправлена, мы свяжимся с вами в течение 15 минут');
						$(form)[0].reset();
						$(form).find('input').val("");
					},
					error: function (response) {
						console.error('Ошибка запроса' + response);
					}
				});
			}
		});
	}
	validateFormHero('.hero__form');
	// validateFormControl('.control__form');

	// Маска для телефона
	$('[type=tel]').mask('+380 (00) 000-00-00', {
		placeholder: "Номер телефона"
	});

	// Cкрол вниз
	$('a[href*="#"]').on('click', function (e) {
		e.preventDefault();

		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top
		}, 500, 'linear');
	});


});