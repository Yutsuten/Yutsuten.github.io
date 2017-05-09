function carregaCicloAscaris() {
  // Criando um aliase de scene[0].item
  var item = scene[0].item;

  // Adicionando o aluno
  item.estTomateNormal = new Game.Item("estHngrSdv.png");
  item.estTomateNormal.setPosition(940, 590);
  item.estTomateNormal.setZorder(11);
  item.estTomateNormal.setBrightness(220);
  item.estTomateNormal.onMouseOver = function() {
    item.estTomateNormal.setBrightness(255);
    scene[0].setSubtitle("Ascaridíase");
    item.popupFlores.disable();
    item.popupFloresTexto.disable();
  }
  item.estTomateNormal.onMouseOut = function() {
    item.estTomateNormal.setBrightness(220);
    scene[0].setSubtitle("");
  }
  item.estTomateNormal.onClick = function() {
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

    item.estBananaNormal.changeBrightness(100, 600);
    item.estPernNormal.changeBrightness(100, 600);
    item.estGatoNormal.changeBrightness(100, 600);
    item.setaJanela.changeAlpha(0, 600);
    item.setaArmario.changeAlpha(0, 600);

    item.estBananaNormal.setInteractive(false);
    item.estPernNormal.setInteractive(false);
    item.estGatoNormal.setInteractive(false);
    item.estTomateNormal.setInteractive(false);
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
      item.estTomateNormal.changeAlpha(0, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estTomateNormal.disable();
      item.estTomateCiclo.enable();
      item.estTomateCiclo.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.tomateElem1.enable();
      item.tomateElem1.changeAlpha(1, 600);
      item.tomateNum1.enable();
      item.tomateNum1.changeAlpha(1, 600);
      item.tomateSetaElem1Est.enable();
      item.tomateSetaElem1Est.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.tomateElem2.enable();
      item.tomateElem2.changeAlpha(1, 600);
      item.tomateNum2.enable();
      item.tomateNum2.changeAlpha(1, 600);
      item.tomateSetaElem2Est.enable();
      item.tomateSetaElem2Est.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.tomateSetaEstElem3a.enable();
      item.tomateSetaEstElem3a.changeAlpha(1, 600);
      item.tomateElem3a.enable();
      item.tomateElem3a.changeAlpha(1, 600);
      item.tomateNum3.enable();
      item.tomateNum3.changeAlpha(1, 600);
      item.tomateSetaElem3aElem3b.enable();
      item.tomateSetaElem3aElem3b.changeAlpha(1, 600);
      item.tomateSetaElem3aElem3c.enable();
      item.tomateSetaElem3aElem3c.changeAlpha(1, 600);
      item.tomateSetaElem3aElem3d.enable();
      item.tomateSetaElem3aElem3d.changeAlpha(1, 600);
      item.tomateElem3b.enable();
      item.tomateElem3b.changeAlpha(1, 600);
      item.tomateElem3c.enable();
      item.tomateElem3c.changeAlpha(1, 600);
      item.tomateElem3d.enable();
      item.tomateElem3d.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.tomateSetaElem4Est.enable();
      item.tomateSetaElem4Est.changeAlpha(1, 600);
      item.tomateNum4.enable();
      item.tomateNum4.changeAlpha(1, 600);
      item.tomateElem4.enable();
      item.tomateElem4.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.tomateSetaEstElem5.enable();
      item.tomateSetaEstElem5.changeAlpha(1, 600);
      item.tomateNum5.enable();
      item.tomateNum5.changeAlpha(1, 600);
      item.tomateElem5.enable();
      item.tomateElem5.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.tomateSetaElem5Elem6.enable();
      item.tomateSetaElem5Elem6.changeAlpha(1, 600);
      item.tomateElem6.enable();
      item.tomateElem6.changeAlpha(1, 600);
      item.tomateNum6.enable();
      item.tomateNum6.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.tomateFechar.enable();
      item.tomateFechar.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }

  var itensTomateCiclo = [];

  // Imagens ciclo
  item.estTomateCiclo = new Game.Image("estHngrClo.png");
  item.estTomateCiclo.setPosition(900, 550);
  item.estTomateCiclo.setScale(0.5);
  item.estTomateCiclo.setZorder(9);
  item.estTomateCiclo.setAlpha(0);
  item.estTomateCiclo.disable();
  itensTomateCiclo.push(item.estTomateCiclo);

  item.tomateElem1 = new Game.Item("ovoAscaris.png");
  item.tomateElem1.setPosition(450, 250);
  item.tomateElem1.setScale(0.58);
  item.tomateElem1.setZorder(6);
  item.tomateElem1.setAlpha(0);
  item.tomateElem1.disable();
  item.tomateElem1.onMouseOver = function() {
    scene[0].setSubtitle("Ovo de <i>Ascaris lumbricoides</i>");
  }
  item.tomateElem1.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensTomateCiclo.push(item.tomateElem1);

  item.tomateNum1 = new Game.Text("1", estiloNumeros);
  item.tomateNum1.setAnchor(0.5, 0.6);
  item.tomateNum1.setPosition(620, 120);
  item.tomateNum1.setAlpha(0);
  item.tomateNum1.disable();
  itensTomateCiclo.push(item.tomateNum1);

  item.tomateSetaElem1Est = new Game.Line(450, 250, 830, 440, 4);
  item.tomateSetaElem1Est.setColor(0, 0, 0);
  item.tomateSetaElem1Est.setZorder(7);
  item.tomateSetaElem1Est.setAlpha(0);
  item.tomateSetaElem1Est.disable();
  itensTomateCiclo.push(item.tomateSetaElem1Est);

  item.tomateElem2 = new Game.Item("ascarisFilhote.png");
  item.tomateElem2.setPosition(380, 550);
  item.tomateElem2.setScale(0.47);
  item.tomateElem2.setZorder(6);
  item.tomateElem2.setAlpha(0);
  item.tomateElem2.disable();
  item.tomateElem2.onMouseOver = function() {
    scene[0].setSubtitle("Verme jovem de <i>Ascaris lumbricoides</i>");
  }
  item.tomateElem2.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensTomateCiclo.push(item.tomateElem2);

  item.tomateNum2 = new Game.Text("2", estiloNumeros);
  item.tomateNum2.setAnchor(0.5, 0.6);
  item.tomateNum2.setPosition(290, 420);
  item.tomateNum2.setAlpha(0);
  item.tomateNum2.disable();
  itensTomateCiclo.push(item.tomateNum2);

  item.tomateSetaElem2Est = new Game.Line(380, 550, 897, 721, 4);
  item.tomateSetaElem2Est.setColor(0, 0, 0);
  item.tomateSetaElem2Est.setZorder(7);
  item.tomateSetaElem2Est.setAlpha(0);
  item.tomateSetaElem2Est.disable();
  itensTomateCiclo.push(item.tomateSetaElem2Est);

  item.tomateSetaEstElem3a = new Game.Line(900, 600, 1300, 300, 4);
  item.tomateSetaEstElem3a.setColor(0, 0, 0);
  item.tomateSetaEstElem3a.setZorder(7);
  item.tomateSetaEstElem3a.setAlpha(0);
  item.tomateSetaEstElem3a.disable();
  itensTomateCiclo.push(item.tomateSetaEstElem3a);

  item.tomateElem3a = new Game.Item("circulacao.png");
  item.tomateElem3a.setPosition(1300, 300);
  item.tomateElem3a.setScale(0.57);
  item.tomateElem3a.setZorder(6);
  item.tomateElem3a.setAlpha(0);
  item.tomateElem3a.disable();
  item.tomateElem3a.onMouseOver = function() {
    scene[0].setSubtitle("Migração do verme para a circulação sanguínea");
  }
  item.tomateElem3a.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensTomateCiclo.push(item.tomateElem3a);

  item.tomateNum3 = new Game.Text("3", estiloNumeros);
  item.tomateNum3.setAnchor(0.5, 0.6);
  item.tomateNum3.setPosition(1430, 180);
  item.tomateNum3.setAlpha(0);
  item.tomateNum3.disable();
  itensTomateCiclo.push(item.tomateNum3);

  item.tomateSetaElem3aElem3b = new Game.Line(1300, 300, 1520, 200, 4);
  item.tomateSetaElem3aElem3b.setColor(0, 0, 0);
  item.tomateSetaElem3aElem3b.addArrowAtEnd();
  item.tomateSetaElem3aElem3b.setZorder(7);
  item.tomateSetaElem3aElem3b.setAlpha(0);
  item.tomateSetaElem3aElem3b.disable();
  itensTomateCiclo.push(item.tomateSetaElem3aElem3b);

  item.tomateSetaElem3aElem3c = new Game.Line(1300, 300, 1570, 360, 4);
  item.tomateSetaElem3aElem3c.setColor(0, 0, 0);
  item.tomateSetaElem3aElem3c.addArrowAtEnd();
  item.tomateSetaElem3aElem3c.setZorder(7);
  item.tomateSetaElem3aElem3c.setAlpha(0);
  item.tomateSetaElem3aElem3c.disable();
  itensTomateCiclo.push(item.tomateSetaElem3aElem3c);

  item.tomateSetaElem3aElem3d = new Game.Line(1300, 300, 1470, 450, 4);
  item.tomateSetaElem3aElem3d.setColor(0, 0, 0);
  item.tomateSetaElem3aElem3d.addArrowAtEnd();
  item.tomateSetaElem3aElem3d.setZorder(7);
  item.tomateSetaElem3aElem3d.setAlpha(0);
  item.tomateSetaElem3aElem3d.disable();
  itensTomateCiclo.push(item.tomateSetaElem3aElem3d);

  item.tomateElem3b = new Game.Item("coracao.png");
  item.tomateElem3b.setPosition(1630, 170);
  item.tomateElem3b.setScale(0.35);
  item.tomateElem3b.setZorder(6);
  item.tomateElem3b.setAlpha(0);
  item.tomateElem3b.disable();
  item.tomateElem3b.onMouseOver = function() {
    scene[0].setSubtitle("Migração para o coração");
  }
  item.tomateElem3b.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensTomateCiclo.push(item.tomateElem3b);

  item.tomateElem3c = new Game.Item("figado.png");
  item.tomateElem3c.setPosition(1670, 370);
  item.tomateElem3c.setScale(0.32);
  item.tomateElem3c.setZorder(6);
  item.tomateElem3c.setAlpha(0);
  item.tomateElem3c.disable();
  item.tomateElem3c.onMouseOver = function() {
    scene[0].setSubtitle("Migração para o fígado");
  }
  item.tomateElem3c.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensTomateCiclo.push(item.tomateElem3c);

  item.tomateElem3d = new Game.Item("pulmao.png");
  item.tomateElem3d.setPosition(1550, 530);
  item.tomateElem3d.setScale(0.35);
  item.tomateElem3d.setZorder(6);
  item.tomateElem3d.setAlpha(0);
  item.tomateElem3d.disable();
  item.tomateElem3d.onMouseOver = function() {
    scene[0].setSubtitle("Migração para o pulmão");
  }
  item.tomateElem3d.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensTomateCiclo.push(item.tomateElem3d);

  item.tomateSetaElem4Est = new Game.Line(420, 850, 886, 751, 4);
  item.tomateSetaElem4Est.setColor(0, 0, 0);
  item.tomateSetaElem4Est.setZorder(7);
  item.tomateSetaElem4Est.setAlpha(0);
  item.tomateSetaElem4Est.disable();
  itensTomateCiclo.push(item.tomateSetaElem4Est);

  item.tomateNum4 = new Game.Text("4", estiloNumeros);
  item.tomateNum4.setAnchor(0.5, 0.6);
  item.tomateNum4.setPosition(540, 720);
  item.tomateNum4.setAlpha(0);
  item.tomateNum4.disable();
  itensTomateCiclo.push(item.tomateNum4);

  item.tomateElem4 = new Game.Item("ascarisMF.png");
  item.tomateElem4.setPosition(420, 850);
  item.tomateElem4.setScale(0.51);
  item.tomateElem4.setZorder(6);
  item.tomateElem4.setAlpha(0);
  item.tomateElem4.disable();
  item.tomateElem4.onMouseOver = function() {
    scene[0].setSubtitle("Macho e fêmea de vermes adultos de <i>A. lumbricoides</i>");
  }
  item.tomateElem4.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensTomateCiclo.push(item.tomateElem4);

  item.tomateSetaEstElem5 = new Game.Line(870, 815, 1165, 790, 4);
  item.tomateSetaEstElem5.setColor(0, 0, 0);
  item.tomateSetaEstElem5.addArrowAtEnd();
  item.tomateSetaEstElem5.setZorder(7);
  item.tomateSetaEstElem5.setAlpha(0);
  item.tomateSetaEstElem5.disable();
  itensTomateCiclo.push(item.tomateSetaEstElem5);

  item.tomateNum5 = new Game.Text("5", estiloNumeros);
  item.tomateNum5.setAnchor(0.5, 0.6);
  item.tomateNum5.setPosition(1400, 680);
  item.tomateNum5.setAlpha(0);
  item.tomateNum5.disable();
  itensTomateCiclo.push(item.tomateNum5);

  item.tomateElem5 = new Game.Item("fezesSemMosca.png");
  item.tomateElem5.setPosition(1300, 800);
  item.tomateElem5.setScale(0.44);
  item.tomateElem5.setZorder(6);
  item.tomateElem5.setAlpha(0);
  item.tomateElem5.disable();
  item.tomateElem5.onMouseOver = function() {
    scene[0].setSubtitle("Fezes contendo ovos de <i>A. lumbricoides</i>");
  }
  item.tomateElem5.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensTomateCiclo.push(item.tomateElem5);

  item.tomateSetaElem5Elem6 = new Game.Line(1300, 800, 1700, 800, 4);
  item.tomateSetaElem5Elem6.setColor(0, 0, 0);
  item.tomateSetaElem5Elem6.setZorder(7);
  item.tomateSetaElem5Elem6.setAlpha(0);
  item.tomateSetaElem5Elem6.disable();
  itensTomateCiclo.push(item.tomateSetaElem5Elem6);

  item.tomateElem6 = new Game.Item("ovoAscaris.png");
  item.tomateElem6.setPosition(1700, 800);
  item.tomateElem6.setScale(0.5);
  item.tomateElem6.setZorder(6);
  item.tomateElem6.setAlpha(0);
  item.tomateElem6.disable();
  item.tomateElem6.onMouseOver = function() {
    scene[0].setSubtitle("Ovo de <i>A. lumbricoides</i>");
  }
  item.tomateElem6.onMouseOut = function() {
    scene[0].setSubtitle("");
  }
  itensTomateCiclo.push(item.tomateElem6);

  item.tomateNum6 = new Game.Text("6", estiloNumeros);
  item.tomateNum6.setAnchor(0.5, 0.6);
  item.tomateNum6.setPosition(1820, 680);
  item.tomateNum6.setAlpha(0);
  item.tomateNum6.disable();
  itensTomateCiclo.push(item.tomateNum6);

  item.tomateFechar = new Game.Item("botaoFechar.png");
  item.tomateFechar.setPosition(1840, 70);
  item.tomateFechar.setRotation(180);
  item.tomateFechar.setBrightness(200);
  item.tomateFechar.setScale(0.14);
  item.tomateFechar.setZorder(1);
  item.tomateFechar.setAlpha(0);
  item.tomateFechar.disable();
  item.tomateFechar.onMouseOver = function() {
    item.tomateFechar.setBrightness(255);
  }
  item.tomateFechar.onMouseOut = function() {
    item.tomateFechar.setBrightness(200);
  }
  item.tomateFechar.onClick = function(mouse) {
    disableInteractiveness();
    somClique();

    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensTomateCiclo, 0, 600);

    setTimeout(function() {
      groupDisable(itensTomateCiclo);
      scene[0].setSubtitle("");

      item.tomateFechar.setBrightness(200);
      item.estTomateDoente.enable();
      item.estTomateDoente.changeAlpha(1, 600);
    }, currentTime += animationInterval);

    setTimeout(function() {
      groupDisable(itensTomateCiclo);
      item.tomateBalaoSintoma.enable();
      item.tomateBalaoSintoma.changeAlpha(1, 600);
      item.tomateTextoSintomas.enable();
      item.tomateTextoSintomas.changeAlpha(1, 600);

      item.tomateAbaPrevencao.enable();
      item.tomateAbaPrevencao.changeAlpha(1, 600);
      item.tomateAbaTransmissao.enable();
      item.tomateAbaTransmissao.changeAlpha(1, 600);

      item.tomateBotaoOK.enable();
      item.tomateBotaoOK.changeAlpha(1, 600);

      item.tomateBalaoPrevencao.setAlpha(1);
      item.tomateBalaoTransmissao.setAlpha(1);
      item.tomateAbaSintomas.setAlpha(1);
      item.tomateBotaoOKhover.setAlpha(1);
      item.tomateTextoPrevencao.setAlpha(1);
      item.tomateTextoTransmissao.setAlpha(1);
    }, currentTime += animationInterval);

    setTimeout(function() {
      enableInteractiveness();
    }, currentTime += animationInterval);
  }
  itensTomateCiclo.push(item.tomateFechar);

  var itensTomateDoente = [];

  item.estTomateDoente = new Game.Image("estHngrDte.png");
  item.estTomateDoente.setPosition(960, 550);
  item.estTomateDoente.setZorder(11);
  item.estTomateDoente.setAlpha(0);
  item.estTomateDoente.disable();
  itensTomateDoente.push(item.estTomateDoente);

  item.tomateBalaoSintoma = new Game.Image("balSintEsq.png");
  item.tomateBalaoSintoma.setPosition(730-260, 300);
  item.tomateBalaoSintoma.setScale(0.25);
  item.tomateBalaoSintoma.setZorder(6);
  item.tomateBalaoSintoma.setAlpha(0);
  item.tomateBalaoSintoma.disable();
  itensTomateDoente.push(item.tomateBalaoSintoma);

  item.tomateBalaoPrevencao = new Game.Image("balPrevEsq.png");
  item.tomateBalaoPrevencao.setPosition(730-260, 300);
  item.tomateBalaoPrevencao.setScale(0.25);
  item.tomateBalaoPrevencao.setZorder(6);
  item.tomateBalaoPrevencao.disable();
  itensTomateDoente.push(item.tomateBalaoPrevencao);

  item.tomateBalaoTransmissao = new Game.Image("balTranEsq.png");
  item.tomateBalaoTransmissao.setPosition(730-260, 300);
  item.tomateBalaoTransmissao.setScale(0.25);
  item.tomateBalaoTransmissao.setZorder(6);
  item.tomateBalaoTransmissao.disable();
  itensTomateDoente.push(item.tomateBalaoTransmissao);


  item.tomateAbaSintomas = new Game.Item("abaSint.png");
  item.tomateAbaSintomas.setPosition(432-260, 71);
  item.tomateAbaSintomas.setScale(0.25);
  item.tomateAbaSintomas.setZorder(7);
  item.tomateAbaSintomas.disable();
  item.tomateAbaSintomas.onClick = function() {
    somClique();

    item.tomateBalaoSintoma.enable();
    item.tomateBalaoPrevencao.disable();
    item.tomateBalaoTransmissao.disable();

    item.tomateAbaSintomas.disable();
    item.tomateAbaPrevencao.enable();
    item.tomateAbaTransmissao.enable();

    item.tomateTextoSintomas.enable();
    item.tomateTextoPrevencao.disable();
    item.tomateTextoTransmissao.disable();
  }
  itensTomateDoente.push(item.tomateAbaSintomas);

  item.tomateTextoSintomas = new Game.Text(
    "- Ação espoliadora: subnutrição;\n" +
    "- Ação tóxica: edema, urticária e convulsões;\n" +
    "- Ação mecânica: irritação na pele, obstrução intestinal."
    , estiloInfoBalao);
  item.tomateTextoSintomas.setPosition(432-130-260, 58+20);
  item.tomateTextoSintomas.setAlpha(0);
  item.tomateTextoSintomas.disable();
  itensTomateDoente.push(item.tomateTextoSintomas);

  item.tomateAbaPrevencao = new Game.Item("abaPrev.png");
  item.tomateAbaPrevencao.setPosition(432+486-260, 71);
  item.tomateAbaPrevencao.setScale(0.25);
  item.tomateAbaPrevencao.setZorder(9);
  item.tomateAbaPrevencao.setAlpha(0);
  item.tomateAbaPrevencao.disable();
  item.tomateAbaPrevencao.onClick = function() {
    somClique();

    item.tomateBalaoSintoma.disable();
    item.tomateBalaoPrevencao.enable();
    item.tomateBalaoTransmissao.disable();

    item.tomateAbaSintomas.enable();
    item.tomateAbaPrevencao.disable();
    item.tomateAbaTransmissao.enable();

    item.tomateTextoSintomas.disable();
    item.tomateTextoPrevencao.enable();
    item.tomateTextoTransmissao.disable();
  }
  itensTomateDoente.push(item.tomateAbaPrevencao);

  item.tomateTextoPrevencao = new Game.Text(
    "- Ingerir água tratada;\n" +
    "- Lavar bem frutas e legumes;\n" +
    "- Não defecar em locais inapropriados;\n" +
    "- Saneamento básico."
    , estiloInfoBalao);
  item.tomateTextoPrevencao.setPosition(432-130-260, 58+20);
  item.tomateTextoPrevencao.disable();
  itensTomateDoente.push(item.tomateTextoPrevencao);

  item.tomateAbaTransmissao = new Game.Item("abaTran.png");
  item.tomateAbaTransmissao.setPosition(432+232-260, 71);
  item.tomateAbaTransmissao.setScale(0.25);
  item.tomateAbaTransmissao.setZorder(8);
  item.tomateAbaTransmissao.setAlpha(0);
  item.tomateAbaTransmissao.disable();
  item.tomateAbaTransmissao.onClick = function() {
    somClique();

    item.tomateBalaoSintoma.disable();
    item.tomateBalaoPrevencao.disable();
    item.tomateBalaoTransmissao.enable();

    item.tomateAbaSintomas.enable();
    item.tomateAbaPrevencao.enable();
    item.tomateAbaTransmissao.disable();

    item.tomateTextoSintomas.disable();
    item.tomateTextoPrevencao.disable();
    item.tomateTextoTransmissao.enable();
  }
  itensTomateDoente.push(item.tomateAbaTransmissao);

  item.tomateTextoTransmissao = new Game.Text(
    "- Ingestão de água e alimentos contaminados;\n" +
    "- Poeira, aves, insetos (moscas e baratas);\n" +
    "- Irrigação de hortas com água contaminada."
    , estiloInfoBalao);
  item.tomateTextoTransmissao.setPosition(432-130-260, 58+20);
  item.tomateTextoTransmissao.disable();
  itensTomateDoente.push(item.tomateTextoTransmissao);

  item.tomateBotaoOK = new Game.Item("okNormal.png");
  item.tomateBotaoOK.setScale(0.25);
  item.tomateBotaoOK.setPosition(432+450-260, 71+290);
  item.tomateBotaoOK.setAlpha(0);
  item.tomateBotaoOK.disable();
  item.tomateBotaoOK.onMouseOver = function() {
    item.tomateBotaoOK.disable();
    item.tomateBotaoOKhover.enable();
  }
  item.tomateBotaoOK.onClick = function() {
    item.tomateBotaoOKhover.onClick();
  }
  itensTomateDoente.push(item.tomateBotaoOK);

  item.tomateBotaoOKhover = new Game.Item("okHover.png");
  item.tomateBotaoOKhover.setScale(0.25);
  item.tomateBotaoOKhover.setPosition(432+450-260, 71+290);
  item.tomateBotaoOKhover.disable();
  item.tomateBotaoOKhover.onMouseOut = function() {
    item.tomateBotaoOKhover.disable();
    item.tomateBotaoOK.enable();
  }
  item.tomateBotaoOKhover.onClick = function() {
    disableInteractiveness();
    somClique();

    var currentTime = 0;
    var animationInterval = 750; // Intervalo entre cada animacao

    groupChangeAlpha(itensTomateDoente, 0, 600);

    setTimeout(function() {
      item.estTomateNormal.enable();
      item.estTomateNormal.setBrightness(220);
      item.estTomateNormal.changeAlpha(1, 600);

      scene[0].background.changeBrightness(210, 600);
      item.carteiras.changeBrightness(210, 600);
      item.mesaProfessor.changeBrightness(210, 600);
      item.caixaDeAreia.changeBrightness(210, 600);
      item.vasoDeFlores.changeBrightness(210, 600);

      item.estBananaNormal.changeBrightness(210, 600);
      item.estPernNormal.changeBrightness(210, 600);
      item.estGatoNormal.changeBrightness(210, 600);
      item.setaJanela.enable();
      item.setaArmario.enable();
      item.setaJanela.changeAlpha(1, 600);
      item.setaArmario.changeAlpha(1, 600);

      item.tomateBotaoOKhover.disable();
      item.tomateBalaoPrevencao.disable();
      item.tomateBalaoTransmissao.disable();
      item.tomateAbaSintomas.disable();
      item.tomateAbaPrevencao.disable();
      item.tomateAbaTransmissao.disable();
      item.tomateTextoPrevencao.disable();
      item.tomateTextoTransmissao.disable();
    }, currentTime += animationInterval);

    setTimeout(function() {
      item.estBananaNormal.setInteractive(true);
      item.estPernNormal.setInteractive(true);
      item.estGatoNormal.setInteractive(true);
      item.estTomateNormal.setInteractive(true);
      item.setaJanela.setInteractive(true);
      item.setaArmario.setInteractive(true);
      item.caixaDeAreia.setInteractive(true);
      item.vasoDeFlores.setInteractive(true);

      enableInteractiveness();
    }, currentTime += animationInterval);

  }
  itensTomateDoente.push(item.tomateBotaoOKhover);

}
