'use strict';

var notContain = function(str, arrayStr) {
  for (i = 0; i < arrayStr.length; i++)
    if (str == arrayStr[i])
      return false;
  return true;
}

Game.Page = function() {
  var objInstance = this;
  var classPropMethods = ["z_order", "disableItems", "show", "hide", "draw", "interactive", "alpha"];

  this.z_order = 2;

  this.disableItems = function() {
    for (var element in this) {
      if (notContain(element, classPropMethods)) {
        this[element].setAlpha(0);
        this[element].disable();
      }
    }
  }

  this.show = function() {
    for (var element in this) {
      if (notContain(element, classPropMethods)) {
        this[element].enable();
        this[element].changeAlpha(1, 600);
      }
    }
  }

  this.hide = function() {
    for (var element in this) {
      if (notContain(element, classPropMethods)) {
        this[element].changeAlpha(0, 600);
        var thisElement = this[element];
        setTimeout(function() {
          thisElement.disable();
        }, 650);
      }
    }
  }

  this.draw = function(stage) {
    for (var element in objInstance) {
      if (notContain(element, classPropMethods)) {
        stage.addChild(objInstance[element]);
      }
    }
  }

}
