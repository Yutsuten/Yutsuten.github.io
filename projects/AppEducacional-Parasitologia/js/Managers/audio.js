'use strict';

var musicEnabled = true;
var soundEffectsEnabled = true;

var gameMusic = null;
var musicVolume = 1.0;
var gameSound = null;
var soundVolume = 1.0;

function playMusic(musicDirectory, musicVolume) {
  if (musicEnabled) {
    if (gameMusic != null)
      gameMusic.pause();
    gameMusic = new Audio("audio/" + musicDirectory);
    gameMusic.loop = true;
    gameMusic.volume = musicVolume;
    gameMusic.play();
  }
}

function pauseMusic() {
  gameMusic.pause();
}

function resumeMusic() {
  gameMusic.play();
}

function playSoundEffect(soundDirectory, soundVolume) {
  if (soundEffectsEnabled) {
    if (gameSound != null)
      gameSound.pause();
    gameSound = new Audio("audio/" + soundDirectory);
    gameSound.volume = soundVolume;
    gameSound.play();
  }
}
