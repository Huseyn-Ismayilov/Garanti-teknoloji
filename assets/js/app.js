
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
$('.tab-content:first').show();

$('#tabs-nav li').click(function () {
	$('#tabs-nav li').removeClass('active');
	$(this).addClass('active');
	$('.tab-content').hide();

	var activeTab = $(this).find('a').attr('href');
	$(activeTab).fadeIn();
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


$('.add').click(function () {
	var th = $(this).closest('.quantity_wrap').find('.count');
	th.val(+th.val() + 1);
});
$('.sub').click(function () {
	var th = $(this).closest('.quantity_wrap').find('.count');
	if (th.val() > 1) th.val(+th.val() - 1);
});



var brands = new Swiper(".similar_products .slider", {
	spaceBetween: 20,
	slidesPerView: 1.5,
	freeMode: true,
	breakpoints: {
		991: {
			slidesPerView: 2,
			spaceBetween: 40,
			freeMode: false,
		},
	},
	navigation: {
		nextEl: ".similar_products .next_arrow",
		prevEl: ".similar_products .prev_arrow",
	},

});


$('.products_list .block_title').click(function () {
	$(this).toggleClass('opened');
	$(this).next('.block_body').slideToggle();
});



$('.products_list .top .filter_btn, .products_list .top_title .close_btn').click(function () {
	$('.products_list .sidebar_wrap').toggleClass('opened');
});



if ($(window).width() < 991) {
	$(document).click(function (event) {
		if (!$(event.target).closest(".products_list .top .filter_btn, .products_list .sidebar_wrap .sidebar").length) {
			$("body").find(".products_list .sidebar_wrap").removeClass("opened");
		}
	});
}


$('.modal > .inner .close_btn').click(function () {
	$(this).parents().eq(2).removeClass('opened');
});

// $(document).mouseup(function (e) {
// 	if ($(e.target).closest(".modal .inner").length
// 		=== 0) {
// 		$('.modal').removeClass('opened')
// 	}
// });

// $(".button").click(function(e){
//     $(".modal").show();
//      e.stopPropagation();
// });

// $(".modal .inner").click(function(e){
//     e.stopPropagation();

// });

// $(document).click(function(){
// 	$(".modal .inner").parent().addClass('asd')
// });



// if ($(e.target).closest(".modal .inner").length === 0) {
// 	$(this).parent().addClass('asd')
// }

