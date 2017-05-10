var MAX_SKILLS_TO_SHOW = 10;

function generateSkillBars(languageName, expTimeBarPercentage, expTimeBarText, skillLvlBarPercentage, skillLvlBarText) {
  var htmlCode = '';
  htmlCode += '<div class="single-skill-container">';
  htmlCode +=   '<h3>' + languageName + '</h3>';
  htmlCode +=   '<div class="progress experience-time">';
  htmlCode +=     '<div class="progress-bar bg-success" role="progressbar" style="width: ' + expTimeBarPercentage + '%">' + expTimeBarText + '</div>';
  htmlCode +=   '</div>';
  htmlCode +=   '<div class="progress skill-level">';
  htmlCode +=     '<div class="progress-bar bg-info" role="progressbar" style="width: ' + skillLvlBarPercentage + '%">' + skillLvlBarText + '</div>';
  htmlCode +=   '</div>';
  htmlCode += '</div>';
  return htmlCode;
}

function generateFormattedTime(totalTime) {
  var years = Math.floor(totalTime / 12);
  var months = totalTime % 12;

  // Generate years text
  var yearsText = '';
  if (years == 1) {
    yearsText = '1 year';
  }
  else if (years >= 2) {
    yearsText = years + ' years';
  }

  // Generate months text
  var monthsText = '';
  if (months == 1) {
    monthsText = '1 month';
  }
  else if (months >= 2) {
    monthsText = months + ' months';
  }

  return yearsText + ' ' + monthsText;
}

var skillLvlText = ["", "Only Syntax", "Little Experience", "Used to it",
  "Experient", "Confident", "Very Confident", "Mastered"];
var languageName = {
  assembly: "Assembly",
  javascript: "JavaScript",
  csharp: "C#",
  html5: "HTML5",
  css: "CSS",
  c: "C",
  java: "Java",
  php: "PHP",
  lisp: "LISP",
  prolog: "Prolog",
};

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
