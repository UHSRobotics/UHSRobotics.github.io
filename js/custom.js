/*====================================================
	Table of Contents
	
		01. Pie Charts

			+ Pie Chart Style 01
			+ Pie Chart Style 02
			+ Pie Chart Style 03
		02. Counter
		03. Scroll to top
		04. Remove of "preload" class
		05. Particles
*/


jQuery(document).ready(function($) {
	"use strict";



/*======================

	01. Pie Charts

========================*/


/* Pie Chart Style 01 
-------------------------*/


	0<$(".chart-style-1").length&&$(".chart-style-1").easyPieChart( {
		lineCap:"round", barColor:"#9d9d9d", trackColor:"#fff", lineWidth:2, size:130, scaleColor:!1, easing:"easeOutBounce", scaleLength:1, animate: {
			duration: 1500, enabled: !0
		}
		, onStep:function(a, b, c) {
			$(this.el).find(".percent").text(Math.round(c))
		}
	}

	);
	
	
/* Pie Chart Style 02 
-------------------------*/


   0<$(".chart-style-2").length&&$(".chart-style-2").easyPieChart( {
		barColor:"#1769ff", scaleLength:1, lineCap:"round", trackColor:"#232323", scaleColor:!1, easing:"easeOutCirc", lineWidth:20, size:150, animate: {
			duration: 2e3, enabled: !0
		}
		, onStep:function(a, b, c) {
			$(this.el).find(".chart-style-2").text(Math.round(c))
		}
	}

	);

	
	
/* Pie Chart Style 03 
-------------------------*/


    0<$(".chart-style-3").length&&$(".chart-style-3").easyPieChart( {
		size:200, trackColor:"", lineWidth:2, scaleColor:!1, scaleLength:1, lineCap:"round", easing:"easeOutCirc", barColor:"#232323", animate: {
			duration: 2e3, enabled: !0
		}
		, onStep:function(a, b, c) {
			$(this.el).find(".percent").text(Math.round(c))
		}
	}

	);

	
/*======================

	02. Counter

========================*/


	$(function() {
		animatecounters()
	});

	function animatecounters() {
		$(".timer").each(function(a) {
			var b = $(this);
			a = $.extend({}, a || {}, b.data("countToOptions") || {}), b.countTo(a)
		})
	}
	$(".timer").appear(), $(document.body).on("appear", ".timer", function() {
		$(this).hasClass("appear") || (animatecounters(), $(this).addClass("appear"))
	});
		
	
/*======================

	03. Scroll to top

========================*/	
	
	
	$(window).scroll(function() {
		50 <= $(this).scrollTop() ? $("#return-to-top").fadeIn(200) : $("#return-to-top").fadeOut(200)
	}), $("#return-to-top").on("click", function() {
		$("body,html").animate({
			scrollTop: 0
		}, 500)
	});

	
});

$(document).ready(function () {

	// 04. Removing preload

	$("body").removeClass("preload");

});


/*======================

	05. Particles

========================*/	


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('diamond-particles', 'assets/diamond-tier.json', function() {
//   console.log('callback - particles.js config loaded');
// });

// particlesJS.load('platinum-particles', 'assets/platinum-tier.json', function() {
//   console.log('callback - particles.js config loaded');
// });

// particlesJS.load('gold-particles', 'assets/gold-tier.json', function() {
//   console.log('callback - particles.js config loaded');
// });



/*======================

	06. Loading nav bar

========================*/	

$("#nav-placeholder").load("./nav.html");
$("#contact").load("./footer.html")

const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();