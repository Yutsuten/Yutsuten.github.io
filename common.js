$(document).ready(function() {
  $('#menu a').click(function(e) {
    var href = $(this).attr('href');
    if (href.charAt(0) == '/') {
      $.get(href, function(data) {
        $('#content').html($(data).find('#content').contents());
      });
      return false;
    }
  });
});
