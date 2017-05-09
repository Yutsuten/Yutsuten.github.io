var experience = {
  programming: {
    language: {
      assembly: { time: 0, skill: 0 },
      javascript: { time: 0, skill: 0 },
      csharp: { time: 0, skill: 0 },
      html5: { time: 0, skill: 0 },
      css: { time: 0, skill: 0 },
      c: { time: 0, skill: 0 },
      java: { time: 0, skill: 0 },
      php: { time: 0, skill: 0 },
      lisp: { time: 0, skill: 0 },
      prolog: { time: 0, skill: 0 },
    },
    database: {
      oracle: { time: 0, skill: 0 },
      mysql: { time: 0, skill: 0 },
      mongodb: { time: 0, skill: 0 },
    },
    testing: {
      mocha: { time: 0, skill: 0 },
    },
    concept: {
      artificialIntelligence: { time: 0, skill: 0 },
    },
    framework: {
      angularjs: { time: 0, skill: 0 },
      bootstrap: { time: 0, skill: 0 },
      ionic: { time: 0, skill: 0 },
      pixijs: { time: 0, skill: 0 },
      stylus: { time: 0, skill: 0 },
      pug: { time: 0, skill: 0 },
      dotnet: { time: 0, skill: 0 },
    },
    tool: {
      unity: { time: 0, skill: 0 },
      atom: { time: 0, skill: 0 },
      visualStudio: { time: 0, skill: 0 },
      codeblocks: { time: 0, skill: 0 },
      git: { time: 0, skill: 0 },
    },
    paradigm: {
      procedural: { time: 0, skill: 0 },
      objectOriented: { time: 0, skill: 0 },
    },
  },
  language: {
    portuguese: { skill: 0 },
    english: { skill: 0 },
    japanese: { skill: 0 },
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
experience.programming.testing.mocha.time += 2;
experience.programming.paradigm.objectOriented.time += 2;
experience.programming.tool.git.time += 2;
