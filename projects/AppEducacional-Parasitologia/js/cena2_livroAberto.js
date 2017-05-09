function carregaLivroAberto() {

  // Criando um aliase de scene[2].item
  var item = scene[2].item;

  var livro = new Game.Bookshelf();
  var tituloLivroAberto = null;

  scene[2].openBook = function(titulo) {
    disableInteractiveness();

    // Salva nome do livro
    tituloLivroAberto = titulo;

    // Desabilita interação com os livros do armario
    groupDisable(scene[2].livros);
    item.setaSalaDeAula.setInteractive(false);

    // Mostra o livro
    item.livroAberto.enable();
    item.livroAberto.changeAlpha(1, 600);
    item.fechaLivro.enable();
    item.fechaLivro.changeAlpha(1, 600);

    livro[tituloLivroAberto].open();

    setTimeout(function() {
      enableInteractiveness();
    }, 700);
  }

  // Conteudo dos livros

  // LIVRO: OBJETO DE APRENDIZAGEM
  livro.newBook("ObjetoDeApendizagem");

  // Objeto de Aprendizagem: Pagina 0
  livro.ObjetoDeApendizagem.pagina[0] = new Game.Page();

  livro.ObjetoDeApendizagem.pagina[0].titulo = new Game.Text(
    "       O Objeto de Aprendizagem"
  , estiloTitulo);
  livro.ObjetoDeApendizagem.pagina[0].titulo.setPosition(248, 120);

  livro.ObjetoDeApendizagem.pagina[0].texto1 = new Game.Text(
    "     Os Objetos de Aprendizagem são uma\n" +
    "tecnologia recente que abre caminhos na\n" +
    "educação à distância e que serve de mate-\n" +
    "rial de apoio a aula presencial tradicional.\n" +
    "São elementos de uma nova metodologia\n" +
    "de ensino e aprendizagem baseada no uso\n" +
    "do computador e da Internet.\n" +
    "     Apesar de sua definição ainda ser vaga,\n" +
    "o consenso é de que o Objeto de Aprendi-\n" +
    "zagem deva possuir um propósito educa-\n" +
    "cional definido, um elemento que estimule\n" +
    "a reflexão do estudante e que sua constru-\n" +
    "ção seja de forma a facilitar a reutilização\n" +
    "dentro de outros contextos de aprendiza-\n" +
    "gem.\n" +
    "     Desta forma, as autoras apresentam o\n" +
    "presente Objeto de Aprendizagem em Pa-\n" +
    "rasitologia.\n" +
    "     O software (ou “jogo”) conta com regi-\n" +
    "ões clicáveis e interativas, as quais revela-\n" +
    "rão ao usuário informações adicionais so-"
    , estiloTextoLivro);
  livro.ObjetoDeApendizagem.pagina[0].texto1.setPosition(248, 190);

  livro.ObjetoDeApendizagem.pagina[0].texto2 = new Game.Text(
    "bre o objeto interativo, como os ciclos de vida\n" +
    "dos parasitas em questão e as suas consequen-\n" +
    "tes doenças. Visualmente, o jogo é repleto de\n" +
    "imagens e se é intencionado que estas sejam\n" +
    "autoexplicativas, contando, num primeiro mo-\n" +
    "mento, com os auxílios das legendas.\n" +
    "     São expostas três telas: a principal, a sala\n" +
    "de aula, na qual serão encontradas representa-\n" +
    "ções de quatro doenças e seus respectivos pa-\n" +
    "rasitas. À direita da tela principal será exposto\n" +
    "o exterior da escola, com mais quatro doenças\n" +
    "e seus três parasitas. À esquerda da sala de au-\n" +
    "la será apresentada uma estante repleta de li-\n" +
    "vros interativos, nos quais serão explicadas as\n" +
    "teorias sobre o Parasitismo e cada parasita abor-\n" +
    "dado neste Objeto de Aprendizagem."
    , estiloTextoLivro);
  livro.ObjetoDeApendizagem.pagina[0].texto2.setPosition(990, 120);

  livro.ObjetoDeApendizagem.pagina[0].texto3 = new Game.Text(
    "Vamos lá!"
    , estiloTextoLivro);
  livro.ObjetoDeApendizagem.pagina[0].texto3.setPosition(1414, 700);

  // LIVRO: PARASITOLOGIA
  livro.newBook("Parasitologia");

  // Parasitologia: Pagina 0
  livro.Parasitologia.pagina[0] = new Game.Page();

  livro.Parasitologia.pagina[0].titulo = new Game.Text(
    "                   Parasitologia"
  , estiloTitulo);
  livro.Parasitologia.pagina[0].titulo.setPosition(248, 120);

  livro.Parasitologia.pagina[0].texto1 = new Game.Text(
    "     A parasitologia é o estudo dos parasitas\n" +
    "animais e vegetais e da relação entre para-\n" +
    "sitas e seus hospedeiros.\n" +
    "     O parasitismo é a associação entre os se-\n" +
    "res vivos, na qual existe unilateralidade de\n" +
    "benefícios, ou seja, apenas um dos lados é\n" +
    "beneficiado. Neste sentido, o hospedeiro\n" +
    "provê abrigo e proteção ao parasita, o qual\n" +
    "prejudica e promove danos ao hospedeiro.\n" +
    "De um modo geral, afirma-se que a asso-\n" +
    "ciação parasitária tende ao equilíbrio por-\n" +
    "que se o hospedeiro morre, o parasita tam-\n" +
    "bém morre. Entretanto, percebe-se que na\n" +
    "prática tal fato não ocorre, visto que ao\n" +
    "evitar a morte, o parasita não mata seu\n" +
    "hospedeiro.\n" +
    "     Para haver doenças parasitárias é nece-\n" +
    "ssário que existam alguns fatores, quanto:\n" +
    "     - ao parasito: como o número de indiví-\n" +
    "duos que atingirão o hospedeiro, a sua vi-\n" +
    "rulência e a localização do parasito;"
    , estiloTextoLivro);
  livro.Parasitologia.pagina[0].texto1.setPosition(248, 190);

  livro.Parasitologia.pagina[0].texto2 = new Game.Text(
   "     - ao hospedeiro: idade, nutrição, tipo de\n" +
   "resposta imune.\n" +
    "     A ação do parasita no hospedeiro é de\n" +
    "grande importância na parasitologia, visto\n" +
    "que é através dela que ocorrem as doenças.\n" +
    "Dentre os tipos de ação dos parasitos, os\n" +
    "principais são:\n" +
    "     - Mecânica: ação obstrutiva ou destrutiva\n" +
    "que parasito exerce sobre algum órgão do\n" +
    "hospedeiro;\n" +
    "      - Espoliativa: ocorre quando o parasito\n" +
    "retira nutrientes do hospedeiro;\n" +
    "      - Traumática: quando o parasito promo-\n" +
    "ve traumas no hospedeiro, como fixação e\n" +
    "migração;\n" +
    "      - Tóxica: produtos do metabolismo do\n" +
    "parasito é tóxico ao hospedeiro."
    , estiloTextoLivro);
  livro.Parasitologia.pagina[0].texto2.setPosition(990, 120);

  livro.Parasitologia.pagina[0].texto3 = new Game.Text(
    "     Os helmintos (ou vermes) são grandes e\n" +
    "visíveis a olho nu. Podem ser metazoários,\n" +
    "parasitos de animais, vegetais ou de vida livre.\n" +
    "     São classificados em quatro filos:\n" +
    "     - Platyelminthes: vermes achatados, os"
    , estiloTextoLivro);
  livro.Parasitologia.pagina[0].texto3.setPosition(990, 750);

  // Parasitologia: Pagina 1
  livro.Parasitologia.pagina[1] = new Game.Page();

  livro.Parasitologia.pagina[1].texto1 = new Game.Text(
   "quais se subdividem em duas classes: Tre-\n" +
   "matoda: vermes em forma de folha e Ces-\n" +
   "toda: vermes em forma de fita.\n" +
    "     - Nematoda: vermes redondos, os quais\n" +
    "se subdividem em: Adenophorea (não-\n" +
    "parasitas do ser humano) e Sercenentea\n" +
    "(parasitam o Homem e animais).\n" +
    "      - Acanthocephala: vermes pseudocelo-\n" +
    "mados e pseudossegmentados.\n" +
    "      - Annelida: grupo de metazoários, co-\n" +
    "mo a classe Oligochaeta (minhocas) e Hi-\n" +
    "rudinea (sanguessugas).\n" +
    "      No interior, ou não, de um hospedeiro,\n" +
    "o parasita se desenvolve por meio de seu\n" +
    "ciclo biológico. Como resultado da evolu-\n" +
    "ção dos parasitas, algumas fases de seus\n" +
    "ciclos biológicos são complicadas e outras\n" +
    "mais simples, obtendo, de uma forma ou\n" +
    "de outra, sucesso em sua reprodução e\n" +
    "dispersão."
    , estiloTextoLivro);
  livro.Parasitologia.pagina[1].texto1.setPosition(248, 120);

  livro.Parasitologia.pagina[1].titulo = new Game.Text(
    "      Glossário"
  , estiloTitulo);
  livro.Parasitologia.pagina[1].titulo.setPosition(990, 520);

  livro.Parasitologia.pagina[1].texto2 = new Game.Text(
    "     - <gray>Agente infeccioso:</gray> todo parasito capaz\n" +
    "de produzir infecção ou doença infecciosa.\n" +
    "     - <gray>Agente etiológico:</gray> é o agente causador\n" +
    "ou responsável pela origem da doença. Sen-\n" +
    "do assim, pode respresentar um fungo, bac-\n" +
    "téria, vírus, protozoário ou helminto.\n" +
    "     - <gray>Contaminação:</gray> é a presença de um a-\n" +
    "gente infeccioso na superfície do corpo, rou-\n" +
    "pas, brinquedos, água, alimentos etc.\n" +
    "     - <gray>Fase aguda:</gray> corresponde ao período logo"
    , estiloTextoLivro);
  livro.Parasitologia.pagina[1].texto2.setPosition(990, 570);

  livro.Parasitologia.pagina[1].tabela = new Game.Image("tabelaParasitologia.png");
  livro.Parasitologia.pagina[1].tabela.setPosition(1270, 270);
  livro.Parasitologia.pagina[1].tabela.setScale(1.1);
  livro.Parasitologia.pagina[1].tabela.setTint(200, 194, 177);

  livro.Parasitologia.pagina[1].legendaTabela = new Game.Text(
    "Tabela referente aos organismos\n" +
    "que parasitam os humanos"
    , estiloLegenda);
  livro.Parasitologia.pagina[1].legendaTabela.setPosition(1260, 460);
  livro.Parasitologia.pagina[1].legendaTabela.setAnchor(0.5, 0.5);

  // Parasitologia: Pagina 2
  livro.Parasitologia.pagina[2] = new Game.Page();

  livro.Parasitologia.pagina[2].texto1 = new Game.Text(
    "após a infecção, no qual os sintomas são\n" +
    "mais marcantes (febre alta, dores de cabeça\n" +
    "e abdominais etc). É um período de defi-\n" +
    "nição: o indivíduo ou se cura, ou entra na\n" +
    "fase crônica ou falece.\n" +
    "     - <gray>Fase crônica:</gray> período que se segue à\n" +
    "fase aguda; caracteriza-se pela diminuição\n" +
    "dos sintomas e por um equilíbrio elativo\n" +
    "entre o hospedeiro e o parasita. Este equi-\n" +
    "líbrio pode ser quebrado em favor de am-\n" +
    "bos os lados.\n" +
    "      - <gray>Hospedeiro definitivo:</gray> o hospedeiro\n" +
    "é aquele que contém o parasito. O hospe-\n" +
    "deiro definitivo é o que apresenta o para-\n" +
    "sito em sua fase matura ou em fase de ati-\n" +
    "vidade sexual. Exemplo: o hospedeiro de-\n" +
    "finitivo de <i>T. gondii</i> é o gato, enquanto que\n" +
    "o da <i>Taenia</i> sp é o ser humano.\n" +
    "      - <gray>Hospedeiro intermediário:</gray> é aquele\n" +
    "que possui o parasito em sua forma larvá-\n" +
    "ria ou assexuada. Exemplo: os bovinos ou\n" +
    "suínos são hospedeiros intermediários de\n" +
    "<i>Taenia</i> sp e o humano do <i>Plasmodium</i> sp."
    , estiloTextoLivro);
  livro.Parasitologia.pagina[2].texto1.setPosition(248, 120);

  livro.Parasitologia.pagina[2].texto2 = new Game.Text(
    "      - <gray>Infecção:</gray> penetração e desenvolvi-\n" +
    "mento de um agente infeccioso (vírus, bac-\n" +
    "térias, protozoários ou helmintos) dentro\n" +
    "de um organismo.\n" +
    "      - <gray>Patogenia:</gray> é o mecanismo pelo qual\n" +
    "um agente infeccioso provoca lesões no hos-\n" +
    "pedeiro. Exemplo: a <i>Giardia lamblia</i> adere\n" +
    "ao intestino dificultando a absorção de nu-\n" +
    "trientes e causando lesões na parede intes-\n" +
    "tinal, provocando diarréias e respostas in-\n" +
    "flamatórias.\n" +
    "      - <gray>Patogenicidade:</gray> é a habilidade de um\n" +
    "agente infeccioso em provocar lesões. Exem-\n" +
    "plo: <i>Taenia saginata</i> tem patogenicidade\n" +
    "baixa.\n" +
    "      - <gray>Vetor:</gray> é qualquer organismo que sirva\n" +
    "de veículo para o parasito entre dois hospe-\n" +
    "dereiros, podendo ser um artrópode ou mo-\n" +
    "lusco. Exemplo: Mosquito que transmite a\n" +
    "malária, o <i>Anopheles</i> sp.\n" +
    "      - <gray>Virulência:</gray> é a severidade e rapidez com\n" +
    "as quais o agente infeccioso provoca lesões\n" +
    "no hospedeiro. Exemplo: a <i>E. histolytica</i> pro-"

    , estiloTextoLivro);
  livro.Parasitologia.pagina[2].texto2.setPosition(990, 120);

  // Parasitologia: Pagina 3
  livro.Parasitologia.pagina[3] = new Game.Page();

  livro.Parasitologia.pagina[3].texto1 = new Game.Text(
    "voca lesões severas rapidamente.\n" +
    "      - <gray>Zoonose:</gray> doenças e infecções que são\n" +
    "transmitidos entre animais vertebrados e\n" +
    "os humanos. Atualmente são conhecidas\n" +
    "100 zoonoses. Exemplo: doenças de Chagas,\n" +
    "toxoplasmose e raiva."
    , estiloTextoLivro);
  livro.Parasitologia.pagina[3].texto1.setPosition(248, 120);

  // LIVRO: AMEBIASE
  livro.newBook("Amebiase");

  // Amebiase: Pagina 0
  livro.Amebiase.pagina[0] = new Game.Page();

  livro.Amebiase.pagina[0].titulo = new Game.Text(
    "                     Amebíase"
  , estiloTitulo);
  livro.Amebiase.pagina[0].titulo.setPosition(248, 120);

  livro.Amebiase.pagina[0].texto1 = new Game.Text(
    "     A Amebíase é causada pelo agente etioló-\n" +
    "gico <i>Entamoeba histolytica</i>. É de grande im-\n" +
    "portância médica, pois, até o ano de 2011 era\n" +
    "caracterizada como a segunda doença parasi-\n" +
    "tária que mais levava o Homem à morte. En-\n" +
    "tretanto, apesar da alta taxa de mortalidade,\n" +
    "muitos casos de infecções assintomáticas\n" +
    "ocorrem.\n" +
    "     A classificação do agente etiológico é:\n" +
    "     Reino: Protista\n" +
    "     Filo: Amoebozoa\n" +
    "     Classe: Archamoebae\n" +
    "     Ordem: Mastigamoebida\n" +
    "     Família: Entamoedbidae\n" +
    "     Gênero: <i>Entamoeba</i>\n" +
    "     Espécie: <i>E. histolytica</i>\n" +
    "     A <i>E. histolytica</i> vive no intestino grosso de\n" +
    "humanos e animais. O ciclo de vida consiste\n" +
    "em duas formas de vida: cistos arredondados\n" +
    "com quatro núcleos e trofozoítos alongados\n" +
    "com um só núcleo."
    , estiloTextoLivro);
  livro.Amebiase.pagina[0].texto1.setPosition(248, 190);

  livro.Amebiase.pagina[0].cicloDeVida = new Game.Text(
    "      Ciclo de vida"
  , estiloTitulo);
  livro.Amebiase.pagina[0].cicloDeVida.setPosition(990, 120);

  livro.Amebiase.pagina[0].texto2 = new Game.Text(
    "      O ciclo se inicia pela ingestão de cistos\n" +
    "maduros, junto de alimentos ou água contami-\n" +
    "nados. Os cistos são resistentes ao suco gástri-\n" +
    "co, assim passam pelo estômago e alcançam o\n" +
    "final do intestino delgado ou início do grosso.\n" +
    "Neste local ocorre o desencistamento: processo\n" +
    "no qual o cisto libera o metacisto, que sofre\n" +
    "divisões nucleares e citoplasmáticas, culminan-\n" +
    "do no trofozoíto.\n" +
    "      Os trofozoítos gerados migram para o in-\n" +
    "testino grosso e ali se colonizam. Estes aderem-\n" +
    "se à mucosa do intestino e, através desta, ali-\n" +
    "mentam-se de detritos e bactérias."
    , estiloTextoLivro);
  livro.Amebiase.pagina[0].texto2.setPosition(990, 170);

  livro.Amebiase.pagina[0].cisto = new Game.Image("entamoebaCisto.png");
  livro.Amebiase.pagina[0].cisto.setPosition(1120, 730);
  livro.Amebiase.pagina[0].cisto.setScale(0.4);

  livro.Amebiase.pagina[0].legendaCisto = new Game.Text(
    "Foto do cisto da\n" +
    "<i>E. histolytica</i>"
    , estiloLegenda);
  livro.Amebiase.pagina[0].legendaCisto.setPosition(1120, 880);
  livro.Amebiase.pagina[0].legendaCisto.setAnchor(0.5, 0.5);

  livro.Amebiase.pagina[0].trofozoito = new Game.Image("entamoebaTrofozoito.png");
  livro.Amebiase.pagina[0].trofozoito.setPosition(1400, 730);
  livro.Amebiase.pagina[0].trofozoito.setScale(0.4);

  livro.Amebiase.pagina[0].legendaTrofozoito = new Game.Text(
    "Foto do trofozoíto\n" +
    "da <i>E. histolytica</i>"
    , estiloLegenda);
  livro.Amebiase.pagina[0].legendaTrofozoito.setPosition(1400, 880);
  livro.Amebiase.pagina[0].legendaTrofozoito.setAnchor(0.5, 0.5);

  // Amebiase: Pagina 1
  livro.Amebiase.pagina[1] = new Game.Page();

  livro.Amebiase.pagina[1].texto1 = new Game.Text(
    "      Sob certa cisrcuntâncias (não bem descri-\n" +
    "tas), o trofozoíto desliga-se da parede intestinal\n" +
    "e sofre desidratação, transformando-se em pré-\n" +
    "cisto, o qual irá sofrer divisões nucleares e se\n" +
    "transformará em cisto maduro que será elimi-\n" +
    "nado pelas fezes, recomeçando o ciclo."
    , estiloTextoLivro);
  livro.Amebiase.pagina[1].texto1.setPosition(248, 120);

  // LIVRO: MALARIA
  livro.newBook("Malaria");

  // Malaria: Pagina 0
  livro.Malaria.pagina[0] = new Game.Page();

  livro.Malaria.pagina[0].titulo = new Game.Text(
    "                      Malária"
  , estiloTitulo);
  livro.Malaria.pagina[0].titulo.setPosition(248, 120);

  livro.Malaria.pagina[0].texto1 = new Game.Text(
    "     Apesar de muito antiga, a Malária ainda é\n" +
    "um os principais problemas de saúde pública\n" +
    "mundial. Esta doença é causada pelo parasita\n" +
    "<i>Plasmodium</i> sp.\n" +
    "     Reino: Protozoa\n" +
    "     Filo: Apicomplexa\n" +
    "     Classe: Aconoidasida\n" +
    "     Ordem: Haemosporida\n" +
    "     Família: Plasmodiidae\n" +
    "     Gênero: <i>Plasmodium</i>\n" +
    "     Espécies: <i>P. falciparum; P. vivax; P. mala-\n" +
    "riae; P. ovale</i>"
    , estiloTextoLivro);
  livro.Malaria.pagina[0].texto1.setPosition(248, 190);

  livro.Malaria.pagina[0].cicloDeVida = new Game.Text(
    "      Ciclo de vida"
  , estiloTitulo);
  livro.Malaria.pagina[0].cicloDeVida.setPosition(248, 610);

  livro.Malaria.pagina[0].texto2 = new Game.Text(
    "     A infecção do hospedeiro ocorre quando o\n" +
    "vetor, o mosquito fêmea Anopheles sp, inocu-\n" +
    "la, sob a pele do mesmo, esporozítos de <i>Plas-\n" +
    "modium</i> sp, que se movimentam e migram até\n" +
    "a corrente sanguínea ou vasos linfáticos do\n" +
    "hospedeiro.\n" +
    "     No caso de migração para o sistema linfá-\n" +
    "tico, os esporozoítos alcançam um linfonodo e"
    , estiloTextoLivro);
  livro.Malaria.pagina[0].texto2.setPosition(248, 660);

  livro.Malaria.pagina[0].mosquito = new Game.Image("mosquito.png");
  livro.Malaria.pagina[0].mosquito.setPosition(1120, 220);
  livro.Malaria.pagina[0].mosquito.setTint(200, 194, 177);
  livro.Malaria.pagina[0].mosquito.setScale(0.4);

  livro.Malaria.pagina[0].legendaMosquito = new Game.Text(
    "Mosquito\n" +
    "<i>Anopheles</i> sp"
    , estiloLegenda);
  livro.Malaria.pagina[0].legendaMosquito.setPosition(1120, 370);
  livro.Malaria.pagina[0].legendaMosquito.setAnchor(0.5, 0.5);

  livro.Malaria.pagina[0].picada = new Game.Image("picada.png");
  livro.Malaria.pagina[0].picada.setPosition(1400, 220);
  livro.Malaria.pagina[0].picada.setScale(0.4);

  livro.Malaria.pagina[0].legendaPicada = new Game.Text(
    "Inoculação de espo-\n" +
    "rozoítos na corrente\n" +
    "sanguínea"
    , estiloLegenda);
  livro.Malaria.pagina[0].legendaPicada.setPosition(1400, 385);
  livro.Malaria.pagina[0].legendaPicada.setAnchor(0.5, 0.5);

  livro.Malaria.pagina[0].texto3 = new Game.Text(
    "lá são destruídos. Em migração à corrente san-\n" +
    "guínea, os esporozoítos podem adentrar em\n" +
    "várias células e, assim, serem transportados\n" +
    "para outras regiões e órgãos do corpo, antes de\n" +
    "ocorrer a infecção de um hepatócito (célula que\n" +
    "constitui o fígado). Nesta célula específica é\n" +
    "onde ocorre o desenvolvimento do parasita.\n" +
    "     Após invadir o hepatócito, os esporozoítos\n" +
    "se diferenciam em trofozoítos, os quais, por\n" +
    "reprodução assexuada, multiplicam-se e geram\n" +
    "milhares de merozoítos, os quais poderão inva-\n" +
    "dir as hemácias presentes no sangue. Dentro\n" +
    "delas, os merozoítos também se multiplicam\n" +
    "(reprodução assexuada), gerando novos mero-"
    , estiloTextoLivro);
  livro.Malaria.pagina[0].texto3.setPosition(990, 460);

  // Malaria: Pagina 1
  livro.Malaria.pagina[1] = new Game.Page();

  livro.Malaria.pagina[1].texto1 = new Game.Text(
    "zoítos, os quais invadem novas hemácias. De-\n" +
    "pois de algumas gerações de merozoítos, estes\n" +
    "irão se diferenciar em gametócitos feminino e\n" +
    "masculino, o estágio sexuado do parasita."
    , estiloTextoLivro);
  livro.Malaria.pagina[1].texto1.setPosition(248, 120);

  livro.Malaria.pagina[1].merozoito = new Game.Image("merozoito.png");
  livro.Malaria.pagina[1].merozoito.setPosition(360, 380);
  livro.Malaria.pagina[1].merozoito.setScale(0.4);

  livro.Malaria.pagina[1].legendaMerozoito = new Game.Text(
    "Merozoítos de\n" +
    "<i>Plasmodium</i> sp"
    , estiloLegenda);
  livro.Malaria.pagina[1].legendaMerozoito.setPosition(360, 530);
  livro.Malaria.pagina[1].legendaMerozoito.setAnchor(0.5, 0.5);

  livro.Malaria.pagina[1].hemacia = new Game.Image("hemaciaComMerozoito.png");
  livro.Malaria.pagina[1].hemacia.setPosition(640, 380);
  livro.Malaria.pagina[1].hemacia.setScale(0.4);

  livro.Malaria.pagina[1].legendaHemacia = new Game.Text(
    "Merozoítos inva-\n" +
    "dem as hemácias"
    , estiloLegenda);
  livro.Malaria.pagina[1].legendaHemacia.setPosition(640, 530);
  livro.Malaria.pagina[1].legendaHemacia.setAnchor(0.5, 0.5);

  livro.Malaria.pagina[1].texto2 = new Game.Text(
    "     No ser humano, o desenvolvimento do pa-\n" +
    "rasita termina quando ocorre a formação dos\n" +
    "gametócitos. O ciclo continua no interior do\n" +
    "mosquito, assim, o <i>Plasmodium</i> sp depende\n" +
    "do hospedeiro infectado ser novamente pica-\n" +
    "do e, consequentemente, que outro <i>Anopheles</i>\n" +
    "sp se infecte, para que seu ciclo termine.\n" +
    "     A reprodução sexuada que ocorre no inte-\n" +
    "rior do mosquito gera esporozoítos e, assim, o\n" +
    "ciclo se completa."
    , estiloTextoLivro);
  livro.Malaria.pagina[1].texto2.setPosition(248, 590);

  livro.Malaria.pagina[1].gametocito = new Game.Image("gametocitoPlasmodium.png");
  livro.Malaria.pagina[1].gametocito.setPosition(1120, 220);
  livro.Malaria.pagina[1].gametocito.setTint(200, 194, 177);
  livro.Malaria.pagina[1].gametocito.setScale(0.4);

  livro.Malaria.pagina[1].legendaGametocito = new Game.Text(
    "Gametócitos de \n" +
    "<i>Plasmodium</i> sp"
    , estiloLegenda);
  livro.Malaria.pagina[1].legendaGametocito.setPosition(1120, 370);
  livro.Malaria.pagina[1].legendaGametocito.setAnchor(0.5, 0.5);

  // LIVRO: TOXOPLASMOSE
  livro.newBook("Toxoplasmose");

  // Toxoplasmose: Pagina 0
  livro.Toxoplasmose.pagina[0] = new Game.Page();

  livro.Toxoplasmose.pagina[0].titulo = new Game.Text(
    "                     Toxoplasmose"
  , estiloTitulo);
  livro.Toxoplasmose.pagina[0].titulo.setPosition(248, 120);

  livro.Toxoplasmose.pagina[0].texto1 = new Game.Text(
    "     O parasita causador de Toxoplasmose é o\n" +
    "<i>Toxoplasma gondii</i>. Este protozoário está dis-\n" +
    "tribuído por todo o mundo e, em indivíduos\n" +
    "com o sistema mune comprometido, pode le-\n" +
    "var à encefalite e doença sistêmica, por exem-\n" +
    "plo.\n" +
    "     A toxoplasmose é uma zoonose (doença\n" +
    "presente em animais, mas que pode ser trans-\n" +
    "mitida ao Homem) presente em espécies de\n" +
    "animais, como: carneiro, cabra, aves e gato\n" +
    "não-imunes ao parasito. O ciclo da doença se\n" +
    "completa em duas partes, uma no Homem e\n" +
    "outra no gato, assim, o gato é o hospedeiro\n" +
    "definitivo do parasita e o ser humano, outros\n" +
    "mamíferos e aves são intermediários.\n" +
    "     Reino: Eucoccidiorida\n" +
    "     Família: Sarcocystidae\n" +
    "     Gênero: <i>Toxoplasma</i>\n" +
    "     Espécie: <i>T. gondii</i>"
    , estiloTextoLivro);
  livro.Toxoplasmose.pagina[0].texto1.setPosition(248, 190);

  livro.Toxoplasmose.pagina[0].cicloBiologico = new Game.Text(
    "      Ciclo biológico"
  , estiloTitulo);
  livro.Toxoplasmose.pagina[0].cicloBiologico.setPosition(990, 120);

  livro.Toxoplasmose.pagina[0].texto2 = new Game.Text(
    "      Existem duas fases de desenvolvimento do\n" +
    "ciclo: a fase assexuada, que ocorre no hospe-\n" +
    "deiro intermediário e a sexuada, que ocorre nos\n" +
    "gatos não-imunes.\n" +
    "      O Homem infecta-se com o parasito ao in-\n" +
    "gerir oocistos maduros, os quais contém os es-\n" +
    "porozoítos, encontrados em alimentos, água ou\n" +
    "fezes de gato contaminados. Cada esporozoíto\n" +
    "transforma-se em taquizoíto, o chegar no estô-\n" +
    "mago. No epitélio intestinal, tais taquizoítos\n" +
    "sofrerão multiplicação intracelular e invadirão\n" +
    "outras células do organismo, nas quais também\n" +
    "irão se multiplicar, formando novos taquizoítos.\n" +
    "A grande quantidade de taquizoítos dentro de\n" +
    "uma célula fará com que a mesma se rompa e\n" +
    "libere os parasitos, que irão infectar novas cé-\n" +
    "lulas, através do sistema linfático e sanguíneo,\n" +
    "e assim por diante. Nesta fase da doença, cha\n" +
    "mada de fase proliferativa, a evolução dos sin-\n" +
    "tomas é muito rápida, caracterizando a fase\n" +
    "aguda da doença. Fetos ou pessoas com o sis-\n" +
    "tema imune comprometido podem morrer."
    , estiloTextoLivro);
  livro.Toxoplasmose.pagina[0].texto2.setPosition(990, 170);

  // Toxoplasmose: Pagina 1
  livro.Toxoplasmose.pagina[1] = new Game.Page();

  livro.Toxoplasmose.pagina[1].toxoplamose = new Game.Image("toxoplamose.png");
  livro.Toxoplasmose.pagina[1].toxoplamose.setPosition(640, 220);
  livro.Toxoplasmose.pagina[1].toxoplamose.setScale(0.4);

  livro.Toxoplasmose.pagina[1].legendaToxoplamose = new Game.Text(
    "Oocisto de\n" +
    "<i>Toxoplasma gondii</i>"
    , estiloLegenda);
  livro.Toxoplasmose.pagina[1].legendaToxoplamose.setPosition(640, 370);
  livro.Toxoplasmose.pagina[1].legendaToxoplamose.setAnchor(0.5, 0.5);

  livro.Toxoplasmose.pagina[1].texto1 = new Game.Text(
    "      Entretanto, em\n" +
    "outras pessoas o sis-\n" +
    "tema imune pode\n" +
    "combater o parasito\n" +
    "e, desta forma, a\n" +
    "doença não se ma-\n" +
    "nifesta tão grave-\n" +
    "mente. Grande par-\n" +
    "te dos parasitos é\n" +
    "eliminada e alguns deles evoluem para cistos.\n" +
    "Este conjunto de fatores caracteriza a fase\n" +
    "crônica da doença, a qual permanece por um\n" +
    "longo período de tempo no ser humano. Du-\n" +
    "rante esta fase pode haver reativação da fase\n" +
    "aguda.\n" +
    "      No gato, a ingestão de cistos ou oocistos,\n" +
    "leva os parasitos até o intestino, onde adentra-\n" +
    "rão as células e sofrerão um processo de mul-\n" +
    "tiplicação, gerando vários merozoítos. O rom-\n" +
    "pimento da célula parasitada libera os mero-\n" +
    "zoítos, os quais penetrarão outras células e\n" +
    "formarão os gametócitos femininos e mascu-\n" +
    "linos. Estes, após um período de maturação,\n" +
    "terão a capacidade de se movimentar, permi-"
    , estiloTextoLivro);
  livro.Toxoplasmose.pagina[1].texto1.setPosition(248, 120);

  livro.Toxoplasmose.pagina[1].texto2 = new Game.Text(
    "tindo que se encontrem e formem o zigoto.\n" +
    "Este irá se desenvolver dentro do epitélio do\n" +
    "gato e ormará o oocisto imaturo, o qual será\n" +
    "eliminado do organismo junto com as fezes.\n" +
    "      No meio externo, ou seja, fora do organis-\n" +
    "mo do gato e antes de chegar ao ser humano,\n" +
    "os oocistos imaturos amadurecem após um pe-\n" +
    "ríodo de tempo. Assim, quando em condições\n" +
    "propícias ao oocisto maduro (umidade, tempe-\n" +
    "ratura e local favorável), este é capaz de manter\n" +
    "a sua capacidade de infecção por aproximada-\n" +
    "mente 1 ano."
    , estiloTextoLivro);
  livro.Toxoplasmose.pagina[1].texto2.setPosition(990, 120);

  // LIVRO: ASCARIDIASE
  livro.newBook("Ascaridiase");

  // Ascaridiase: Pagina 0
  livro.Ascaridiase.pagina[0] = new Game.Page();

  livro.Ascaridiase.pagina[0].titulo = new Game.Text(
    "                   Ascaridíase"
  , estiloTitulo);
  livro.Ascaridiase.pagina[0].titulo.setPosition(248, 120);

  livro.Ascaridiase.pagina[0].texto1 = new Game.Text(
    "     Os <i>Ascaris lumbricoides</i> são os parasitos\n" +
    "responsáveis pela Ascaridíase. São conhecidos\n" +
    "popularmente como lombrigas e são encontra-\n" +
    "dos em quase todos os países do mundo, ocor-\n" +
    "rendo com frequência variada na população,\n" +
    "pois depende de condições climáticas, ambi-\n" +
    "entais e, principalmente, do grau de desenvol-\n" +
    "vimento socioeconômico da população.\n" +
    "     Reino: Animalia\n" +
    "     Filo: Nematoda\n" +
    "     Classe: Secernentea\n" +
    "     Ordem: Ascaridida\n" +
    "     Família: Ascarididae\n" +
    "     Gênero: <i>Ascaris</i>\n" +
    "     Espécie: <i>A. lumbricoides</i>"
    , estiloTextoLivro);
  livro.Ascaridiase.pagina[0].texto1.setPosition(248, 190);

  livro.Ascaridiase.pagina[0].cicloBiologico = new Game.Text(
    "      Ciclo biológico"
  , estiloTitulo);
  livro.Ascaridiase.pagina[0].cicloBiologico.setPosition(248, 710);

  livro.Ascaridiase.pagina[0].texto2 = new Game.Text(
    "     O ser humano é o único hospedeiro. Cada\n" +
    "fêmea de <i>A. lumbricoides</i> é capaz de liberar\n" +
    "diariamente, aproximadamente, 200.000 ovos\n" +
    "por dia, os quais são liberados juntamente com\n" +
    "as fezes do hospedeiro. No meio externo, os"
    , estiloTextoLivro);
  livro.Ascaridiase.pagina[0].texto2.setPosition(248, 760);

  livro.Ascaridiase.pagina[0].texto3 = new Game.Text(
    "ovos, em condições favoráveis, tornam-se em-\n" +
    "brionados em 2 semanas e, assim, formam as\n" +
    "larvas do parasito.\n" +
    "      A primeira larva, chamada rabditoide (L1),\n" +
    "dá origem à larva L2, a qual, por sua vez, gera\n" +
    "a larva L3, denominada filarióide, a qual está\n" +
    "pronta para infectar novos hospedeiros. Os o-\n" +
    "vos com as larvas L3 permanecem no solo por\n" +
    "muitos meses e, assim, podem ser ingeridas\n" +
    "pelo ser humano.\n" +
    "      Após a ingestão, os\n" +
    "ovos chegam até o in-\n" +
    "testino delgado, onde\n" +
    "os ovos com as larvas\n" +
    "L3 eclodem. As larvas\n" +
    "ultrapassam a parede\n" +
    "intestinal, alcançam o\n" +
    "sistema linfático e a\n" +
    "veia mesentérica supe-\n" +
    "rior e, desta forma, chegam no fígado do hos-\n" +
    "pedeiro. Quando alcançam a veia cava inferior,\n" +
    "as larvas alcançam o coração e, depois, os\n" +
    "pulmões.\n" +
    "      Dentro dos pulmões, após 8 dias de infecção,"
    , estiloTextoLivro);
  livro.Ascaridiase.pagina[0].texto3.setPosition(990, 120);

  livro.Ascaridiase.pagina[0].ovoAscaris = new Game.Image("ovoAscaris.png");
  livro.Ascaridiase.pagina[0].ovoAscaris.setPosition(1400, 545);
  livro.Ascaridiase.pagina[0].ovoAscaris.setTint(200, 194, 177);
  livro.Ascaridiase.pagina[0].ovoAscaris.setScale(0.4);

  livro.Ascaridiase.pagina[0].legendaOvoAscaris = new Game.Text(
    "Ovo de <i>A.\n" +
    "lumbricoides</i>"
    , estiloLegenda);
  livro.Ascaridiase.pagina[0].legendaOvoAscaris.setPosition(1400, 695);
  livro.Ascaridiase.pagina[0].legendaOvoAscaris.setAnchor(0.5, 0.5);

  // Ascaridiase: Pagina 1
  livro.Ascaridiase.pagina[1] = new Game.Page();

  livro.Ascaridiase.pagina[1].ascarisFilhote = new Game.Image("ascarisFilhote.png");
  livro.Ascaridiase.pagina[1].ascarisFilhote.setPosition(360, 220);
  livro.Ascaridiase.pagina[1].ascarisFilhote.setScale(0.4);

  livro.Ascaridiase.pagina[1].legendaAscarisFilhote = new Game.Text(
    "Larva L3 de <i>A.\n" +
    "lumbricoides</i>"
    , estiloLegenda);
  livro.Ascaridiase.pagina[1].legendaAscarisFilhote.setPosition(360, 360);
  livro.Ascaridiase.pagina[1].legendaAscarisFilhote.setAnchor(0.5, 0.5);

  livro.Ascaridiase.pagina[1].circulacao = new Game.Image("circulacao.png");
  livro.Ascaridiase.pagina[1].circulacao.setPosition(640, 220);
  livro.Ascaridiase.pagina[1].circulacao.setScale(0.4);

  livro.Ascaridiase.pagina[1].legendaCirculacao = new Game.Text(
    "Larva L3 ultrapas-\n" +
    "sando parede intestinal"
    , estiloLegenda);
  livro.Ascaridiase.pagina[1].legendaCirculacao.setPosition(640, 360);
  livro.Ascaridiase.pagina[1].legendaCirculacao.setAnchor(0.5, 0.5);

  livro.Ascaridiase.pagina[1].texto1 = new Game.Text(
    "as larvas transformam-se em L4, rompem os\n" +
    "capilares dos pulmões e alcançam os alvéolos.\n" +
    "Nestes, as larvas L4 sofrem mudas para L5, as\n" +
    "quais podem chegar até a faringe e, assim, se-\n" +
    "rem expelidas por tosse ou engolidas, chegan-\n" +
    "do novamente ao intestino delgado.\n" +
    "      Após dois meses\n" +
    "de infecção, as larvas,\n" +
    "agora adultas, alcan-\n" +
    "çam a sua capacidade\n" +
    "reprodutiva, fazem\n" +
    "cópula e liberam ovos,\n" +
    "os quais serão descar-\n" +
    "tados juntamente com\n" +
    "as fezes do hospedei-\n" +
    "ro, concluindo o ciclo."
    , estiloTextoLivro);
  livro.Ascaridiase.pagina[1].texto1.setPosition(248, 400);

  livro.Ascaridiase.pagina[1].ascarisMF = new Game.Image("ascarisMF.png");
  livro.Ascaridiase.pagina[1].ascarisMF.setPosition(640, 705);
  livro.Ascaridiase.pagina[1].ascarisMF.setScale(0.39);

  livro.Ascaridiase.pagina[1].legendaAscarisMF = new Game.Text(
    "Larvas adultas\n" +
    "alcançam capaci-\n" +
    "dade reprodutiva"
    , estiloLegenda);
  livro.Ascaridiase.pagina[1].legendaAscarisMF.setPosition(640, 880);
  livro.Ascaridiase.pagina[1].legendaAscarisMF.setAnchor(0.5, 0.5);

  // LIVRO: TENÍASE & CISTICERCOSE
  livro.newBook("TeniaseCisticercose");

  // TeniaseCisticercose: Pagina 0
  livro.TeniaseCisticercose.pagina[0] = new Game.Page();

  livro.TeniaseCisticercose.pagina[0].titulo = new Game.Text(
    "            Teníase & Cisticercose"
  , estiloTitulo);
  livro.TeniaseCisticercose.pagina[0].titulo.setPosition(248, 120);

  livro.TeniaseCisticercose.pagina[0].texto1 = new Game.Text(
    "     As tênias são vermes achatados, hermafro-\n" +
    "ditas e os parasitas cestoides mais frequentes\n" +
    "encontrados no organismo humano.\n" +
    "     As doenças teníase e cisticercose são dis-\n" +
    "tintas, entretanto, são causadas pelo mesmo\n" +
    "verme, em fases de vida diferentes. Estas do-\n" +
    "enças constituem um grande problema econô-\n" +
    "mico e de saúde pública, uma vez que afetam\n" +
    "o ser humano quando este está exposto a varia-\n" +
    "das condições sanitárias precárias, além de\n" +
    "afetar também os porcos e vacas. Desta forma,\n" +
    "quando o gado está infectado, as suas carcaças\n" +
    "infectadas são condenadas e inutilizadas.\n" +
    "     Reino: Animalia\n" +
    "     Filo: Platelmintos\n" +
    "     Classe: Cestoda\n" +
    "     Ordem: Cyclophyllidea\n" +
    "     Família: Taeniidae\n" +
    "     Gênero: <i>Taenia</i>\n" +
    "     Espécies: <i>T. solium; T. saginata</i>"
    , estiloTextoLivro);
  livro.TeniaseCisticercose.pagina[0].texto1.setPosition(248, 190);

  livro.TeniaseCisticercose.pagina[0].cicloBiologico = new Game.Text(
    "      Ciclo biológico"
  , estiloTitulo);
  livro.TeniaseCisticercose.pagina[0].cicloBiologico.setPosition(990, 120);

  livro.TeniaseCisticercose.pagina[0].texto2 = new Game.Text(
    "      O humano é o hospedeiro definitivo deste\n" +
    "parasita e é infectado pela <i>Taenia</i> sp ao ingerir\n" +
    "uma carne suína (<i>Taenia solium</i>) ou bovina\n" +
    "(<i>Taenia saginata</i>), crua ou mal cozida, que es-\n" +
    "teja infectada. A carne infectada possui cisti-\n" +
    "cercos que representam um estágio inicial da\n" +
    "larva de <i>Taenia</i> sp. Este cisticerco ao ser inge-\n" +
    "rido sofre ação do suco gástrico, permitindo\n" +
    "que a larva se liberte e se fixe nas paredes do\n" +
    "intestino delgado por meio de seu escólex,\n" +
    "transformando-se em uma larva adulta. O es-\n" +
    "cólex é um órgão de fixação formado por ven-\n" +
    "tosas presente na cabeça da larva."
    , estiloTextoLivro);
  livro.TeniaseCisticercose.pagina[0].texto2.setPosition(990, 170);

  livro.TeniaseCisticercose.pagina[0].carne = new Game.Image("carneInfectada.png");
  livro.TeniaseCisticercose.pagina[0].carne.setPosition(1120, 730);
  livro.TeniaseCisticercose.pagina[0].carne.setTint(200, 194, 177);
  livro.TeniaseCisticercose.pagina[0].carne.setScale(0.4);

  livro.TeniaseCisticercose.pagina[0].legendaCarne = new Game.Text(
    "Carne crua infectada\n" +
    "por cisticercos"
    , estiloLegenda);
  livro.TeniaseCisticercose.pagina[0].legendaCarne.setPosition(1120, 880);
  livro.TeniaseCisticercose.pagina[0].legendaCarne.setAnchor(0.5, 0.5);

  livro.TeniaseCisticercose.pagina[0].teniaAdulta = new Game.Image("teniaAdulta.png");
  livro.TeniaseCisticercose.pagina[0].teniaAdulta.setPosition(1400, 730);
  livro.TeniaseCisticercose.pagina[0].teniaAdulta.setTint(200, 194, 177);
  livro.TeniaseCisticercose.pagina[0].teniaAdulta.setScale(0.4);

  livro.TeniaseCisticercose.pagina[0].legendaTeniaAdulta = new Game.Text(
    "Larva adulta\n" +
    "de <i>Taenia</i> sp"
    , estiloLegenda);
  livro.TeniaseCisticercose.pagina[0].legendaTeniaAdulta.setPosition(1400, 880);
  livro.TeniaseCisticercose.pagina[0].legendaTeniaAdulta.setAnchor(0.5, 0.5);

  // TeniaseCisticercose: Pagina 1
  livro.TeniaseCisticercose.pagina[1] = new Game.Page();

  livro.TeniaseCisticercose.pagina[1].texto1 = new Game.Text(
    "      Durante o parasitismo, várias proglotes\n" +
    "grávidas e desprendem diariamente."
    , estiloTextoLivro);
  livro.TeniaseCisticercose.pagina[1].texto1.setPosition(248, 120);

  livro.TeniaseCisticercose.pagina[1].proglate = new Game.Image("proglate.png");
  livro.TeniaseCisticercose.pagina[1].proglate.setPosition(360, 305);
  livro.TeniaseCisticercose.pagina[1].proglate.setTint(200, 194, 177);
  livro.TeniaseCisticercose.pagina[1].proglate.setScale(0.4);

  livro.TeniaseCisticercose.pagina[1].legendaProglate = new Game.Text(
    "Proglote grávida\n" +
    "contendo ovos\n" +
    "de <i>Taenia</i> sp"
    , estiloLegenda);
  livro.TeniaseCisticercose.pagina[1].legendaProglate.setPosition(360, 470);
  livro.TeniaseCisticercose.pagina[1].legendaProglate.setAnchor(0.5, 0.5);

  livro.TeniaseCisticercose.pagina[1].ovoTenia = new Game.Image("ovoTenia.png");
  livro.TeniaseCisticercose.pagina[1].ovoTenia.setPosition(640, 305);
  livro.TeniaseCisticercose.pagina[1].ovoTenia.setTint(200, 194, 177);
  livro.TeniaseCisticercose.pagina[1].ovoTenia.setScale(0.4);

  livro.TeniaseCisticercose.pagina[1].legendaovoTenia = new Game.Text(
    "Ovo de\n" +
    "<i>Taenia</i> sp"
    , estiloLegenda);
  livro.TeniaseCisticercose.pagina[1].legendaovoTenia.setPosition(640, 455);
  livro.TeniaseCisticercose.pagina[1].legendaovoTenia.setAnchor(0.5, 0.5);

  livro.TeniaseCisticercose.pagina[1].texto2 = new Game.Text(
    "     Em ambiente úmido e protegido de luz so-\n" +
    "lar, os ovos têm grande longividade, matendo-\n" +
    "se infectantes por meses. Um hospedeiro in-\n" +
    "termediário (suíno para <i>T. solium</i> e bovino\n" +
    "para <i>T. saginata</i>) ingere os ovos, e os embrió-\n" +
    "foros sofrem ação da pepsina, uma substância\n" +
    "ácida encontrada no estômago, e, em seguida,\n" +
    "de sais biliares, presentes no intestino. O em-\n" +
    "brióforo é uma estrutura protetora grossa que\n" +
    "recobre a oncosfera, estrutura que contém o\n" +
    "embrião. As oncosferas são libertadas do em-\n" +
    "brióforo e se instalam em uma vilosidade do"
    , estiloTextoLivro);
  livro.TeniaseCisticercose.pagina[1].texto2.setPosition(248, 530);

  livro.TeniaseCisticercose.pagina[1].cerebroInfectado = new Game.Image("cerebroInfectado.png");
  livro.TeniaseCisticercose.pagina[1].cerebroInfectado.setPosition(1400, 230);
  livro.TeniaseCisticercose.pagina[1].cerebroInfectado.setTint(200, 194, 177);
  livro.TeniaseCisticercose.pagina[1].cerebroInfectado.setScale(0.4);

  livro.TeniaseCisticercose.pagina[1].legendaCerebroInfectado = new Game.Text(
    "Cérebro humano\n" +
    "infectado por\n" +
    "cisticercos"
    , estiloLegenda);
  livro.TeniaseCisticercose.pagina[1].legendaCerebroInfectado.setPosition(1400, 395);
  livro.TeniaseCisticercose.pagina[1].legendaCerebroInfectado.setAnchor(0.5, 0.5);

  livro.TeniaseCisticercose.pagina[1].texto3 = new Game.Text(
    "intestino delgado por\n" +
    "quatro dias. Em se-\n" +
    "guida, penetram as\n" +
    "veias e os vasos lin-\n" +
    "fáticos do hospedeiro,\n" +
    "de forma a migrarem\n" +
    "para todos os tecidos\n" +
    "e órgãos até atraves-\n" +
    "sarem a parede do va-\n" +
    "so e se instalarem no\n" +
    "tecido vizinho à ele.\n" +
    "     As oncosferas desenvolvem-se para cisti-\n" +
    "cercos em qualquer tecido mole (pele, múscu-\n" +
    "los esqueléticos e cardíacos, olhos e cérebro),\n" +
    "porém preferem os músculos com maior oxige-\n" +
    "nação, como a língua, o coração e o cérebro. Os\n" +
    "cisticercos permanecem infectantes nos tecidos\n" +
    "por alguns meses até serem ingeridos pelos hu-\n" +
    "manos completando o ciclo.\n" +
    "     A cisticercose humana é adquirida quando\n" +
    "há ingestão acidental de ovos viáveis da <i>T. so-\n" +
    "lium</i> que foram eliminados pelas fezes de um\n" +
    "portador de teníase. Os cisticercos, que se de-\n" +
    "senvolvem a partir destes ovos são, então, en-"
    , estiloTextoLivro);
  livro.TeniaseCisticercose.pagina[1].texto3.setPosition(990, 120);

  // TeniaseCisticercose: Pagina 2
  livro.TeniaseCisticercose.pagina[2] = new Game.Page();

  livro.TeniaseCisticercose.pagina[2].texto1 = new Game.Text(
    "contrados em certos tecidos do hospedeiro\n" +
    "humano como o muscular, o cardíaco ou o\n" +
    "cerebral."
    , estiloTextoLivro);
  livro.TeniaseCisticercose.pagina[2].texto1.setPosition(248, 120);

  // LIVRO: GIARDÍASE
  livro.newBook("Giardiase");

  // Giardíase: Pagina 0
  livro.Giardiase.pagina[0] = new Game.Page();

  livro.Giardiase.pagina[0].titulo = new Game.Text(
    "                     Giardíase"
  , estiloTitulo);
  livro.Giardiase.pagina[0].titulo.setPosition(248, 120);

  livro.Giardiase.pagina[0].texto1 = new Game.Text(
    "     Dentre os parasitos intestinais presentes em\n" +
    "seres humanos, o parasito da Giardíase, <i>Giar-\n" +
    "dia lamblia</i>, ainda é um dos mais comuns em\n" +
    "diferentes egiões do mundo, principalmente\n" +
    "nos países em desenvolvimento. Na população\n" +
    "infectada, especialmente nas crianças, causa\n" +
    "diarreia infecciosa associada à água.\n" +
    "     Reino: Protista\n" +
    "     Filo: Sarcomastigophora\n" +
    "     Classe: Zoomastigophora\n" +
    "     Ordem: Diplomonadida\n" +
    "     Família: Hexamitidae\n" +
    "     Gênero: <i>Giardia</i>\n" +
    "     Espécie: <i>G. lamblia</i>"
    , estiloTextoLivro);
  livro.Giardiase.pagina[0].texto1.setPosition(248, 190);

  livro.Giardiase.pagina[0].cicloBiologico = new Game.Text(
    "      Ciclo biológico"
  , estiloTitulo);
  livro.Giardiase.pagina[0].cicloBiologico.setPosition(248, 680);

  livro.Giardiase.pagina[0].texto2 = new Game.Text(
    "     Após a ingestão de cistos de <i>G. lamblia</i>\n" +
    "pelo hospedeiro, estes iniciam o processo de\n" +
    "desencistamento no estômago, o qual comple-\n" +
    "ta-se no duodeno. Tal processo é caracterizado\n" +
    "pela transformação dos cistos em trofozoítos,\n" +
    "que se multiplicam por divisões binárias e co-"
    , estiloTextoLivro);
  livro.Giardiase.pagina[0].texto2.setPosition(248, 730);

  livro.Giardiase.pagina[0].texto3 = new Game.Text(
    "lonizam o intestino. Lá os trofozoítos ficam\n" +
    "aderidos na parede intestinal até sofrerem o\n" +
    "processo inverso ao desencistamento: o encis-\n" +
    "tamento; este é caracterizado pela transforma-\n" +
    "ção dos trofozoítos em cistos. Os cistos form-\n" +
    "ados são, então, eliminados para o exterior por\n" +
    "meio das fezes do hospedeiro."
    , estiloTextoLivro);
  livro.Giardiase.pagina[0].texto3.setPosition(990, 170);

  livro.Giardiase.pagina[0].cistos = new Game.Image("maisCistos.png");
  livro.Giardiase.pagina[0].cistos.setPosition(1120, 530);
  livro.Giardiase.pagina[0].cistos.setScale(0.4);

  livro.Giardiase.pagina[0].legendaCistos = new Game.Text(
    "Cistos de\n" +
    "<i>G. lamblia</i>"
    , estiloLegenda);
  livro.Giardiase.pagina[0].legendaCistos.setPosition(1120, 680);
  livro.Giardiase.pagina[0].legendaCistos.setAnchor(0.5, 0.5);

  livro.Giardiase.pagina[0].giardiaReproducao = new Game.Image("giardiaReproducao.png");
  livro.Giardiase.pagina[0].giardiaReproducao.setPosition(1400, 530);
  livro.Giardiase.pagina[0].giardiaReproducao.setScale(0.4);

  livro.Giardiase.pagina[0].legendaGiardiaReproducao = new Game.Text(
    "Multiplicação de\n" +
    "trofozoítos de\n" +
    "<i>G. lamblia</i>"
    , estiloLegenda);
  livro.Giardiase.pagina[0].legendaGiardiaReproducao.setPosition(1400, 695);
  livro.Giardiase.pagina[0].legendaGiardiaReproducao.setAnchor(0.5, 0.5);

  // LIVRO: AGRADECIMENTOS
  livro.newBook("Agradecimentos");

  // Agradecimentos: Pagina 0
  livro.Agradecimentos.pagina[0] = new Game.Page();

  livro.Agradecimentos.pagina[0].titulo = new Game.Text(
    "                   Agradecimentos"
  , estiloTitulo);
  livro.Agradecimentos.pagina[0].titulo.setPosition(248, 120);

  livro.Agradecimentos.pagina[0].autoras = new Game.Text(
    "      Autoras:"
  , estiloTitulo);
  livro.Agradecimentos.pagina[0].autoras.setPosition(248, 190);

  livro.Agradecimentos.pagina[0].texto1 = new Game.Text(
    "     Isabella Brosens Barros – Licenciada em\n" +
    "Ciências Biológicas\n" +
    "     Karina Nomidome de Senna - Licenciada\n" +
    "em Ciências Biológicas"
    , estiloTextoLivro);
  livro.Agradecimentos.pagina[0].texto1.setPosition(248, 240);

  livro.Agradecimentos.pagina[0].colaboradores = new Game.Text(
    "      Colaboradores:"
  , estiloTitulo);
  livro.Agradecimentos.pagina[0].colaboradores.setPosition(248, 400);

  livro.Agradecimentos.pagina[0].texto2 = new Game.Text(
    "     Heitor Vasconcelos de Queiroz - Designer\n" +
    "     Mateus Gonçalez Etto - Desenvolvedor\n" +
    "     Matheus Barbosa Peixoto – Designer"
    , estiloTextoLivro);
  livro.Agradecimentos.pagina[0].texto2.setPosition(248, 450);

  livro.Agradecimentos.pagina[0].agradecimento = new Game.Text(
    "      Agradecimento:"
  , estiloTitulo);
  livro.Agradecimentos.pagina[0].agradecimento.setPosition(248, 570);

  livro.Agradecimentos.pagina[0].texto3 = new Game.Text(
    "     À coordenadora geral do LTIA, Elisa Cas-\n" +
    "tro Livramento, por coordenar a equipe.\n" +
    "     À Prof. Dr. Rosana Rossi pelo conteúdo das\n" +
    "aulas de parasitologia e pelas imagens cedidas.\n" +
    "     Ao autor Juan Gaertner pela foto do verme\n" +
    "adulto de <i>Taenia</i> sp, encontrado no site.\n" +
    "     Ao autor Jarun Ontakrai e o banco de ima-\n" +
    "gens Shutterstock, pelas fotos do ovo de <i>Asca-\n" +
    "rís lumbricoides</i> e pelo ovo de <i>Taenia</i> sp."
    , estiloTextoLivro);
  livro.Agradecimentos.pagina[0].texto3.setPosition(248, 620);

  livro.Agradecimentos.pagina[0].texto4 = new Game.Text(
    "     Ao autor Peter Darben pela foto do cisto e\n" +
    "trofozoíto de <i>E. histolytica</i>.\n" +
    "     Aos autores P. W. Pappas e S. M. Wardrop -\n" +
    "Foto proglotíde de <i>Taenia</i> sp."
    , estiloTextoLivro);
  livro.Agradecimentos.pagina[0].texto4.setPosition(990, 120);

  livro.Agradecimentos.pagina[0].referencias = new Game.Text(
    "      Referências:"
  , estiloTitulo);
  livro.Agradecimentos.pagina[0].referencias.setPosition(990, 310);

  livro.Agradecimentos.pagina[0].texto5 = new Game.Text(
    "BRASIL. 2017. Disponível em: http://portal\n" +
    "saude.saude.gov.br/.\n" +
    "BRASIL. <b>Doenças infecciosas e parasitárias:\n" +
    "guia de bolso.</b> 8ª edição. Brasília - DF: Editora\n" +
    "do  Ministério da Saúde, 2010. 448 p.\n" +
    "FARIAS, A. F. de. <b>Saneamento básico: solu-\n" +
    "ções alternativas de abastecimento de água.</b>\n" +
    "Disponível em: http://www.ji-parana.ro.gov.br/\n" +
    "layout2013/noticia.php?id=961.\n" +
    "NEVES, D. P.; MELO, A. L. de; LINARDI,\n" +
    "P. M.; VITOR, R. W. A. <b>Parasitologia huma\n" +
    "na.</b> 12ªedição. São Paulo - SP: Atheneu, 2011.\n" +
    "546 p."
    , estiloTextoLivro);
  livro.Agradecimentos.pagina[0].texto5.setPosition(990, 360);

  // Agradecimentos: Pagina 1
  livro.Agradecimentos.pagina[1] = new Game.Page();

  livro.Agradecimentos.pagina[1].utilizadoAplicacao = new Game.Text(
    "      Utilizados nesta aplicação:"
  , estiloTitulo);
  livro.Agradecimentos.pagina[1].utilizadoAplicacao.setPosition(248, 120);

  livro.Agradecimentos.pagina[1].texto1 = new Game.Text(
    "     O CircleCaps, utilizados na numeração dos\n" +
    "ciclos, estão disponíveis em: http://www.da\n" +
    "font.com/pt/circlecaps.font.\n" +
    "     O botão de fechar criado por Eugene Pa-\n" +
    "vovsky disponível no site www.flaticon.com\n" +
    "     O Código para scaleToWindow disponível\n" +
    "em: https://github.com/kittykatattack/scaleTo\n" +
    "Window.\n" +
    "     O código para multiformatação dos textos:\n" +
    "https://github.com/tleunen/pixi-multistyle-\n" +
    "text.\n" +
    "     Os sons estão disponíveis nos seguintes\n" +
    "links:\n" +
    "     Som de fundo sa sala de aula: https://\n" +
    "freesound.org/people/Relebogile/sounds/\n" +
    "328232/ (com modificações)\n" +
    "     Som para virar as páginas dos livros: https:\n" +
    "//freesound.org/people/flag2/sounds/63318/\n" +
    "     Som de fundo do ambiente externo: https://\n" +
    "freesound.org/people/eric5335/sounds/52740/\n" +
    "     Sons para o surgimento dos pop-ups e para\n" +
    "mudar de ambiente: http://www.freesfx.co.uk\n" +
    "     Som de clique do mouse: http://www.\n" +
    "orangefreesounds.com/mouse-click-sound/"
    , estiloTextoLivro);
  livro.Agradecimentos.pagina[1].texto1.setPosition(248, 170);

  livro.Agradecimentos.pagina[1].texto2 = new Game.Text(
    "     O ponto de interrogação criado por Eleanor\n" +
    "Wang disponível no site http://www.flaticon.\n" +
    "com"
    , estiloTextoLivro);
  livro.Agradecimentos.pagina[1].texto2.setPosition(990, 120);

  livro.Agradecimentos.pagina[1].pixijsLogo = new Game.Image("pixijs.png");
  livro.Agradecimentos.pagina[1].pixijsLogo.setPosition(1300, 300);
  livro.Agradecimentos.pagina[1].pixijsLogo.setScale(1.4);

  livro.Agradecimentos.pagina[1].parceria = new Game.Text(
    "      Parceria:"
  , estiloTitulo);
  livro.Agradecimentos.pagina[1].parceria.setPosition(990, 400);

  livro.Agradecimentos.pagina[1].logoLtia = new Game.Image("LtiaLogo.png");
  livro.Agradecimentos.pagina[1].logoLtia.setPosition(1250, 520);
  livro.Agradecimentos.pagina[1].logoLtia.setScale(0.6);

  livro.Agradecimentos.pagina[1].financiamento = new Game.Text(
    "      Financiamento:"
  , estiloTitulo);
  livro.Agradecimentos.pagina[1].financiamento.setPosition(990, 620);

  livro.Agradecimentos.pagina[1].logoCnpq = new Game.Image("CNPq_transparente.png");
  livro.Agradecimentos.pagina[1].logoCnpq.setPosition(1250, 800);
  livro.Agradecimentos.pagina[1].logoCnpq.setScale(0.6);

  // Cria os itens com o conteudo dos livros
  livro.createItems();

  // Imagens do livro e do X de fechar
  item.livroAberto = new Game.Image("livroAberto.png");
  item.livroAberto.setZorder(4);
  item.livroAberto.setPosition(960, 540);
  item.livroAberto.setAlpha(0);
  item.livroAberto.disable();

  item.fechaLivro = new Game.Item("botaoFechar.png");
  item.fechaLivro.setPosition(1840, 70);
  item.fechaLivro.setZorder(1);
  item.fechaLivro.setBrightness(200);
  item.fechaLivro.setScale(0.14);
  item.fechaLivro.setAlpha(0);
  item.fechaLivro.disable();
  item.fechaLivro.onMouseOver = function() {
    item.fechaLivro.setBrightness(255);
  }
  item.fechaLivro.onMouseOut = function() {
    item.fechaLivro.setBrightness(200);
  }
  item.fechaLivro.onClick = function(mouse) {
    disableInteractiveness();
    somClique();

    // Habilita interação com os livros do armario
    groupEnable(scene[2].livros);
    item.setaSalaDeAula.setInteractive(true);

    // Esconde o livro
    item.livroAberto.changeAlpha(0, 600);
    item.fechaLivro.changeAlpha(0, 600);

    // Esconde o texto
    livro[tituloLivroAberto].close();

    setTimeout(function() {
      item.livroAberto.disable();
      item.fechaLivro.setBrightness(200);
      item.fechaLivro.disable();
      enableInteractiveness();
    }, 700);
  }

}
