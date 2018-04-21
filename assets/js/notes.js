$('#menu a').click(function(e) {
  $('div.note-content').hide();
  $('div' + $(this).attr('href')).show();
});

$('#content').html($('#content').html().replace(/{% raw %}/g, '').replace(/{% endraw %}/g, ''));

