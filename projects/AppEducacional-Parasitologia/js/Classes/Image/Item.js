'use strict';

Game.Item = function(texture) {
  // Class initialization
  Game.Image.apply(this, arguments);
  this.interactive = true;
}

Game.Item.prototype = Object.create(Game.Image.prototype);
Game.Item.prototype.constructor = Game.Item;
