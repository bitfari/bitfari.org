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
	function init_odometer(el) {
		if ($('.gem-counter-odometer', el).size() == 0) {
			return;
        }
		var odometer = $('.gem-counter-odometer', el).get(0);
		var format = $(el).closest('.gem-counter-box').data('number-format');
        
		format = format ? format : '(ddd).ddd';
        
		var od = new Odometer({
			el: odometer,
			value: $(odometer).text(),
			format: format
		});
        od.update($(odometer).data('to'));
	}

	window.thegem_init_odometer = init_odometer;

	$('.gem-counter').each(function(index) {
		if ($(this).closest('.gem-counter-box').size() > 0 && $(this).closest('.gem-counter-box').hasClass('lazy-loading') && !window.gemSettings.lasyDisabled) {
			$(this).addClass('lazy-loading-item').data('ll-effect', 'action').data('item-delay', '0').data('ll-action-func', 'thegem_init_odometer');
			$('.gem-icon', this).addClass('lazy-loading-item').data('ll-effect', 'fading').data('item-delay', '0');
			$('.gem-counter-text', this).addClass('lazy-loading-item').data('ll-effect', 'fading').data('item-delay', '0');
			$('.gem-counter-number', this).addClass('lazy-loading-item').data('ll-effect', 'fading').data('item-delay', '0');
			return;
		}
		init_odometer(this);
	});
})(jQuery);


}
/*
     FILE ARCHIVED ON 21:39:24 Aug 22, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:35:17 Mar 10, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.65
  exclusion.robots: 0.025
  exclusion.robots.policy: 0.012
  esindex: 0.011
  cdx.remote: 13.637
  LoadShardBlock: 137.228 (3)
  PetaboxLoader3.datanode: 158.031 (4)
  PetaboxLoader3.resolve: 100.647 (2)
  load_resource: 128.097
*/