'use strict';

Game.Scene = function() {
  // Class initialization

  // PROPERTIES
  // Private properties
  var spritesheet = [];
  var activatedBackground = 0;
  var music = null;
  var musicVolume = null;
  var itemAlpha = [];
  var spritesheetAlpha = [];
  var itemInteractiveness = [];
  var backgroundInteractiveness = null;
  var itemsArray = [];
  var enabled = false;
  var backgroundMask = new Game.Rectangle(renderer.view.width, renderer.view.height);
  var subtitle = new Game.Text("",
    {
      "default": {fontFamily: "Book Antiqua", fontSize: "56px",
        dropShadow: true, dropShadowBlur: 10,
        fill: 0xFFFFFF, align: "left"
      },
      "i" : {
        fontStyle: "italic"
      },
      "b" : {
        fontStyle: "bold"
      }
    });

  // Public properties
  this.background = null;
  this.item = {};

  // Variables initialization
  backgroundMask.setAlpha(0);
  subtitle.anchor.set(0.5, 0.5);
  subtitle.position.set(960, 1000);

  // METHODS
  // Public methods
  this.setSubtitle = function(text) {
    subtitle.text = text;
    UpdateScreen();
  }

  this.setMusic = function(musicDirectory, volume = 1) {
    music = musicDirectory;
    musicVolume = volume;
  }

  this.playSceneMusic = function() {
    if (music != null)
      playMusic(music, musicVolume);
    else
      console.log("ERROR: No music is set to this scene");
  }

  this.addAllItemsToScene = function() {
    // Add from object to array
    for (var singleItem in this.item) {
      itemsArray.push(this.item[singleItem]);
    }
    // Sort items by Z order
    itemsArray.sort(function(a, b) {return b.z_order - a.z_order;}); // Sort items by Z order
  }

  this.addSpriteSheet = function(newSpritesheet) {
    spritesheet.push(newSpritesheet);
  }

  this.setBackgroundMaskColor = function(red, green, blue) {
    backgroundMask.setColor(red, green, blue);
  }

  this.setBackgroundMaskAlpha = function(newAlpha) {
    backgroundMask.setAlpha(newAlpha);
  }

  this.changeBackgroundMaskAlpha = function(newAlpha, time) {
    backgroundMask.changeAlpha(newAlpha, time);
  }

  this.saveAlphaValues = function() {
    for (var i = 0; i < itemsArray.length; i++) {
      itemAlpha[i] = itemsArray[i].alpha;
    }
    for (var i = 0; i < spritesheet.length; i++) {
      spritesheetAlpha[i] = spritesheet[i].getAlpha();
    }
  }

  this.saveInteractiveness = function() {
    backgroundInteractiveness = this.background.interactive;
    for (var i = 0; i < itemsArray.length; i++) {
      itemInteractiveness[i] = itemsArray[i].interactive;
    }
  }

  this.setFade = function(fadeValue) {
    // Set the items alpha to the desired alpha
    this.background.setAlpha(fadeValue);
    for (var i = 0; i < itemsArray.length; i++) {
      if (itemAlpha[i] != 0)
        itemsArray[i].alpha = fadeValue / itemAlpha[i];
    }
  }

  this.disable = function() {
    if (enabled) {
      this.background.interactive = false;
      for (var i = 0; i < itemsArray.length; i++) {
        itemsArray[i].interactive = false;
      }
      enabled = false;
    }
  }

  this.enable = function() {
    if (!enabled) {
      this.background.interactive = backgroundInteractiveness;
      for (var i = 0; i < itemsArray.length; i++) {
        itemsArray[i].interactive = itemInteractiveness[i];
      }
      enabled = true;
    }
  }

  this.showScene = function() {
    this.background.draw(stage);
    backgroundMask.draw(stage);
    for (var i = 0; i < itemsArray.length; i++)
      itemsArray[i].draw(stage);
    stage.addChild(subtitle);
  }
}
