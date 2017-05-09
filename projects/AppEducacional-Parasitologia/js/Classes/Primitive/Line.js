'use strict';

Game.Line = function(x1, y1, x2, y2, lineWidth) {
  // Class initialization
  Game.Primitive.apply(this); // Calling the Primitive constructor

  // Drawing the line
  this.lineStyle(lineWidth, 0xFFFFFF, 1); // width, color, alpha
  this.moveTo(x1, y1);
  this.lineTo(x2, y2);
  this.endFill();

  // PROPERTIES
  // Private properties
  var objInstance = this; // reference to this object
  var angle = Math.atan2(y2-y1, x2-x1)*180/Math.PI;
  var triangleAtBeginning = null;
  var triangleAtEnd = null;
  var xDirection = x2-x1;
  var yDirection = y2-y1;

  if (Math.abs(xDirection) > Math.abs(yDirection)) {
    var normalizer = Math.abs(xDirection);
    xDirection /= normalizer;
    yDirection /= normalizer;
  }
  else {
    var normalizer = Math.abs(yDirection);
    xDirection /= normalizer;
    yDirection /= normalizer;
  }

  // METHODS
  // Do not allow call some methods
  this.setPosition = null;
  this.setRotation = null;

  var distributeProperties = function() {
    if (triangleAtBeginning) {
      triangleAtBeginning.alpha = objInstance.alpha;
      triangleAtBeginning.z_order = objInstance.z_order;
      triangleAtBeginning.tint = objInstance.tint;
    }
    if (triangleAtEnd) {
      triangleAtEnd.alpha = objInstance.alpha;
      triangleAtEnd.z_order = objInstance.z_order;
      triangleAtEnd.tint = objInstance.tint;
    }
  }

  this.setAlpha = function(newAlpha) {
    this.alpha = newAlpha;
    distributeProperties();
    UpdateScreen();
  }
  this.setZorder = function(newZorder) {
    this.z_order = newZorder;
    distributeProperties();
    UpdateScreen();
  }
  this.setColor = function(red, green, blue) {
    this.tint = (red << 16) + (green << 8) + blue;
    distributeProperties();
    UpdateScreen();
  }

  // Method to make an arrow
  this.addArrowAtBeginning = function(size = 7*lineWidth) {
    triangleAtBeginning = new Game.Triangle(size, size);
    triangleAtBeginning.setPosition(x1 + -xDirection*size/2, y1 + -yDirection*size/2);
    triangleAtBeginning.setRotation(angle+180);
    distributeProperties();
    UpdateScreen();
  }

  this.addArrowAtEnd = function(size = 7*lineWidth) {
    triangleAtEnd = new Game.Triangle(size, size);
    triangleAtEnd.setPosition(x2 + xDirection*size/2, y2 + yDirection*size/2);
    triangleAtEnd.setRotation(angle);
    distributeProperties();
    UpdateScreen();
  }

  // Return the graphic(s) to be drawn
  this.draw = function(stage) {
    stage.addChild(this);
    if (triangleAtBeginning)
      stage.addChild(triangleAtBeginning);
    if (triangleAtEnd)
      stage.addChild(triangleAtEnd);
  }

}

Game.Line.prototype = Object.create(Game.Primitive.prototype); // Inherance from Graphics
Game.Line.prototype.constructor = Game.Line;
