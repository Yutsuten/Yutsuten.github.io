function carregaCicloTaeniaSolium() {
  // Criando um aliase de scene[0].item
  var item = scene[1].item;

  // Adicionando o aluno
  item.estPorcoNormal = new Game.Item("estHjpnSdv.png");
  item.estPorcoNormal.setPosition(150, 308);
  item.estPorcoNormal.setZorder(11);
  item.estPorcoNormal.setBrightness(150);
  item.estPorcoNormal.setInteractive(false);
  item.estPorcoNormal.onMouseOver = function() {
    item.estPorcoNormal.setBrightness(255);
    scene[1].setSubtitle("Teníase");
    item.popupChorume.disable();
    item.popupChorumeTexto.disable();
    item.popupLatrinaPoco.disable();
    item.popupLatrinaPocoTexto.disable();
  }
  item.estPorcoNormal.onMouseOut = function() {
    item.estPorcoNormal.setBrightness(220);
    scene[1].setSubtitle("");
  }
  item.estPorcoNormal.onClick = function() {
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
    item.estVacaNormal.changeBrightness(100, 600);
    item.estPocoNormal.changeBrightness(100, 600);
    item.setaSalaDeAula.changeAlpha(0, 600);

    item.estCenouraNormal.setInteractive(false);
    item.estVacaNormal.setInteractive(false);
    item.estPocoNormal.setInteractive(false);
    item.estPorcoNormal.setInteractive(false);
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
      item.estPorcoNormal.changeAlpha(0, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estPorcoNormal.disable();
      item.estPorcoCiclo.enable();
      item.estPorcoCiclo.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.porcoElem1.enable();
      item.porcoElem1.changeAlpha(1, 600);
      item.porcoNum1.enable();
      item.porcoNum1.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.porcoElem2.enable();
      item.porcoElem2.changeAlpha(1, 600);
      item.porcoNum2.enable();
      item.porcoNum2.changeAlpha(1, 600);
      item.porcoSetaElem1Elem2.enable();
      item.porcoSetaElem1Elem2.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.porcoSetaElem1Elem3.enable();
      item.porcoSetaElem1Elem3.changeAlpha(1, 600);
      item.porcoElem3.enable();
      item.porcoElem3.changeAlpha(1, 600);
      item.porcoNum3.enable();
      item.porcoNum3.changeAlpha(1, 600);
      item.porcoSetaElem3Est.enable();
      item.porcoSetaElem3Est.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.porcoSetaElem4Est.enable();
      item.porcoSetaElem4Est.changeAlpha(1, 600);
      item.porcoNum4.enable();
      item.porcoNum4.changeAlpha(1, 600);
      item.porcoElem4.enable();
      item.porcoElem4.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.porcoSetaEstElem5.enable();
      item.porcoSetaEstElem5.changeAlpha(1, 600);
      item.porcoNum5.enable();
      item.porcoNum5.changeAlpha(1, 600);
      item.porcoElem5.enable();
      item.porcoElem5.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.porcoSetaElem5Elem6.enable();
      item.porcoSetaElem5Elem6.changeAlpha(1, 600);
      item.porcoNum6.enable();
      item.porcoNum6.changeAlpha(1, 600);
      item.porcoElem6.enable();
      item.porcoElem6.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.porcoSetaElem6Elem7.enable();
      item.porcoSetaElem6Elem7.changeAlpha(1, 600);
      item.porcoNum7.enable();
      item.porcoNum7.changeAlpha(1, 600);
      item.porcoElem7.enable();
      item.porcoElem7.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.porcoSetaElem5Elem8.enable();
      item.porcoSetaElem5Elem8.changeAlpha(1, 600);
      item.porcoNum8.enable();
      item.porcoNum8.changeAlpha(1, 600);
      item.porcoElem8.enable();
      item.porcoElem8.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.porcoFechar.enable();
      item.porcoFechar.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }

  var itensPorcoCiclo = [];

  // Imagens ciclo
  item.estPorcoCiclo = new Game.Image("estHjpnClo.png");
  item.estPorcoCiclo.setPosition(960, 550);
  item.estPorcoCiclo.setScale(0.5);
  item.estPorcoCiclo.setZorder(9);
  item.estPorcoCiclo.setAlpha(0);
  item.estPorcoCiclo.disable();
  itensPorcoCiclo.push(item.estPorcoCiclo);

  item.porcoElem1 = new Game.Item("porco.png");
  item.porcoElem1.setPosition(300, 240);
  item.porcoElem1.setScale(0.7);
  item.porcoElem1.setZorder(6);
  item.porcoElem1.setAlpha(0);
  item.porcoElem1.disable();
  item.porcoElem1.onMouseOver = function() {
    scene[1].setSubtitle("Porco comendo lixo contaminado");
  }
  item.porcoElem1.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPorcoCiclo.push(item.porcoElem1);

  item.porcoNum1 = new Game.Text("1", estiloNumeros);
  item.porcoNum1.setAnchor(0.5, 0.6);
  item.porcoNum1.setPosition(470, 80);
  item.porcoNum1.setAlpha(0);
  item.porcoNum1.disable();
  itensPorcoCiclo.push(item.porcoNum1);

  item.porcoSetaElem1Elem2 = new Game.Line(300, 240, 700, 190, 4);
  item.porcoSetaElem1Elem2.setColor(0, 0, 0);
  item.porcoSetaElem1Elem2.setZorder(7);
  item.porcoSetaElem1Elem2.setAlpha(0);
  item.porcoSetaElem1Elem2.disable();
  itensPorcoCiclo.push(item.porcoSetaElem1Elem2);

  item.porcoElem2 = new Game.Item("ovoTenia.png");
  item.porcoElem2.setPosition(700, 190);
  item.porcoElem2.setScale(0.5);
  item.porcoElem2.setZorder(6);
  item.porcoElem2.setAlpha(0);
  item.porcoElem2.disable();
  item.porcoElem2.onMouseOver = function() {
    scene[1].setSubtitle("Ovo de <i>Taenia solium</i>");
  }
  item.porcoElem2.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPorcoCiclo.push(item.porcoElem2);

  item.porcoNum2 = new Game.Text("2", estiloNumeros);
  item.porcoNum2.setAnchor(0.5, 0.6);
  item.porcoNum2.setPosition(825, 65);
  item.porcoNum2.setAlpha(0);
  item.porcoNum2.disable();
  itensPorcoCiclo.push(item.porcoNum2);

  item.porcoSetaElem1Elem3 = new Game.Line(300, 240, 230, 545, 4);
  item.porcoSetaElem1Elem3.setColor(0, 0, 0);
  item.porcoSetaElem1Elem3.addArrowAtEnd();
  item.porcoSetaElem1Elem3.setZorder(7);
  item.porcoSetaElem1Elem3.setAlpha(0);
  item.porcoSetaElem1Elem3.disable();
  itensPorcoCiclo.push(item.porcoSetaElem1Elem3);

  item.porcoElem3 = new Game.Item("carneInfectada.png");
  item.porcoElem3.setPosition(200, 690);
  item.porcoElem3.setScale(0.5);
  item.porcoElem3.setZorder(6);
  item.porcoElem3.setAlpha(0);
  item.porcoElem3.disable();
  item.porcoElem3.onMouseOver = function() {
    scene[1].setSubtitle("Carne de porco crua com cisticercos de <i>T. solium</i>");
  }
  item.porcoElem3.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPorcoCiclo.push(item.porcoElem3);

  item.porcoNum3 = new Game.Text("3", estiloNumeros);
  item.porcoNum3.setAnchor(0.5, 0.6);
  item.porcoNum3.setPosition(330, 570);
  item.porcoNum3.setAlpha(0);
  item.porcoNum3.disable();
  itensPorcoCiclo.push(item.porcoNum3);

  item.porcoSetaElem3Est = new Game.Line(345, 665, 1000, 460, 4);
  item.porcoSetaElem3Est.setColor(0, 0, 0);
  item.porcoSetaElem3Est.addArrowAtBeginning();
  item.porcoSetaElem3Est.setZorder(7);
  item.porcoSetaElem3Est.setAlpha(0);
  item.porcoSetaElem3Est.disable();
  itensPorcoCiclo.push(item.porcoSetaElem3Est);

  item.porcoNum4 = new Game.Text("4", estiloNumeros);
  item.porcoNum4.setAnchor(0.5, 0.6);
  item.porcoNum4.setPosition(700, 660);
  item.porcoNum4.setAlpha(0);
  item.porcoNum4.disable();
  itensPorcoCiclo.push(item.porcoNum4);

  item.porcoElem4 = new Game.Item("teniaAdulta.png");
  item.porcoElem4.setPosition(580, 800);
  item.porcoElem4.setScale(0.51);
  item.porcoElem4.setZorder(6);
  item.porcoElem4.setAlpha(0);
  item.porcoElem4.disable();
  item.porcoElem4.onMouseOver = function() {
    scene[1].setSubtitle("Verme adulto de <i>T. solium</i>");
  }
  item.porcoElem4.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPorcoCiclo.push(item.porcoElem4);

  item.porcoSetaElem4Est = new Game.Line(580, 800, 1028, 785, 4);
  item.porcoSetaElem4Est.setColor(0, 0, 0);
  item.porcoSetaElem4Est.setZorder(7);
  item.porcoSetaElem4Est.setAlpha(0);
  item.porcoSetaElem4Est.disable();
  itensPorcoCiclo.push(item.porcoSetaElem4Est);

  item.porcoSetaEstElem5 = new Game.Line(1080, 815, 1300, 600, 4);
  item.porcoSetaEstElem5.setColor(0, 0, 0);
  item.porcoSetaEstElem5.setZorder(7);
  item.porcoSetaEstElem5.setAlpha(0);
  item.porcoSetaEstElem5.disable();
  itensPorcoCiclo.push(item.porcoSetaEstElem5);

  item.porcoNum5 = new Game.Text("5", estiloNumeros);
  item.porcoNum5.setAnchor(0.5, 0.6);
  item.porcoNum5.setPosition(1410, 470);
  item.porcoNum5.setAlpha(0);
  item.porcoNum5.disable();
  itensPorcoCiclo.push(item.porcoNum5);

  item.porcoElem5 = new Game.Item("fezesSemMosca.png");
  item.porcoElem5.setPosition(1300, 600);
  item.porcoElem5.setScale(0.48);
  item.porcoElem5.setZorder(6);
  item.porcoElem5.setAlpha(0);
  item.porcoElem5.disable();
  item.porcoElem5.onMouseOver = function() {
    scene[1].setSubtitle("Fezes com proglotes de <i>T. solium</i>");
  }
  item.porcoElem5.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPorcoCiclo.push(item.porcoElem5);

  item.porcoSetaElem5Elem6 = new Game.Line(1300, 600, 1400, 300, 4);
  item.porcoSetaElem5Elem6.setColor(0, 0, 0);
  item.porcoSetaElem5Elem6.setZorder(7);
  item.porcoSetaElem5Elem6.setAlpha(0);
  item.porcoSetaElem5Elem6.disable();
  itensPorcoCiclo.push(item.porcoSetaElem5Elem6);

  item.porcoNum6 = new Game.Text("6", estiloNumeros);
  item.porcoNum6.setAnchor(0.5, 0.6);
  item.porcoNum6.setPosition(1520, 180);
  item.porcoNum6.setAlpha(0);
  item.porcoNum6.disable();
  itensPorcoCiclo.push(item.porcoNum6);

  item.porcoElem6 = new Game.Item("proglate.png");
  item.porcoElem6.setPosition(1400, 300);
  item.porcoElem6.setScale(0.48);
  item.porcoElem6.setZorder(6);
  item.porcoElem6.setAlpha(0);
  item.porcoElem6.disable();
  item.porcoElem6.onMouseOver = function() {
    scene[1].setSubtitle("Proglotes com ovos");
  }
  item.porcoElem6.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPorcoCiclo.push(item.porcoElem6);

  item.porcoSetaElem6Elem7 = new Game.Line(1400, 300, 1740, 300, 4);
  item.porcoSetaElem6Elem7.setColor(0, 0, 0);
  item.porcoSetaElem6Elem7.setZorder(7);
  item.porcoSetaElem6Elem7.setAlpha(0);
  item.porcoSetaElem6Elem7.disable();
  itensPorcoCiclo.push(item.porcoSetaElem6Elem7);

  item.porcoNum7 = new Game.Text("7", estiloNumeros);
  item.porcoNum7.setAnchor(0.5, 0.6);
  item.porcoNum7.setPosition(1865, 175);
  item.porcoNum7.setAlpha(0);
  item.porcoNum7.disable();
  itensPorcoCiclo.push(item.porcoNum7);

  item.porcoElem7 = new Game.Item("ovoTenia.png");
  item.porcoElem7.setPosition(1740, 300);
  item.porcoElem7.setScale(0.5);
  item.porcoElem7.setZorder(6);
  item.porcoElem7.setAlpha(0);
  item.porcoElem7.disable();
  item.porcoElem7.onMouseOver = function() {
    scene[1].setSubtitle("Ovo de <i>T. solium</i>");
  }
  item.porcoElem7.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPorcoCiclo.push(item.porcoElem7);

  item.porcoSetaElem5Elem8 = new Game.Line(1300, 600, 1480, 725, 4);
  item.porcoSetaElem5Elem8.setColor(0, 0, 0);
  item.porcoSetaElem5Elem8.addArrowAtEnd();
  item.porcoSetaElem5Elem8.setZorder(7);
  item.porcoSetaElem5Elem8.setAlpha(0);
  item.porcoSetaElem5Elem8.disable();
  itensPorcoCiclo.push(item.porcoSetaElem5Elem8);

  item.porcoNum8 = new Game.Text("8", estiloNumeros);
  item.porcoNum8.setAnchor(0.5, 0.6);
  item.porcoNum8.setPosition(1810, 670);
  item.porcoNum8.setAlpha(0);
  item.porcoNum8.disable();
  itensPorcoCiclo.push(item.porcoNum8);

  item.porcoElem8 = new Game.Item("papelLixo.png");
  item.porcoElem8.setPosition(1650, 830);
  item.porcoElem8.setScale(0.68);
  item.porcoElem8.setZorder(6);
  item.porcoElem8.setAlpha(0);
  item.porcoElem8.disable();
  item.porcoElem8.onMouseOver = function() {
    scene[1].setSubtitle("Papel higiênico no lixo com proglotes de <i>T. solium</i>");
  }
  item.porcoElem8.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPorcoCiclo.push(item.porcoElem8);

  item.porcoFechar = new Game.Item("botaoFechar.png");
  item.porcoFechar.setPosition(1840, 70);
  item.porcoFechar.setRotation(180);
  item.porcoFechar.setBrightness(200);
  item.porcoFechar.setScale(0.14);
  item.porcoFechar.setZorder(1);
  item.porcoFechar.setAlpha(0);
  item.porcoFechar.disable();
  item.porcoFechar.onMouseOver = function() {
    item.porcoFechar.setBrightness(255);
  }
  item.porcoFechar.onMouseOut = function() {
    item.porcoFechar.setBrightness(200);
  }
  item.porcoFechar.onClick = function(mouse) {
    disableInteractiveness();
    somClique();

    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensPorcoCiclo, 0, 600);
    item.estPorcoNormal.brightnessTarget = 150;
    item.estPorcoNormal.interactiveTarget = false;
    item.estPorcoNormal.setInteractive(false);
    scene[1].nextState();

    setTimeout(function() {
      groupDisable(itensPorcoCiclo);
      scene[1].setSubtitle("");

      item.porcoFechar.setBrightness(200);
      item.estPorcoDoente.enable();
      item.estPorcoDoente.setBrightness(150); // Começa com 150 por causa que os 2 precisam ser vistos
      item.estPorcoDoente.changeAlpha(1, 600);

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
        item.estVacaNormal.changeBrightness(item.estVacaNormal.brightnessTarget, 600);
        // Return the interactiveness value
        item.estCenouraNormal.setInteractive(item.estCenouraNormal.interactiveTarget);
        item.estPocoNormal.setInteractive(item.estPocoNormal.interactiveTarget);
        item.estPorcoNormal.setInteractive(item.estPorcoNormal.interactiveTarget);
        item.estVacaNormal.setInteractive(item.estVacaNormal.interactiveTarget);
      }
    }, currentTime += animationInterval);

    if (scene[1].state > 1) {
      setTimeout(function() {
        groupDisable(itensPorcoCiclo);
        item.porcoBalaoSintoma.enable();
        item.porcoBalaoSintoma.changeAlpha(1, 600);
        item.porcoTextoSintomas.enable();
        item.porcoTextoSintomas.changeAlpha(1, 600);

        item.porcoAbaPrevencao.enable();
        item.porcoAbaPrevencao.changeAlpha(1, 600);
        item.porcoAbaTransmissao.enable();
        item.porcoAbaTransmissao.changeAlpha(1, 600);

        item.porcoBotaoOK.enable();
        item.porcoBotaoOK.changeAlpha(1, 600);

        item.porcoBalaoPrevencao.setAlpha(1);
        item.porcoBalaoTransmissao.setAlpha(1);
        item.porcoAbaSintomas.setAlpha(1);
        item.porcoBotaoOKhover.setAlpha(1);
        item.porcoTextoPrevencao.setAlpha(1);
        item.porcoTextoTransmissao.setAlpha(1);
      }, currentTime += animationInterval);
    }

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }
  itensPorcoCiclo.push(item.porcoFechar);

  var itensPorcoDoente = [];

  item.estPorcoDoente = new Game.Image("estHjpnDte.png");
  item.estPorcoDoente.setPosition(815, 590);
  item.estPorcoDoente.setScale(1.9);
  item.estPorcoDoente.setZorder(11);
  item.estPorcoDoente.setAlpha(0);
  item.estPorcoDoente.disable();
  itensPorcoDoente.push(item.estPorcoDoente);

  item.porcoBalaoSintoma = new Game.Image("balSintDir.png");
  item.porcoBalaoSintoma.setPosition(730+440+270, 300);
  item.porcoBalaoSintoma.setScale(0.25);
  item.porcoBalaoSintoma.setZorder(6);
  item.porcoBalaoSintoma.setAlpha(0);
  item.porcoBalaoSintoma.disable();
  itensPorcoDoente.push(item.porcoBalaoSintoma);

  item.porcoBalaoPrevencao = new Game.Image("balPrevDir.png");
  item.porcoBalaoPrevencao.setPosition(730+440+270, 300);
  item.porcoBalaoPrevencao.setScale(0.25);
  item.porcoBalaoPrevencao.setZorder(6);
  item.porcoBalaoPrevencao.disable();
  itensPorcoDoente.push(item.porcoBalaoPrevencao);

  item.porcoBalaoTransmissao = new Game.Image("balTranDir.png");
  item.porcoBalaoTransmissao.setPosition(730+440+270, 300);
  item.porcoBalaoTransmissao.setScale(0.25);
  item.porcoBalaoTransmissao.setZorder(6);
  item.porcoBalaoTransmissao.disable();
  itensPorcoDoente.push(item.porcoBalaoTransmissao);


  item.porcoAbaSintomas = new Game.Item("abaSint.png");
  item.porcoAbaSintomas.setPosition(426+550+270, 71);
  item.porcoAbaSintomas.setScale(0.25);
  item.porcoAbaSintomas.setZorder(7);
  item.porcoAbaSintomas.disable();
  item.porcoAbaSintomas.onClick = function() {
    somClique();

    item.porcoBalaoSintoma.enable();
    item.porcoBalaoPrevencao.disable();
    item.porcoBalaoTransmissao.disable();

    item.porcoAbaSintomas.disable();
    item.porcoAbaPrevencao.enable();
    item.porcoAbaTransmissao.enable();

    item.porcoTextoSintomas.enable();
    item.porcoTextoPrevencao.disable();
    item.porcoTextoTransmissao.disable();
  }
  itensPorcoDoente.push(item.porcoAbaSintomas);

  item.porcoTextoSintomas = new Game.Text(
    "- Dores abdominais, flatulência, náuseas;\n" +
    "- Debilidade, perda de peso;\n" +
    "- Diarreia ou constipação quando o parasita permanece na\n" +
    "luz intestinal."
    , estiloInfoBalao);
  item.porcoTextoSintomas.setPosition(432-130+550+270, 58+20);
  item.porcoTextoSintomas.setAlpha(0);
  item.porcoTextoSintomas.disable();
  itensPorcoDoente.push(item.porcoTextoSintomas);

  item.porcoAbaPrevencao = new Game.Item("abaPrev.png");
  item.porcoAbaPrevencao.setPosition(432+486+550+270, 71);
  item.porcoAbaPrevencao.setScale(0.25);
  item.porcoAbaPrevencao.setZorder(9);
  item.porcoAbaPrevencao.setAlpha(0);
  item.porcoAbaPrevencao.disable();
  item.porcoAbaPrevencao.onClick = function() {
    somClique();

    item.porcoBalaoSintoma.disable();
    item.porcoBalaoPrevencao.enable();
    item.porcoBalaoTransmissao.disable();

    item.porcoAbaSintomas.enable();
    item.porcoAbaPrevencao.disable();
    item.porcoAbaTransmissao.enable();

    item.porcoTextoSintomas.disable();
    item.porcoTextoPrevencao.enable();
    item.porcoTextoTransmissao.disable();
  }
  itensPorcoDoente.push(item.porcoAbaPrevencao);

  item.porcoTextoPrevencao = new Game.Text(
    "- Impedir o acesso de suínos e bovinos às fezes humanas,\n" +
    "latrinas, esgotos e pastagens/alimentos contaminados;\n" +
    "- Implantação de ações de fiscalização e de orientação,\n" +
    "permitindo o acesso da população a maiores informações e\n" +
    "a alimentos inspecionados;\n" +
    "- Evitar o consumo de carne mal passada;\n" +
    "- Obter produtos de boa origem."
    , estiloInfoBalao);
  item.porcoTextoPrevencao.setPosition(432-130+550+270, 58+20);
  item.porcoTextoPrevencao.disable();
  itensPorcoDoente.push(item.porcoTextoPrevencao);

  item.porcoAbaTransmissao = new Game.Item("abaTran.png");
  item.porcoAbaTransmissao.setPosition(432+240+550+270, 71);
  item.porcoAbaTransmissao.setScale(0.25);
  item.porcoAbaTransmissao.setZorder(8);
  item.porcoAbaTransmissao.setAlpha(0);
  item.porcoAbaTransmissao.disable();
  item.porcoAbaTransmissao.onClick = function() {
    somClique();

    item.porcoBalaoSintoma.disable();
    item.porcoBalaoPrevencao.disable();
    item.porcoBalaoTransmissao.enable();

    item.porcoAbaSintomas.enable();
    item.porcoAbaPrevencao.enable();
    item.porcoAbaTransmissao.disable();

    item.porcoTextoSintomas.disable();
    item.porcoTextoPrevencao.disable();
    item.porcoTextoTransmissao.enable();
  }
  itensPorcoDoente.push(item.porcoAbaTransmissao);

  item.porcoTextoTransmissao = new Game.Text(
    "Ingestão de carne mal passada ou crua (suína ou bovina)\n" +
    "que esteja infectada com cisticercos de <i>Taenia</i> sp."
    , estiloInfoBalao);
  item.porcoTextoTransmissao.setPosition(432-130+550+270, 58+20);
  item.porcoTextoTransmissao.disable();
  itensPorcoDoente.push(item.porcoTextoTransmissao);

  item.porcoBotaoOK = new Game.Item("okNormal.png");
  item.porcoBotaoOK.setScale(0.25);
  item.porcoBotaoOK.setPosition(432+450+550+270, 71+290);
  item.porcoBotaoOK.setAlpha(0);
  item.porcoBotaoOK.disable();
  item.porcoBotaoOK.onMouseOver = function() {
    item.porcoBotaoOK.disable();
    item.porcoBotaoOKhover.enable();
  }
  item.porcoBotaoOK.onClick = function() {
    item.porcoBotaoOKhover.onClick();
  }
  itensPorcoDoente.push(item.porcoBotaoOK);

  item.porcoBotaoOKhover = new Game.Item("okHover.png");
  item.porcoBotaoOKhover.setScale(0.25);
  item.porcoBotaoOKhover.setPosition(432+450+550+270, 71+290);
  item.porcoBotaoOKhover.disable();
  item.porcoBotaoOKhover.onMouseOut = function() {
    item.porcoBotaoOKhover.disable();
    item.porcoBotaoOK.enable();
  }
  item.porcoBotaoOKhover.onClick = function() {
    disableInteractiveness();
    somClique();

    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensPorcoDoente, 0, 600);
    if (scene[1].state == 2) {
      item.estVacaDoente.changeAlpha(0, 600);
    }

    setTimeout(function() {
      item.estPorcoNormal.enable();
      item.estPorcoNormal.setBrightness(220);
      item.estPorcoNormal.changeAlpha(1, 600);

      if (scene[1].state == 2) {
        item.estVacaNormal.enable();
        item.estVacaNormal.setBrightness(item.estVacaNormal.brightnessTarget);
        item.estVacaNormal.changeAlpha(1, 600);
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
      item.estVacaNormal.changeBrightness(item.estVacaNormal.brightnessTarget, 600);
      item.estPorcoNormal.changeBrightness(item.estPorcoNormal.brightnessTarget, 600);
      item.setaSalaDeAula.enable();
      item.setaSalaDeAula.changeAlpha(1, 600);

      item.porcoBotaoOKhover.disable();
      item.porcoBalaoPrevencao.disable();
      item.porcoBalaoTransmissao.disable();
      item.porcoAbaSintomas.disable();
      item.porcoAbaPrevencao.disable();
      item.porcoAbaTransmissao.disable();
      item.porcoTextoPrevencao.disable();
      item.porcoTextoTransmissao.disable();
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
  itensPorcoDoente.push(item.porcoBotaoOKhover);

}
