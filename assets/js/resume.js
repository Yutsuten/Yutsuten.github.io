$(window).on('scroll', function(event) {
  var scrollValue = $(window).scrollTop();
  if (scrollValue > 370) {
    $('.resume-content .menu').addClass('affix');
  } else {
    $('.resume-content .menu').removeClass('affix');
  }
});

