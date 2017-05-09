'use strict';

// Lock interactive feature while animating
function disableInteractiveness() {
  Game.Image.allowInteraction = false;
}

// Unlock interactive feature
function enableInteractiveness() {
  Game.Image.allowInteraction = true;
}

Game.Image = function(texture) {
  // Class initialization
  arguments[0] = resources["img/" + arguments[0]].texture;
  PIXI.Sprite.apply(this, arguments); // Getting the PIXI.Sprite arguments and allowing to run its constructor
  this.anchor.set(0.5, 0.5); // Default anchor at center
  this.interactive = false;

  // PROPERTIES
  // Static properties
  Game.Image.allowInteraction = true;

  // Public properties
  this.z_order = 5;

  // Private properties
  var animationDelay = 33; // delay between frames of "Change value" methods
  var objInstance = this; // reference to this object

  // METHODS
  // Public methods
  // Set value methods (changes instantly)
  this.setPosition = function(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
    UpdateScreen();
  }
  this.setScale = function(newScale) {
    this.scale.set(newScale, newScale);
    UpdateScreen();
  }
  this.setAlpha = function(newAlpha) {
    this.alpha = newAlpha;
    UpdateScreen();
  }
  this.setZorder = function(newZorder) {
    this.z_order = newZorder;
    UpdateScreen();
  }
  this.setTint = function(red, green, blue) {
    this.tint = (red << 16) + (green << 8) + blue;
    UpdateScreen();
  }
  this.setBrightness = function(newBrightness) {
    this.setTint(newBrightness, newBrightness, newBrightness);
    UpdateScreen();
  }
  this.setRotation = function(newRotation) {
    this.rotation = newRotation * (Math.PI / 180); // Changing from radians to degree
    UpdateScreen();
  }
  this.setHeight = function(newHeight) {
    this.height = newHeight;
    this.scale.x = this.scale.y;
    UpdateScreen();
  }
  this.setWidth = function(newWidth) {
    this.width = newWidth;
    this.scale.y = this.scale.x;
    UpdateScreen();
  }
  this.setAnchor = function(anchorX, anchorY) {
    this.anchor.set(anchorX, anchorY);
    UpdateScreen();
  }
  this.setInteractive = function(isInteractive) {
    this.interactive = isInteractive;
    UpdateScreen();
  }

  // Get value methods
  this.getScale = function() {
    return this.scale.x;
  }
  this.getBrightness = function() {
    return this.tint / 65793;
  }

  // Change value methods (animations that change properties within time)
  this.changeAlpha = function(newAlpha, time) {
    this.filters = null;
    var elapsedTime = 0;
    var initialAlpha = this.alpha;
    var fadeInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < time) {
        objInstance.alpha = initialAlpha + (newAlpha - initialAlpha) * (elapsedTime / time);
      }
      else {
        objInstance.alpha = newAlpha;
        clearInterval(fadeInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }

  this.changeBrightness = function(newBrightness, time) {
    this.filters = null;
    var elapsedTime = 0;
    var animationTime = time;
    var initialBrightness = this.getBrightness();
    var changeBrightnessInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setBrightness(initialBrightness + Math.round((newBrightness - initialBrightness) * (elapsedTime / animationTime)));
      }
      else {
        objInstance.setBrightness(newBrightness);
        clearInterval(changeBrightnessInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }

  this.changeScale = function(newScale, time) {
    objInstance.filters = null;
    var elapsedTime = 0;
    var animationTime = time;
    var initialScale = objInstance.getScale();
    var changeScaleInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        objInstance.setScale(initialScale + ((newScale - initialScale) * (elapsedTime / animationTime)));
      }
      else {
        objInstance.setScale(newScale);
        clearInterval(changeScaleInterval); // Stop calling itself
        updateGlowRectangle();
      }
      UpdateScreen();
    }, animationDelay);
  }

  this.move = function(newX, newY, time) {
    var elapsedTime = 0;
    var animationTime = time;
    var initialPosition = {x: this.x, y: this.y};
    objInstance.filters = null;
    var moveInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < animationTime) {
        var movement = moveFunction(elapsedTime, animationTime);
        objInstance.setPosition(initialPosition.x + ((newX - initialPosition.x) * movement), initialPosition.y + ((newY - initialPosition.y) * movement));
      }
      else {
        objInstance.setPosition(newX, newY);
        clearInterval(moveInterval); // Stop calling itself
        updateGlowRectangle();
      }
      UpdateScreen();
    }, animationDelay);
  }

  this.addGlow = function(strength = 10) {
    updateGlowRectangle();
    // distance, outerStrength, innerStrength, color, quality
    this.filters = [new PIXI.filters.GlowFilter(strength, 2, 1, 0xFFFFFF, 1)];
    UpdateScreen();
  }

  this.removeGlow = function() {
    this.filters = null;
    UpdateScreen();
  }

  // Enable-Disable Methods
  this.disable = function() {
    this.filters = null;
    this.visible = false;
    UpdateScreen();
  }
  this.enable = function() {
    this.visible = true;
    UpdateScreen();
  }

  // Implementing the mouseover and mouseout methods
  this.mouseover = function(mouse) {
    if (Game.Image.allowInteraction && this.onMouseOver != null)
      setTimeout(function() {
        objInstance.onMouseOver();
      }, 10);
  }
  this.mouseout = function(mouse) {
    if (Game.Image.allowInteraction && this.onMouseOut != null)
      this.onMouseOut();
  }
  this.click = function(mouse) {
    if (Game.Image.allowInteraction && this.onClick != null) {
      this.onClick();
    }
  }

  // Return the graphic(s) to be drawn
  this.draw = function(stage) {
    stage.addChild(this);
  }

  // Private methods
  // Glow area
  var updateGlowRectangle = function() {
    objInstance.filterArea = new Rectangle( objInstance.x - objInstance.width/2 - 15,
                                            objInstance.y - objInstance.height/2 - 15,
                                            objInstance.width + 30,
                                            objInstance.height + 30);
  }

  // Returns values between 0 and 1
  // 0 is the initial position
  // 1 is the final position
  var moveFunction = function(elapsedTime, animationTime) {
    var x = elapsedTime / animationTime;
    return 0.5*Math.sin((10*x/Math.PI) - 0.5*Math.PI)+0.5;
  }

}

Game.Image.prototype = Object.create(PIXI.Sprite.prototype); // Inherance from PIXI.Sprite
Game.Image.prototype.constructor = Game.Image;
