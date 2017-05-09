'use strict';

Game.SpriteSheet = function(textureDirectory, spriteWidth, spriteHeight) {
  var spritesheet = TextureCache["img/" + textureDirectory];
  var width = spriteWidth;
  var height = spriteHeight;

  // Image properties
  var posX = 0;
  var posY = 0;
  var scale = 1;
  var alpha = 1;

  // Spritesheet properties
  var numSpritesLine = 1;
  var numSprites = 1;
  var animDelay = 500;
  var currentFrame = 0;
  var spriteResult = null;
  var loop = true;
  var animationLoop = null;

  // 'IMAGE METHODS'
  this.setPosition = function(coordX, coordY) {
    posX = coordX;
    posY = coordY;
  }

  this.setScale = function(newScale) {
    scale = newScale;
  }

  this.setAlpha = function(newAlpha) {
    alpha = newAlpha;
  }

  this.getAlpha = function() {
    return alpha;
  }

  // 'SPRITESHEET METHODS'
  this.setFrame = function(frame) {
    currentFrame = frame;
  }

  this.setNumSprites = function(numSpritesPerLine, numberOfSprites) {
    numSpritesLine = numSpritesPerLine;
    numSprites = numberOfSprites;
  }

  this.setAnimationDelay = function(animationDelay) {
    animDelay = animationDelay;
  }

  this.setLoop = function(loopValue) {
    loop = loopValue;
  }

  this.beginAnimation = function() {
    // The animation loop
    updateAnimation();
    animationLoop = setInterval(updateAnimation, animDelay);
  }

  this.stopAnimation = function() {
    clearInterval(animationLoop);
  }

  var updateAnimation = function() {
    spritesheet.frame = new PIXI.Rectangle( width * (currentFrame % numSpritesLine),  // The column
                                            height * Math.floor(currentFrame / numSpritesLine), // The line
                                            width, height);
    spriteResult = new PIXI.Sprite(spritesheet);
    spriteResult.anchor.set(0.5, 0.5);
    spriteResult.position.set(posX, posY);
    spriteResult.scale.set(scale, scale);
    currentFrame++;
    if (loop) {
      currentFrame = currentFrame % numSprites;
    }
    else { // Run once the animation
      if (currentFrame == numSprites)
        clearInterval(animationLoop);
    }
    UpdateScreen();
  }

  this.getCurrentFrame = function() {
    spriteResult.alpha = alpha;
    return spriteResult;
  }
}
