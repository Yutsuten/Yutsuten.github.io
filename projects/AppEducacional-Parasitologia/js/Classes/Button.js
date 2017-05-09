'use strict';

Game.Button = function(buttonNormal, buttonHover, buttonClicked, text, style) {
  // Class initialization
  buttonNormal = new Game.Item(buttonNormal);
  buttonHover = new Game.Item(buttonHover);
  buttonClicked = new Game.Item(buttonClicked);
  text = new Game.Text(text, style);

  // PROPERTIES
  // Private properties
  var objInstance = this; // reference to this object
  var state = 0; //0: normal, 1: hover, 2: clicked

  // METHODS
  // Public methods
  // Set value methods (changes instantly)
  this.setPosition = function(coordX, coordY) {
    buttonNormal.position.set(coordX, coordY);
    buttonHover.position.set(coordX, coordY);
    buttonClicked.position.set(coordX, coordY);
    text.position.set(coordX, coordY);
    text.setAnchor(0.5, 0.5);
  }
  this.setAlpha = function(newAlpha) {
    buttonNormal.setAlpha(newAlpha);
    buttonHover.setAlpha(newAlpha);
    buttonClicked.setAlpha(newAlpha);
    text.setAlpha(newAlpha);
  }
  this.setZorder = function(newZorder) {
    buttonNormal.setZorder(newZorder);
    buttonHover.setZorder(newZorder);
    buttonClicked.setZorder(newZorder);
    text.setZorder(newZorder-1);
  }

  buttonHover.mouseout = function(mouse) {
    btNormal();
  }
  buttonClicked.mouseout = function(mouse) {
    btNormal();
  }
  buttonNormal.mouseover = function(mouse) {
    btHover();
  }
  buttonClicked.mouseup = function(mouse) {
    btHover();
  }
  buttonHover.mousedown = function(mouse) {
    btClick();
  }

  // Return the graphic(s) to be drawn
  this.draw = function(stage) {
    switch(state) {
      case 0: // Normal
        buttonNormal.draw(stage);
        break;
      case 1: // Hover
        buttonHover.draw(stage);
        break;
      case 2: // Clicked
        buttonClicked.draw(stage);
        break;
    }
    text.draw(stage);
  }

  // Private methods
  var btNormal = function() {
    state = 0;
    UpdateScreen();
  }
  var btHover = function() {
    state = 1;
    UpdateScreen();
  }
  var btClick = function() {
    state = 2;
    UpdateScreen();
    if (objInstance.click)
      objInstance.click();
  }

}
