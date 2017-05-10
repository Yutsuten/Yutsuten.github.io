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
