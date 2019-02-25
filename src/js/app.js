$(function() {


	// --------------------------------------------------------------------------
	// Disabled links
	// --------------------------------------------------------------------------

	$('a[href^="#"]').on('click', function(event) {
		// event.preventDefault();
	});

	// --------------------------------------------------------------------------
	// Svg Polyfill
	// --------------------------------------------------------------------------

	svg4everybody();

	// --------------------------------------------------------------------------
	// detectTouch
	// --------------------------------------------------------------------------
	
	var isTouch = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);


	// --------------------------------------------------------------------------
	// Header
	// --------------------------------------------------------------------------

	$('.header__nav').on('click', '.header__nav-trigger', function(event) {
		event.preventDefault();
		
		if( $('html').is('.is-nav-open') ) {
			$('html').removeClass('is-nav-open');
		} else {
			$('html').addClass('is-nav-open');
		}
	});

	$(document).on( 'click', function(event) {

		if($(event.target).closest('.header__nav').length==0) {
			$('html').removeClass('is-nav-open');
		}

	});



	$('.header__nav-menu')
		.on('click', 'li:has(.header__nav-dropdown) > .header__nav-link', function(event) {
			if ( isTouch || matchMedia('only screen and (max-width: 767px)').matches ) {
				event.preventDefault();
				$(this).closest('li').addClass('is-open');
			}
		})
		.on('click', '.header__nav-back', function(event) {
			if ( isTouch || matchMedia('only screen and (max-width: 767px)').matches ) {
				event.preventDefault();
				$(this).closest('li').removeClass('is-open');
			}
		});



	$('.header__language').on('click', '.header__language-trigger', function(event) {
		event.preventDefault();
		if( $(this).closest('.header__language').is('.is-open') ) {
			$(this).closest('.header__language').removeClass('is-open');
		} else {
			$(this).closest('.header__language').addClass('is-open');
		}
	});


	$(document).on( 'click', function(event) {

		if($(event.target).closest('.header__language').length==0) {
			$('.header__language').removeClass('is-open');
			
		}

	});



	// ------


	$('.header__innernav').on('click', '.header__innernav-trigger', function(event) {
		event.preventDefault();
		
		if( $('html').is('.is-innernav-open') ) {
			$('html').removeClass('is-innernav-open');
		} else {
			$('html').addClass('is-innernav-open');
		}
	});

	$(document).on( 'click', function(event) {

		if($(event.target).closest('.header__innernav').length==0) {
			$('html').removeClass('is-innernav-open');
		}

	});



	$('.news__themes').on('click', '.news__themes-trigger', function(event) {
		event.preventDefault();
		
		if( $('html').is('.is-themes-open') ) {
			$('html').removeClass('is-themes-open');
		} else {
			$('html').addClass('is-themes-open');
		}
	});

	$(document).on( 'click', function(event) {

		if($(event.target).closest('.news__themes').length==0) {
			$('html').removeClass('is-themes-open');
		}

	});



	$('.nav-fixed').on('click', '.nav-fixed__trigger', function(event) {
		event.preventDefault();
		
		if( $('html').is('.is-nav-fixed-open') ) {
			$('html').removeClass('is-nav-fixed-open');
		} else {
			$('html').addClass('is-nav-fixed-open');
		}
	});



	// -------

	$('.js-video').on('click', function(event) {
		event.preventDefault();
		var icon  =  $(this).find('[class^="icon-"]'),
			img   =  $(this).find('img'),
			videoWidth = img.width(),
			videoHeight = img.height(),
			video = '<iframe width="' + videoWidth + '" height="' + videoHeight + '" src="'+ $(this).attr('data-video') +'" frameborder="0"></iframe>';


        img.replaceWith(video);
        icon.hide();

	});


	// --------------------------------------------------------------------------
	// Footer
	// --------------------------------------------------------------------------

	$('.footer__partners').on('click', '.footer__partners-btn', function(event) {
		event.preventDefault();
		if( $('html').is('.is-partners-open') ) {
			$('html').removeClass('is-partners-open');
		} else {
			$('html').addClass('is-partners-open');
		}
	});


	// --------------------------------------------------------------------------
	// Slides
	// --------------------------------------------------------------------------

	var slickPrev = '<button class="slick-arrow slick-prev"><svg class="icon-prev"><use xlink:href="sprites/sprite.svg#icon-prev"></use></svg></button>',
      	slickNext = '<button class="slick-arrow slick-next"><svg class="icon-next"><use xlink:href="sprites/sprite.svg#icon-next"></use></svg></button>';


    $('.js-slick-hero').on('init beforeChange', function(event, slick, currentSlide, nextSlide){
    	
    	var index = nextSlide || 0;

    	// Reset
		$('.slick-dot__progress').stop(true, true).css({ width: 0 });

		// Start
		$('.js-slick-hero').find('.slick-dot').eq(index).find('.slick-dot__progress').animate({'width': '100%'}, 5000, function(){
			$('.js-slick-hero').slick('slickNext');
		});

	});

	$('.js-slick-hero').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: true,
		infinite: true,
		nextArrow: slickNext,
	   	prevArrow: slickPrev,
	   	autoplay: false,
	   	autoplaySpeed: 3000,
	   	pauseOnHover: false,
	   	pauseOnFocus: false,
	   	speed: 2000,
	   	responsive: [
	   		{
	   			breakpoint: 992,
	   			settings: {
	   				dots: true,
	   				arrows: false
	   			}
	   		}
	   	],
	   	customPaging : function(slider, i) {
	        return '<button class="slick-dot"><span class="slick-dot__progress"></span></button>';
	    },
	});


	// -----


	$('.js-slick-catalog').slick({
		slidesToShow: 1,
		slidesToScroll: 1,

		rows: 3,
		slidesPerRow: 2,

		arrows: false,
		dots: true,
		fade: false,
		infinite: false,
	   	autoplay: false,
	   	autoplaySpeed: 5000,
	   	pauseOnHover: true,
	   	responsive: [
	   		{
	   			breakpoint: 992,
	   			settings: {
	   				rows: 1,
	   				slidesPerRow: 1,
	   				slidesToShow: 2,
					slidesToScroll: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		},
	   		{
	   			breakpoint: 576,
	   			settings: {
	   				rows: 1,
	   				slidesPerRow: 1,
	   				slidesToShow: 1,
					slidesToScroll: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		}
	   	]
	});


	$('.js-slick-products').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
		infinite: true,
		nextArrow: slickNext,
	   	prevArrow: slickPrev,
	   	autoplay: true,
	   	autoplaySpeed: 5000,
	   	pauseOnHover: true,
	   	responsive: [
	   		{
	   			breakpoint: 992,
	   			settings: {
	   				slidesToShow: 2,
	   				dots: true,
	   				arrows: false
	   			}
	   		},
	   		{
	   			breakpoint: 576,
	   			settings: {
	   				slidesToShow: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		}
	   	]
	});


	$('.js-slick-info').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
		infinite: false,
		nextArrow: slickNext,
	   	prevArrow: slickPrev,
	   	autoplay: true,
	   	autoplaySpeed: 5000,
	   	pauseOnHover: true,
	   	responsive: [
	   		{
	   			breakpoint: 768,
	   			settings: {
	   				slidesToShow: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		}
	   	]
	});



	$('.js-slick-collection').on('init afterChange', function(event, slick, currentSlide, nextSlide){
		$('[data-color]').removeClass('is-active').eq(slick.currentSlide).addClass('is-active');
    });

	$('.js-slick-collection').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: true,
		infinite: false,
		nextArrow: slickNext,
	   	prevArrow: slickPrev,
	   	autoplay: false
	});

	$('[data-color]').on('click', function(event) {
		event.preventDefault();

	 	var dataIndex = $(this).index();

	    $('[data-color]').removeClass('is-active').eq(dataIndex).addClass('is-active');
	    $('.js-slick-collection').slick('slickGoTo', dataIndex);

	});


	$('.js-slick-services').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
		infinite: true,
		nextArrow: slickNext,
	   	prevArrow: slickPrev,
	   	autoplay: true,
	   	autoplaySpeed: 5000,
	   	pauseOnHover: true,
	   	responsive: [
	   		{
	   			breakpoint: 992,
	   			settings: {
	   				slidesToShow: 3,
	   				dots: true,
	   				arrows: false
	   			}
	   		},
	   		{
	   			breakpoint: 768,
	   			settings: {
	   				slidesToShow: 2,
	   				dots: true,
	   				arrows: false
	   			}
	   		},
	   		{
	   			breakpoint: 576,
	   			settings: {
	   				slidesToShow: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		}
	   	]
	});


	

	$('.js-slick-gallery').slick({
		slidesToShow: 1,
		slidesToScroll: 1,

		rows: 2,
		slidesPerRow: 4,

		arrows: false,
		dots: true,
		fade: false,
		infinite: false,
	   	autoplay: false,
	   	autoplaySpeed: 5000,
	   	pauseOnHover: true,
	   	responsive: [
	   		{
	   			breakpoint: 992,
	   			settings: {
	   				rows: 1,
	   				slidesPerRow: 1,
	   				slidesToShow: 3,
					slidesToScroll: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		},
	   		{
	   			breakpoint: 768,
	   			settings: {
	   				rows: 1,
	   				slidesPerRow: 1,
	   				slidesToShow: 2,
					slidesToScroll: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		},
	   		{
	   			breakpoint: 576,
	   			settings: {
	   				rows: 1,
	   				slidesPerRow: 1,
	   				slidesToShow: 1,
					slidesToScroll: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		}
	   	]
	});



	$('.js-slick-reviews').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
		infinite: true,
		nextArrow: slickNext,
	   	prevArrow: slickPrev,
	   	autoplay: false,
	   	adaptiveHeight: true
	});


	
	$('.js-slick-video').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
		infinite: true,
		nextArrow: slickNext,
	   	prevArrow: slickPrev,
	   	autoplay: true,
	   	autoplaySpeed: 5000,
	   	pauseOnHover: true,
	   	responsive: [
	   		{
	   			breakpoint: 992,
	   			settings: {
	   				slidesToShow: 2,
	   				dots: true,
	   				arrows: false
	   			}
	   		},
	   		{
	   			breakpoint: 576,
	   			settings: {
	   				slidesToShow: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		}
	   	]
	});




	$('.js-slick-banners').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		fade: false,
		infinite: true,
		nextArrow: slickNext,
	   	prevArrow: slickPrev,
	   	autoplay: false,
	   	autoplaySpeed: 5000,
	   	pauseOnHover: true,
	   	centerMode: true,
	   	centerPadding: 0,
	   	responsive: [
	   		{
	   			breakpoint: 992,
	   			settings: {
	   				dots: true,
	   				arrows: false
	   			}
	   		}
	   	]
	});



	$('.js-slick-other').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
		infinite: true,
		nextArrow: slickNext,
	   	prevArrow: slickPrev,
	   	autoplay: false,
	   	autoplaySpeed: 5000,
	   	pauseOnHover: true,
	   	responsive: [
	   		{
	   			breakpoint: 992,
	   			settings: {
	   				slidesToShow: 2,
	   				dots: true,
	   				arrows: false
	   			}
	   		},
	   		{
	   			breakpoint: 576,
	   			settings: {
	   				slidesToShow: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		}
	   	]
	});


	$('.js-slick-fromto').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
		infinite: true,
		nextArrow: slickNext,
	   	prevArrow: slickPrev,
	   	autoplay: false,
	   	autoplaySpeed: 5000,
	   	pauseOnHover: true,
	   	responsive: [
	   		{
	   			breakpoint: 576,
	   			settings: {
	   				slidesToShow: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		}
	   	]
	});


	$('.js-slick-read').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,
		infinite: true,
		nextArrow: slickNext,
	   	prevArrow: slickPrev,
	   	autoplay: false,
	   	autoplaySpeed: 5000,
	   	pauseOnHover: true,
	   	responsive: [
	   		{
	   			breakpoint: 992,
	   			settings: {
	   				slidesToShow: 2,
	   				dots: true,
	   				arrows: false
	   			}
	   		},
	   		{
	   			breakpoint: 576,
	   			settings: {
	   				slidesToShow: 1,
	   				dots: true,
	   				arrows: false
	   			}
	   		}
	   	]
	});

	// --------------------------------------------------------------------------
	// Fancybox
	// --------------------------------------------------------------------------

	$('[data-fancybox]').fancybox({
		infobar : false,
		toolbar : false,
		touch : false,
		transitionEffect : 'slide',
	    afterShow: function(instance, current) {

	    }
	});


	$('[data-fancybox="gallery"]').fancybox({
		infobar : true,
		toolbar : true,
		transitionEffect : 'slide',
		buttons: [
			"close"
		]
	});


	// --------------------------------------------------------------------------
	// Isotope
	// --------------------------------------------------------------------------


	if ( $('.js-isotope').length ) {

		$(window).on('load', function(event) {
			

			var isotope = new Isotope( '.js-isotope', {
				layoutMode: 'masonry',
				// getSortData: {
				// 	director: '.is-director',
				// 	manager:  '.is-manager',
				// 	designer: '.is-designer',
				// 	booker:   '.is-booker',
				// 	printer:  '.is-printer',
				// 	logistic: '.is-logist',
				// 	admin:    '.is-admin',
				// 	leader:   '.is-leader',
				// 	text:     '.is-text'
				// },
				// filter: '*'
			});

		});

	}

	// --------------------------------------------------------------------------
	// Forms
	// --------------------------------------------------------------------------

	$('select, input[type="number"]').styler({
		selectSearch: false,
		selectSmartPositioning: false
	});


	$('input[type="number"]').on('keyup blur', function() {

	    var maxlength = $(this).attr('maxlength');
	    var val = $(this).val();

	    if (val.length > maxlength) {
	        $(this).val(val.slice(0, maxlength));
	    }

	});


	function Plurize(number, one, two, five) {
		var n = Math.abs(number);
		n %= 100;
		if (n >= 5 && n <= 20) {
		return five;
		}
		n %= 10;
		if (n === 1) {
		return one;
		}
		if (n >= 2 && n <= 4) {
		return two;
		}
		return five;
	};


	function FormatPrice(n) {
		return (n + "").split("").reverse().join("").replace(/(\d{3})/g, "$1 ").split("").reverse().join("").replace(/^ /, "");
	}


	$('.js-calc-input').on('change', function(event) {



		var area    = $(this).val(),
			count   = $(this).data('count'),
			price   = $(this).data('price'),

			
			calculateArea  = area,
			calculateCount = Math.ceil(area / count),
			calculatePrice = FormatPrice(price * calculateCount),

			text    = Plurize(calculateCount, 'упаковка', 'упаковки', 'упаковок');



			$('.js-calc-total').html(calculatePrice + ' ₽ <small>' + calculateArea + ' м² = ' + calculateCount + ' ' + text + '</small>');

			console.log( calculatePrice )


			return false;


	});
	


	// --------------------------------------------------------------------------
	// Tabs
	// --------------------------------------------------------------------------

	$('[data-type-btn]').on('click', function(event) {
		event.preventDefault();
		
		var selected = $(this).data('type-btn');

		$('[data-type-btn]').removeClass('is-active');

		$(this).addClass('is-active');

		$('[data-type]').removeClass('is-hidden').siblings().not('[data-type='+ selected +']').addClass('is-hidden');

		console.log(selected);

	});



	function firstUseItem() {

		var $useItem = $('.use__grid > .row > [class^="col-"]:first-of-type').find('.use__item');


		if (window.matchMedia("(min-width:768px)").matches) {
			$useItem.addClass('is-open')
			$useItem.find('.use__item-control .btn').text('Скрыть');
			$useItem.find('.use__item-content').slideDown('fast');
		}

	}

	firstUseItem();


	$('.use__item').on('click', '.use__item-control .btn', function(event) {
		event.preventDefault();

		if ( $(this).closest('.use__item').is('.is-open') ) {

			$(this).closest('.use__item').find('.use__item-control .btn').text('Подробнее')
			$(this).closest('.use__item').removeClass('is-open').find('.use__item-content').slideUp('fast');

		} else {

			$('.use__item-control .btn').text('Подробнее');
			$('.use__item').removeClass('is-open').find('.use__item-content').slideUp('fast');

			$(this).closest('.use__item').find('.use__item-control .btn').text('Скрыть');
			$(this).closest('.use__item').addClass('is-open').find('.use__item-content').slideDown('fast');

		}

	});



	$('.use__item-equal').matchHeight({
		byRow: true,
	    property: 'min-height',
	    target: null,
	    remove: false
	});


	// --------------------------------------------------------------------------
	// Autocomplete
	// --------------------------------------------------------------------------


	var data = {
		// url: 'json/autocomplete.json',
		// url: 'http://shinglas.ru/location/autocomplete',

		url: function(phrase) {
			return "http://shinglas.ru/location/autocomplete?q=" + phrase;
		},
		
		listLocation: 'data',
		getValue: 'label',

		list: {	
		    match: {
		      enabled: true
		    }
		},

	};

	$('.js-autocomplete').easyAutocomplete(data);


	// --------------------------------------------------------------------------
	// Phone
	// --------------------------------------------------------------------------

	$('input[type=tel]').inputmask({"mask": "+7 (999) 999-99-99", showMaskOnFocus: true, showMaskOnHover: false });

	// --------------------------------------------------------------------------
	// Validate
	// --------------------------------------------------------------------------

	$.validator.addMethod("regexp", function (value, element) {
	    return this.optional(element) || /^\+\d \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(value);
	});

	var validateErrorPlacement = function(error, element) {
		error.addClass('ui-validate');
		error.appendTo(element.closest('.ui-field'));
	}

	var validateHighlight = function(element) {
		$(element)
			.parent().addClass("is-error").removeClass('is-success')
			// .append('<svg class="icon-error"><use xlink:href="sprites/sprite.svg#icon-error"></use></svg>')
			// .find('.icon-valid').remove();
	}
	var validateUnhighlight = function(element) {
		$(element)
			.parent().addClass('is-success').removeClass("is-error")
			// .append('<svg class="icon-valid"><use xlink:href="sprites/sprite.svg#icon-valid"></use></svg>')
			// .find('.icon-error').remove();
	}



	$('.js-validate').each(function (index, value) { 

		$(this).validate({
			errorElement: "span",
			ignore: ":disabled,:hidden",
			highlight: validateHighlight,
    		unhighlight: validateUnhighlight,
			rules: {
				firstname: "required",
				tel: {
	                required: true,
	                regexp: true
				},
				email: {
					required: true,
      				email: true
				},
				message: "required",
				city: "required",
				index: "required",
				address: "required",
				password: "required",
			    passwordconfirm: {
			    	required: true,
			    	equalTo: "#password"
			    },
			    confirm: "required"

			},
			messages: {
				firstname: 'Вы не ввели имя',
				tel: 'Вы не ввели номер телефона',
				email: 'Введите email',
				message: 'Введите сообщение',
				password: 'Введите пароль',
				passwordconfirm: {
					required: 'Повторите пароль',
					equalTo: 'Пароли не совпадают'
				},
				confirm: 'Подтвердите условия'
			},
			errorPlacement: validateErrorPlacement,
			submitHandler: function(form) {

				$(form).addClass('is-success');


				setTimeout(function() {

					$(form).removeClass('is-success');

				}, 2000);

				// $.ajax({
				// 	type: "POST",
				// 	url: 'phpmailer/send.php',
				// 	data: $(form).serialize(),
				// 	success: function(form) {


				// 	},
				// 	error: function(form) {



				// 	}
				// });


				event.preventDefault();


			}
		});

	});




	// Claim


	// ------ Map


	var _document = $(document);

	function initMaps() {

        if ($("#geomap").length > 0) {
            ymaps.ready(init);
        }

        var myMap, dynamicPlacemark, hasPlacemark = false;

        function init() {
            myMap = new ymaps.Map("geomap", {
                center: [55.753215, 37.622504],
                zoom: 10
            });

            myMap.behaviors.disable('scrollZoom'); 

            myMap.controls.remove('trafficControl');
            myMap.controls.remove('searchControl');
            myMap.controls.remove('fullscreenControl');
            myMap.controls.remove('rulerControl');
            // myMap.controls.remove('geolocationControl');
            myMap.controls.remove('routeEditor');
            myMap.controls.remove('typeSelector');
            // myMap.controls.remove('zoomControl');

            // click
            myMap.events.add('click', function (e) {

                var coords = e.get('coords');

                ymaps.geocode(coords).then(function (res) {
                    // get name
                    var newObj = res.geoObjects.get(0);
                    var newObjName = newObj.properties.get('name');

                    $('[js-set-placemark]').val(newObjName);
                    $('[js-set-placemark]').keydown();
                });

            });


            // suggestons
            var suggestInput = $('[js-map-suggestions]').get(0);
            var suggestView = new ymaps.SuggestView(suggestInput,{
              // options
              offset: [-1, 5]
            });
            // trigger update
            suggestView.events.add('select', function (event) {
              $('[js-set-placemark]').keydown();
            });

        }

        // input lister
        _document.
            on('keydown', '[js-set-placemark]', debounce(function(e){
                var currentVal = $(this).val();

                // gecoder
                ymaps.geocode(currentVal, { results: 1 }).then(function (res) {
                    var geoObj = res.geoObjects.get(0),
                        geoObjCoords = geoObj.geometry.getCoordinates();

                    if ( geoObjCoords ){
                        // attach or update position
                        if ( !hasPlacemark ){
                            // add placemark
                            dynamicPlacemark = new ymaps.Placemark(geoObjCoords, {
                                balloonContent: currentVal
                            }, {
                                draggable: true,
                                preset: 'islands#icon',
                                iconColor: '#E30613'
                            });
                            myMap.geoObjects.add(dynamicPlacemark);
                            hasPlacemark = true;
                            attachReverseGeocode(); // because bindings for placemark is ready only at this point
                        } else{
                            dynamicPlacemark.geometry.setCoordinates(geoObjCoords);
                        }
                        // set center
                        myMap.setCenter(geoObjCoords, 14);
                        setLatLongInputs(geoObjCoords);
                    }

                }, function (err) {
                    console.log(err);
                });
            }, 1000));

        // search by lat, long
        _document.
          on('keydown', '[js-set-lat], [js-set-long]', debounce(function(e){
              var latVal = $('[js-set-lat]').val();
              var longVal = $('[js-set-long]').val();
              function isLatitude(lat) {return lat.length > 3 && isFinite(lat) && Math.abs(lat) <= 90;}
              function isLongitude(lng) {return lng.length > 3 && isFinite(lng) && Math.abs(lng) <= 180;}

              if ( isLatitude(latVal) && isLongitude(longVal) ){
                // geocode from pos
                ymaps.geocode([latVal, longVal]).then(function (res) {
                    var newObj = res.geoObjects.get(0);
                    var newObjName = newObj.properties.get('name');

                    $('[js-set-placemark]').val(newObjName);
                    $('[js-set-placemark]').keydown();
                });
              }

          }, 1000));

        function attachReverseGeocode() {
            // reverse geocoding
            dynamicPlacemark.events.add("dragend", function (e) {
                var newPos = dynamicPlacemark.geometry.getCoordinates();

                ymaps.geocode(newPos).then(function (res) {
                    // set name in input
                    var newObj = res.geoObjects.get(0);
                    var newObjName = newObj.properties.get('name');

                    $('[js-set-placemark]').val(newObjName);
                    setLatLongInputs(newPos);
                    // myMap.setCenter(newPos, 14);
                });
            }, dynamicPlacemark);
        }

        function setLatLongInputs(data){
          $('[js-set-lat]').val(data[0]);
          $('[js-set-long]').val(data[1]);
        }
    }

    initMaps();

});


