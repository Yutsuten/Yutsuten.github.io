'use strict';

Game.Book = function(bookName) {
  var item = scene[2].item;
  var objInstance = this;

  var currentPageIndex = 0;

  this.pagina = [];

  // Setas de proximo e anterior
  var nextPageArrow = bookName + "NextPageArrow";
  item[nextPageArrow] = new Game.Item("seta.png");
  item[nextPageArrow].setPosition(1670, 500);
  item[nextPageArrow].setBrightness(220);
  item[nextPageArrow].setScale(0.3);
  item[nextPageArrow].setAlpha(0);
  item[nextPageArrow].setInteractive(false);
  item[nextPageArrow].disable();
  item[nextPageArrow].setZorder(2);
  item[nextPageArrow].onMouseOver = function() {
    scene[2].setSubtitle("Próxima página");
    item[nextPageArrow].setBrightness(255);
  }
  item[nextPageArrow].onMouseOut = function() {
    scene[2].setSubtitle("");
    item[nextPageArrow].setBrightness(220);
  }
  item[nextPageArrow].onClick = function(mouse) {
    objInstance.nextPage();
    somLivroMudaPagina();
    setTimeout(function() {
      scene[2].setSubtitle("");
    }, 300);
  }

  var previousPageArrow = bookName + "PreviousPageArrow";
  item[previousPageArrow] = new Game.Item("seta.png");
  item[previousPageArrow].setPosition(110, 500);
  item[previousPageArrow].setBrightness(220);
  item[previousPageArrow].setScale(0.3);
  item[previousPageArrow].setRotation(180);
  item[previousPageArrow].setAlpha(0);
  item[previousPageArrow].setInteractive(false);
  item[previousPageArrow].disable();
  item[previousPageArrow].setZorder(2);
  item[previousPageArrow].onMouseOver = function() {
    scene[2].setSubtitle("Página anterior");
    item[previousPageArrow].setBrightness(255);
  }
  item[previousPageArrow].onMouseOut = function() {
    scene[2].setSubtitle("");
    item[previousPageArrow].setBrightness(220);
  }
  item[previousPageArrow].onClick = function(mouse) {
    objInstance.previousPage();
    somLivroMudaPagina();
    setTimeout(function() {
      scene[2].setSubtitle("");
    }, 300);
  }

  var updateArrowsState = function() {
    var arrowNextEnabled = currentPageIndex < objInstance.pagina.length - 1;
    var arrowPreviousEnabled = currentPageIndex > 0;

    item[nextPageArrow].setInteractive(arrowNextEnabled);
    item[previousPageArrow].setInteractive(arrowPreviousEnabled);

    item[nextPageArrow].setBrightness(arrowNextEnabled ? 220 : 120);
    item[previousPageArrow].setBrightness(arrowPreviousEnabled ? 220 : 120);
  }

  var getItemName = function() {
    return "livro" + bookName + "Pagina" + currentPageIndex;
  }

  this.createItems = function() {
    for (var i = 0; i < this.pagina.length; i++) {
      var itemName = "livro" + bookName + "Pagina" + i;
      item[itemName] = this.pagina[i];
      item[itemName].disableItems();
    }
  }

  this.open = function() {
    currentPageIndex = 0;
    item[getItemName()].show();

    updateArrowsState();
    item[nextPageArrow].enable();
    item[nextPageArrow].changeAlpha(1, 600);
    item[previousPageArrow].enable();
    item[previousPageArrow].changeAlpha(1, 600);
  }

  this.close = function() {
    item[getItemName()].hide();

    item[nextPageArrow].changeAlpha(0, 600);
    item[nextPageArrow].setInteractive(false);
    item[previousPageArrow].changeAlpha(0, 600);
    item[previousPageArrow].setInteractive(false);
    setTimeout(function() {
      item[nextPageArrow].disable();
      item[previousPageArrow].disable();
    }, 650);
  }

  this.nextPage = function() {
    if (currentPageIndex < currentPageIndex < objInstance.pagina.length - 1) {
      disableInteractiveness();

      item[getItemName()].hide(); // Pagina anterior
      currentPageIndex++;
      item[getItemName()].show(); // Proxima pagina
      updateArrowsState();

      setTimeout(function() {
        enableInteractiveness();
      }, 650);
    }
    else {
      console.warn("There is no next page.");
    }
  }

  this.previousPage = function() {
    if (currentPageIndex > 0) {
      disableInteractiveness();

      item[getItemName()].hide(); // Pagina anterior
      currentPageIndex--;
      item[getItemName()].show(); // Pagina anterior
      updateArrowsState();

      setTimeout(function() {
        enableInteractiveness();
      }, 650);
    }
    else {
      console.warn("There is no previous page.");
    }
  }

}
