var MAX_SKILLS_TO_SHOW = 6;

function generateExpTimeBar(expTimeBarPercentage, expTimeBarText) {
  var htmlCode = '';
  htmlCode +=   '<div class="progress experience-time">';
  htmlCode +=     '<div class="progress-bar bg-success" role="progressbar" style="width: ' + expTimeBarPercentage + '%">' + expTimeBarText + '</div>';
  htmlCode +=   '</div>';
  return htmlCode;
}

function generateSkillLvlBar(skillLvlBarPercentage, skillLvlBarText) {
  var htmlCode = '';
  htmlCode +=   '<div class="progress skill-level">';
  htmlCode +=     '<div class="progress-bar bg-info" role="progressbar" style="width: ' + skillLvlBarPercentage + '%">' + skillLvlBarText + '</div>';
  htmlCode +=   '</div>';
  return htmlCode;
}

function generateSkillBars(languageName, expTimeBarPercentage, expTimeBarText, skillLvlBarPercentage, skillLvlBarText) {
  var htmlCode = '';
  htmlCode += '<div class="single-skill-container">';
  htmlCode +=   '<h4>' + languageName + '</h4>';
  htmlCode +=   generateExpTimeBar(expTimeBarPercentage, expTimeBarText);
  htmlCode +=   generateSkillLvlBar(skillLvlBarPercentage, skillLvlBarText);
  htmlCode += '</div>';
  return htmlCode;
}

function generateLanguageSkillBar(languageName, skillLvlBarPercentage, skillLvlBarText) {
  var htmlCode = '';
  htmlCode += '<div class="single-skill-container">';
  htmlCode +=   '<h4>' + languageName + '</h4>';
  htmlCode +=   generateSkillLvlBar(skillLvlBarPercentage, skillLvlBarText);
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
    if (years == 0) {
      monthsText = '1m';
    }
    else {
      monthsText = '1 month';
    }
  }
  else if (months >= 2) {
    monthsText = months + ' months';
  }

  return yearsText + ' ' + monthsText;
}

function generateArrayFromObject(object) {
  var arrayResult = [];
  for (key in object) {
    if(object.hasOwnProperty(key)) {
      var item = object[key];
      item['name'] = key;
      arrayResult.push(item);
    }
  }
  return arrayResult;
}

var biggestTime = 1;

function appendProgExpArrayToHTML(array, divId, headersArray) {
  // Sort (descending) the array
  array.sort(function(a, b) {return b.time - a.time;});

  // Get the one with biggest experience
  if (array[0].time > biggestTime)
    biggestTime = array[0].time;

  // Append the info to HTML
  var numSkillsToShow = (array.length <= MAX_SKILLS_TO_SHOW) ? array.length : MAX_SKILLS_TO_SHOW;
  var i = 0;
  while (numSkillsToShow > 0 && i < array.length) {
    if (array[i].time > 0 && !existOnArray(blackList, array[i].name)) {
        $(divId).append(generateSkillBars(headersArray[array[i].name],
          100 * array[i].time / biggestTime, generateFormattedTime(array[i].time),
          100 * array[i].skill / 7, skillLvlText[array[i].skill]));
        numSkillsToShow--;
    }
    i++;
  }
}

function appendLangArrayToHTML(array, divId, headersArray) {
  var numSkillsToShow = (array.length <= MAX_SKILLS_TO_SHOW) ? array.length : MAX_SKILLS_TO_SHOW;
  var i = 0;
  while (numSkillsToShow > 0 && i < array.length) {
    if (!existOnArray(blackList, array[i].name)) {
      $(divId).append(generateLanguageSkillBar(headersArray[array[i].name],
        100 * array[i].skill / 7, languageSkillLvlText[array[i].skill]));
      numSkillsToShow--;
    }
    i++;
  }
}

function existOnArray(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

var skillLvlText = ["", "Only Syntax", "Little Experience", "Used to it",
  "Experient", "Confident", "Very Confident", "Mastered"];

var languageSkillLvlText = ["", "Beginner", "Elementary", "Intermediate",
  "Upper Intermediate", "Advanced", "Proficient", "Native"];
