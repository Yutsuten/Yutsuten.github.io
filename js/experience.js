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
      oracle: { time: 0, skill: 2 },
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
    portuguese: { skill: 7 }, // Native
    english: { skill: 4 }, // Upper-Intermediate
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
experience.programming.database.oracle.time += 2;

// (UNESP classes) Artificial Intelligence
experience.programming.language.lisp.time += 3;
experience.programming.language.prolog.time += 3;
experience.programming.concept.artificialIntelligence.time += 3;

// (UNESP classes) Augmented Reality
experience.programming.language.csharp.time += 2;
experience.programming.tool.unity.time += 2;
experience.programming.paradigm.objectOriented.time += 2;

// (Uncompleted project) RPG_TurnBased
experience.programming.language.csharp.time += 2;
experience.programming.tool.unity.time += 2;
experience.programming.paradigm.objectOriented.time += 2;

// (Uncompleted project) App Jam (Store Website)
experience.programming.language.html5.time += 1;
experience.programming.language.javascript.time += 1;
experience.programming.framework.angularjs.time += 1;

// (LTIA) BeatCube
experience.programming.language.csharp.time += 6;
experience.programming.tool.unity.time += 6;
experience.programming.tool.git.time += 2;
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
