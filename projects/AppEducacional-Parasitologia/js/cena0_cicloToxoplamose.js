function carregaCicloToxoplasmose() {
  // Criando um aliase de scene[0].item
  var item = scene[0].item;

  // Adicionando o aluno
  item.estGatoNormal = new Game.Item("estMjpnSdv.png");
  item.estGatoNormal.setPosition(660, 455);
  item.estGatoNormal.setZorder(11);
  item.estGatoNormal.setBrightness(220);
  item.estGatoNormal.onMouseOver = function() {
    item.estGatoNormal.setBrightness(255);
    scene[0].setSubtitle("Toxoplasmose");
    item.popupFlores.disable();
    item.popupFloresTexto.disable();
  }
  item.estGatoNormal.onMouseOut = function() {
    item.estGatoNormal.setBrightness(220);
    scene[0].setSubtitle("");
  }
  item.estGatoNormal.onClick = function() {
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
    item.estPernNormal.changeBrightness(100, 600);
    item.estBananaNormal.changeBrightness(100, 600);
    item.setaJanela.changeAlpha(0, 600);
    item.setaArmario.changeAlpha(0, 600);

    item.estTomateNormal.setInteractive(false);
    item.estPernNormal.setInteractive(false);
    item.estBananaNormal.setInteractive(false);
    item.estGatoNormal.setInteractive(false);
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
      item.estGatoNormal.changeAlpha(0, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estGatoNormal.disable();
      item.estGatoCiclo.enable();
      item.estGatoCiclo.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.gatoElem1.enable();
      item.gatoElem1.changeAlpha(1, 600);
      item.gatoNum1.enable();
      item.gatoNum1.changeAlpha(1, 600);
      item.gatoSetaElem1Est.enable();
      item.gatoSetaElem1Est.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.gatoElem2.enable();
      item.gatoElem2.changeAlpha(1, 600);
      item.gatoNum2.enable();
      item.gatoNum2.changeAlpha(1, 600);
      item.gatoSetaElem1Elem2.enable();
      item.gatoSetaElem1Elem2.changeAlpha(1, 600);
      item.gatoSetaEstElem2.enable();
      item.gatoSetaEstElem2.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.gatoSetaElem2Elem3.enable();
      item.gatoSetaElem2Elem3.changeAlpha(1, 600);
      item.gatoElem3.enable();
      item.gatoElem3.changeAlpha(1, 600);
      item.gatoNum3.enable();
      item.gatoNum3.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.gatoSetaElem3Elem4.enable();
      item.gatoSetaElem3Elem4.changeAlpha(1, 600);
      item.gatoNum4.enable();
      item.gatoNum4.changeAlpha(1, 600);
      item.gatoElem4.enable();
      item.gatoElem4.changeAlpha(1, 600);
      item.gatoSetaElem4Elem2.enable();
      item.gatoSetaElem4Elem2.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.gatoFechar.enable();
      item.gatoFechar.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }

  var itensGatoCiclo = [];

  // Imagens ciclo
  item.estGatoCiclo = new Game.Image("estMjpnClo.png");
  item.estGatoCiclo.setPosition(700, 550);
  item.estGatoCiclo.setScale(0.5);
  item.estGatoCiclo.setZorder(9);
  item.estGatoCiclo.setAlpha(0);
  item.estGatoCiclo.disable();
  itensGatoCiclo.push(item.estGatoCiclo);

  item.gatoElem1 = new Game.Item("toxoplamose.png");
  item.gatoElem1.setPosition(285, 250);
  item.gatoElem1.setScale(0.7);
  item.gatoElem1.setZorder(6);
  item.gatoElem1.setAlpha(0);
  item.gatoElem1.disable();
  item.gatoElem1.onMouseOver = function() {
    scene[0].setSubtitle("Oocisto de <i>Toxoplasma gondii</i>");
  }
  item.gatoElem1.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensGatoCiclo.push(item.gatoElem1);

  item.gatoNum1 = new Game.Text("1", estiloNumeros);
  item.gatoNum1.setAnchor(0.5, 0.6);
  item.gatoNum1.setPosition(450, 90);
  item.gatoNum1.setAlpha(0);
  item.gatoNum1.disable();
  itensGatoCiclo.push(item.gatoNum1);

  item.gatoSetaElem1Est = new Game.Line(285, 250, 700, 430, 4);
  item.gatoSetaElem1Est.setColor(0, 0, 0);
  item.gatoSetaElem1Est.setZorder(7);
  item.gatoSetaElem1Est.setAlpha(0);
  item.gatoSetaElem1Est.disable();
  itensGatoCiclo.push(item.gatoSetaElem1Est);

  item.gatoElem2 = new Game.Item("caixaDeAreia.png");
  item.gatoElem2.setPosition(1100, 250);
  item.gatoElem2.setScale(0.7);
  item.gatoElem2.setZorder(6);
  item.gatoElem2.setAlpha(0);
  item.gatoElem2.disable();
  item.gatoElem2.onMouseOver = function() {
    scene[0].setSubtitle("Fezes de gato com oocistos de <i>T. gondii</i>");
  }
  item.gatoElem2.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensGatoCiclo.push(item.gatoElem2);

  item.gatoNum2 = new Game.Text("2", estiloNumeros);
  item.gatoNum2.setAnchor(0.5, 0.6);
  item.gatoNum2.setPosition(1280, 110);
  item.gatoNum2.setAlpha(0);
  item.gatoNum2.disable();
  itensGatoCiclo.push(item.gatoNum2);

  item.gatoSetaElem1Elem2 = new Game.Line(285, 200, 1100, 200, 4);
  item.gatoSetaElem1Elem2.setColor(0, 0, 0);
  item.gatoSetaElem1Elem2.setZorder(7);
  item.gatoSetaElem1Elem2.setAlpha(0);
  item.gatoSetaElem1Elem2.disable();
  itensGatoCiclo.push(item.gatoSetaElem1Elem2);

  item.gatoSetaEstElem2 = new Game.Line(745, 430, 920, 340, 4);
  item.gatoSetaEstElem2.setColor(0, 0, 0);
  item.gatoSetaEstElem2.addArrowAtEnd();
  item.gatoSetaEstElem2.setZorder(7);
  item.gatoSetaEstElem2.setAlpha(0);
  item.gatoSetaEstElem2.disable();
  itensGatoCiclo.push(item.gatoSetaEstElem2);

  item.gatoSetaElem2Elem3 = new Game.Line(1100, 250, 1230, 600, 4);
  item.gatoSetaElem2Elem3.setColor(0, 0, 0);
  item.gatoSetaElem2Elem3.addArrowAtEnd();
  item.gatoSetaElem2Elem3.setZorder(7);
  item.gatoSetaElem2Elem3.setAlpha(0);
  item.gatoSetaElem2Elem3.disable();
  itensGatoCiclo.push(item.gatoSetaElem2Elem3);

  item.gatoElem3 = new Game.Item("rato.png");
  item.gatoElem3.setPosition(1300, 800);
  item.gatoElem3.setScale(0.73);
  item.gatoElem3.setZorder(6);
  item.gatoElem3.setAlpha(0);
  item.gatoElem3.disable();
  item.gatoElem3.onMouseOver = function() {
    scene[0].setSubtitle("Roedor infectado com <i>T. gondii</i>");
  }
  item.gatoElem3.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensGatoCiclo.push(item.gatoElem3);

  item.gatoNum3 = new Game.Text("3", estiloNumeros);
  item.gatoNum3.setAnchor(0.5, 0.6);
  item.gatoNum3.setPosition(1480, 650);
  item.gatoNum3.setAlpha(0);
  item.gatoNum3.disable();
  itensGatoCiclo.push(item.gatoNum3);

  item.gatoSetaElem3Elem4 = new Game.Line(1300, 800, 1550, 460, 4);
  item.gatoSetaElem3Elem4.setColor(0, 0, 0);
  item.gatoSetaElem3Elem4.addArrowAtEnd();
  item.gatoSetaElem3Elem4.setZorder(7);
  item.gatoSetaElem3Elem4.setAlpha(0);
  item.gatoSetaElem3Elem4.disable();
  itensGatoCiclo.push(item.gatoSetaElem3Elem4);

  item.gatoElem4 = new Game.Item("gato.png");
  item.gatoElem4.setPosition(1670, 300);
  item.gatoElem4.setScale(0.67);
  item.gatoElem4.setZorder(6);
  item.gatoElem4.setAlpha(0);
  item.gatoElem4.disable();
  item.gatoElem4.onMouseOver = function() {
    scene[0].setSubtitle("Gato infectado com <i>T. gondii</i>");
  }
  item.gatoElem4.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensGatoCiclo.push(item.gatoElem4);

  item.gatoNum4 = new Game.Text("4", estiloNumeros);
  item.gatoNum4.setAnchor(0.5, 0.6);
  item.gatoNum4.setPosition(1520, 150);
  item.gatoNum4.setAlpha(0);
  item.gatoNum4.disable();
  itensGatoCiclo.push(item.gatoNum4);

  item.gatoSetaElem4Elem2 = new Game.Line(1670, 300, 1300, 270, 4);
  item.gatoSetaElem4Elem2.setColor(0, 0, 0);
  item.gatoSetaElem4Elem2.addArrowAtEnd();
  item.gatoSetaElem4Elem2.setZorder(7);
  item.gatoSetaElem4Elem2.setAlpha(0);
  item.gatoSetaElem4Elem2.disable();
  itensGatoCiclo.push(item.gatoSetaElem4Elem2);

  item.gatoFechar = new Game.Item("botaoFechar.png");
  item.gatoFechar.setPosition(1840, 70);
  item.gatoFechar.setRotation(180);
  item.gatoFechar.setBrightness(200);
  item.gatoFechar.setScale(0.14);
  item.gatoFechar.setZorder(1);
  item.gatoFechar.setAlpha(0);
  item.gatoFechar.disable();
  item.gatoFechar.onMouseOver = function() {
    item.gatoFechar.setBrightness(255);
  }
  item.gatoFechar.onMouseOut = function() {
    item.gatoFechar.setBrightness(200);
  }
  item.gatoFechar.onClick = function(mouse) {
    disableInteractiveness();
    somClique();

    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensGatoCiclo, 0, 600);

    setTimeout(function() {
      groupDisable(itensGatoCiclo);
      scene[0].setSubtitle("");

      item.gatoFechar.setBrightness(200);
      item.estGatoDoente.enable();
      item.estGatoDoente.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      groupDisable(itensGatoCiclo);
      item.gatoBalaoSintoma.enable();
      item.gatoBalaoSintoma.changeAlpha(1, 600);
      item.gatoTextoSintomas.enable();
      item.gatoTextoSintomas.changeAlpha(1, 600);

      item.gatoAbaPrevencao.enable();
      item.gatoAbaPrevencao.changeAlpha(1, 600);
      item.gatoAbaTransmissao.enable();
      item.gatoAbaTransmissao.changeAlpha(1, 600);

      item.gatoBotaoOK.enable();
      item.gatoBotaoOK.changeAlpha(1, 600);

      item.gatoBalaoPrevencao.setAlpha(1);
      item.gatoBalaoTransmissao.setAlpha(1);
      item.gatoAbaSintomas.setAlpha(1);
      item.gatoBotaoOKhover.setAlpha(1);
      item.gatoTextoPrevencao.setAlpha(1);
      item.gatoTextoTransmissao.setAlpha(1);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }
  itensGatoCiclo.push(item.gatoFechar);

  var itensGatoDoente = [];

  item.estGatoDoente = new Game.Image("estMjpnDte.png");
  item.estGatoDoente.setPosition(500, 590);
  item.estGatoDoente.setScale(1.35);
  item.estGatoDoente.setZorder(11);
  item.estGatoDoente.setAlpha(0);
  item.estGatoDoente.disable();
  itensGatoDoente.push(item.estGatoDoente);

  item.gatoBalaoSintoma = new Game.Image("balSintDir.png");
  item.gatoBalaoSintoma.setPosition(730+440, 300);
  item.gatoBalaoSintoma.setScale(0.25);
  item.gatoBalaoSintoma.setZorder(6);
  item.gatoBalaoSintoma.setAlpha(0);
  item.gatoBalaoSintoma.disable();
  itensGatoDoente.push(item.gatoBalaoSintoma);

  item.gatoBalaoPrevencao = new Game.Image("balPrevDir.png");
  item.gatoBalaoPrevencao.setPosition(730+440, 300);
  item.gatoBalaoPrevencao.setScale(0.25);
  item.gatoBalaoPrevencao.setZorder(6);
  item.gatoBalaoPrevencao.disable();
  itensGatoDoente.push(item.gatoBalaoPrevencao);

  item.gatoBalaoTransmissao = new Game.Image("balTranDir.png");
  item.gatoBalaoTransmissao.setPosition(730+440, 300);
  item.gatoBalaoTransmissao.setScale(0.25);
  item.gatoBalaoTransmissao.setZorder(6);
  item.gatoBalaoTransmissao.disable();
  itensGatoDoente.push(item.gatoBalaoTransmissao);


  item.gatoAbaSintomas = new Game.Item("abaSint.png");
  item.gatoAbaSintomas.setPosition(426+550, 71);
  item.gatoAbaSintomas.setScale(0.25);
  item.gatoAbaSintomas.setZorder(7);
  item.gatoAbaSintomas.disable();
  item.gatoAbaSintomas.onClick = function() {
    somClique();

    item.gatoBalaoSintoma.enable();
    item.gatoBalaoPrevencao.disable();
    item.gatoBalaoTransmissao.disable();

    item.gatoAbaSintomas.disable();
    item.gatoAbaPrevencao.enable();
    item.gatoAbaTransmissao.enable();

    item.gatoTextoSintomas.enable();
    item.gatoTextoPrevencao.disable();
    item.gatoTextoTransmissao.disable();
  }
  itensGatoDoente.push(item.gatoAbaSintomas);

  item.gatoTextoSintomas = new Game.Text(
    "- Geralmente assintomática;\n" +
    "- <b>Quadros agudos:</b> febre, linfoadenopatia (inchaço dos\n" +
    "nódulos linfáticos), linfocitose (aumento do número de\n" +
    "linfócitos no sangue) e dores musculares;\n" +
    "- <b>No feto:</b> lesão cerebral, deformidades físicas e convulsões."
    , estiloInfoBalao);
  item.gatoTextoSintomas.setPosition(432-130+550, 58+20);
  item.gatoTextoSintomas.setAlpha(0);
  item.gatoTextoSintomas.disable();
  itensGatoDoente.push(item.gatoTextoSintomas);

  item.gatoAbaPrevencao = new Game.Item("abaPrev.png");
  item.gatoAbaPrevencao.setPosition(432+486+550, 71);
  item.gatoAbaPrevencao.setScale(0.25);
  item.gatoAbaPrevencao.setZorder(9);
  item.gatoAbaPrevencao.setAlpha(0);
  item.gatoAbaPrevencao.disable();
  item.gatoAbaPrevencao.onClick = function() {
    somClique();

    item.gatoBalaoSintoma.disable();
    item.gatoBalaoPrevencao.enable();
    item.gatoBalaoTransmissao.disable();

    item.gatoAbaSintomas.enable();
    item.gatoAbaPrevencao.disable();
    item.gatoAbaTransmissao.enable();

    item.gatoTextoSintomas.disable();
    item.gatoTextoPrevencao.enable();
    item.gatoTextoTransmissao.disable();
  }
  itensGatoDoente.push(item.gatoAbaPrevencao);

  item.gatoTextoPrevencao = new Game.Text(
    "Lavar bem as mãos e utensílios de cozinha após o contato\n" +
    "com carne crua. Não ingerir carne crua ou malpassada.\n" +
    "Lavar frutas e verduras, antes de ingeri-los. Evitar mexer\n" +
    "em jardins sem luvas e sempre lavar as mãos logo após. Do\n" +
    "mesmo modo, trocar a caixa de areia dos gatos diariamente\n" +
    "e lavar as mãos logo após. Não alimentar o gato com carne\n" +
    "crua ou malpassada e manter o gato dentro de casa evitan-\n" +
    "do o hábito de caça."
    , estiloInfoBalao);
  item.gatoTextoPrevencao.setPosition(432-130+550, 58+20);
  item.gatoTextoPrevencao.disable();
  itensGatoDoente.push(item.gatoTextoPrevencao);

  item.gatoAbaTransmissao = new Game.Item("abaTran.png");
  item.gatoAbaTransmissao.setPosition(432+240+550, 71);
  item.gatoAbaTransmissao.setScale(0.25);
  item.gatoAbaTransmissao.setZorder(8);
  item.gatoAbaTransmissao.setAlpha(0);
  item.gatoAbaTransmissao.disable();
  item.gatoAbaTransmissao.onClick = function() {
    somClique();

    item.gatoBalaoSintoma.disable();
    item.gatoBalaoPrevencao.disable();
    item.gatoBalaoTransmissao.enable();

    item.gatoAbaSintomas.enable();
    item.gatoAbaPrevencao.enable();
    item.gatoAbaTransmissao.disable();

    item.gatoTextoSintomas.disable();
    item.gatoTextoPrevencao.disable();
    item.gatoTextoTransmissao.enable();
  }
  itensGatoDoente.push(item.gatoAbaTransmissao);

  item.gatoTextoTransmissao = new Game.Text(
    "- Ingestão de carne crua ou mal cozida de animais infectados;\n" +
    "- Ingestão de frutas, verduras e legumes crus contaminados\n" +
    "com oocistos;\n" +
    "- Beber água sem filtrar ou ferver;\n" +
    "- Manusear a terra ou areia contaminada;\n" +
    "- Via transplacentária."
    , estiloInfoBalao);
  item.gatoTextoTransmissao.setPosition(432-130+550, 58+20);
  item.gatoTextoTransmissao.disable();
  itensGatoDoente.push(item.gatoTextoTransmissao);

  item.gatoBotaoOK = new Game.Item("okNormal.png");
  item.gatoBotaoOK.setScale(0.25);
  item.gatoBotaoOK.setPosition(432+450+550, 71+290);
  item.gatoBotaoOK.setAlpha(0);
  item.gatoBotaoOK.disable();
  item.gatoBotaoOK.onMouseOver = function() {
    item.gatoBotaoOK.disable();
    item.gatoBotaoOKhover.enable();
  }
  item.gatoBotaoOK.onClick = function() {
    item.gatoBotaoOKhover.onClick();
  }
  itensGatoDoente.push(item.gatoBotaoOK);

  item.gatoBotaoOKhover = new Game.Item("okHover.png");
  item.gatoBotaoOKhover.setScale(0.25);
  item.gatoBotaoOKhover.setPosition(432+450+550, 71+290);
  item.gatoBotaoOKhover.disable();
  item.gatoBotaoOKhover.onMouseOut = function() {
    item.gatoBotaoOKhover.disable();
    item.gatoBotaoOK.enable();
  }
  item.gatoBotaoOKhover.onClick = function() {
    disableInteractiveness();
    somClique();

    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensGatoDoente, 0, 600);

    setTimeout(function() {
      item.estGatoNormal.enable();
      item.estGatoNormal.setBrightness(220);
      item.estGatoNormal.changeAlpha(1, 600);

      scene[0].background.changeBrightness(210, 600);
      item.carteiras.changeBrightness(210, 600);
      item.mesaProfessor.changeBrightness(210, 600);
      item.caixaDeAreia.changeBrightness(210, 600);
      item.vasoDeFlores.changeBrightness(210, 600);

      item.estTomateNormal.changeBrightness(210, 600);
      item.estPernNormal.changeBrightness(210, 600);
      item.estBananaNormal.changeBrightness(210, 600);
      item.setaJanela.enable();
      item.setaArmario.enable();
      item.setaJanela.changeAlpha(1, 600);
      item.setaArmario.changeAlpha(1, 600);

      item.gatoBotaoOKhover.disable();
      item.gatoBalaoPrevencao.disable();
      item.gatoBalaoTransmissao.disable();
      item.gatoAbaSintomas.disable();
      item.gatoAbaPrevencao.disable();
      item.gatoAbaTransmissao.disable();
      item.gatoTextoPrevencao.disable();
      item.gatoTextoTransmissao.disable();
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estTomateNormal.setInteractive(true);
      item.estPernNormal.setInteractive(true);
      item.estBananaNormal.setInteractive(true);
      item.estGatoNormal.setInteractive(true);
      item.setaJanela.setInteractive(true);
      item.setaArmario.setInteractive(true);
      item.caixaDeAreia.setInteractive(true);
      item.vasoDeFlores.setInteractive(true);

      enableInteractiveness();
    }, currentTime += animationInterval);

  }
  itensGatoDoente.push(item.gatoBotaoOKhover);

}
