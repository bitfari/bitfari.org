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
	'use strict';

	$(function() {
		const consentBarCookieName = thegem_gdpr_options.consent_bar_cookie_name;

		var $consentBar = $('.gdpr-consent-bar');

		$('.btn-gdpr-privacy-preferences-close').on('click', function() {
			$('.gdpr-privacy-preferences').fadeOut(300);
		});

		$('.btn-gdpr-preferences, .btn-gdpr-preferences-open').on('click', function(e) {
			e.preventDefault();
			$('.gdpr-privacy-preferences').fadeIn(300);
			return false;
		});

		$('.btn-gdpr-agreement').on('click', function() {
			if ($consentBar.hasClass('top') && !isShowAdminBar()) {
				$('html').animate({'margin-top': 0}, 400);
			}

			var $siteFixedHeader = $('#site-header.fixed');
			if (!getCookie(consentBarCookieName) && $siteFixedHeader.length > 0 && $consentBar.hasClass('top')) {
				$siteFixedHeader.animate({'top': 0}, 300);
				console.log('hide cookie bar');
			}

			$('.gdpr-consent-bar').fadeOut();
			setCookie(consentBarCookieName, 1);
		});

		$('.gdpr-privacy-preferences').on('click', function() {
			if ($(event.target).find('.gdpr-privacy-preferences-box').length>0) {
				$('.gdpr-privacy-preferences').fadeOut(300);
			}
		});

		function initConsentBar() {
			if ($consentBar.length > 0 && !getCookie(consentBarCookieName)) {
				if ($consentBar.hasClass('top') && !isShowAdminBar()) {
					$('html').css({'margin-top': $consentBar.height()+'px'});
				}
				$consentBar.fadeIn();
			}
		}

		function setCookie(name, value, days) {
			if (days === undefined) {
				days = 365;
			}

			var date = new Date();
			date.setTime(date.getTime() + (days*24*3600*1000));

			var options = {
				path: '/',
				expires: date
			};

			if (options.expires.toUTCString) {
				options.expires = options.expires.toUTCString();
			}

			let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

			for (var optionKey in options) {
				updatedCookie += "; " + optionKey;
				var optionValue = options[optionKey];
				if (optionValue !== true) {
					updatedCookie += "=" + optionValue;
				}
			}

			document.cookie = updatedCookie;
		}

		function getCookie(name) {
			var matches = document.cookie.match(new RegExp(
				"(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
			));
			return matches ? decodeURIComponent(matches[1]) : undefined;
		}

		function isShowAdminBar() {
			return $('#wpadminbar').length > 0;
		}

		function fixSiteFixedHeader() {
			var $siteFixedHeader = $('#site-header.fixed');
			if (!getCookie(consentBarCookieName) && $siteFixedHeader.length > 0 && $consentBar.hasClass('top')) {
				$siteFixedHeader.css({'top': $consentBar.outerHeight()+'px'});
			}
		}

		$(window).on('scroll', function() {
			fixSiteFixedHeader();
		});

		$(window).on('load', function() {
			fixSiteFixedHeader();
		});

		$(window).on('resize', function() {
			fixSiteFixedHeader();
		});

		initConsentBar();

	});
})(jQuery);


}
/*
     FILE ARCHIVED ON 21:39:22 Aug 22, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:35:09 Mar 10, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.582
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.009
  esindex: 0.011
  cdx.remote: 4.985
  LoadShardBlock: 2721.617 (3)
  PetaboxLoader3.datanode: 2741.168 (4)
  load_resource: 58.414
  PetaboxLoader3.resolve: 33.991
*/