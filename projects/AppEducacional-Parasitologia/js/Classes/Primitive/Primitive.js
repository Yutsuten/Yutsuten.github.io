'use strict';

Game.Primitive = function() {
  // Class initialization
  Graphics.apply(this); // Calling the Graphics constructor

  // PROPERTIES
  // Public properties
  this.z_order = 5;

  // Private properties
  var animationDelay = 33; // delay between frames (for changing background mask alpha)
  var objInstance = this; // reference to this object

  // METHODS
  // Public methods
  // Set value methods (changes instantly)
  this.setPosition = function(coordX, coordY) {
    this.x = coordX;
    this.y = coordY;
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
  this.setColor = function(red, green, blue) {
    this.tint = (red << 16) + (green << 8) + blue;
    UpdateScreen();
  }
  this.setRotation = function(newRotation) {
    this.rotation = (newRotation + 90) * (Math.PI / 180); // Changing from radians to degree
    UpdateScreen();
  }

  // Change value methods (animations that change properties within time)
  this.changeAlpha = function(newAlpha, time) {
    var elapsedTime = 0;
    var initialAlpha = this.alpha;
    var fadeInterval = setInterval( function() {
      elapsedTime += animationDelay;
      if (elapsedTime < time) {
        objInstance.setAlpha(initialAlpha + (newAlpha - initialAlpha) * (elapsedTime / time));
      }
      else {
        objInstance.setAlpha(newAlpha);
        clearInterval(fadeInterval); // Stop calling itself
      }
      UpdateScreen();
    }, animationDelay);
  }

  // Enable-Disable Methods
  this.disable = function() {
    this.visible = false;
    UpdateScreen();
  }
  this.enable = function() {
    this.visible = true;
    UpdateScreen();
  }

  // Return the graphic(s) to be drawn
  this.draw = function(stage) {
    stage.addChild(this);
  }

}

Game.Primitive.prototype = Object.create(Graphics.prototype); // Inherance from Graphics
Game.Primitive.prototype.constructor = Game.Primitive;
