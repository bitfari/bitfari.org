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

jQuery(function($) {

  $('.zilla-likes').on('click', function() {
    var link = $(this);
    if (link.hasClass('active')) return false;

    var id = $(this).attr('id'),
        postfix = link.find('.zilla-likes-postfix').text();

    $.ajax({
      type: 'POST',
      url: zilla_likes.ajaxurl,
      data: {
        action: 'zilla-likes', 
        likes_id: id, 
        postfix: postfix, 
      },
      xhrFields: { 
        withCredentials: true, 
      },
      success: function(data) {
        link.html(data).addClass('active').attr('title','You already like this');
      },
    });

    return false;
  });

  if ($('body.ajax-zilla-likes').length) {
    $('.zilla-likes').each(function() {
      var id = $(this).attr('id');
      $(this).load(zilla_likes.ajaxurl, {
        action: 'zilla-likes', 
        post_id: id,
      });
    });
  }
});


}
/*
     FILE ARCHIVED ON 21:39:25 Aug 22, 2023 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 21:33:59 Mar 10, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.578
  exclusion.robots: 0.021
  exclusion.robots.policy: 0.012
  esindex: 0.012
  cdx.remote: 41.363
  LoadShardBlock: 105.006 (3)
  PetaboxLoader3.datanode: 808.338 (4)
  load_resource: 806.824
  PetaboxLoader3.resolve: 91.984
*/