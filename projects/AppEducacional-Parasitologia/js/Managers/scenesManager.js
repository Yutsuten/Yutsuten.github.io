'use strict';

var scene = [];
var sceneLoader = [];
var onSceneOpen = [];
var onSceneClose = [];

var lastScene = null;
var currentScene = null;
var animDelay = 33;
var sceneAnimationTime = 400;
var elapsedTime = 0;
var sceneFadeInterval;

// No animation at all
function setScene(newScene) {
  lastScene = currentScene;
  currentScene = newScene;
  scene[currentScene].playSceneMusic();
  scene[currentScene].enable();
  UpdateScreen();
}

// With animation
function changeScene(newScene) {
  elapsedTime = 0;

  // Changing to new scene
  lastScene = currentScene;
  currentScene = newScene;

  // Interval when both scenes appear at the same time
  scene[lastScene].disable();
  scene[currentScene].disable();
  scene[currentScene].saveAlphaValues();
  scene[currentScene].setFade(0);

  // Play new music
  scene[currentScene].playSceneMusic();

  sceneFade();
  sceneFadeInterval = setInterval(sceneFade, animDelay);
}

function sceneFade() {
  elapsedTime += animDelay;
  // Not finished animation
  if (elapsedTime < sceneAnimationTime) {
    // Draw the older scene
    scene[lastScene].showScene();
    // Change the newer scene fade
    scene[currentScene].setFade(elapsedTime/sceneAnimationTime);
  }
  // Finished animation
  else {
    scene[currentScene].setFade(1);
    scene[currentScene].enable();
    clearInterval(sceneFadeInterval); // Stop calling itself
  }
  UpdateScreen();
}

function UpdateScreen() {
  if (currentScene != null) { // Only update when a scene is set
    if (scene[currentScene] == null) { // Invalid scene
      console.warn("Cannot draw on nonexistent scene. Scene number: " + currentScene);
    }
    scene[currentScene].showScene();
    ScreenUpdateRequest();
  }
}
