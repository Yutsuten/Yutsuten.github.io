'use strict';

Game.Triangle = function(triangleWidth, triangleHeight) {
  // Class initialization
  Game.Primitive.apply(this); // Calling the Primitive constructor

  // Drawing the triangle
  this.beginFill(0xFFFFFF);
  this.drawPolygon([
      -triangleWidth/2, triangleHeight,
      triangleWidth/2, triangleHeight,
      0, 0
  ]);
  this.endFill();
}

Game.Triangle.prototype = Object.create(Game.Primitive.prototype); // Inherance from Graphics
Game.Triangle.prototype.constructor = Game.Triangle;
