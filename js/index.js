function generateSkillBars(languageName, expTimeBarPercentage, expTimeBarText, skillLvlBarPercentage, skillLvlBarText) {
  var htmlCode = '';
  htmlCode += '<div class="single-skill-container">';
  htmlCode +=   '<h3>' + languageName + '</h3>';
  htmlCode +=   '<div class="progress experience-time">';
  htmlCode +=     '<div class="progress-bar bg-info" role="progressbar" style="width: ' + expTimeBarPercentage + '%">' + expTimeBarText + '</div>';
  htmlCode +=   '</div>';
  htmlCode +=   '<div class="progress skill-level">';
  htmlCode +=     '<div class="progress-bar bg-success" role="progressbar" style="width: ' + skillLvlBarPercentage + '%">' + skillLvlBarText + '</div>';
  htmlCode +=   '</div>';
  htmlCode += '</div>';
  return htmlCode;
}

$('#skills-container').append(generateSkillBars("C#", 40, "2 years", 60, "Experienced"));
