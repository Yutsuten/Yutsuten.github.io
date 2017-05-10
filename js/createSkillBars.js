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
  '.skills-container #languages-container', langName);
