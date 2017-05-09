'use strict';

sceneLoader[2] = function() {

  // Iniciando a nova cena
  scene[2] = new Game.Scene();
  // Adicionando musica na cena
  scene[2].setMusic("musicaSala.wav", 1.0);

  // Adicionando uma imagem de fundo
  scene[2].background = new Game.Background("armario.jpg");
  scene[2].background.setBrightness(210);

  // Criando um aliase de scene[2].item
  var item = scene[2].item;

  scene[2].livros = [];

  item.livroObjetoDeApendizagem = new Game.Item("livroObjetoDeApendizagem.png");
  item.livroObjetoDeApendizagem.setPosition(565, 204);
  item.livroObjetoDeApendizagem.setZorder(20);
  item.livroObjetoDeApendizagem.setBrightness(210);
  item.livroObjetoDeApendizagem.onMouseOver = function() {
    scene[2].setSubtitle("Objeto de aprendizagem");
    item.livroObjetoDeApendizagem.setBrightness(255);
  }
  item.livroObjetoDeApendizagem.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.livroObjetoDeApendizagem.setBrightness(210);
  }
  item.livroObjetoDeApendizagem.onClick = function(mouse) {
    item.livroObjetoDeApendizagem.onMouseOut();
    somClique();
    scene[2].openBook("ObjetoDeApendizagem");
  }
  scene[2].livros.push(item.livroObjetoDeApendizagem);

  item.livroParasitologia = new Game.Item("livroParasitologia.png");
  item.livroParasitologia.setPosition(972, 200);
  item.livroParasitologia.setZorder(20);
  item.livroParasitologia.setBrightness(210);
  item.livroParasitologia.onMouseOver = function() {
    scene[2].setSubtitle("Parasitologia");
    item.livroParasitologia.setBrightness(255);
  }
  item.livroParasitologia.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.livroParasitologia.setBrightness(210);
  }
  item.livroParasitologia.onClick = function(mouse) {
    item.livroParasitologia.onMouseOut();
    somClique();
    scene[2].openBook("Parasitologia");
  }
  scene[2].livros.push(item.livroParasitologia);

  item.livroAmebiase = new Game.Item("livroAmebiase.png");
  item.livroAmebiase.setPosition(1218, 196);
  item.livroAmebiase.setZorder(20);
  item.livroAmebiase.setBrightness(210);
  item.livroAmebiase.onMouseOver = function() {
    scene[2].setSubtitle("Amebíase");
    item.livroAmebiase.setBrightness(255);
  }
  item.livroAmebiase.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.livroAmebiase.setBrightness(210);
  }
  item.livroAmebiase.onClick = function(mouse) {
    item.livroAmebiase.onMouseOut();
    somClique();
    scene[2].openBook("Amebiase");
  }
  scene[2].livros.push(item.livroAmebiase);

  item.livroMalaria = new Game.Item("livroMalaria.png");
  item.livroMalaria.setPosition(698, 642);
  item.livroMalaria.setZorder(20);
  item.livroMalaria.setBrightness(210);
  item.livroMalaria.onMouseOver = function() {
    scene[2].setSubtitle("Malária");
    item.livroMalaria.setBrightness(255);
  }
  item.livroMalaria.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.livroMalaria.setBrightness(210);
  }
  item.livroMalaria.onClick = function(mouse) {
    item.livroMalaria.onMouseOut();
    somClique();
    scene[2].openBook("Malaria");
  }
  scene[2].livros.push(item.livroMalaria);

  item.livroToxoplamose = new Game.Item("livroToxoplamose.png");
  item.livroToxoplamose.setPosition(850, 590);
  item.livroToxoplamose.setZorder(20);
  item.livroToxoplamose.setBrightness(210);
  item.livroToxoplamose.onMouseOver = function() {
    scene[2].setSubtitle("Toxoplasmose");
    item.livroToxoplamose.setBrightness(255);
  }
  item.livroToxoplamose.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.livroToxoplamose.setBrightness(210);
  }
  item.livroToxoplamose.onClick = function(mouse) {
    item.livroToxoplamose.onMouseOut();
    somClique();
    scene[2].openBook("Toxoplasmose");
  }
  scene[2].livros.push(item.livroToxoplamose);

  item.livroAscaridiase = new Game.Item("livroAscaridiase.png");
  item.livroAscaridiase.setPosition(1314, 636);
  item.livroAscaridiase.setZorder(20);
  item.livroAscaridiase.setBrightness(210);
  item.livroAscaridiase.onMouseOver = function() {
    scene[2].setSubtitle("Ascaridíase");
    item.livroAscaridiase.setBrightness(255);
  }
  item.livroAscaridiase.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.livroAscaridiase.setBrightness(210);
  }
  item.livroAscaridiase.onClick = function(mouse) {
    item.livroAscaridiase.onMouseOut();
    somClique();
    scene[2].openBook("Ascaridiase");
  }
  scene[2].livros.push(item.livroAscaridiase);

  item.livroTeniase = new Game.Item("livroTeniase.png");
  item.livroTeniase.setPosition(768, 924);
  item.livroTeniase.setZorder(20);
  item.livroTeniase.setBrightness(210);
  item.livroTeniase.onMouseOver = function() {
    scene[2].setSubtitle("Teníase & Cisticercose");
    item.livroTeniase.setBrightness(255);
  }
  item.livroTeniase.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.livroTeniase.setBrightness(210);
  }
  item.livroTeniase.onClick = function(mouse) {
    item.livroTeniase.onMouseOut();
    somClique();
    scene[2].openBook("TeniaseCisticercose");
  }
  scene[2].livros.push(item.livroTeniase);

  item.livroGiardiase = new Game.Item("livroGiardiase.png");
  item.livroGiardiase.setPosition(1168, 1058);
  item.livroGiardiase.setZorder(20);
  item.livroGiardiase.setBrightness(210);
  item.livroGiardiase.onMouseOver = function() {
    scene[2].setSubtitle("Giardiase");
    item.livroGiardiase.setBrightness(255);
  }
  item.livroGiardiase.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.livroGiardiase.setBrightness(210);
  }
  item.livroGiardiase.onClick = function(mouse) {
    item.livroGiardiase.onMouseOut();
    somClique();
    scene[2].openBook("Giardiase");
  }
  scene[2].livros.push(item.livroGiardiase);

  item.livroAgradecimentos = new Game.Item("livroAgradecimentos.png");
  item.livroAgradecimentos.setPosition(1345, 940);
  item.livroAgradecimentos.setZorder(20);
  item.livroAgradecimentos.setBrightness(210);
  item.livroAgradecimentos.onMouseOver = function() {
    scene[2].setSubtitle("Agradecimentos");
    item.livroAgradecimentos.setBrightness(255);
  }
  item.livroAgradecimentos.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.livroAgradecimentos.setBrightness(210);
  }
  item.livroAgradecimentos.onClick = function(mouse) {
    item.livroAgradecimentos.onMouseOut();
    somClique();
    scene[2].openBook("Agradecimentos");
  }
  scene[2].livros.push(item.livroAgradecimentos);

  // Adiciona uma seta para voltar na sala de aula
  item.setaSalaDeAula = new Game.Item("seta.png");
  item.setaSalaDeAula.setPosition(1735, 480);
  item.setaSalaDeAula.setBrightness(220);
  item.setaSalaDeAula.setScale(0.3);
  item.setaSalaDeAula.setInteractive(true);
  item.setaSalaDeAula.onMouseOver = function() {
    scene[2].setSubtitle("Sala de aula");
    item.setaSalaDeAula.setBrightness(255);
  }
  item.setaSalaDeAula.onMouseOut = function() {
    scene[2].setSubtitle("");
    item.setaSalaDeAula.setBrightness(220);
  }
  item.setaSalaDeAula.onClick = function(mouse) {
    somSeta();
    scene[2].setSubtitle("");
    changeScene(0); // Muda para a sala de aula
  }

  carregaLivroAberto();

  scene[2].addAllItemsToScene();

}
