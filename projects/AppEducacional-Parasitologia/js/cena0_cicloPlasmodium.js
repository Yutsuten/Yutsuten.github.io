function carregaCicloPlasmodium() {
  // Criando um aliase de scene[0].item
  var item = scene[0].item;

  // Adicionando o aluno
  item.estPernNormal = new Game.Item("estMngrSdv.png");
  item.estPernNormal.setPosition(1586, 838);
  item.estPernNormal.setZorder(9);
  item.estPernNormal.setBrightness(220);
  item.estPernNormal.onMouseOver = function() {
    item.estPernNormal.setBrightness(255);
    scene[0].setSubtitle("Malária");
    item.popupFlores.disable();
    item.popupFloresTexto.disable();
  }
  item.estPernNormal.onMouseOut = function() {
    item.estPernNormal.setBrightness(220);
    scene[0].setSubtitle("");
  }
  item.estPernNormal.onClick = function() {
    disableInteractiveness();
    somClique();

    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    item.popupFlores.disable();
    item.popupFloresTexto.disable();

    // Fadeout unrelated images
    scene[0].background.changeBrightness(100, 600);
    item.carteiras.changeBrightness(100, 600);
    item.mesaProfessor.changeBrightness(100, 600);
    item.caixaDeAreia.changeBrightness(100, 600);
    item.vasoDeFlores.changeBrightness(100, 600);

    item.estTomateNormal.changeBrightness(100, 600);
    item.estBananaNormal.changeBrightness(100, 600);
    item.estGatoNormal.changeBrightness(100, 600);
    item.setaJanela.changeAlpha(0, 600);
    item.setaArmario.changeAlpha(0, 600);

    item.estTomateNormal.setInteractive(false);
    item.estBananaNormal.setInteractive(false);
    item.estGatoNormal.setInteractive(false);
    item.estPernNormal.setInteractive(false);
    item.setaJanela.setInteractive(false);
    item.setaArmario.setInteractive(false);
    item.caixaDeAreia.setInteractive(false);
    item.vasoDeFlores.setInteractive(false);

    setTimeout(function() {
      scene[0].setSubtitle("");
      item.setaJanela.disable();
      item.setaArmario.disable();
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estPernNormal.changeAlpha(0, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estPernNormal.disable();
      item.estPernCiclo.enable();
      item.estPernCiclo.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pernElem1.enable();
      item.pernElem1.changeAlpha(1, 600);
      item.pernNum1.enable();
      item.pernNum1.changeAlpha(1, 600);
      item.pernSetaElem1Est.enable();
      item.pernSetaElem1Est.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pernElem2.enable();
      item.pernElem2.changeAlpha(1, 600);
      item.pernNum2.enable();
      item.pernNum2.changeAlpha(1, 600);
      item.pernSetaElem2Est.enable();
      item.pernSetaElem2Est.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pernElem3.enable();
      item.pernElem3.changeAlpha(1, 600);
      item.pernNum3.enable();
      item.pernNum3.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pernSetaElem3aElem4.enable();
      item.pernSetaElem3aElem4.changeAlpha(1, 600);
      item.pernNum4.enable();
      item.pernNum4.changeAlpha(1, 600);
      item.pernElem4.enable();
      item.pernElem4.changeAlpha(1, 600);
      item.pernSetaElem4Est.enable();
      item.pernSetaElem4Est.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pernSetaEstElem5.enable();
      item.pernSetaEstElem5.changeAlpha(1, 600);
      item.pernNum5.enable();
      item.pernNum5.changeAlpha(1, 600);
      item.pernElem5.enable();
      item.pernElem5.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pernSetaElem5Elem6.enable();
      item.pernSetaElem5Elem6.changeAlpha(1, 600);
      item.pernNum6.enable();
      item.pernNum6.changeAlpha(1, 600);
      item.pernElem6.enable();
      item.pernElem6.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pernSetaEstElem7.enable();
      item.pernSetaEstElem7.changeAlpha(1, 600);
      item.pernNum7.enable();
      item.pernNum7.changeAlpha(1, 600);
      item.pernElem7.enable();
      item.pernElem7.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pernSetaElem7Elem8.enable();
      item.pernSetaElem7Elem8.changeAlpha(1, 600);
      item.pernNum8.enable();
      item.pernNum8.changeAlpha(1, 600);
      item.pernElem8.enable();
      item.pernElem8.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.pernFechar.enable();
      item.pernFechar.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }

  var itensPernCiclo = [];

  // Imagens ciclo
  item.estPernCiclo = new Game.Image("estMngrClo.png");
  item.estPernCiclo.setPosition(960, 550);
  item.estPernCiclo.setScale(0.5);
  item.estPernCiclo.setZorder(9);
  item.estPernCiclo.setAlpha(0);
  item.estPernCiclo.disable();
  itensPernCiclo.push(item.estPernCiclo);

  item.pernElem1 = new Game.Item("mosquito.png");
  item.pernElem1.setPosition(550, 250);
  item.pernElem1.setScale(0.4);
  item.pernElem1.setZorder(6);
  item.pernElem1.setAlpha(0);
  item.pernElem1.disable();
  item.pernElem1.onMouseOver = function() {
    scene[0].setSubtitle("Mosquito fêmea transmissor da Malária: <i>Anopheles</i> sp");
  }
  item.pernElem1.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensPernCiclo.push(item.pernElem1);

  item.pernNum1 = new Game.Text("1", estiloNumeros);
  item.pernNum1.setAnchor(0.5, 0.6);
  item.pernNum1.setPosition(650, 140);
  item.pernNum1.setAlpha(0);
  item.pernNum1.disable();
  itensPernCiclo.push(item.pernNum1);

  item.pernSetaElem1Est = new Game.Line(550, 250, 725, 700, 4);
  item.pernSetaElem1Est.setColor(0, 0, 0);
  item.pernSetaElem1Est.setZorder(7);
  item.pernSetaElem1Est.setAlpha(0);
  item.pernSetaElem1Est.disable();
  itensPernCiclo.push(item.pernSetaElem1Est);

  item.pernElem2 = new Game.Item("picada.png");
  item.pernElem2.setPosition(330, 440);
  item.pernElem2.setScale(0.49);
  item.pernElem2.setZorder(6);
  item.pernElem2.setAlpha(0);
  item.pernElem2.disable();
  item.pernElem2.onMouseOver = function() {
    scene[0].setSubtitle("Infecção do organismo com esporozoítos de <i>Plasmodium</i> sp");
  }
  item.pernElem2.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensPernCiclo.push(item.pernElem2);

  item.pernNum2 = new Game.Text("2", estiloNumeros);
  item.pernNum2.setAnchor(0.5, 0.6);
  item.pernNum2.setPosition(220, 310);
  item.pernNum2.setAlpha(0);
  item.pernNum2.disable();
  itensPernCiclo.push(item.pernNum2);

  item.pernSetaElem2Est = new Game.Line(330, 440, 715, 710, 4);
  item.pernSetaElem2Est.setColor(0, 0, 0);
  item.pernSetaElem2Est.setZorder(7);
  item.pernSetaElem2Est.setAlpha(0);
  item.pernSetaElem2Est.disable();
  itensPernCiclo.push(item.pernSetaElem2Est);

  item.pernElem3 = new Game.Item("esporozoito.png");
  item.pernElem3.setPosition(200, 820);
  item.pernElem3.setScale(0.42);
  item.pernElem3.setZorder(6);
  item.pernElem3.setAlpha(0);
  item.pernElem3.disable();
  item.pernElem3.onMouseOver = function() {
    scene[0].setSubtitle("Esporozoíto de <i>Plasmodium</i> sp");
  }
  item.pernElem3.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensPernCiclo.push(item.pernElem3);

  item.pernNum3 = new Game.Text("3", estiloNumeros);
  item.pernNum3.setAnchor(0.5, 0.6);
  item.pernNum3.setPosition(310, 710);
  item.pernNum3.setAlpha(0);
  item.pernNum3.disable();
  itensPernCiclo.push(item.pernNum3);

  item.pernSetaElem3aElem4 = new Game.Line(200, 820, 385, 820, 4);
  item.pernSetaElem3aElem4.setColor(0, 0, 0);
  item.pernSetaElem3aElem4.addArrowAtEnd();
  item.pernSetaElem3aElem4.setZorder(7);
  item.pernSetaElem3aElem4.setAlpha(0);
  item.pernSetaElem3aElem4.disable();
  itensPernCiclo.push(item.pernSetaElem3aElem4);

  item.pernNum4 = new Game.Text("4", estiloNumeros);
  item.pernNum4.setAnchor(0.5, 0.6);
  item.pernNum4.setPosition(470, 660);
  item.pernNum4.setAlpha(0);
  item.pernNum4.disable();
  itensPernCiclo.push(item.pernNum4);

  item.pernElem4 = new Game.Item("merozoito.png");
  item.pernElem4.setPosition(530, 820);
  item.pernElem4.setScale(0.49);
  item.pernElem4.setZorder(6);
  item.pernElem4.setAlpha(0);
  item.pernElem4.disable();
  item.pernElem4.onMouseOver = function() {
    scene[0].setSubtitle("Merozoíto de <i>Plasmodium</i> sp");
  }
  item.pernElem4.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensPernCiclo.push(item.pernElem4);

  item.pernSetaElem4Est = new Game.Line(530, 820, 830, 720, 4);
  item.pernSetaElem4Est.setColor(0, 0, 0);
  item.pernSetaElem4Est.setZorder(7);
  item.pernSetaElem4Est.setAlpha(0);
  item.pernSetaElem4Est.disable();
  itensPernCiclo.push(item.pernSetaElem4Est);

  item.pernSetaEstElem5 = new Game.Line(980, 630, 1260, 270, 4);
  item.pernSetaEstElem5.setColor(0, 0, 0);
  item.pernSetaEstElem5.setZorder(7);
  item.pernSetaEstElem5.setAlpha(0);
  item.pernSetaEstElem5.disable();
  itensPernCiclo.push(item.pernSetaEstElem5);

  item.pernNum5 = new Game.Text("5", estiloNumeros);
  item.pernNum5.setAnchor(0.5, 0.6);
  item.pernNum5.setPosition(1390, 140);
  item.pernNum5.setAlpha(0);
  item.pernNum5.disable();
  itensPernCiclo.push(item.pernNum5);

  item.pernElem5 = new Game.Item("hemaciaComMerozoito.png");
  item.pernElem5.setPosition(1260, 270);
  item.pernElem5.setScale(0.48);
  item.pernElem5.setZorder(6);
  item.pernElem5.setAlpha(0);
  item.pernElem5.disable();
  item.pernElem5.onMouseOver = function() {
    scene[0].setSubtitle("Merozoíto de <i>Plasmodium</i> sp no interior de hemácias");
  }
  item.pernElem5.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensPernCiclo.push(item.pernElem5);

  item.pernSetaElem5Elem6 = new Game.Line(1260, 270, 1500, 270, 4);
  item.pernSetaElem5Elem6.setColor(0, 0, 0);
  item.pernSetaElem5Elem6.addArrowAtEnd();
  item.pernSetaElem5Elem6.setZorder(7);
  item.pernSetaElem5Elem6.setAlpha(0);
  item.pernSetaElem5Elem6.disable();
  itensPernCiclo.push(item.pernSetaElem5Elem6);

  item.pernNum6 = new Game.Text("6", estiloNumeros);
  item.pernNum6.setAnchor(0.5, 0.6);
  item.pernNum6.setPosition(1770, 140);
  item.pernNum6.setAlpha(0);
  item.pernNum6.disable();
  itensPernCiclo.push(item.pernNum6);

  item.pernElem6 = new Game.Item("gametocitoPlasmodium.png");
  item.pernElem6.setPosition(1650, 270);
  item.pernElem6.setScale(0.52);
  item.pernElem6.setZorder(6);
  item.pernElem6.setAlpha(0);
  item.pernElem6.disable();
  item.pernElem6.onMouseOver = function() {
    scene[0].setSubtitle("Gametócitos feminino e masculino de <i>Plasmodium</i> sp ");
  }
  item.pernElem6.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensPernCiclo.push(item.pernElem6);

  item.pernSetaEstElem7 = new Game.Line(1040, 635, 1260, 800, 4);
  item.pernSetaEstElem7.setColor(0, 0, 0);
  item.pernSetaEstElem7.setZorder(7);
  item.pernSetaEstElem7.setAlpha(0);
  item.pernSetaEstElem7.disable();
  itensPernCiclo.push(item.pernSetaEstElem7);

  item.pernNum7 = new Game.Text("7", estiloNumeros);
  item.pernNum7.setAnchor(0.5, 0.6);
  item.pernNum7.setPosition(1390, 670);
  item.pernNum7.setAlpha(0);
  item.pernNum7.disable();
  itensPernCiclo.push(item.pernNum7);

  item.pernElem7 = new Game.Item("gametocitoPlasmodium.png");
  item.pernElem7.setPosition(1260, 800);
  item.pernElem7.setScale(0.50);
  item.pernElem7.setZorder(6);
  item.pernElem7.setAlpha(0);
  item.pernElem7.disable();
  item.pernElem7.onMouseOver = function() {
    scene[0].setSubtitle("Gametócitos feminino e masculino no interior do mosquito");
  }
  item.pernElem7.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensPernCiclo.push(item.pernElem7);

  item.pernSetaElem7Elem8 = new Game.Line(1260, 800, 1500, 800, 4);
  item.pernSetaElem7Elem8.setColor(0, 0, 0);
  item.pernSetaElem7Elem8.addArrowAtEnd();
  item.pernSetaElem7Elem8.setZorder(7);
  item.pernSetaElem7Elem8.setAlpha(0);
  item.pernSetaElem7Elem8.disable();
  itensPernCiclo.push(item.pernSetaElem7Elem8);

  item.pernNum8 = new Game.Text("8", estiloNumeros);
  item.pernNum8.setAnchor(0.5, 0.6);
  item.pernNum8.setPosition(1790, 650);
  item.pernNum8.setAlpha(0);
  item.pernNum8.disable();
  itensPernCiclo.push(item.pernNum8);

  item.pernElem8 = new Game.Item("esporozoito.png");
  item.pernElem8.setPosition(1650, 800);
  item.pernElem8.setScale(0.56);
  item.pernElem8.setZorder(6);
  item.pernElem8.setAlpha(0);
  item.pernElem8.disable();
  item.pernElem8.onMouseOver = function() {
    scene[0].setSubtitle("Esporozoítos no interior do mosquito");
  }
  item.pernElem8.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensPernCiclo.push(item.pernElem8);

  item.pernFechar = new Game.Item("botaoFechar.png");
  item.pernFechar.setPosition(1840, 70);
  item.pernFechar.setRotation(180);
  item.pernFechar.setBrightness(200);
  item.pernFechar.setScale(0.14);
  item.pernFechar.setZorder(1);
  item.pernFechar.setAlpha(0);
  item.pernFechar.disable();
  item.pernFechar.onMouseOver = function() {
    item.pernFechar.setBrightness(255);
  }
  item.pernFechar.onMouseOut = function() {
    item.pernFechar.setBrightness(200);
  }
  item.pernFechar.onClick = function(mouse) {
    disableInteractiveness();
    somClique();

    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensPernCiclo, 0, 600);

    setTimeout(function() {
      groupDisable(itensPernCiclo);
      scene[0].setSubtitle("");

      item.pernFechar.setBrightness(200);
      item.estPernDoente.enable();
      item.estPernDoente.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      groupDisable(itensPernCiclo);
      item.pernBalaoSintoma.enable();
      item.pernBalaoSintoma.changeAlpha(1, 600);
      item.pernTextoSintomas.enable();
      item.pernTextoSintomas.changeAlpha(1, 600);

      item.pernAbaPrevencao.enable();
      item.pernAbaPrevencao.changeAlpha(1, 600);
      item.pernAbaTransmissao.enable();
      item.pernAbaTransmissao.changeAlpha(1, 600);

      item.pernBotaoOK.enable();
      item.pernBotaoOK.changeAlpha(1, 600);

      item.pernBalaoPrevencao.setAlpha(1);
      item.pernBalaoTransmissao.setAlpha(1);
      item.pernAbaSintomas.setAlpha(1);
      item.pernBotaoOKhover.setAlpha(1);
      item.pernTextoPrevencao.setAlpha(1);
      item.pernTextoTransmissao.setAlpha(1);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }
  itensPernCiclo.push(item.pernFechar);

  var itensPernDoente = [];

  item.estPernDoente = new Game.Image("estMngrDte.png");
  item.estPernDoente.setPosition(1565, 858);
  item.estPernDoente.setZorder(6);
  item.estPernDoente.setAlpha(0);
  item.estPernDoente.disable();
  itensPernDoente.push(item.estPernDoente);

  item.pernBalaoSintoma = new Game.Image("balSintEsq.png");
  item.pernBalaoSintoma.setPosition(730+300, 300);
  item.pernBalaoSintoma.setScale(0.25);
  item.pernBalaoSintoma.setZorder(6);
  item.pernBalaoSintoma.setAlpha(0);
  item.pernBalaoSintoma.disable();
  itensPernDoente.push(item.pernBalaoSintoma);

  item.pernBalaoPrevencao = new Game.Image("balPrevEsq.png");
  item.pernBalaoPrevencao.setPosition(730+300, 300);
  item.pernBalaoPrevencao.setScale(0.25);
  item.pernBalaoPrevencao.setZorder(6);
  item.pernBalaoPrevencao.disable();
  itensPernDoente.push(item.pernBalaoPrevencao);

  item.pernBalaoTransmissao = new Game.Image("balTranEsq.png");
  item.pernBalaoTransmissao.setPosition(730+300, 300);
  item.pernBalaoTransmissao.setScale(0.25);
  item.pernBalaoTransmissao.setZorder(6);
  item.pernBalaoTransmissao.disable();
  itensPernDoente.push(item.pernBalaoTransmissao);


  item.pernAbaSintomas = new Game.Item("abaSint.png");
  item.pernAbaSintomas.setPosition(432+300, 71);
  item.pernAbaSintomas.setScale(0.25);
  item.pernAbaSintomas.setZorder(7);
  item.pernAbaSintomas.disable();
  item.pernAbaSintomas.onClick = function() {
    somClique();

    item.pernBalaoSintoma.enable();
    item.pernBalaoPrevencao.disable();
    item.pernBalaoTransmissao.disable();

    item.pernAbaSintomas.disable();
    item.pernAbaPrevencao.enable();
    item.pernAbaTransmissao.enable();

    item.pernTextoSintomas.enable();
    item.pernTextoPrevencao.disable();
    item.pernTextoTransmissao.disable();
  }
  itensPernDoente.push(item.pernAbaSintomas);

  item.pernTextoSintomas = new Game.Text(
    "Desenvolvimento de anemia, febre, mal-estar, palidez,\n" +
    "dores abdominal e lombar. Ocorrência de náuseas, vômitos,\n" +
    "tosse seca, diarreia e desidratação. Pode gerar hipoglicemia\n" +
    "(pouco açúcar no sangue), pele amarelada, lesões renais e\n" +
    "hepatomegalia e esplenomegalia (aumento anormal do\n" +
    "fígado e baço, respectivamente)."
    , estiloInfoBalao);
  item.pernTextoSintomas.setPosition(432-130+300, 58+20);
  item.pernTextoSintomas.setAlpha(0);
  item.pernTextoSintomas.disable();
  itensPernDoente.push(item.pernTextoSintomas);

  item.pernAbaPrevencao = new Game.Item("abaPrev.png");
  item.pernAbaPrevencao.setPosition(432+486+300, 71);
  item.pernAbaPrevencao.setScale(0.25);
  item.pernAbaPrevencao.setZorder(9);
  item.pernAbaPrevencao.setAlpha(0);
  item.pernAbaPrevencao.disable();
  item.pernAbaPrevencao.onClick = function() {
    somClique();

    item.pernBalaoSintoma.disable();
    item.pernBalaoPrevencao.enable();
    item.pernBalaoTransmissao.disable();

    item.pernAbaSintomas.enable();
    item.pernAbaPrevencao.disable();
    item.pernAbaTransmissao.enable();

    item.pernTextoSintomas.disable();
    item.pernTextoPrevencao.enable();
    item.pernTextoTransmissao.disable();
  }
  itensPernDoente.push(item.pernAbaPrevencao);

  item.pernTextoPrevencao = new Game.Text(
    "- Uso de repelentes, calças e camisas de manga longa\n" +
    "evitando picadas do mosquito;\n" +
    "- Evitar acúmulo de água parada impedindo a oviposição."
    , estiloInfoBalao);
  item.pernTextoPrevencao.setPosition(432-130+300, 58+20);
  item.pernTextoPrevencao.disable();
  itensPernDoente.push(item.pernTextoPrevencao);

  item.pernAbaTransmissao = new Game.Item("abaTran.png");
  item.pernAbaTransmissao.setPosition(432+232+300, 71);
  item.pernAbaTransmissao.setScale(0.25);
  item.pernAbaTransmissao.setZorder(8);
  item.pernAbaTransmissao.setAlpha(0);
  item.pernAbaTransmissao.disable();
  item.pernAbaTransmissao.onClick = function() {
    somClique();

    item.pernBalaoSintoma.disable();
    item.pernBalaoPrevencao.disable();
    item.pernBalaoTransmissao.enable();

    item.pernAbaSintomas.enable();
    item.pernAbaPrevencao.enable();
    item.pernAbaTransmissao.disable();

    item.pernTextoSintomas.disable();
    item.pernTextoPrevencao.disable();
    item.pernTextoTransmissao.enable();
  }
  itensPernDoente.push(item.pernAbaTransmissao);

  item.pernTextoTransmissao = new Game.Text(
    "- Através da picada de fêmeas do mosquito <i>Anopheles</i> sp;\n" +
    "- Transfusão de sangue."
    , estiloInfoBalao);
  item.pernTextoTransmissao.setPosition(432-130+300, 58+20);
  item.pernTextoTransmissao.disable();
  itensPernDoente.push(item.pernTextoTransmissao);

  item.pernBotaoOK = new Game.Item("okNormal.png");
  item.pernBotaoOK.setScale(0.25);
  item.pernBotaoOK.setPosition(432+450+300, 71+290);
  item.pernBotaoOK.setAlpha(0);
  item.pernBotaoOK.disable();
  item.pernBotaoOK.onMouseOver = function() {
    item.pernBotaoOK.disable();
    item.pernBotaoOKhover.enable();
  }
  item.pernBotaoOK.onClick = function() {
    item.pernBotaoOKhover.onClick();
  }
  itensPernDoente.push(item.pernBotaoOK);

  item.pernBotaoOKhover = new Game.Item("okHover.png");
  item.pernBotaoOKhover.setScale(0.25);
  item.pernBotaoOKhover.setPosition(432+450+300, 71+290);
  item.pernBotaoOKhover.disable();
  item.pernBotaoOKhover.onMouseOut = function() {
    item.pernBotaoOKhover.disable();
    item.pernBotaoOK.enable();
  }
  item.pernBotaoOKhover.onClick = function() {
    disableInteractiveness();
    somClique();

    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensPernDoente, 0, 600);

    setTimeout(function() {
      item.estPernNormal.enable();
      item.estPernNormal.setBrightness(220);
      item.estPernNormal.changeAlpha(1, 600);

      scene[0].background.changeBrightness(210, 600);
      item.carteiras.changeBrightness(210, 600);
      item.mesaProfessor.changeBrightness(210, 600);
      item.caixaDeAreia.changeBrightness(210, 600);
      item.vasoDeFlores.changeBrightness(210, 600);

      item.estTomateNormal.changeBrightness(210, 600);
      item.estBananaNormal.changeBrightness(210, 600);
      item.estGatoNormal.changeBrightness(210, 600);
      item.setaJanela.enable();
      item.setaArmario.enable();
      item.setaJanela.changeAlpha(1, 600);
      item.setaArmario.changeAlpha(1, 600);

      item.pernBotaoOKhover.disable();
      item.pernBalaoPrevencao.disable();
      item.pernBalaoTransmissao.disable();
      item.pernAbaSintomas.disable();
      item.pernAbaPrevencao.disable();
      item.pernAbaTransmissao.disable();
      item.pernTextoPrevencao.disable();
      item.pernTextoTransmissao.disable();
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estTomateNormal.setInteractive(true);
      item.estBananaNormal.setInteractive(true);
      item.estGatoNormal.setInteractive(true);
      item.estPernNormal.setInteractive(true);
      item.setaJanela.setInteractive(true);
      item.setaArmario.setInteractive(true);
      item.caixaDeAreia.setInteractive(true);
      item.vasoDeFlores.setInteractive(true);

      enableInteractiveness();
    }, currentTime += animationInterval);

  }
  itensPernDoente.push(item.pernBotaoOKhover);

}
