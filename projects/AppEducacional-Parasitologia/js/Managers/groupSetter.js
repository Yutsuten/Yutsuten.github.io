function groupChangeAlpha(items, newAlpha, time) {
  for (var i = 0; i < items.length; i++) {
    items[i].changeAlpha(newAlpha, time);
  }
}

function groupChangeBrightness(items, newBrightness, time) {
  for (var i = 0; i < items.length; i++) {
    items[i].changeBrightness(newBrightness, time);
  }
}

function groupEnable(items) {
  for (var i = 0; i < items.length; i++) {
    items[i].enable();
  }
}

function groupDisable(items) {
  for (var i = 0; i < items.length; i++) {
    items[i].disable();
  }
}
