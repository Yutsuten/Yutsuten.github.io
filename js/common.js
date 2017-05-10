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

function appendArrayToHTML(array, divId, headersArray) {
  // Sort (descending) the array
  array.sort(function(a, b) {return b.time - a.time;});

  // Get language with biggest experience
  if (array[0].time > biggestTime)
    biggestTime = array[0].time;

  // Add the programming experiences to the html
  var numSkillsToShow = (array.length <= MAX_SKILLS_TO_SHOW) ? array.length : MAX_SKILLS_TO_SHOW;
  for (var i = 0; i < numSkillsToShow; i++) {
    if (array[i].time > 0) {
      $(divId).append(generateSkillBars(headersArray[array[i].name],
        100 * array[i].time / biggestTime, generateFormattedTime(array[i].time),
        100 * array[i].skill / 7, skillLvlText[array[i].skill]));
    }
    else {
      break;
    }
  }
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

var frameworkName = {
  angularjs: "AngularJS",
  bootstrap: "Bootstrap",
  jQuery: "jQuery",
  ionic: "Ionic",
  mocha: "Mocha",
  pixijs: "PixiJS",
  stylus: "Stylus",
  pug: "Pug (jade)",
  dotnet: ".NET",
}

var databaseName = {
  oracle: "Oracle",
  mysql: "MySQL",
  mongodb: "MongoDB",
}

var toolName = {
  unity: "Unity",
  atom: "Atom",
  visualStudio: "Visual Studio",
  codeblocks: "Code Blocks",
  git: "Git",
}
