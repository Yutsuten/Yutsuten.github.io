$(window).on('scroll', function(event) {
  var scrollValue = $(window).scrollTop();

  // Affix menu
  if (scrollValue > 370) {
    $('.resume-content .menu').addClass('affix');
  } else {
    $('.resume-content .menu').removeClass('affix');
  }

  // Change active on scroll
  $('.resume .resume-content .menu a').each(function() {
    var currLink = $(this);
    if (currLink.attr('href') != '#top') {
      var refElement = $(currLink.attr('href'));
      if (refElement.position().top <= scrollValue && refElement.position().top + refElement.height() + 1 > scrollValue) {
        $('#menu-center ul li a').removeClass("active");
        currLink.addClass("active");
        hasActive = true;
      }
      else {
        currLink.removeClass("active");
      }
    }
  });

  if (scrollValue < 392) {
    $('a[href="#top"]').addClass('active');
  } else {
    $('a[href="#top"]').removeClass('active');
  }
});

