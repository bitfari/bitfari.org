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
	$.fn.checkbox = function() {
		$(this).each(function() {
			var $el = $(this);
			var typeClass = $el.attr('type');
			$el.hide();
			$el.next('.'+typeClass+'-sign').remove();
			var $checkbox = $('<span class="'+typeClass+'-sign" />').insertAfter($el);
			$checkbox.click(function() {
				if($checkbox.closest('label').length) return;
				if($el.attr('type') == 'radio') {
					$el.prop('checked', true).trigger('change').trigger('click');
				} else {
					$el.prop('checked', !($el.is(':checked'))).trigger('change');
				}
			});
			$el.change(function() {
				$('input[name="'+$el.attr('name')+'"]').each(function() {
					if($(this).is(':checked')) {
						$(this).next('.'+$(this).attr('type')+'-sign').addClass('checked');
					} else {
						$(this).next('.'+$(this).attr('type')+'-sign').removeClass('checked');
					}
				});
			});
			if($el.is(':checked')) {
				$checkbox.addClass('checked');
			} else {
				$checkbox.removeClass('checked');
			}
		});
	}
	$.fn.combobox = function() {
		$(this).each(function() {
			var $el = $(this);
			$el.insertBefore($el.parent('.combobox-wrapper'));
			$el.next('.combobox-wrapper').remove();
			$el.css({
				'opacity': 0,
				'position': 'absolute',
				'left': 0,
				'right': 0,
				'top': 0,
				'bottom': 0
			});
			var $comboWrap = $('<span class="combobox-wrapper" />').insertAfter($el);
			var $text = $('<span class="combobox-text" />').appendTo($comboWrap);
			var $button = $('<span class="combobox-button" />').appendTo($comboWrap);
			$el.appendTo($comboWrap);
			$el.change(function() {
				$text.text($('option:selected', $el).text());
			});
			$text.text($('option:selected', $el).text());
			$el.comboWrap = $comboWrap;
		});
	}
})(jQuery);

}
/*
     FILE ARCHIVED ON 21:39:21 Aug 22, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:34:43 Mar 10, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.729
  exclusion.robots: 0.027
  exclusion.robots.policy: 0.012
  esindex: 0.014
  cdx.remote: 22.411
  LoadShardBlock: 62.187 (3)
  PetaboxLoader3.datanode: 115.16 (4)
  load_resource: 99.829
  PetaboxLoader3.resolve: 41.811
*/