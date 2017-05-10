// Programming languages
appendArrayToHTML(generateArrayFromObject(experience.programming.language), '#skills-container #languages', languageName);

// Frameworks
appendArrayToHTML(generateArrayFromObject(experience.programming.framework), '#skills-container #frameworks', frameworkName);

// Databases
appendArrayToHTML(generateArrayFromObject(experience.programming.database), '#skills-container #databases', databaseName);

// Tools
appendArrayToHTML(generateArrayFromObject(experience.programming.tool), '#skills-container #tools', toolName);
