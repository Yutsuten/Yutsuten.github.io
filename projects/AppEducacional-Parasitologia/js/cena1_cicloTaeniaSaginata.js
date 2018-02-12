function carregaCicloTaeniaSaginata() {
  // Criando um aliase de scene[0].item
  var item = scene[1].item;

  // Adicionando o aluno
  item.estVacaNormal = new Game.Item("estMprdSdv.png");
  item.estVacaNormal.setPosition(1150, 250);
  item.estVacaNormal.setZorder(11);
  item.estVacaNormal.setBrightness(150);
  item.estVacaNormal.setInteractive(false);
  item.estVacaNormal.onMouseOver = function() {
    item.estVacaNormal.setBrightness(255);
    scene[1].setSubtitle("Teníase");
    item.popupChorume.disable();
    item.popupChorumeTexto.disable();
    item.popupLatrinaPoco.disable();
    item.popupLatrinaPocoTexto.disable();
  }
  item.estVacaNormal.onMouseOut = function() {
    item.estVacaNormal.setBrightness(220);
    scene[1].setSubtitle("");
  }
  item.estVacaNormal.onClick = function() {
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

    item.estCenouraNormal.changeBrightness(100, 600);
    item.estPocoNormal.changeBrightness(100, 600);
    item.estPorcoNormal.changeBrightness(100, 600);
    item.setaSalaDeAula.changeAlpha(0, 600);

    item.estCenouraNormal.setInteractive(false);
    item.estPocoNormal.setInteractive(false);
    item.estPorcoNormal.setInteractive(false);
    item.estVacaNormal.setInteractive(false);
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
      item.estVacaNormal.changeAlpha(0, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estVacaNormal.disable();
      item.estVacaCiclo.enable();
      item.estVacaCiclo.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.vacaElem1.enable();
      item.vacaElem1.changeAlpha(1, 600);
      item.vacaNum1.enable();
      item.vacaNum1.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.vacaSetaElem1Elem2.enable();
      item.vacaSetaElem1Elem2.changeAlpha(1, 600);
      item.vacaElem2.enable();
      item.vacaElem2.changeAlpha(1, 600);
      item.vacaNum2.enable();
      item.vacaNum2.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.vacaSetaElem1Elem3.enable();
      item.vacaSetaElem1Elem3.changeAlpha(1, 600);
      item.vacaElem3.enable();
      item.vacaElem3.changeAlpha(1, 600);
      item.vacaNum3.enable();
      item.vacaNum3.changeAlpha(1, 600);
      item.vacaSetaElem3Est.enable();
      item.vacaSetaElem3Est.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.vacaNum4.enable();
      item.vacaNum4.changeAlpha(1, 600);
      item.vacaElem4.enable();
      item.vacaElem4.changeAlpha(1, 600);
      item.vacaSetaElem4Est.enable();
      item.vacaSetaElem4Est.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.vacaSetaEstElem5.enable();
      item.vacaSetaEstElem5.changeAlpha(1, 600);
      item.vacaNum5.enable();
      item.vacaNum5.changeAlpha(1, 600);
      item.vacaElem5.enable();
      item.vacaElem5.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.vacaSetaElem5Elem6.enable();
      item.vacaSetaElem5Elem6.changeAlpha(1, 600);
      item.vacaNum6.enable();
      item.vacaNum6.changeAlpha(1, 600);
      item.vacaElem6.enable();
      item.vacaElem6.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.vacaSetaElem6Elem7.enable();
      item.vacaSetaElem6Elem7.changeAlpha(1, 600);
      item.vacaNum7.enable();
      item.vacaNum7.changeAlpha(1, 600);
      item.vacaElem7.enable();
      item.vacaElem7.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.vacaSetaElem5Elem8.enable();
      item.vacaSetaElem5Elem8.changeAlpha(1, 600);
      item.vacaNum8.enable();
      item.vacaNum8.changeAlpha(1, 600);
      item.vacaElem8.enable();
      item.vacaElem8.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.vacaFechar.enable();
      item.vacaFechar.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }

  var itensVacaCiclo = [];

  // Imagens ciclo
  item.estVacaCiclo = new Game.Image("estMprdClo.png");
  item.estVacaCiclo.setPosition(960, 550);
  item.estVacaCiclo.setScale(0.5);
  item.estVacaCiclo.setZorder(9);
  item.estVacaCiclo.setAlpha(0);
  item.estVacaCiclo.disable();
  itensVacaCiclo.push(item.estVacaCiclo);

  item.vacaElem1 = new Game.Item("vaca.png");
  item.vacaElem1.setPosition(300, 300);
  item.vacaElem1.setScale(0.7);
  item.vacaElem1.setZorder(6);
  item.vacaElem1.setAlpha(0);
  item.vacaElem1.disable();
  item.vacaElem1.onMouseOver = function() {
    scene[1].setSubtitle("Vaca comendo grama contaminada");
  }
  item.vacaElem1.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensVacaCiclo.push(item.vacaElem1);

  item.vacaNum1 = new Game.Text("1", estiloNumeros);
  item.vacaNum1.setAnchor(0.5, 0.6);
  item.vacaNum1.setPosition(470, 140);
  item.vacaNum1.setAlpha(0);
  item.vacaNum1.disable();
  itensVacaCiclo.push(item.vacaNum1);

  item.vacaSetaElem1Elem2 = new Game.Line(300, 300, 200, 750, 4);
  item.vacaSetaElem1Elem2.setColor(0, 0, 0);
  item.vacaSetaElem1Elem2.setZorder(7);
  item.vacaSetaElem1Elem2.setAlpha(0);
  item.vacaSetaElem1Elem2.disable();
  itensVacaCiclo.push(item.vacaSetaElem1Elem2);

  item.vacaElem2 = new Game.Item("ovoTenia.png");
  item.vacaElem2.setPosition(200, 750);
  item.vacaElem2.setScale(0.5);
  item.vacaElem2.setZorder(6);
  item.vacaElem2.setAlpha(0);
  item.vacaElem2.disable();
  item.vacaElem2.onMouseOver = function() {
    scene[1].setSubtitle("Ovo de <i>Taenia saginata</i>");
  }
  item.vacaElem2.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensVacaCiclo.push(item.vacaElem2);

  item.vacaNum2 = new Game.Text("2", estiloNumeros);
  item.vacaNum2.setAnchor(0.5, 0.6);
  item.vacaNum2.setPosition(350, 650);
  item.vacaNum2.setAlpha(0);
  item.vacaNum2.disable();
  itensVacaCiclo.push(item.vacaNum2);

  item.vacaSetaElem1Elem3 = new Game.Line(300, 300, 555, 220, 4);
  item.vacaSetaElem1Elem3.setColor(0, 0, 0);
  item.vacaSetaElem1Elem3.addArrowAtEnd();
  item.vacaSetaElem1Elem3.setZorder(7);
  item.vacaSetaElem1Elem3.setAlpha(0);
  item.vacaSetaElem1Elem3.disable();
  itensVacaCiclo.push(item.vacaSetaElem1Elem3);

  item.vacaElem3 = new Game.Item("carneInfectada.png");
  item.vacaElem3.setPosition(700, 190);
  item.vacaElem3.setScale(0.5);
  item.vacaElem3.setZorder(6);
  item.vacaElem3.setAlpha(0);
  item.vacaElem3.disable();
  item.vacaElem3.onMouseOver = function() {
    scene[1].setSubtitle("Carne de vaca crua com cisticercos de <i>T. saginata</i>");
  }
  item.vacaElem3.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensVacaCiclo.push(item.vacaElem3);

  item.vacaNum3 = new Game.Text("3", estiloNumeros);
  item.vacaNum3.setAnchor(0.5, 0.6);
  item.vacaNum3.setPosition(825, 65);
  item.vacaNum3.setAlpha(0);
  item.vacaNum3.disable();
  itensVacaCiclo.push(item.vacaNum3);

  item.vacaSetaElem3Est = new Game.Line(700, 190, 1015, 460, 4);
  item.vacaSetaElem3Est.setColor(0, 0, 0);
  item.vacaSetaElem3Est.setZorder(7);
  item.vacaSetaElem3Est.setAlpha(0);
  item.vacaSetaElem3Est.disable();
  itensVacaCiclo.push(item.vacaSetaElem3Est);

  item.vacaNum4 = new Game.Text("4", estiloNumeros);
  item.vacaNum4.setAnchor(0.5, 0.6);
  item.vacaNum4.setPosition(700, 660);
  item.vacaNum4.setAlpha(0);
  item.vacaNum4.disable();
  itensVacaCiclo.push(item.vacaNum4);

  item.vacaElem4 = new Game.Item("teniaAdulta.png");
  item.vacaElem4.setPosition(580, 800);
  item.vacaElem4.setScale(0.51);
  item.vacaElem4.setZorder(6);
  item.vacaElem4.setAlpha(0);
  item.vacaElem4.disable();
  item.vacaElem4.onMouseOver = function() {
    scene[1].setSubtitle("Verme adulto de <i>T. saginata</i>");
  }
  item.vacaElem4.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensVacaCiclo.push(item.vacaElem4);

  item.vacaSetaElem4Est = new Game.Line(580, 800, 968, 793, 4);
  item.vacaSetaElem4Est.setColor(0, 0, 0);
  item.vacaSetaElem4Est.setZorder(7);
  item.vacaSetaElem4Est.setAlpha(0);
  item.vacaSetaElem4Est.disable();
  itensVacaCiclo.push(item.vacaSetaElem4Est);

  item.vacaSetaEstElem5 = new Game.Line(1010, 830, 1300, 600, 4);
  item.vacaSetaEstElem5.setColor(0, 0, 0);
  item.vacaSetaEstElem5.setZorder(7);
  item.vacaSetaEstElem5.setAlpha(0);
  item.vacaSetaEstElem5.disable();
  itensVacaCiclo.push(item.vacaSetaEstElem5);

  item.vacaNum5 = new Game.Text("5", estiloNumeros);
  item.vacaNum5.setAnchor(0.5, 0.6);
  item.vacaNum5.setPosition(1410, 470);
  item.vacaNum5.setAlpha(0);
  item.vacaNum5.disable();
  itensVacaCiclo.push(item.vacaNum5);

  item.vacaElem5 = new Game.Item("fezesSemMosca.png");
  item.vacaElem5.setPosition(1300, 600);
  item.vacaElem5.setScale(0.48);
  item.vacaElem5.setZorder(6);
  item.vacaElem5.setAlpha(0);
  item.vacaElem5.disable();
  item.vacaElem5.onMouseOver = function() {
    scene[1].setSubtitle("Fezes com proglotes de <i>T. saginata</i>");
  }
  item.vacaElem5.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensVacaCiclo.push(item.vacaElem5);

  item.vacaSetaElem5Elem6 = new Game.Line(1300, 600, 1400, 300, 4);
  item.vacaSetaElem5Elem6.setColor(0, 0, 0);
  item.vacaSetaElem5Elem6.setZorder(7);
  item.vacaSetaElem5Elem6.setAlpha(0);
  item.vacaSetaElem5Elem6.disable();
  itensVacaCiclo.push(item.vacaSetaElem5Elem6);

  item.vacaNum6 = new Game.Text("6", estiloNumeros);
  item.vacaNum6.setAnchor(0.5, 0.6);
  item.vacaNum6.setPosition(1520, 180);
  item.vacaNum6.setAlpha(0);
  item.vacaNum6.disable();
  itensVacaCiclo.push(item.vacaNum6);

  item.vacaElem6 = new Game.Item("proglate.png");
  item.vacaElem6.setPosition(1400, 300);
  item.vacaElem6.setScale(0.48);
  item.vacaElem6.setZorder(6);
  item.vacaElem6.setAlpha(0);
  item.vacaElem6.disable();
  item.vacaElem6.onMouseOver = function() {
    scene[1].setSubtitle("Proglotes com ovos");
  }
  item.vacaElem6.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensVacaCiclo.push(item.vacaElem6);

  item.vacaSetaElem6Elem7 = new Game.Line(1400, 300, 1740, 300, 4);
  item.vacaSetaElem6Elem7.setColor(0, 0, 0);
  item.vacaSetaElem6Elem7.setZorder(7);
  item.vacaSetaElem6Elem7.setAlpha(0);
  item.vacaSetaElem6Elem7.disable();
  itensVacaCiclo.push(item.vacaSetaElem6Elem7);

  item.vacaNum7 = new Game.Text("7", estiloNumeros);
  item.vacaNum7.setAnchor(0.5, 0.6);
  item.vacaNum7.setPosition(1865, 175);
  item.vacaNum7.setAlpha(0);
  item.vacaNum7.disable();
  itensVacaCiclo.push(item.vacaNum7);

  item.vacaElem7 = new Game.Item("ovoTenia.png");
  item.vacaElem7.setPosition(1740, 300);
  item.vacaElem7.setScale(0.5);
  item.vacaElem7.setZorder(6);
  item.vacaElem7.setAlpha(0);
  item.vacaElem7.disable();
  item.vacaElem7.onMouseOver = function() {
    scene[1].setSubtitle("Ovo de <i>T. saginata</i>");
  }
  item.vacaElem7.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensVacaCiclo.push(item.vacaElem7);

  item.vacaSetaElem5Elem8 = new Game.Line(1300, 600, 1480, 725, 4);
  item.vacaSetaElem5Elem8.setColor(0, 0, 0);
  item.vacaSetaElem5Elem8.addArrowAtEnd();
  item.vacaSetaElem5Elem8.setZorder(7);
  item.vacaSetaElem5Elem8.setAlpha(0);
  item.vacaSetaElem5Elem8.disable();
  itensVacaCiclo.push(item.vacaSetaElem5Elem8);

  item.vacaNum8 = new Game.Text("8", estiloNumeros);
  item.vacaNum8.setAnchor(0.5, 0.6);
  item.vacaNum8.setPosition(1810, 670);
  item.vacaNum8.setAlpha(0);
  item.vacaNum8.disable();
  itensVacaCiclo.push(item.vacaNum8);

  item.vacaElem8 = new Game.Item("papelLixo.png");
  item.vacaElem8.setPosition(1650, 830);
  item.vacaElem8.setScale(0.68);
  item.vacaElem8.setZorder(6);
  item.vacaElem8.setAlpha(0);
  item.vacaElem8.disable();
  item.vacaElem8.onMouseOver = function() {
    scene[1].setSubtitle("Papel higiênico no lixo com proglotes de <i>T. saginata</i>");
  }
  item.vacaElem8.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensVacaCiclo.push(item.vacaElem8);

  item.vacaFechar = new Game.Item("botaoFechar.png");
  item.vacaFechar.setPosition(1840, 70);
  item.vacaFechar.setRotation(180);
  item.vacaFechar.setBrightness(200);
  item.vacaFechar.setScale(0.14);
  item.vacaFechar.setZorder(1);
  item.vacaFechar.setAlpha(0);
  item.vacaFechar.disable();
  item.vacaFechar.onMouseOver = function() {
    item.vacaFechar.setBrightness(255);
  }
  item.vacaFechar.onMouseOut = function() {
    item.vacaFechar.setBrightness(200);
  }
  item.vacaFechar.onClick = function(mouse) {
    disableInteractiveness();
    somClique();

    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensVacaCiclo, 0, 600);
    item.estVacaNormal.brightnessTarget = 150;
    item.estVacaNormal.interactiveTarget = false;
    item.estVacaNormal.setInteractive(false);
    scene[1].nextState();

    setTimeout(function() {
      groupDisable(itensVacaCiclo);
      scene[1].setSubtitle("");

      item.vacaFechar.setBrightness(200);
      item.estVacaDoente.enable();
      item.estVacaDoente.setBrightness(150); // Começa com 150 por causa que os 2 precisam ser vistos
      item.estVacaDoente.changeAlpha(1, 600);

      if (scene[1].state > 1) {
        item.estPorcoDoente.changeBrightness(255, 600);
        item.estVacaDoente.changeBrightness(255, 600);
      }

      if (scene[1].state == 1) { // Se ainda nao passou pelos 2 ciclos
        // Return the background brightness
        scene[1].background.changeBrightness(210, 600);
        item.chiqueiro.changeBrightness(210, 600);
        item.horta.changeBrightness(210, 600);
        item.latrina.changeBrightness(210, 600);
        item.lixeira.changeBrightness(210, 600);
        item.pocoExterior.changeBrightness(210, 600);
        item.vacaExterior.changeBrightness(210, 600);
        // Return the students brightness
        item.estCenouraNormal.changeBrightness(item.estCenouraNormal.brightnessTarget, 600);
        item.estPocoNormal.changeBrightness(item.estPocoNormal.brightnessTarget, 600);
        item.estPorcoNormal.changeBrightness(item.estPorcoNormal.brightnessTarget, 600);
        // Return the interactiveness value
        item.estCenouraNormal.setInteractive(item.estCenouraNormal.interactiveTarget);
        item.estPocoNormal.setInteractive(item.estPocoNormal.interactiveTarget);
        item.estPorcoNormal.setInteractive(item.estPorcoNormal.interactiveTarget);
        item.estVacaNormal.setInteractive(item.estVacaNormal.interactiveTarget);
      }
    }, currentTime += animationInterval);

    if (scene[1].state > 1) {
      setTimeout(function() {
        groupDisable(itensVacaCiclo);
        item.vacaBalaoSintoma.enable();
        item.vacaBalaoSintoma.changeAlpha(1, 600);
        item.vacaTextoSintomas.enable();
        item.vacaTextoSintomas.changeAlpha(1, 600);

        item.vacaAbaPrevencao.enable();
        item.vacaAbaPrevencao.changeAlpha(1, 600);
        item.vacaAbaTransmissao.enable();
        item.vacaAbaTransmissao.changeAlpha(1, 600);

        item.vacaBotaoOK.enable();
        item.vacaBotaoOK.changeAlpha(1, 600);

        item.vacaBalaoPrevencao.setAlpha(1);
        item.vacaBalaoTransmissao.setAlpha(1);
        item.vacaAbaSintomas.setAlpha(1);
        item.vacaBotaoOKhover.setAlpha(1);
        item.vacaTextoPrevencao.setAlpha(1);
        item.vacaTextoTransmissao.setAlpha(1);
      }, currentTime += animationInterval);
    }

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }
  itensVacaCiclo.push(item.vacaFechar);

  var itensVacaDoente = [];

  item.estVacaDoente = new Game.Image("estMprdDte.png");
  item.estVacaDoente.setPosition(905, 560);
  item.estVacaDoente.setScale(1.8);
  item.estVacaDoente.setZorder(11);
  item.estVacaDoente.setAlpha(0);
  item.estVacaDoente.disable();
  itensVacaDoente.push(item.estVacaDoente);

  item.vacaBalaoSintoma = new Game.Image("balSintDir.png");
  item.vacaBalaoSintoma.setPosition(730+440+270, 300);
  item.vacaBalaoSintoma.setScale(0.25);
  item.vacaBalaoSintoma.setZorder(6);
  item.vacaBalaoSintoma.setAlpha(0);
  item.vacaBalaoSintoma.disable();
  itensVacaDoente.push(item.vacaBalaoSintoma);

  item.vacaBalaoPrevencao = new Game.Image("balPrevDir.png");
  item.vacaBalaoPrevencao.setPosition(730+440+270, 300);
  item.vacaBalaoPrevencao.setScale(0.25);
  item.vacaBalaoPrevencao.setZorder(6);
  item.vacaBalaoPrevencao.disable();
  itensVacaDoente.push(item.vacaBalaoPrevencao);

  item.vacaBalaoTransmissao = new Game.Image("balTranDir.png");
  item.vacaBalaoTransmissao.setPosition(730+440+270, 300);
  item.vacaBalaoTransmissao.setScale(0.25);
  item.vacaBalaoTransmissao.setZorder(6);
  item.vacaBalaoTransmissao.disable();
  itensVacaDoente.push(item.vacaBalaoTransmissao);


  item.vacaAbaSintomas = new Game.Item("abaSint.png");
  item.vacaAbaSintomas.setPosition(426+550+270, 71);
  item.vacaAbaSintomas.setScale(0.25);
  item.vacaAbaSintomas.setZorder(7);
  item.vacaAbaSintomas.disable();
  item.vacaAbaSintomas.onClick = function() {
    somClique();

    item.vacaBalaoSintoma.enable();
    item.vacaBalaoPrevencao.disable();
    item.vacaBalaoTransmissao.disable();

    item.vacaAbaSintomas.disable();
    item.vacaAbaPrevencao.enable();
    item.vacaAbaTransmissao.enable();

    item.vacaTextoSintomas.enable();
    item.vacaTextoPrevencao.disable();
    item.vacaTextoTransmissao.disable();
  }
  itensVacaDoente.push(item.vacaAbaSintomas);

  item.vacaTextoSintomas = new Game.Text(
    "- Dores abdominais, flatulência, náuseas;\n" +
    "- Debilidade, perda de peso;\n" +
    "- Diarreia ou constipação quando o parasita permanece na\n" +
    "luz intestinal."
    , estiloInfoBalao);
  item.vacaTextoSintomas.setPosition(432-130+550+270, 58+20);
  item.vacaTextoSintomas.setAlpha(0);
  item.vacaTextoSintomas.disable();
  itensVacaDoente.push(item.vacaTextoSintomas);

  item.vacaAbaPrevencao = new Game.Item("abaPrev.png");
  item.vacaAbaPrevencao.setPosition(432+486+550+270, 71);
  item.vacaAbaPrevencao.setScale(0.25);
  item.vacaAbaPrevencao.setZorder(9);
  item.vacaAbaPrevencao.setAlpha(0);
  item.vacaAbaPrevencao.disable();
  item.vacaAbaPrevencao.onClick = function() {
    somClique();

    item.vacaBalaoSintoma.disable();
    item.vacaBalaoPrevencao.enable();
    item.vacaBalaoTransmissao.disable();

    item.vacaAbaSintomas.enable();
    item.vacaAbaPrevencao.disable();
    item.vacaAbaTransmissao.enable();

    item.vacaTextoSintomas.disable();
    item.vacaTextoPrevencao.enable();
    item.vacaTextoTransmissao.disable();
  }
  itensVacaDoente.push(item.vacaAbaPrevencao);

  item.vacaTextoPrevencao = new Game.Text(
    "- Impedir o acesso de suínos e bovinos às fezes humanas,\n" +
    "latrinas, esgotos e pastagens/alimentos contaminados;\n" +
    "- Implantação de ações de fiscalização e de orientação,\n" +
    "permitindo o acesso da população a maiores informações e a\n" +
    "alimentos inspecionados;\n" +
    "- Evitar o consumo de carne mal passada;\n" +
    "- Obter produtos de boa origem."
    , estiloInfoBalao);
  item.vacaTextoPrevencao.setPosition(432-130+550+270, 58+20);
  item.vacaTextoPrevencao.disable();
  itensVacaDoente.push(item.vacaTextoPrevencao);

  item.vacaAbaTransmissao = new Game.Item("abaTran.png");
  item.vacaAbaTransmissao.setPosition(432+240+550+270, 71);
  item.vacaAbaTransmissao.setScale(0.25);
  item.vacaAbaTransmissao.setZorder(8);
  item.vacaAbaTransmissao.setAlpha(0);
  item.vacaAbaTransmissao.disable();
  item.vacaAbaTransmissao.onClick = function() {
    somClique();

    item.vacaBalaoSintoma.disable();
    item.vacaBalaoPrevencao.disable();
    item.vacaBalaoTransmissao.enable();

    item.vacaAbaSintomas.enable();
    item.vacaAbaPrevencao.enable();
    item.vacaAbaTransmissao.disable();

    item.vacaTextoSintomas.disable();
    item.vacaTextoPrevencao.disable();
    item.vacaTextoTransmissao.enable();
  }
  itensVacaDoente.push(item.vacaAbaTransmissao);

  item.vacaTextoTransmissao = new Game.Text(
    "Ingestão de carne mal passada ou crua (suína ou bovina)\n" +
    "que esteja infectada com cisticercos de <i>Taenia</i> sp."
    , estiloInfoBalao);
  item.vacaTextoTransmissao.setPosition(432-130+550+270, 58+20);
  item.vacaTextoTransmissao.disable();
  itensVacaDoente.push(item.vacaTextoTransmissao);

  item.vacaBotaoOK = new Game.Item("okNormal.png");
  item.vacaBotaoOK.setScale(0.25);
  item.vacaBotaoOK.setPosition(432+450+550+270, 71+290);
  item.vacaBotaoOK.setAlpha(0);
  item.vacaBotaoOK.disable();
  item.vacaBotaoOK.onMouseOver = function() {
    item.vacaBotaoOK.disable();
    item.vacaBotaoOKhover.enable();
  }
  item.vacaBotaoOK.onClick = function() {
    item.vacaBotaoOKhover.onClick();
  }
  itensVacaDoente.push(item.vacaBotaoOK);

  item.vacaBotaoOKhover = new Game.Item("okHover.png");
  item.vacaBotaoOKhover.setScale(0.25);
  item.vacaBotaoOKhover.setPosition(432+450+550+270, 71+290);
  item.vacaBotaoOKhover.disable();
  item.vacaBotaoOKhover.onMouseOut = function() {
    item.vacaBotaoOKhover.disable();
    item.vacaBotaoOK.enable();
  }
  item.vacaBotaoOKhover.onClick = function() {
    disableInteractiveness();
    somClique();

    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensVacaDoente, 0, 600);
    if (scene[1].state == 2) {
      item.estPorcoDoente.changeAlpha(0, 600);
    }

    setTimeout(function() {
      item.estVacaNormal.enable();
      item.estVacaNormal.setBrightness(item.estVacaNormal.brightnessTarget);
      item.estVacaNormal.changeAlpha(1, 600);

      if (scene[1].state == 2) {
        item.estPorcoNormal.enable();
        item.estPorcoNormal.setBrightness(item.estPorcoNormal.brightnessTarget);
        item.estPorcoNormal.changeAlpha(1, 600);
      }

      scene[1].background.changeBrightness(210, 600);
      item.chiqueiro.changeBrightness(210, 600);
      item.horta.changeBrightness(210, 600);
      item.latrina.changeBrightness(210, 600);
      item.lixeira.changeBrightness(210, 600);
      item.pocoExterior.changeBrightness(210, 600);
      item.vacaExterior.changeBrightness(210, 600);

      item.estCenouraNormal.changeBrightness(item.estCenouraNormal.brightnessTarget, 600);
      item.estPocoNormal.changeBrightness(item.estPocoNormal.brightnessTarget, 600);
      item.estPorcoNormal.changeBrightness(item.estPorcoNormal.brightnessTarget, 600);
      item.setaSalaDeAula.enable();
      item.setaSalaDeAula.changeAlpha(1, 600);

      item.vacaBotaoOKhover.disable();
      item.vacaBalaoPrevencao.disable();
      item.vacaBalaoTransmissao.disable();
      item.vacaAbaSintomas.disable();
      item.vacaAbaPrevencao.disable();
      item.vacaAbaTransmissao.disable();
      item.vacaTextoPrevencao.disable();
      item.vacaTextoTransmissao.disable();
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estCenouraNormal.setInteractive(item.estCenouraNormal.interactiveTarget);
      item.estPocoNormal.setInteractive(item.estPocoNormal.interactiveTarget);
      item.estPorcoNormal.setInteractive(item.estPorcoNormal.interactiveTarget);
      item.estVacaNormal.setInteractive(item.estVacaNormal.interactiveTarget);

      item.setaSalaDeAula.setInteractive(true);
      item.chiqueiro.setInteractive(true);
      item.horta.setInteractive(true);
      item.latrina.setInteractive(true);
      item.lixeira.setInteractive(true);
      item.pocoExterior.setInteractive(true);

      enableInteractiveness();

      scene[1].saveInteractiveness();
    }, currentTime += animationInterval);

  }
  itensVacaDoente.push(item.vacaBotaoOKhover);

}
