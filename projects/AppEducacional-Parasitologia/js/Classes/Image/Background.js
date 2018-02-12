'use strict';

Game.Background = function(texture) {
  // Class initialization
  Game.Image.apply(this, arguments);
  this.anchor.set(0, 0); // Default anchor at top-left
  this.interactive = false;
  this.width = renderer.width;
  this.height = renderer.height;

  // PROPERTIES
  // Public properties
  this.z_order = null;

  // METHODS
  // Public methods
  // Disable methods that must not be called
  // Set value methods (changes instantly)
  this.setPosition = null;
  this.setScale = null;
  this.setZorder = null;
  this.setRotation = null;
  this.setHeight = null;
  this.setWidth = null;
  this.setAnchor = null;

  // Change value methods (animations that change properties within time)
  this.changeScale = null;
  this.move = null;
  this.addGlow = null;
  this.removeGlow = null;
  this.disable = null;
  this.enable = null;
}

Game.Background.prototype = Object.create(Game.Image.prototype);
Game.Background.prototype.constructor = Game.Background;
