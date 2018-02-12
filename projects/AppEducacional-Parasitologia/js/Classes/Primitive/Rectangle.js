'use strict';

Game.Rectangle = function(rectangleWidth, rectangleHeight) {
  // Class initialization
  Game.Primitive.apply(this); // Calling the Primitive constructor

  // Drawing the rectangle
  this.beginFill(0xFFFFFF);
  this.drawRect(0, 0, rectangleWidth, rectangleHeight);
  this.endFill();
}

Game.Rectangle.prototype = Object.create(Game.Primitive.prototype); // Inherance from Graphics
Game.Rectangle.prototype.constructor = Game.Rectangle;
