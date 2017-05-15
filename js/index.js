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
if (!languageSet) {
	document.documentElement.lang = "en";
	options[1].setAttribute('selected', 'true');
}
