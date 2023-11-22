$(document).ready(function() {


//прилипающие меню
var $menu = $(".header");
$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
		$menu.removeClass("default").addClass("fixed");
	} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}

});

if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
	$menu.removeClass("default").addClass("fixed");
} else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
	$menu.removeClass("fixed").addClass("default");
}

	//плавный скролл
	$(".navigat li a").mPageScroll2id();


	$(".language-main__value").click(function(e) {
		e.preventDefault();
		if ($(this).siblings(".language-main__dropdown").is(":hidden")) {
			$(this).siblings(".language-main__dropdown").slideDown(200);
			$(this).addClass("active");
		} else {
			$(this).siblings(".language-main__dropdown").slideUp(200);
			$(this).removeClass("active");
		}
	});

	  $(".item-order__head").click(function() {
    $(this).parent().toggleClass("active");
    $(this).siblings().slideToggle(200);
    $(this).parent().siblings(".item-order").removeClass("active");
    $(this).parent().siblings(".item-order").find(".item-order__content").slideUp(200);
  });

		jQuery('.quantity').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="number"]'),
		btnUp = spinner.find('.quantity-up'),
		btnDown = spinner.find('.quantity-down'),
		min = input.attr('min'),
		max = input.attr('max');

		btnUp.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});

		btnDown.click(function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	//кнопка sandwich

	$(".sandwich").click(function(e) {
		e.preventDefault();
		$(".catalog-dropdown").slideUp(200);
		$(".btn-catalog").removeClass("active");
		if ($(".menu-mobile").is(":hidden")) {
			$(".menu-mobile").slideDown(200);
			$(".sandwich").addClass("active");
			$(".menu-overlay").fadeIn(200);
		} else {
			$(".menu-mobile").slideUp(200);
			$(".sandwich").removeClass("active");
			$(".menu-overlay").fadeOut(200);
		}
	});


	$(".btn-catalog").click(function(e) {
		e.preventDefault();
		$(".menu-mobile").slideUp(200);
		$(".sandwich").removeClass("active");
		$(".menu-overlay").fadeOut(200);
		if ($(".catalog-dropdown").is(":hidden")) {
			$(".catalog-dropdown").slideDown(200);
			$(".btn-catalog").addClass("active");
		} else {
			$(".catalog-dropdown").slideUp(200);
			$(".btn-catalog").removeClass("active");
		}
	});

	$(".btn-fixed_catalog").click(function(e) {
		e.preventDefault();
		$(".menu-mobile").slideUp(200);
		$(".sandwich").removeClass("active");
		$(".menu-overlay").fadeOut(200);
		if ($(".catalog-dropdown").is(":hidden")) {
			$(".catalog-dropdown").slideDown(200);
			$(".btn-fixed_catalog").addClass("active");
			$(".menu-overlay").fadeIn(200);
		} else {
			$(".catalog-dropdown").slideUp(200);
			$(".btn-fixed_catalog").removeClass("active");
			$(".menu-overlay").fadeOut(200);
		}
	});

	$(".btn-categories").click(function(e) {
		e.preventDefault();
		if ($(".categories-dropdown").is(":hidden")) {
			$(".categories-dropdown").slideDown(200);
			$(".btn-categories").addClass("active");
		} else {
			$(".categories-dropdown").slideUp(200);
			$(".btn-categories").removeClass("active");
		}
	});

	$(".menu-overlay").click(function() {
		$(".menu-mobile").slideUp(200);
		$(".sandwich").removeClass("active");
		$(".menu-overlay").fadeOut(200);
		$(".catalog-dropdown").slideUp(200);
		$(".btn-fixed_catalog").removeClass("active");
	});

	$(document).mouseup(function (e) {
		var container = $(".menu-mobile");
		if (container.has(e.target).length === 0){
			$(".menu-mobile").slideUp(200);
			$(".sandwich").removeClass("active");
			$(".menu-overlay").fadeOut(200);
		}
	});

	$(document).mouseup(function (e) {
		var container = $(".catalog-dropdown");
		if (container.has(e.target).length === 0){
			$(".catalog-dropdown").slideUp(200);
			$(".btn-catalog, .btn-fixed_catalog").removeClass("active");
			$(".menu-overlay").fadeOut(200);
		}
	});

	$(document).mouseup(function (e) {
		var container2 = $(".language-main");
		if (container2.has(e.target).length === 0){
			$(".language-main__dropdown").slideUp(200);
			$(".language-main__value").removeClass("active");
		}
	});


$(document).mouseup(function (e) {
		var container3 = $(".categories-dropdown");
		if (container3.has(e.target).length === 0){
			$(".categories-dropdown").slideUp(200);
			$(".btn-categories").removeClass("active");
		}
	});

	//слайдер

	$('.slider-billbord').slick({
		arrows: false,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
	});

	$('.slider-catalog').slick({
		arrows: false,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		responsive: [
		{
			breakpoint: 992,
			settings: {
				rows: 2,
				slidesToShow: 3,
				slidesToScroll: 2,
				autoplay: false,
			}
		},
		{
			breakpoint: 768,
			settings: {
				rows: 2,
				slidesToShow: 2,
				slidesToScroll: 2,
				autoplay: false,
			}
		}
		]
	});

	$('.slider-news').slick({
		arrows: false,
		dots: true,
		infinite: true,
		touchThreshold: 1000,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				autoplay: false,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				autoplay: false,
			}
		}
		]
	});

	$('.slider-advantages').slick({
		arrows: false,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		responsive: [
		{
			breakpoint: 992,
			settings: {
				variableWidth: true,
				slidesToShow: 1,
			}
		}
		]
	});

	$('.slider-benefits').slick({
		arrows: false,
		dots: false,
		infinite: true,
		touchThreshold: 1000,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><i class="fas fa-chevron-left"></i><div/>',
		nextArrow: '<div class="slick-next slick-arrow"><i class="fas fa-chevron-right"></i><div/>',
		responsive: [
		{
			breakpoint: 992,
			settings: {
				variableWidth: true,
				slidesToShow: 1,
			}
		}
		]
	});

	$(".text-block .link-page").click(function(e) {
		e.preventDefault();
		if ($(this).siblings(".text-card").hasClass("active")) {
			$(this).siblings(".text-card").removeClass("active");
			$(this).html("читать полностью");
		} else {
			$(this).siblings(".text-card").addClass("active");
			$(this).html("Свернуть");
		}
	});

	$(".input-phone").mask("+7 (999) 999-99-99");

	{
		if ($(window).width() < 992) { 
			$(".footer__title").click(function() {
				$(this).toggleClass("active");
				$(this).next(".footer__content").slideToggle(200);
			});
		}
	}

	/*range slider*/

	$(function() {
		var $range = $(".range-catalog_price .range-catalog__input"),
		$from = $(".range-catalog_price .control-input__from"),
		$to = $(".range-catalog_price .control-input__to"),
		min = 50,
		max = 300000;
		$range.ionRangeSlider({
			type: "double",
			min: min,
			max: max,
			from: 50,
			to: 200000,
			prettify_enabled: true,
			onChange: function(data) {
				updateValues()
			}
		});
		$range = $range.data("ionRangeSlider");
		var updateValues = function() {
			var res = $range.result;
			$from.val(res.from, true);
			$to.val(res.to,true)
		};
		$from.on("focus", function() {
			this.value = this.value;
			this.focus();
			this.selectionStart = this.value.length
		}).on("input", function() {
			$range.update({
				from: this.value
			})
		}).on("blur", updateValues);
		$to.on("focus", function() {
			this.value = this.value;
			this.focus();
			this.selectionStart = this.value.length
		}).on("input", function() {
			$range.update({
				to: this.value
			})
		}).on("blur", updateValues)
	});

