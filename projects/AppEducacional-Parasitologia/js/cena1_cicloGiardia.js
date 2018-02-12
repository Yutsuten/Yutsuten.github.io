function carregaCicloGiardia() {
  // Criando um aliase de scene[1].item
  var item = scene[1].item;

  // Adicionando o aluno
  item.estPocoNormal = new Game.Item("estMbrcSdv.png");
  item.estPocoNormal.setPosition(1500, 650);
  item.estPocoNormal.setZorder(9);
  item.estPocoNormal.setBrightness(220);
  item.estPocoNormal.onMouseOver = function() {
    item.estPocoNormal.setBrightness(255);
    scene[1].setSubtitle("Giardíase");
    item.popupChorume.disable();
    item.popupChorumeTexto.disable();
    item.popupLatrinaPoco.disable();
    item.popupLatrinaPocoTexto.disable();
  }
  item.estPocoNormal.onMouseOut = function() {
    item.estPocoNormal.setBrightness(220);
    scene[1].setSubtitle("");
  }
  item.estPocoNormal.onClick = function() {
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
    item.estPorcoNormal.changeBrightness(100, 600);
    item.setaSalaDeAula.changeAlpha(0, 600);

    item.estCenouraNormal.setInteractive(false);
    item.estVacaNormal.setInteractive(false);
    item.estPorcoNormal.setInteractive(false);
    item.estPocoNormal.setInteractive(false);
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
      item.estPocoNormal.changeAlpha(0, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estPocoNormal.disable();
      item.estPocoCiclo.enable();
      item.estPocoCiclo.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pocoElem1.enable();
      item.pocoElem1.changeAlpha(1, 600);
      item.pocoNum1.enable();
      item.pocoNum1.changeAlpha(1, 600);
      item.pocoSetaElem1Est.enable();
      item.pocoSetaElem1Est.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pocoElem2.enable();
      item.pocoElem2.changeAlpha(1, 600);
      item.pocoNum2.enable();
      item.pocoNum2.changeAlpha(1, 600);
      item.pocoSetaEst1Elem2.enable();
      item.pocoSetaEst1Elem2.changeAlpha(1, 600);
      item.pocoSetaEst2Elem2.enable();
      item.pocoSetaEst2Elem2.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pocoElem3.enable();
      item.pocoElem3.changeAlpha(1, 600);
      item.pocoNum3.enable();
      item.pocoNum3.changeAlpha(1, 600);
      item.pocoSetaElem2Elem3.enable();
      item.pocoSetaElem2Elem3.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pocoNum4.enable();
      item.pocoNum4.changeAlpha(1, 600);
      item.pocoElem4.enable();
      item.pocoElem4.changeAlpha(1, 600);
      item.pocoSetaElem3Elem4.enable();
      item.pocoSetaElem3Elem4.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pocoNum5.enable();
      item.pocoNum5.changeAlpha(1, 600);
      item.pocoSetaEstElem5.enable();
      item.pocoSetaEstElem5.changeAlpha(1, 600);
      item.pocoElem5.enable();
      item.pocoElem5.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pocoSetaElem5Elem6.enable();
      item.pocoSetaElem5Elem6.changeAlpha(1, 600);
      item.pocoElem6.enable();
      item.pocoElem6.changeAlpha(1, 600);
      item.pocoNum6.enable();
      item.pocoNum6.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pocoFechar.enable();
      item.pocoFechar.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }

  var itensPocoCiclo = [];

  // Imagens ciclo
  item.estPocoCiclo = new Game.Image("estMbrcClo.png");
  item.estPocoCiclo.setPosition(800, 550);
  item.estPocoCiclo.setScale(0.5);
  item.estPocoCiclo.setZorder(9);
  item.estPocoCiclo.setAlpha(0);
  item.estPocoCiclo.disable();
  itensPocoCiclo.push(item.estPocoCiclo);

  item.pocoElem1 = new Game.Item("poco.png");
  item.pocoElem1.setPosition(385, 300);
  item.pocoElem1.setScale(0.8);
  item.pocoElem1.setZorder(6);
  item.pocoElem1.setAlpha(0);
  item.pocoElem1.disable();
  item.pocoElem1.onMouseOver = function() {
    scene[1].setSubtitle("Poço artesiano contaminado com cistos de <i>Giardia lamblia</i>");
  }
  item.pocoElem1.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPocoCiclo.push(item.pocoElem1);

  item.pocoNum1 = new Game.Text("1", estiloNumeros);
  item.pocoNum1.setAnchor(0.5, 0.6);
  item.pocoNum1.setPosition(600, 140);
  item.pocoNum1.setAlpha(0);
  item.pocoNum1.disable();
  itensPocoCiclo.push(item.pocoNum1);

  item.pocoSetaElem1Est = new Game.Line(595, 390, 720, 430, 4);
  item.pocoSetaElem1Est.setColor(0, 0, 0);
  item.pocoSetaElem1Est.addArrowAtBeginning();
  item.pocoSetaElem1Est.setZorder(7);
  item.pocoSetaElem1Est.setAlpha(0);
  item.pocoSetaElem1Est.disable();
  itensPocoCiclo.push(item.pocoSetaElem1Est);

  item.pocoElem2 = new Game.Item("cistos.png");
  item.pocoElem2.setPosition(1120, 280);
  item.pocoElem2.setScale(0.5);
  item.pocoElem2.setZorder(6);
  item.pocoElem2.setAlpha(0);
  item.pocoElem2.disable();
  item.pocoElem2.onMouseOver = function() {
    scene[1].setSubtitle("Cistos de <i>G. lamblia</i>");
  }
  item.pocoElem2.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPocoCiclo.push(item.pocoElem2);

  item.pocoNum2 = new Game.Text("2", estiloNumeros);
  item.pocoNum2.setAnchor(0.5, 0.6);
  item.pocoNum2.setPosition(1240, 150);
  item.pocoNum2.setAlpha(0);
  item.pocoNum2.disable();
  itensPocoCiclo.push(item.pocoNum2);

  item.pocoSetaEst1Elem2 = new Game.Line(810, 400, 1180, 280, 4);
  item.pocoSetaEst1Elem2.setColor(0, 0, 0);
  item.pocoSetaEst1Elem2.addArrowAtEnd();
  item.pocoSetaEst1Elem2.setZorder(7);
  item.pocoSetaEst1Elem2.setAlpha(0);
  item.pocoSetaEst1Elem2.disable();
  itensPocoCiclo.push(item.pocoSetaEst1Elem2);

  item.pocoSetaEst2Elem2 = new Game.Line(878, 755, 1180, 280, 4);
  item.pocoSetaEst2Elem2.setColor(0, 0, 0);
  item.pocoSetaEst2Elem2.setZorder(7);
  item.pocoSetaEst2Elem2.setAlpha(0);
  item.pocoSetaEst2Elem2.disable();
  itensPocoCiclo.push(item.pocoSetaEst2Elem2);

  item.pocoElem3 = new Game.Item("giardiaReproducao.png");
  item.pocoElem3.setPosition(1450, 280);
  item.pocoElem3.setScale(0.49);
  item.pocoElem3.setZorder(6);
  item.pocoElem3.setAlpha(0);
  item.pocoElem3.disable();
  item.pocoElem3.onMouseOver = function() {
    scene[1].setSubtitle("Multiplicação de trofozoítos de <i>G. lamblia</i>");
  }
  item.pocoElem3.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPocoCiclo.push(item.pocoElem3);

  item.pocoNum3 = new Game.Text("3", estiloNumeros);
  item.pocoNum3.setAnchor(0.5, 0.6);
  item.pocoNum3.setPosition(1570, 150);
  item.pocoNum3.setAlpha(0);
  item.pocoNum3.disable();
  itensPocoCiclo.push(item.pocoNum3);

  item.pocoSetaElem2Elem3 = new Game.Line(1120, 280, 1310, 280, 4);
  item.pocoSetaElem2Elem3.setColor(0, 0, 0);
  item.pocoSetaElem2Elem3.addArrowAtEnd();
  item.pocoSetaElem2Elem3.setZorder(7);
  item.pocoSetaElem2Elem3.setAlpha(0);
  item.pocoSetaElem2Elem3.disable();
  itensPocoCiclo.push(item.pocoSetaElem2Elem3);

  item.pocoNum4 = new Game.Text("4", estiloNumeros);
  item.pocoNum4.setAnchor(0.5, 0.6);
  item.pocoNum4.setPosition(1880, 140);
  item.pocoNum4.setAlpha(0);
  item.pocoNum4.disable();
  itensPocoCiclo.push(item.pocoNum4);

  item.pocoElem4 = new Game.Item("maisCistos.png");
  item.pocoElem4.setPosition(1780, 280);
  item.pocoElem4.setScale(0.5);
  item.pocoElem4.setZorder(6);
  item.pocoElem4.setAlpha(0);
  item.pocoElem4.disable();
  item.pocoElem4.onMouseOver = function() {
    scene[1].setSubtitle("Cistos de <i>G. lamblia</i>");
  }
  item.pocoElem4.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPocoCiclo.push(item.pocoElem4);

  item.pocoSetaElem3Elem4 = new Game.Line(1450, 280, 1630, 280, 4);
  item.pocoSetaElem3Elem4.setColor(0, 0, 0);
  item.pocoSetaElem3Elem4.addArrowAtEnd();
  item.pocoSetaElem3Elem4.setZorder(7);
  item.pocoSetaElem3Elem4.setAlpha(0);
  item.pocoSetaElem3Elem4.disable();
  itensPocoCiclo.push(item.pocoSetaElem3Elem4);

  item.pocoNum5 = new Game.Text("5", estiloNumeros);
  item.pocoNum5.setAnchor(0.5, 0.6);
  item.pocoNum5.setPosition(1310, 680);
  item.pocoNum5.setAlpha(0);
  item.pocoNum5.disable();
  itensPocoCiclo.push(item.pocoNum5);

  item.pocoSetaEstElem5 = new Game.Line(860, 830, 1040, 790, 4);
  item.pocoSetaEstElem5.setColor(0, 0, 0);
  item.pocoSetaEstElem5.addArrowAtEnd();
  item.pocoSetaEstElem5.setZorder(7);
  item.pocoSetaEstElem5.setAlpha(0);
  item.pocoSetaEstElem5.disable();
  itensPocoCiclo.push(item.pocoSetaEstElem5);

  item.pocoElem5 = new Game.Item("fezesSemMosca.png");
  item.pocoElem5.setPosition(1180, 800);
  item.pocoElem5.setScale(0.47);
  item.pocoElem5.setZorder(6);
  item.pocoElem5.setAlpha(0);
  item.pocoElem5.disable();
  item.pocoElem5.onMouseOver = function() {
    scene[1].setSubtitle("Fezes com cistos de <i>G. lamblia</i>");
  }
  item.pocoElem5.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPocoCiclo.push(item.pocoElem5);

  item.pocoSetaElem5Elem6 = new Game.Line(1180, 800, 1440, 800, 4);
  item.pocoSetaElem5Elem6.setColor(0, 0, 0);
  item.pocoSetaElem5Elem6.addArrowAtEnd();
  item.pocoSetaElem5Elem6.setZorder(7);
  item.pocoSetaElem5Elem6.setAlpha(0);
  item.pocoSetaElem5Elem6.disable();
  itensPocoCiclo.push(item.pocoSetaElem5Elem6);

  item.pocoElem6 = new Game.Item("lencolFreatico.png");
  item.pocoElem6.setPosition(1650, 800);
  item.pocoElem6.setScale(0.75);
  item.pocoElem6.setZorder(6);
  item.pocoElem6.setAlpha(0);
  item.pocoElem6.disable();
  item.pocoElem6.onMouseOver = function() {
    scene[1].setSubtitle("Fezes da fossa contaminam o lençol freático, que abastece o poço artesiano");
  }
  item.pocoElem6.onMouseOut = function() {
    scene[1].setSubtitle("");
  }
  itensPocoCiclo.push(item.pocoElem6);

  item.pocoNum6 = new Game.Text("6", estiloNumeros);
  item.pocoNum6.setAnchor(0.5, 0.6);
  item.pocoNum6.setPosition(1830, 630);
  item.pocoNum6.setAlpha(0);
  item.pocoNum6.disable();
  itensPocoCiclo.push(item.pocoNum6);

  item.pocoFechar = new Game.Item("botaoFechar.png");
  item.pocoFechar.setPosition(1840, 70);
  item.pocoFechar.setRotation(180);
  item.pocoFechar.setBrightness(200);
  item.pocoFechar.setScale(0.14);
  item.pocoFechar.setZorder(1);
  item.pocoFechar.setAlpha(0);
  item.pocoFechar.disable();
  item.pocoFechar.onMouseOver = function() {
    item.pocoFechar.setBrightness(255);
  }
  item.pocoFechar.onMouseOut = function() {
    item.pocoFechar.setBrightness(200);
  }
  item.pocoFechar.onClick = function(mouse) {
    disableInteractiveness();
    somClique();

    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensPocoCiclo, 0, 600);

    setTimeout(function() {
      groupDisable(itensPocoCiclo);
      scene[1].setSubtitle("");

      item.pocoFechar.setBrightness(200);
      item.estPocoDoente.enable();
      item.estPocoDoente.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      groupDisable(itensPocoCiclo);
      item.pocoBalaoSintoma.enable();
      item.pocoBalaoSintoma.changeAlpha(1, 600);
      item.pocoTextoSintomas.enable();
      item.pocoTextoSintomas.changeAlpha(1, 600);

      item.pocoAbaPrevencao.enable();
      item.pocoAbaPrevencao.changeAlpha(1, 600);
      item.pocoAbaTransmissao.enable();
      item.pocoAbaTransmissao.changeAlpha(1, 600);

      item.pocoBotaoOK.enable();
      item.pocoBotaoOK.changeAlpha(1, 600);

      item.pocoBalaoPrevencao.setAlpha(1);
      item.pocoBalaoTransmissao.setAlpha(1);
      item.pocoAbaSintomas.setAlpha(1);
      item.pocoBotaoOKhover.setAlpha(1);
      item.pocoTextoPrevencao.setAlpha(1);
      item.pocoTextoTransmissao.setAlpha(1);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }
  itensPocoCiclo.push(item.pocoFechar);

  var itensPocoDoente = [];

  item.estPocoDoente = new Game.Image("estMbrcDte.png");
  item.estPocoDoente.setPosition(1320, 670);
  item.estPocoDoente.setZorder(11);
  item.estPocoDoente.setAlpha(0);
  item.estPocoDoente.disable();
  itensPocoDoente.push(item.estPocoDoente);

  item.pocoBalaoSintoma = new Game.Image("balSintEsq.png");
  item.pocoBalaoSintoma.setPosition(730+80, 300);
  item.pocoBalaoSintoma.setScale(0.25);
  item.pocoBalaoSintoma.setZorder(6);
  item.pocoBalaoSintoma.setAlpha(0);
  item.pocoBalaoSintoma.disable();
  itensPocoDoente.push(item.pocoBalaoSintoma);

  item.pocoBalaoPrevencao = new Game.Image("balPrevEsq.png");
  item.pocoBalaoPrevencao.setPosition(730+80, 300);
  item.pocoBalaoPrevencao.setScale(0.25);
  item.pocoBalaoPrevencao.setZorder(6);
  item.pocoBalaoPrevencao.disable();
  itensPocoDoente.push(item.pocoBalaoPrevencao);

  item.pocoBalaoTransmissao = new Game.Image("balTranEsq.png");
  item.pocoBalaoTransmissao.setPosition(730+80, 300);
  item.pocoBalaoTransmissao.setScale(0.25);
  item.pocoBalaoTransmissao.setZorder(6);
  item.pocoBalaoTransmissao.disable();
  itensPocoDoente.push(item.pocoBalaoTransmissao);


  item.pocoAbaSintomas = new Game.Item("abaSint.png");
  item.pocoAbaSintomas.setPosition(432+80, 71);
  item.pocoAbaSintomas.setScale(0.25);
  item.pocoAbaSintomas.setZorder(7);
  item.pocoAbaSintomas.disable();
  item.pocoAbaSintomas.onClick = function() {
    somClique();

    item.pocoBalaoSintoma.enable();
    item.pocoBalaoPrevencao.disable();
    item.pocoBalaoTransmissao.disable();

    item.pocoAbaSintomas.disable();
    item.pocoAbaPrevencao.enable();
    item.pocoAbaTransmissao.enable();

    item.pocoTextoSintomas.enable();
    item.pocoTextoPrevencao.disable();
    item.pocoTextoTransmissao.disable();
  }
  itensPocoDoente.push(item.pocoAbaSintomas);

  item.pocoTextoSintomas = new Game.Text(
    "- Maioria das infecções são assintomáticas;\n" +
    "- <b>Sintomas comuns:</b> dor abdominal, enterite (inflamação do\n" +
    "tecido intestinal), perda de apetite, diarréia amarela, perda\n" +
    "de peso, insônia;\n" +
    "- Quando há predomínio de cistos as fezes continuam só-\n" +
    "lidas;\n" +
    "- <b>Outros:</b> vômito; flatulência."
    , estiloInfoBalao);
  item.pocoTextoSintomas.setPosition(432-130+80, 58+20);
  item.pocoTextoSintomas.setAlpha(0);
  item.pocoTextoSintomas.disable();
  itensPocoDoente.push(item.pocoTextoSintomas);

  item.pocoAbaPrevencao = new Game.Item("abaPrev.png");
  item.pocoAbaPrevencao.setPosition(432+486+80, 71);
  item.pocoAbaPrevencao.setScale(0.25);
  item.pocoAbaPrevencao.setZorder(9);
  item.pocoAbaPrevencao.setAlpha(0);
  item.pocoAbaPrevencao.disable();
  item.pocoAbaPrevencao.onClick = function() {
    somClique();

    item.pocoBalaoSintoma.disable();
    item.pocoBalaoPrevencao.enable();
    item.pocoBalaoTransmissao.disable();

    item.pocoAbaSintomas.enable();
    item.pocoAbaPrevencao.disable();
    item.pocoAbaTransmissao.enable();

    item.pocoTextoSintomas.disable();
    item.pocoTextoPrevencao.enable();
    item.pocoTextoTransmissao.disable();
  }
  itensPocoDoente.push(item.pocoAbaPrevencao);

  item.pocoTextoPrevencao = new Game.Text(
    "- Lavar bem as mãos e com frequência;\n" +
    "- Ingerir apenas água tratada (entretanto, a utilização do cloro\n" +
    "não é suficiente para matar os cistos deste protozoário);\n" +
    "- Higienizar alimentos antes do consumo."
    , estiloInfoBalao);
  item.pocoTextoPrevencao.setPosition(432-130+80, 58+20);
  item.pocoTextoPrevencao.disable();
  itensPocoDoente.push(item.pocoTextoPrevencao);

  item.pocoAbaTransmissao = new Game.Item("abaTran.png");
  item.pocoAbaTransmissao.setPosition(432+232+80, 71);
  item.pocoAbaTransmissao.setScale(0.25);
  item.pocoAbaTransmissao.setZorder(8);
  item.pocoAbaTransmissao.setAlpha(0);
  item.pocoAbaTransmissao.disable();
  item.pocoAbaTransmissao.onClick = function() {
    somClique();

    item.pocoBalaoSintoma.disable();
    item.pocoBalaoPrevencao.disable();
    item.pocoBalaoTransmissao.enable();

    item.pocoAbaSintomas.enable();
    item.pocoAbaPrevencao.enable();
    item.pocoAbaTransmissao.disable();

    item.pocoTextoSintomas.disable();
    item.pocoTextoPrevencao.disable();
    item.pocoTextoTransmissao.enable();
  }
  itensPocoDoente.push(item.pocoAbaTransmissao);

  item.pocoTextoTransmissao = new Game.Text(
    "- Mais comum em crianças por ser encontrada em ambientes\n" +
    "coletivos, como creches, internatos e escolas que oferecem\n" +
    "merenda escolar;\n" +
    "- Alimentos crus e contaminados;\n" +
    "- Água contaminada."
    , estiloInfoBalao);
  item.pocoTextoTransmissao.setPosition(432-130+80, 58+20);
  item.pocoTextoTransmissao.disable();
  itensPocoDoente.push(item.pocoTextoTransmissao);

  item.pocoBotaoOK = new Game.Item("okNormal.png");
  item.pocoBotaoOK.setScale(0.25);
  item.pocoBotaoOK.setPosition(432+450+80, 71+290);
  item.pocoBotaoOK.setAlpha(0);
  item.pocoBotaoOK.disable();
  item.pocoBotaoOK.onMouseOver = function() {
    item.pocoBotaoOK.disable();
    item.pocoBotaoOKhover.enable();
  }
  item.pocoBotaoOK.onClick = function() {
    item.pocoBotaoOKhover.onClick();
  }
  itensPocoDoente.push(item.pocoBotaoOK);

  item.pocoBotaoOKhover = new Game.Item("okHover.png");
  item.pocoBotaoOKhover.setScale(0.25);
  item.pocoBotaoOKhover.setPosition(432+450+80, 71+290);
  item.pocoBotaoOKhover.disable();
  item.pocoBotaoOKhover.onMouseOut = function() {
    item.pocoBotaoOKhover.disable();
    item.pocoBotaoOK.enable();
  }
  item.pocoBotaoOKhover.onClick = function() {
    disableInteractiveness();
    somClique();

    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensPocoDoente, 0, 600);
    scene[1].nextState();

    setTimeout(function() {
      item.estPocoNormal.enable();
      item.estPocoNormal.setBrightness(item.estPocoNormal.brightnessTarget);
      item.estPocoNormal.changeAlpha(1, 600);

      scene[1].background.changeBrightness(210, 600);
      item.chiqueiro.changeBrightness(210, 600);
      item.horta.changeBrightness(210, 600);
      item.latrina.changeBrightness(210, 600);
      item.lixeira.changeBrightness(210, 600);
      item.pocoExterior.changeBrightness(210, 600);
      item.vacaExterior.changeBrightness(210, 600);

      item.estCenouraNormal.changeBrightness(item.estCenouraNormal.brightnessTarget, 600);
      item.estVacaNormal.changeBrightness(item.estVacaNormal.brightnessTarget, 600);
      item.estPorcoNormal.changeBrightness(item.estPorcoNormal.brightnessTarget, 600);
      item.setaSalaDeAula.enable();
      item.setaSalaDeAula.changeAlpha(1, 600);

      item.pocoBotaoOKhover.disable();
      item.pocoBalaoPrevencao.disable();
      item.pocoBalaoTransmissao.disable();
      item.pocoAbaSintomas.disable();
      item.pocoAbaPrevencao.disable();
      item.pocoAbaTransmissao.disable();
      item.pocoTextoPrevencao.disable();
      item.pocoTextoTransmissao.disable();
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estCenouraNormal.setInteractive(item.estCenouraNormal.interactiveTarget);
      item.estVacaNormal.setInteractive(item.estVacaNormal.interactiveTarget);
      item.estPorcoNormal.setInteractive(item.estPorcoNormal.interactiveTarget);
      item.estPocoNormal.setInteractive(item.estPocoNormal.interactiveTarget);

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
  itensPocoDoente.push(item.pocoBotaoOKhover);

}
