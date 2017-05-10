var userLang = navigator.language || navigator.userLanguage;
document.documentElement.lang = userLang;

var options = $("#choose-language-container select option");
for (var i = 0; i < options.length; i++) {
	var elem = options[i];
	if (navigator.language.indexOf(elem.value) >= 0){
		elem.setAttribute('selected', 'true');
    break;
	}
}
