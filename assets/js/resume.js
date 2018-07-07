if (location.pathname.indexOf('resume') !== -1) {
  $(window).on('scroll', function() {
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
        if (refElement.position().top - 1 <= scrollValue && refElement.position().top + refElement.height() > scrollValue) {
          $('#menu-center ul li a').removeClass('active');
          currLink.addClass('active');
        }
        else {
          currLink.removeClass('active');
        }
      }
    });

    if (scrollValue < 391) {
      $('a[href="#top"]').addClass('active');
    } else {
      $('a[href="#top"]').removeClass('active');
    }
  });
}
