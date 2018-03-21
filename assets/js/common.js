var MAX_SKILLS_TO_SHOW = 6;

function generateExpTimeBar(expTimeBarPercentage, expTime) {
  var htmlCode = '';
  htmlCode +=   '<div class="progress experience-time">';
  htmlCode +=     '<div lang="pt-BR" class="progress-bar bg-success" role="progressbar" style="width: ' + expTimeBarPercentage + '%">' + generateFormattedTimePortuguese(expTime) + '</div>';
  htmlCode +=     '<div lang="en" class="progress-bar bg-success" role="progressbar" style="width: ' + expTimeBarPercentage + '%">' + generateFormattedTimeEnglish(expTime) + '</div>';
  htmlCode +=     '<div lang="jp" class="progress-bar bg-success" role="progressbar" style="width: ' + expTimeBarPercentage + '%">' + generateFormattedTimeJapanese(expTime) + '</div>';
  htmlCode +=   '</div>';
  return htmlCode;
}

function generateSkillLvlBar(skillLvlBarPercentage, skillLvl, skillType) {
  var htmlCode = '';
  htmlCode +=   '<div class="progress skill-level">';
  htmlCode +=     '<div lang="pt-BR" class="progress-bar bg-info" role="progressbar" style="width: ' + skillLvlBarPercentage + '%">' + skillType.portuguese[skillLvl] + '</div>';
  htmlCode +=     '<div lang="en" class="progress-bar bg-info" role="progressbar" style="width: ' + skillLvlBarPercentage + '%">' + skillType.english[skillLvl] + '</div>';
  htmlCode +=     '<div lang="jp" class="progress-bar bg-info" role="progressbar" style="width: ' + skillLvlBarPercentage + '%">' + skillType.japanese[skillLvl] + '</div>';
  htmlCode +=   '</div>';
  return htmlCode;
}

function generateSkillBars(languageName, expTimeBarPercentage, expTime, skillLvlBarPercentage, skillLvl) {
  var htmlCode = '';
  htmlCode += '<div class="single-skill-container">';
  htmlCode +=   '<h4>' + languageName + '</h4>';
  htmlCode +=   generateExpTimeBar(expTimeBarPercentage, expTime);
  htmlCode +=   generateSkillLvlBar(skillLvlBarPercentage, skillLvl, skillLvlText);
  htmlCode += '</div>';
  return htmlCode;
}

function generateLanguageSkillBar(languageName, skillLvlBarPercentage, skillLvl) {
  var htmlCode = '';
  htmlCode += '<div class="single-skill-container">';
  htmlCode +=   '<h4>';
  htmlCode +=     '<span lang="pt-BR">' + langName.portuguese[languageName] + '</span>';
  htmlCode +=     '<span lang="en">' + langName.english[languageName] + '</span>';
  htmlCode +=     '<span lang="jp">' + langName.japanese[languageName] + '</span>';
  htmlCode +=   '</h4>';
  htmlCode +=   generateSkillLvlBar(skillLvlBarPercentage, skillLvl, languageSkillLvlText);
  htmlCode += '</div>';
  return htmlCode;
}

function generateFormattedTimeEnglish(totalTime) {
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

function generateFormattedTimePortuguese(totalTime) {
  var years = Math.floor(totalTime / 12);
  var months = totalTime % 12;

  // Generate years text
  var yearsText = '';
  if (years == 1) {
    yearsText = '1 ano';
  }
  else if (years >= 2) {
    yearsText = years + ' anos';
  }

  // Generate months text
  var monthsText = '';
  if (months == 1) {
    if (years == 0) {
      monthsText = '1m';
    }
    else {
      monthsText = '1 mês';
    }
  }
  else if (months >= 2) {
    monthsText = months + ' meses';
  }

  return yearsText + ' ' + monthsText;
}

function generateFormattedTimeJapanese(totalTime) {
  var years = Math.floor(totalTime / 12);
  var months = totalTime % 12;

  // Generate years text
  var yearsText = '';
  if (years >= 1) {
    yearsText = years + '年';
  }

  // Generate months text
  var monthsText = '';
  if (months >= 1) {
    monthsText = months + '月';
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
          100 * array[i].time / biggestTime, array[i].time,
          100 * array[i].skill / 7, array[i].skill));
        numSkillsToShow--;
    }
    i++;
  }
}

function appendLangArrayToHTML(array, divId) {
  var numSkillsToShow = (array.length <= MAX_SKILLS_TO_SHOW) ? array.length : MAX_SKILLS_TO_SHOW;
  var i = 0;
  while (numSkillsToShow > 0 && i < array.length) {
    if (!existOnArray(blackList, array[i].name)) {
      $(divId).append(generateLanguageSkillBar(array[i].name,
        100 * array[i].skill / 6, array[i].skill));
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

var skillLvlText = {
  portuguese: ["", "Somente Sintaxe", "Pouca Experiência", "Acostumado a usar",
    "Experiente", "Confiante", "Muito Confiante", "Proficiente"],
  english: ["", "Only Syntax", "Little Experience", "Used to it",
    "Experient", "Confident", "Very Confident", "Proficient"],
  japanese: ["", "文法のみ", "やや経験を持つ", "慣れている",
    "経験を持つ", "自信がある", "よく自信ある", "堪能"],
}

var languageSkillLvlText = {
  portuguese: ["", "Básico", "Elementar", "Intermediário",
    "Intermediário", "Avançado", "Fluente / Nativo"],
  english: ["", "Beginner", "Elementary", "Intermediate",
    "Upper Intermediate", "Advanced", "Fluent / Native"],
  japanese: ["", "初級", "初級", "中級",
    "中級", "上級", "流暢"],
}
