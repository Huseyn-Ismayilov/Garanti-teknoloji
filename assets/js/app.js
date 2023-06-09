$(document).ready(function () {
	var lastScroll = 0;

	jQuery(document).ready(function ($) {
		$(window).scroll(function () {
			setTimeout(function () {
				var scroll = $(window).scrollTop();
				if (scroll > lastScroll) {
					$(".site_header").addClass("scroll_down");
				} else if (scroll < lastScroll) {
					$(".site_header").removeClass("scroll_down");
				}
				lastScroll = scroll;
			}, 100);
		});
	});
});

// end

$('.site_header .menu_btn, .mobile_menu .close_btn').click(function () {
	$('.mobile_menu').toggleClass('opened');
	$('.nav_menu').toggleClass('opened');
});

$('.mobile_menu .menu .dropdown .nav_link').click(function (e) {
	$(this).next().toggleClass('opened');
	return false;
});
$('.mobile_menu .menu .back_btn').click(function (e) {
	$(this).parent().removeClass('opened');
});

// end


// end
if ($(window).width() < 991) {
	$(document).click(function (event) {
		if (!$(event.target).closest(".site_header .menu_btn, .mobile_menu .inner").length) {
			$("body").find(".mobile_menu .inner").parent().removeClass("opened");
			$('.site_header .menu_btn').removeClass('opened');
		}
	});
}

if ($(window).width() < 991) {
	$('.site_footer .menu .title').click(function () {
		$(this).parent().find('ul').slideToggle()
		$(this).toggleClass('opened');
		return false;
	});
}





// var swiper = new Swiper(".equipments .slider", {
// 	slidesPerView: 2,
// 	spaceBetween: 16,
// 	breakpoints: {
// 		1024: {
// 			slidesPerView: 3,
// 			spaceBetween: 16,
// 		},
// 	},
// });

$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

$('#tabs-nav li').click(function () {
	$('#tabs-nav li').removeClass('active');
	$(this).addClass('active');
	$('.tab-content').hide();

	var activeTab = $(this).find('a').attr('href');
	$(activeTab).fadeIn();
	return false;
});




var swiper = new Swiper(".hero .slider_nav", {
	spaceBetween: 10,
	slidesPerView: 4,
});

var swiper2 = new Swiper(".hero .hero_slider", {
	slidesPerView: 1,
	spaceBetween: 10,
	navigation: {
		nextEl: ".next_arrow",
		prevEl: ".prev_arrow",
	},
	thumbs: {
		swiper: swiper,
	},
});





var discounted_products = new Swiper(".discounted_products .slider", {
	spaceBetween: 10,
	slidesPerView: 1.4,
	breakpoints: {
		991: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		
	},
	navigation: {
		nextEl: ".discounted_products .next_arrow",
		prevEl: ".discounted_products .prev_arrow",
	},

});

var featured_products = new Swiper(".featured_products .slider", {
	spaceBetween: 10,
	slidesPerView: 1.4,
	breakpoints: {
		991: {
			slidesPerView: 4,
			spaceBetween: 40,
		},
		
	},
	navigation: {
		nextEl: ".featured_products .next_arrow",
		prevEl: ".featured_products .prev_arrow",
	},

});
var blog_slider = new Swiper(".blog_slider .slider", {
	spaceBetween: 10,
	slidesPerView: 1.4,
	breakpoints: {
		991: {
			slidesPerView: 4,
			spaceBetween: 32,
		},
		
	},
	navigation: {
		nextEl: ".blog_slider .next_arrow",
		prevEl: ".blog_slider .prev_arrow",
	},

});
var yb_channel = new Swiper(".yb_channel .slider", {
	spaceBetween: 10,
	slidesPerView: 1.4,
	breakpoints: {
		991: {
			slidesPerView: 4,
			spaceBetween: 32,
		},
	},
	navigation: {
		nextEl: ".yb_channel .next_arrow",
		prevEl: ".yb_channel .prev_arrow",
	},

});

$('select').each(function () {
	var $this = $(this), numberOfOptions = $(this).children('option').length;

	$this.addClass('select-hidden');
	$this.wrap('<div class="select"></div>');
	$this.after('<div class="select-styled"></div>');

	var $styledSelect = $this.next('div.select-styled');
	$styledSelect.text($this.children('option').eq(0).text());

	var $list = $('<ul />', {
		'class': 'select-options'
	}).insertAfter($styledSelect);

	for (var i = 0; i < numberOfOptions; i++) {
		$('<li />', {
			text: $this.children('option').eq(i).text(),
			rel: $this.children('option').eq(i).val()
		}).appendTo($list);
		//if ($this.children('option').eq(i).is(':selected')){
		//  $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
		//}
	}

	var $listItems = $list.children('li');

	$styledSelect.click(function (e) {
		e.stopPropagation();
		$('div.select-styled.active').not(this).each(function () {
			$(this).removeClass('active').next('ul.select-options').removeClass('active')
		});
		$(this).toggleClass('active').next('ul.select-options').toggleClass('active')
	});

	$listItems.click(function (e) {
		e.stopPropagation();
		$styledSelect.text($(this).text()).removeClass('active');
		$this.val($(this).attr('rel'));
		$list.removeClass('active');
		//console.log($this.val());
	});

	$(document).click(function () {
		$styledSelect.removeClass('active');
		$list.removeClass('active');
	});

});



var brands = new Swiper(".brands .slider", {
	spaceBetween: 20,
	slidesPerView: 1.5,
	freeMode: true,
	breakpoints: {
		991: {
			slidesPerView: 6,
			spaceBetween: 40,
		},
	},
	navigation: {
		nextEl: ".brands .next_arrow",
		prevEl: ".brands .prev_arrow",
	},

});

var nav_slider = new Swiper(".single_product .nav_slider", {
	spaceBetween: 12,
	slidesPerView: 4,
	direction: "horizontal",
	breakpoints: {
		576: {
			direction: "vertical",
			spaceBetween: 24,
			slidesPerView: 5,
		},
	},
});

var main_slider = new Swiper(".single_product .main_slider", {
	slidesPerView: 1,
	navigation: {
		nextEl: ".next_arrow",
		prevEl: ".prev_arrow",
	},
	thumbs: {
		swiper: nav_slider,
	},
});


$('.accardion_block').click(function () {
	$(this).find('.block_head').toggleClass('opened');
	$(this).find('.block_body').slideToggle();
});