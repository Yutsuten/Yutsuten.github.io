function carregaCicloCisticercose() {
  // Criando um aliase de scene[0].item
  var item = scene[1].item;

  // Adicionando o aluno
  item.estCenouraNormal = new Game.Item("estHbrcSdv.png");
  item.estCenouraNormal.setPosition(375, 560);
  item.estCenouraNormal.setScale(0.7);
  item.estCenouraNormal.setZorder(9);
  item.estCenouraNormal.setBrightness(150);
  item.estCenouraNormal.setInteractive(false);
  item.estCenouraNormal.onMouseOver = function() {
    item.estCenouraNormal.setBrightness(255);
    scene[1].setSubtitle("Cisticercose");
    item.popupChorume.disable();
    item.popupChorumeTexto.disable();
    item.popupLatrinaPoco.disable();
    item.popupLatrinaPocoTexto.disable();
  }
  item.estCenouraNormal.onMouseOut = function() {
    item.estCenouraNormal.setBrightness(220);
    scene[1].setSubtitle("");
  }
  item.estCenouraNormal.onClick = function() {
      disableInteractiveness();
      somClique();

      var currentTime = 0;
      var animationInterval = 750; // Intervalo entre cada animacao

      item.popupChorume.disable();
      item.popupChorumeTexto.disable();
      item.popupLatrinaPoco.disable();
      item.popupLatrinaPocoTexto.disable();

      // Fadeout unrelated images
      scene[1].background.changeBrightness(100, 600);
      item.chiqueiro.changeBrightness(100, 600);
      item.horta.changeBrightness(100, 600);
      item.latrina.changeBrightness(100, 600);
      item.lixeira.changeBrightness(100, 600);
      item.pocoExterior.changeBrightness(100, 600);
      item.vacaExterior.changeBrightness(100, 600);

      item.estPocoNormal.changeBrightness(100, 600);
      item.estVacaNormal.changeBrightness(100, 600);
      item.estPorcoNormal.changeBrightness(100, 600);
      item.setaSalaDeAula.changeAlpha(0, 600);

      item.estPocoNormal.setInteractive(false);
      item.estVacaNormal.setInteractive(false);
      item.estPorcoNormal.setInteractive(false);
      item.estCenouraNormal.setInteractive(false);
      item.setaSalaDeAula.setInteractive(false);
      item.chiqueiro.setInteractive(false);
      item.horta.setInteractive(false);
      item.latrina.setInteractive(false);
      item.lixeira.setInteractive(false);
      item.pocoExterior.setInteractive(false);

      setTimeout(function() {
        scene[1].setSubtitle("");
        item.setaSalaDeAula.disable();
      }, currentTime += animationInterval);

      setTimeout(function() {
        item.estCenouraNormal.changeAlpha(0, 600);
      }, currentTime += animationInterval);

      setTimeout(function() {
        item.estCenouraNormal.disable();
        item.estCenouraCiclo.enable();
        item.estCenouraCiclo.changeAlpha(1, 600);
      }, currentTime += animationInterval);

      setTimeout(function() {
        item.cenouraElem1.enable();
        item.cenouraElem1.changeAlpha(1, 600);
        item.cenouraNum1.enable();
        item.cenouraNum1.changeAlpha(1, 600);
        item.cenouraSetaElem1Est.enable();
        item.cenouraSetaElem1Est.changeAlpha(1, 600);
      }, currentTime += animationInterval);

      setTimeout(function() {
        item.cenouraElem2.enable();
        item.cenouraElem2.changeAlpha(1, 600);
        item.cenouraNum2.enable();
        item.cenouraNum2.changeAlpha(1, 600);
        item.cenouraSetaEstElem2.enable();
        item.cenouraSetaEstElem2.changeAlpha(1, 600);
      }, currentTime += animationInterval);

      setTimeout(function() {
        item.cenouraFechar.enable();
        item.cenouraFechar.changeAlpha(1, 600);
      }, currentTime += animationInterval);

      setTimeout(function() {
        enableInteractiveness();
      }, currentTime += animationInterval);
  }

  var itensCenouraCiclo = [];

  // Imagens ciclo
  item.estCenouraCiclo = new Game.Image("estHbrcClo.png");
  item.estCenouraCiclo.setPosition(960, 550);
  item.estCenouraCiclo.setScale(0.5);
  item.estCenouraCiclo.setZorder(9);
  item.estCenouraCiclo.setAlpha(0);
  item.estCenouraCiclo.disable();
  itensCenouraCiclo.push(item.estCenouraCiclo);

  item.cenouraElem1 = new Game.Item("chorumeLixoCenouras.png");
  item.cenouraElem1.setPosition(400, 500);
  item.cenouraElem1.setZorder(6);
  item.cenouraElem1.setAlpha(0);
  item.cenouraElem1.disable();
  item.cenouraElem1.onMouseOver = function() {
    scene[1].setSubtitle("Contaminação da horta por chorume");
  }
  item.cenouraElem1.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensCenouraCiclo.push(item.cenouraElem1);

  item.cenouraNum1 = new Game.Text("1", estiloNumeros);
  item.cenouraNum1.setAnchor(0.5, 0.6);
  item.cenouraNum1.setPosition(630, 250);
  item.cenouraNum1.setAlpha(0);
  item.cenouraNum1.disable();
  itensCenouraCiclo.push(item.cenouraNum1);

  item.cenouraSetaElem1Est = new Game.Line(680, 500, 900, 500, 4);
  item.cenouraSetaElem1Est.setColor(0, 0, 0);
  item.cenouraSetaElem1Est.addArrowAtBeginning();
  item.cenouraSetaElem1Est.setZorder(7);
  item.cenouraSetaElem1Est.setAlpha(0);
  item.cenouraSetaElem1Est.disable();
  itensCenouraCiclo.push(item.cenouraSetaElem1Est);

  item.cenouraElem2 = new Game.Item("cerebroInfectado.png");
  item.cenouraElem2.setPosition(1500, 500);
  item.cenouraElem2.setZorder(6);
  item.cenouraElem2.setAlpha(0);
  item.cenouraElem2.disable();
  item.cenouraElem2.onMouseOver = function() {
    scene[1].setSubtitle("Cérebro infectado por cisticercos de <i>Taenia solium</i>");
  }
  item.cenouraElem2.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensCenouraCiclo.push(item.cenouraElem2);

  item.cenouraNum2 = new Game.Text("2", estiloNumeros);
  item.cenouraNum2.setAnchor(0.5, 0.6);
  item.cenouraNum2.setPosition(1730, 250);
  item.cenouraNum2.setAlpha(0);
  item.cenouraNum2.disable();
  itensCenouraCiclo.push(item.cenouraNum2);

  item.cenouraSetaEstElem2 = new Game.Line(1000, 350, 1500, 500, 4);
  item.cenouraSetaEstElem2.setColor(0, 0, 0);
  item.cenouraSetaEstElem2.setZorder(7);
  item.cenouraSetaEstElem2.setAlpha(0);
  item.cenouraSetaEstElem2.disable();
  itensCenouraCiclo.push(item.cenouraSetaEstElem2);

  item.cenouraFechar = new Game.Item("botaoFechar.png");
  item.cenouraFechar.setPosition(1840, 70);
  item.cenouraFechar.setRotation(180);
  item.cenouraFechar.setBrightness(200);
  item.cenouraFechar.setScale(0.14);
  item.cenouraFechar.setZorder(1);
  item.cenouraFechar.setAlpha(0);
  item.cenouraFechar.disable();
  item.cenouraFechar.onMouseOver = function() {
    item.cenouraFechar.setBrightness(255);
  }
  item.cenouraFechar.onMouseOut = function() {
    item.cenouraFechar.setBrightness(200);
  }
  item.cenouraFechar.onClick = function(mouse) {
    disableInteractiveness();
    somClique();

    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensCenouraCiclo, 0, 600);

    setTimeout(function() {
      groupDisable(itensCenouraCiclo);
      scene[1].setSubtitle("");

      item.cenouraFechar.setBrightness(200);
      item.estCenouraDoente.enable();
      item.estCenouraDoente.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.cenouraBalaoSintoma.enable();
      item.cenouraBalaoSintoma.changeAlpha(1, 600);
      item.cenouraTextoSintomas.enable();
      item.cenouraTextoSintomas.changeAlpha(1, 600);

      item.cenouraAbaPrevencao.enable();
      item.cenouraAbaPrevencao.changeAlpha(1, 600);
      item.cenouraAbaTransmissao.enable();
      item.cenouraAbaTransmissao.changeAlpha(1, 600);

      item.cenouraBotaoOK.enable();
      item.cenouraBotaoOK.changeAlpha(1, 600);

      item.cenouraBalaoPrevencao.setAlpha(1);
      item.cenouraBalaoTransmissao.setAlpha(1);
      item.cenouraAbaSintomas.setAlpha(1);
      item.cenouraBotaoOKhover.setAlpha(1);
      item.cenouraTextoPrevencao.setAlpha(1);
      item.cenouraTextoTransmissao.setAlpha(1);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }
  itensCenouraCiclo.push(item.cenouraFechar);

  var itensCenouraDoente = [];

  item.estCenouraDoente = new Game.Image("estHbrcDte.png");
  item.estCenouraDoente.setPosition(470, 510);
  item.estCenouraDoente.setZorder(9);
  item.estCenouraDoente.setAlpha(0);
  item.estCenouraDoente.disable();
  itensCenouraDoente.push(item.estCenouraDoente);

  item.cenouraBalaoSintoma = new Game.Image("balSintDir.png");
  item.cenouraBalaoSintoma.setPosition(730+440-150, 300);
  item.cenouraBalaoSintoma.setScale(0.25);
  item.cenouraBalaoSintoma.setZorder(6);
  item.cenouraBalaoSintoma.setAlpha(0);
  item.cenouraBalaoSintoma.disable();
  itensCenouraDoente.push(item.cenouraBalaoSintoma);

  item.cenouraBalaoPrevencao = new Game.Image("balPrevDir.png");
  item.cenouraBalaoPrevencao.setPosition(730+440-150, 300);
  item.cenouraBalaoPrevencao.setScale(0.25);
  item.cenouraBalaoPrevencao.setZorder(6);
  item.cenouraBalaoPrevencao.disable();
  itensCenouraDoente.push(item.cenouraBalaoPrevencao);

  item.cenouraBalaoTransmissao = new Game.Image("balTranDir.png");
  item.cenouraBalaoTransmissao.setPosition(730+440-150, 300);
  item.cenouraBalaoTransmissao.setScale(0.25);
  item.cenouraBalaoTransmissao.setZorder(6);
  item.cenouraBalaoTransmissao.disable();
  itensCenouraDoente.push(item.cenouraBalaoTransmissao);


  item.cenouraAbaSintomas = new Game.Item("abaSint.png");
  item.cenouraAbaSintomas.setPosition(426+550-150, 71);
  item.cenouraAbaSintomas.setScale(0.25);
  item.cenouraAbaSintomas.setZorder(7);
  item.cenouraAbaSintomas.disable();
  item.cenouraAbaSintomas.onClick = function() {
    somClique();

    item.cenouraBalaoSintoma.enable();
    item.cenouraBalaoPrevencao.disable();
    item.cenouraBalaoTransmissao.disable();

    item.cenouraAbaSintomas.disable();
    item.cenouraAbaPrevencao.enable();
    item.cenouraAbaTransmissao.enable();

    item.cenouraTextoSintomas.enable();
    item.cenouraTextoPrevencao.disable();
    item.cenouraTextoTransmissao.disable();
  }
  itensCenouraDoente.push(item.cenouraAbaSintomas);

  item.cenouraTextoSintomas = new Game.Text(
    "- Inflamação do olho;\n" +
    "- Sintomas neuropsiquiátricos: convulsões, distúrbio de\n" +
    "comportamento, hipertensão intracraniana, alterações de\n" +
    "visão, vômitos e até mesmo a morte."
    , estiloInfoBalao);
  item.cenouraTextoSintomas.setPosition(432-130+550-150, 58+20);
  item.cenouraTextoSintomas.setAlpha(0);
  item.cenouraTextoSintomas.disable();
  itensCenouraDoente.push(item.cenouraTextoSintomas);

  item.cenouraAbaPrevencao = new Game.Item("abaPrev.png");
  item.cenouraAbaPrevencao.setPosition(432+486+550-150, 71);
  item.cenouraAbaPrevencao.setScale(0.25);
  item.cenouraAbaPrevencao.setZorder(9);
  item.cenouraAbaPrevencao.setAlpha(0);
  item.cenouraAbaPrevencao.disable();
  item.cenouraAbaPrevencao.onClick = function() {
    somClique();

    item.cenouraBalaoSintoma.disable();
    item.cenouraBalaoPrevencao.enable();
    item.cenouraBalaoTransmissao.disable();

    item.cenouraAbaSintomas.enable();
    item.cenouraAbaPrevencao.disable();
    item.cenouraAbaTransmissao.enable();

    item.cenouraTextoSintomas.disable();
    item.cenouraTextoPrevencao.enable();
    item.cenouraTextoTransmissao.disable();
  }
  itensCenouraDoente.push(item.cenouraAbaPrevencao);

  item.cenouraTextoPrevencao = new Game.Text(
    "- Sempre lavar as mãos;\n" +
    "- Não utilizar fezes humanas ou lixo como adubo;\n" +
    "- Não irrigar horta com água do rio;\n" +
    "- Lavar bem frutas e verduras."
    , estiloInfoBalao);
  item.cenouraTextoPrevencao.setPosition(432-130+550-150, 58+20);
  item.cenouraTextoPrevencao.disable();
  itensCenouraDoente.push(item.cenouraTextoPrevencao);

  item.cenouraAbaTransmissao = new Game.Item("abaTran.png");
  item.cenouraAbaTransmissao.setPosition(432+240+550-150, 71);
  item.cenouraAbaTransmissao.setScale(0.25);
  item.cenouraAbaTransmissao.setZorder(8);
  item.cenouraAbaTransmissao.setAlpha(0);
  item.cenouraAbaTransmissao.disable();
  item.cenouraAbaTransmissao.onClick = function() {
    somClique();

    item.cenouraBalaoSintoma.disable();
    item.cenouraBalaoPrevencao.disable();
    item.cenouraBalaoTransmissao.enable();

    item.cenouraAbaSintomas.enable();
    item.cenouraAbaPrevencao.enable();
    item.cenouraAbaTransmissao.disable();

    item.cenouraTextoSintomas.disable();
    item.cenouraTextoPrevencao.disable();
    item.cenouraTextoTransmissao.enable();
  }
  itensCenouraDoente.push(item.cenouraAbaTransmissao);

  item.cenouraTextoTransmissao = new Game.Text(
    "Através do consumo de água e alimentos, como frutas e\n" +
    "verduras, contaminados com os ovos da <i>Taenia</i> sp."
    , estiloInfoBalao);
  item.cenouraTextoTransmissao.setPosition(432-130+550-150, 58+20);
  item.cenouraTextoTransmissao.disable();
  itensCenouraDoente.push(item.cenouraTextoTransmissao);

  item.cenouraBotaoOK = new Game.Item("okNormal.png");
  item.cenouraBotaoOK.setScale(0.25);
  item.cenouraBotaoOK.setPosition(432+450+550-150, 71+290);
  item.cenouraBotaoOK.setAlpha(0);
  item.cenouraBotaoOK.disable();
  item.cenouraBotaoOK.onMouseOver = function() {
    item.cenouraBotaoOK.disable();
    item.cenouraBotaoOKhover.enable();
  }
  item.cenouraBotaoOK.onClick = function() {
    item.cenouraBotaoOKhover.onClick();
  }
  itensCenouraDoente.push(item.cenouraBotaoOK);

  item.cenouraBotaoOKhover = new Game.Item("okHover.png");
  item.cenouraBotaoOKhover.setScale(0.25);
  item.cenouraBotaoOKhover.setPosition(432+450+550-150, 71+290);
  item.cenouraBotaoOKhover.disable();
  item.cenouraBotaoOKhover.onMouseOut = function() {
    item.cenouraBotaoOKhover.disable();
    item.cenouraBotaoOK.enable();
  }
  item.cenouraBotaoOKhover.onClick = function() {
    disableInteractiveness();
    somClique();

    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensCenouraDoente, 0, 600);
    scene[1].nextState();

    setTimeout(function() {
      item.fechaLivro.disable();
      item.fechaLivro.setInteractive(false);

      item.livroAberto.enable();
      item.fechaLivro2.enable();
      item.livroCenaExteriorTexto1.enable();
      item.livroCenaExteriorTitulo.enable();
      item.livroCenaExteriorTexto2.enable();
      item.livroAberto.changeAlpha(1, 600);
      item.fechaLivro2.changeAlpha(1, 600);
      item.livroCenaExteriorTexto1.changeAlpha(1, 600);
      item.livroCenaExteriorTitulo.changeAlpha(1, 600);
      item.livroCenaExteriorTexto2.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);

  }
  itensCenouraDoente.push(item.cenouraBotaoOKhover);

}
