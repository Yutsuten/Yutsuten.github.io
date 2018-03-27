var progLangName = {
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

var langName = {
  portuguese: {portuguese: "Português", english: "Inglês", japanese: "Japonês"},
  english: {portuguese: "Portuguese", english: "English", japanese: "Japanese"},
  japanese: {portuguese: "ポルトガル語", english: "英語", japanese: "日本語"},
}
var blackList = [
  'assembly',
  'lisp',
  'prolog',
  'codeblocks',
]
// SKILLS: 0 to 7
// 0: Never used
// 1: Only Syntax
// 2: Little Experience (1+ small project done, 1+ month of experience)
// 3: Used to it (2+ small projects done, 6+ months of experience)
// 4: Experient (1+ big projects done, 1+ years of experience)
// 5: Confident (2+ big projects done, 2+ years of experience)
// 6: Very Confident (5+ big projects done, 5+ years of experience)
// 7: Mastered (10+ big projects done, 10+ years of experience)

var experience = {
  programming: {
    language: {
      assembly: { time: 0, skill: 2 },
      javascript: { time: 0, skill: 4 },
      csharp: { time: 0, skill: 5 },
      html5: { time: 0, skill: 4 },
      css: { time: 0, skill: 3 },
      c: { time: 0, skill: 4 },
      java: { time: 0, skill: 2 },
      php: { time: 0, skill: 1 },
      lisp: { time: 0, skill: 1 },
      prolog: { time: 0, skill: 1 },
    },
    database: {
      oracle: { time: 0, skill: 0 },
      mysql: { time: 0, skill: 0 },
      mongodb: { time: 0, skill: 0 },
    },
    concept: {
      artificialIntelligence: { time: 0, skill: 3 },
    },
    framework: {
      angularjs: { time: 0, skill: 2 },
      bootstrap: { time: 0, skill: 3 },
      jQuery: { time: 0, skill: 2 },
      ionic: { time: 0, skill: 2 },
      mocha: { time: 0, skill: 2 },
      pixijs: { time: 0, skill: 4 },
      stylus: { time: 0, skill: 2 },
      pug: { time: 0, skill: 2 },
      dotnet: { time: 0, skill: 4 },
    },
    tool: {
      unity: { time: 0, skill: 4 },
      atom: { time: 0, skill: 4 },
      visualStudio: { time: 0, skill: 4 },
      codeblocks: { time: 0, skill: 3 },
      git: { time: 0, skill: 5 },
    },
    paradigm: {
      procedural: { time: 0, skill: 0 },
      objectOriented: { time: 0, skill: 0 },
    },
  },
  language: {
    portuguese: { skill: 6 }, // Native
    english: { skill: 5 }, // Advanced
    japanese: { skill: 4 }, // Upper-Intermediate
  },
}

// (UNESP classes) Algorithm 1 and 2
experience.programming.language.c.time += 9;
experience.programming.tool.codeblocks.time += 9;
experience.programming.paradigm.procedural.time += 9;

// (UNESP classes) Data Structure 1 and 2, Operating System 1, Computational Numerical Methods, Operational Research 1
experience.programming.language.c.time += 9;
experience.programming.tool.codeblocks.time += 9;
experience.programming.paradigm.procedural.time += 9;

// (UNESP classes) Programmation Techniques
experience.programming.language.java.time += 3;

// (UNESP classes) Compilers, Operating System 2
experience.programming.language.c.time += 3;
experience.programming.paradigm.procedural.time += 3;

// (UNESP classes) Microcontroller
experience.programming.language.assembly.time += 3;

// (UNESP classes) Operational Research 2
experience.programming.language.csharp.time += 3;
experience.programming.framework.dotnet.time += 3;

// (UNESP classes) Database 2
//experience.programming.database.oracle.time += 2;

// (UNESP classes) Artificial Intelligence
experience.programming.language.lisp.time += 3;
experience.programming.language.prolog.time += 3;
experience.programming.concept.artificialIntelligence.time += 3;

// (UNESP classes) Augmented Reality
experience.programming.language.csharp.time += 2;
experience.programming.tool.unity.time += 2;
experience.programming.tool.visualStudio.time += 2;
experience.programming.paradigm.objectOriented.time += 2;

// (Uncompleted project) RPG_TurnBased
experience.programming.language.csharp.time += 2;
experience.programming.tool.unity.time += 2;
experience.programming.tool.visualStudio.time += 2;
experience.programming.paradigm.objectOriented.time += 2;

// (Uncompleted project) App Jam (Store Website)
experience.programming.language.html5.time += 1;
experience.programming.language.javascript.time += 1;
experience.programming.framework.angularjs.time += 1;

// (LTIA) BeatCube
experience.programming.language.csharp.time += 6;
experience.programming.tool.unity.time += 6;
experience.programming.tool.git.time += 2;
experience.programming.tool.visualStudio.time += 6;
experience.programming.paradigm.objectOriented.time += 6;

// (LTIA) SEMENG 2016
experience.programming.language.html5.time += 1;
experience.programming.framework.ionic.time += 1;
experience.programming.tool.atom.time += 1;

// (LTIA) ASTRO 25 Mastersite Applications Simulator
experience.programming.language.csharp.time += 6;
experience.programming.framework.dotnet.time += 6;
experience.programming.tool.visualStudio.time += 6;
experience.programming.language.html5.time += 6;
experience.programming.language.css.time += 6;
experience.programming.framework.bootstrap.time += 6;
experience.programming.tool.atom.time += 6;
experience.programming.paradigm.objectOriented.time += 6;
experience.programming.tool.git.time += 10;

// (UNESP project) AI-RPG-game
experience.programming.language.csharp.time += 8;
experience.programming.concept.artificialIntelligence.time += 8;
experience.programming.tool.unity.time += 8;
experience.programming.tool.visualStudio.time += 8;
experience.programming.paradigm.objectOriented.time += 8;
experience.programming.tool.git.time += 8;

// (LTIA) AppEducacional-Parasitologia
experience.programming.language.javascript.time += 6;
experience.programming.language.html5.time += 1;
experience.programming.language.css.time += 1;
experience.programming.tool.atom.time += 6;
experience.programming.framework.pixijs.time += 6;
experience.programming.paradigm.objectOriented.time += 6;

// Habitica
experience.programming.language.javascript.time += 2;
experience.programming.tool.atom.time += 2;
experience.programming.framework.pug.time += 2;
experience.programming.framework.stylus.time += 2;
experience.programming.framework.angularjs.time += 2;
experience.programming.framework.mocha.time += 2;
experience.programming.paradigm.objectOriented.time += 2;
experience.programming.tool.git.time += 2;
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

// Programming languages
appendProgExpArrayToHTML(generateArrayFromObject(experience.programming.language),
  '.skills-container #programmingLanguages', progLangName);

// Frameworks
appendProgExpArrayToHTML(generateArrayFromObject(experience.programming.framework),
  '.skills-container #frameworks', frameworkName);

// Databases
/*appendProgExpArrayToHTML(generateArrayFromObject(experience.programming.database),
  '.skills-container #databases', databaseName);*/

// Tools
appendProgExpArrayToHTML(generateArrayFromObject(experience.programming.tool),
  '.skills-container #tools', toolName);

// Languages
appendLangArrayToHTML(generateArrayFromObject(experience.language),
  '.skills-container #languages-container');
