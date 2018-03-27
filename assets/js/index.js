require('./createSkillBars.js');
require('./loadLink.js');

var options = $("#choose-language-container select option");
var languageSet = false;
for (var i = 0; i < options.length; i++) {
  var elem = options[i];
  if (navigator.language.indexOf(elem.value) >= 0){
    document.documentElement.lang = elem.value;
    elem.setAttribute('selected', 'true');
    languageSet = true;
  }
}
if (options.length > 0 && !languageSet) {
  document.documentElement.lang = "en";
  options[1].setAttribute('selected', 'true');
}

$(window).on('scroll', function(event) {
  var scrollValue = $(window).scrollTop();
  if (scrollValue > 350) {
    $('#navigation-menu-container ul').addClass('affix');
  } else {
    $('#navigation-menu-container ul').removeClass('affix');
  }
});

