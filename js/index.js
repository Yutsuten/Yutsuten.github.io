var options = $("#choose-language-container select option");
for (var i = 0; i < options.length; i++) {
	var elem = options[i];
	if (navigator.language.indexOf(elem.value) >= 0){
		document.documentElement.lang = elem.value;
		elem.setAttribute('selected', 'true');
    break;
	}
}
