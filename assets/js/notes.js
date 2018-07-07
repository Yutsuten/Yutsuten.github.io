if (location.pathname.indexOf('notes') !== -1) {
  $('#menu a').click(function() {
    $('div.note-content').hide();
    $('div' + $(this).attr('href')).show();
  });

  $('#content').html($('#content').html().replace(/{% raw %}/g, '').replace(/{% endraw %}/g, ''));

  if (location.hash) {
    $('div' + location.hash).show();
  } else {
    $('div#home').show();
  }
}
