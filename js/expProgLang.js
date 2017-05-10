// Create an array with the known programming languages
var programmingLanguagesArray = [];
for (key in experience.programming.language) {
  if(experience.programming.language.hasOwnProperty(key)) {
    var programmingLanguage = experience.programming.language[key];
    programmingLanguage['language'] = languageName[key];
    programmingLanguagesArray.push(programmingLanguage);
  }
}

// Sort (descending) the array
programmingLanguagesArray.sort(function(a, b) {return b.time - a.time;});

// Get language with biggest experience
var maxExpTime = programmingLanguagesArray[0].time;

// Add the programming experiences to the html
var numSkillsToShow = (programmingLanguagesArray.length <= MAX_SKILLS_TO_SHOW) ? programmingLanguagesArray.length : MAX_SKILLS_TO_SHOW;
for (var i = 0; i < numSkillsToShow; i++) {
  if (programmingLanguagesArray[i].time > 0) {
    $('#skills-container #languages').append(generateSkillBars(programmingLanguagesArray[i].language,
      100 * programmingLanguagesArray[i].time / maxExpTime, generateFormattedTime(programmingLanguagesArray[i].time),
      100 * programmingLanguagesArray[i].skill / 7, skillLvlText[programmingLanguagesArray[i].skill]));
  }
  else {
    break;
  }
}
