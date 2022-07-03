(function ($) {
	"use strict";

	$(document).ready(function () {
		// Search Popup
		var bodyOvrelay = $("#body-overlay");
		var searchPopup = $("#search-popup");

		$(document).on("click", "#body-overlay", function (e) {
			e.preventDefault();
			bodyOvrelay.removeClass("active");
			searchPopup.removeClass("active");
		});
		$(document).on("click", ".search--toggler", function (e) {
			e.preventDefault();
			searchPopup.addClass("active");
			bodyOvrelay.addClass("active");
		});
		// Search Popup End

		// Animate the scroll to top
		$(".back-to-top").on("click", function (event) {
			event.preventDefault();
			$("html, body").animate({ scrollTop: 0 }, 300);
		});

		// Mobile Submenu
		let primaryMenu = $(".has-sub > .primary-menu__link");
		let primarySubMenu = $(".primary-menu__sub");
		if (primaryMenu || primarySubMenu) {
			primaryMenu.on("click", function (e) {
				e.preventDefault();
				if (parseInt(screenSize) < parseInt(992)) {
					$(this).toggleClass("active").siblings(primarySubMenu).slideToggle();
				}
			});
		}
		// Mobile Submenu End

		// Custom Dropdown
		let customDropdown = $('[data-set="custom-dropdown"]');
		let dropdownContent = $(".custom-dropdown__content");
		if (customDropdown || dropdownContent) {
			customDropdown.each(function () {
				$(this).on("click", function (e) {
					e.stopPropagation();
					$("body").toggleClass("custom-dropdown-open");
					dropdownContent.toggleClass("is-open");
				});
			});
			dropdownContent.each(function () {
				$(this).on("click", function (e) {
					e.stopPropagation();
				});
			});
			$(document).on("click", function () {
				$("body").removeClass("custom-dropdown-open");
				dropdownContent.removeClass("is-open");
			});
		}
		// Custom Dropdown End

		// Category Slider
		let categorySlider = $(".category__slider");
		if (categorySlider) {
			categorySlider.slick({
				moblieFirst: true,
				variableWidth: true,
				infinite: true,
				slidesToShow: 1,
				swipeToSlide: true,
				prevArrow: '<button type="button" class="category__slider-arrow category__slider-prev"><i class="las la-angle-left"></i></button>',
				nextArrow: '<button type="button" class="category__slider-arrow category__slider-next"><i class="las la-angle-right"></i></button>',
			});
		}
		// Category Slider End

		// Gallery
		// let gallery = $(".filter-container");
		// if (gallery) {

		// $(".filter-container").filterizr({
		//   layout: "sameHeight",
		//   gutterPixels: 15,
		// });

		// }
		// Gallery End
	});
})(jQuery);

// Header Fixed On Scroll
var bodySelector = document.querySelector("body");
const header = document.querySelector(".header-fixed");

if (bodySelector.contains(header)) {
	const headerTop = header.offsetTop;
	function fixHeader() {
		if (window.scrollY > headerTop) {
			document.body.classList.add("fixed-header");
		} else if (window.scrollY <= headerTop) {
			document.body.classList.remove("fixed-header");
		} else {
			document.body.classList.remove("fixed-header");
		}
	}
	$(window).on("scroll", function () {
		fixHeader();
	});
}
// Header Fixed On Scroll End

$(window).on("scroll", function () {
	var ScrollTop = $(".back-to-top");
	if ($(window).scrollTop() > 1200) {
		ScrollTop.fadeIn(1000);
	} else {
		ScrollTop.fadeOut(1000);
	}
});

$(window).on("load", function () {
	// Preloader
	var preLoder = $(".preloader");
	preLoder.fadeOut(1000);
});

// Screen Size Counting
let screenSize = window.innerWidth;
window.addEventListener("resize", function (e) {
	screenSize = window.innerWidth;
});
// Screen Size Counting End

// box.forEach(function () {
// 	let width = box.offsetWidth;
// 	let height = box.offsetHeight;
// });

let box = document.querySelectorAll(".gallery li");

for ($i = 0; $i < box.length; $i++) {
	let widthAll = box[$i].offsetWidth;
	let heightAll = box[$i].offsetHeight;
	let flexGrow = widthAll / heightAll;
	console.log(widthAll);
	box.forEach(function () {
		box[$i].style.flexGrow = flexGrow;
		box[$i].style.maxWidth = flexGrow * 320 + "px";
		if (parseInt(screenSize) > parseInt(991)) {
			box[$i].style.flexBasis = flexGrow * 220 + "px";
		}
		if (parseInt(screenSize) < parseInt(991)) {
			box[$i].style.flexBasis = flexGrow * 150 + "px";
			box[$i].style.maxWidth = flexGrow * 230 + "px";
		}
		if (parseInt(screenSize) < parseInt(575)) {
			box[$i].style.flexBasis = flexGrow * 150 + "px";
			box[$i].style.maxWidth = flexGrow * 350 + "px";
		}
		if (parseInt(screenSize) < parseInt(400)) {
			box[$i].style.flexBasis = flexGrow * 160 + "px";
			if (flexGrow < 1.2) {
				box[$i].style.flexBasis = flexGrow * 400 + "px";
				box[$i].style.maxWidth = flexGrow * 400 + "px";
			}
		}
	});
}
