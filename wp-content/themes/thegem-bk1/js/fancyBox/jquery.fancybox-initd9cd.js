var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function($) {

	$.fn.initGalleryFancybox = function() {
	    $('a.fancy-gallery', this).fancybox({
	        caption : function( instance, item ) {
	            var slideInfo = $('.slide-info', this);
	            if ($('> *', slideInfo).length) {
	                return slideInfo.clone().html();
	            }
	        },
	        onInit: function(instance) {
	            instance.$refs.caption.addClass('fancybox-title');
	            instance.$refs.caption.parent().addClass('slideinfo');
	        }
	    });
	};

	$.fn.initPortfolioFancybox = function() {
		$('a.fancy, .fancy-link-inner a', this).fancybox();

		$('.portfolio-item a.vimeo, .portfolio-item a.youtube', this).fancybox({
			type: 'iframe'
		});

		$('.portfolio-item a.self_video', this).click(function(e) {
			e.preventDefault();
			var $a = $(this);
			$.fancybox.open({
				type: 'html',
				maxWidth: 1200,
				content: '<div id="fancybox-video"><video width="100%" height="100%" autoplay="autoplay" controls="controls" src="'+$a.attr('href')+'" preload="none"></video></div>',
				afterShow: function(instance, current) {
					$('video', current.$content).mediaelementplayer();
				}
			});
		});
	};

	$.fn.initBlogFancybox = function() {
		$('a.fancy, .fancy-link-inner a', this).fancybox();

		$('.blog article a.youtube, .blog article a.vimeo', this).fancybox({
			type: 'iframe'
		});
	};

	$.fn.initProductFancybox = function() {
		let isTouch = window.gemSettings.isTouch;

		$('a.fancy-product-gallery', this).fancybox({
			arrows: isTouch ? false : true,
			infobar: true,
			clickOutside: 'close',
			buttons: [
				'zoom',
				'fullScreen',
				'thumbs',
				'close',
			],
			touch: {
				vertical: false,
				momentum : false
			},
			loop : true,
			animationDuration: 300,
			backFocus: false,
			mobile: {
				fullScreen: false,
				arrows: false,
				animationEffect : 'fade',
				buttons: [
					'zoom',
					'fullScreen',
					'close',
				],
				clickContent: function(current, event) {
					return current.type === "image" ? "zoom" : false;
				},
				clickSlide: function(current, event) {
					return "close";
				},
			},
		});
	};

	$(document).initGalleryFancybox();
	$(document).initPortfolioFancybox();
	$(document).initBlogFancybox();
	$(document).initProductFancybox();

	$('a.fancy, .fancy-link-inner a').fancybox();
})(jQuery);


}
/*
     FILE ARCHIVED ON 21:39:22 Aug 22, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:34:56 Mar 10, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.733
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.012
  esindex: 0.014
  cdx.remote: 85.524
  LoadShardBlock: 110.555 (3)
  PetaboxLoader3.datanode: 116.861 (4)
  load_resource: 114.6
  PetaboxLoader3.resolve: 79.933
*/