$(".link-page_checkbox").click(function(e) {
		e.preventDefault();
		if ($(this).siblings(".item-sidebar__content .checkbox-main:nth-child(n+11)").is(":hidden")) {
			$(this).siblings(".item-sidebar__content .checkbox-main:nth-child(n+11)").slideDown(200);
			$(this).html("Свернуть"); 
		} else {
			$(this).siblings(".item-sidebar__content .checkbox-main:nth-child(n+11)").slideUp(200);
			$(this).html("смотреть еще");
		}
	});

	$(".item-sidebar__head").click(function() {
		$(this).parent().toggleClass("active");
		$(this).siblings(".item-sidebar__content").slideToggle(200);
	});

	$(".btn-filter").click(function(e) {
		e.preventDefault();
		$(".sidebar-catalog").slideToggle(200);
		$(this).parent().toggleClass("active");
	});

	$(".close-filter").click(function(e) {
		e.preventDefault();
		$(this).parent().removeClass("active");
		$(".sidebar-catalog").slideUp(200);
	});

	 // стайлер для select
	 $('select').styler();

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	$(".fancybox").fancybox();


	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$(".btn_top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages=function(){"use strict";function t(t,e){return"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='"+t+"' height='"+e+"'%3E%3C/svg%3E"}function e(t){if(t.srcset&&!p&&window.picturefill){var e=window.picturefill._;t[e.ns]&&t[e.ns].evaled||e.fillImg(t,{reselect:!0}),t[e.ns].curSrc||(t[e.ns].supported=!1,e.fillImg(t,{reselect:!0})),t.currentSrc=t[e.ns].curSrc||t.src}}function i(t){for(var e,i=getComputedStyle(t).fontFamily,r={};null!==(e=u.exec(i));)r[e[1]]=e[2];return r}function r(e,i,r){var n=t(i||1,r||0);b.call(e,"src")!==n&&h.call(e,"src",n)}function n(t,e){t.naturalWidth?e(t):setTimeout(n,100,t,e)}function c(t){var c=i(t),o=t[l];if(c["object-fit"]=c["object-fit"]||"fill",!o.img){if("fill"===c["object-fit"])return;if(!o.skipTest&&f&&!c["object-position"])return}if(!o.img){o.img=new Image(t.width,t.height),o.img.srcset=b.call(t,"data-ofi-srcset")||t.srcset,o.img.src=b.call(t,"data-ofi-src")||t.src,h.call(t,"data-ofi-src",t.src),t.srcset&&h.call(t,"data-ofi-srcset",t.srcset),r(t,t.naturalWidth||t.width,t.naturalHeight||t.height),t.srcset&&(t.srcset="");try{s(t)}catch(t){window.console&&console.warn("https://bit.ly/ofi-old-browser")}}e(o.img),t.style.backgroundImage='url("'+(o.img.currentSrc||o.img.src).replace(/"/g,'\\"')+'")',t.style.backgroundPosition=c["object-position"]||"center",t.style.backgroundRepeat="no-repeat",t.style.backgroundOrigin="content-box",/scale-down/.test(c["object-fit"])?n(o.img,function(){o.img.naturalWidth>t.width||o.img.naturalHeight>t.height?t.style.backgroundSize="contain":t.style.backgroundSize="auto"}):t.style.backgroundSize=c["object-fit"].replace("none","auto").replace("fill","100% 100%"),n(o.img,function(e){r(t,e.naturalWidth,e.naturalHeight)})}function s(t){var e={get:function(e){return t[l].img[e?e:"src"]},set:function(e,i){return t[l].img[i?i:"src"]=e,h.call(t,"data-ofi-"+i,e),c(t),e}};Object.defineProperty(t,"src",e),Object.defineProperty(t,"currentSrc",{get:function(){return e.get("currentSrc")}}),Object.defineProperty(t,"srcset",{get:function(){return e.get("srcset")},set:function(t){return e.set(t,"srcset")}})}function o(){function t(t,e){return t[l]&&t[l].img&&("src"===e||"srcset"===e)?t[l].img:t}d||(HTMLImageElement.prototype.getAttribute=function(e){return b.call(t(this,e),e)},HTMLImageElement.prototype.setAttribute=function(e,i){return h.call(t(this,e),e,String(i))})}function a(t,e){var i=!y&&!t;if(e=e||{},t=t||"img",d&&!e.skipTest||!m)return!1;"img"===t?t=document.getElementsByTagName("img"):"string"==typeof t?t=document.querySelectorAll(t):"length"in t||(t=[t]);for(var r=0;r<t.length;r++)t[r][l]=t[r][l]||{skipTest:e.skipTest},c(t[r]);i&&(document.body.addEventListener("load",function(t){"IMG"===t.target.tagName&&a(t.target,{skipTest:e.skipTest})},!0),y=!0,t="img"),e.watchMQ&&window.addEventListener("resize",a.bind(null,t,{skipTest:e.skipTest}))}var l="fregante:object-fit-images",u=/(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,g="undefined"==typeof Image?{style:{"object-position":1}}:new Image,f="object-fit"in g.style,d="object-position"in g.style,m="background-size"in g.style,p="string"==typeof g.currentSrc,b=g.getAttribute,h=g.setAttribute,y=!1;return a.supportsObjectFit=f,a.supportsObjectPosition=d,o(),a}();

