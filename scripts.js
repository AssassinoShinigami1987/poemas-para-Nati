// Poemas de exemplo (adicione mais conforme desejar)
const poemas = [
  {
    titulo: "A Gata e o Ceifador",
    autor: "",
    texto: [
      'No meio da rua, em festa e neon,',
      'passa a cidade com brilho e som.',
      'Pessoas dançam, todas coloridas,',
      'mas uma gata chama as vidas.',
      '',
      'Preta como a noite sem luar,',
      'anda elegante, sem se apressar.',
      'Olhos de brasa, passo certeiro,',
      'misteriosa no seu roteiro.',
      '',
      'Num canto escuro, parado e calado,',
      'espera por ela o ceifador mascarado.',
      'Com capa longa e foice na mão,',
      'mas sente no peito... um coração.',
      '',
      'Toda meia-noite, no mesmo lugar,',
      'ele espera a gata passar.',
      'Não quer levá-la, nem assustar,',
      'só quer vê-la, e admirar.',
      '',
      'Ela não corre, ela não teme,',
      'sabe que o tempo, às vezes, treme.',
      'E mesmo a Morte, feita de dor,',
      'pode sentir um pouco de amor.',
      '',
      'No mundo vivo, cheio de cor,',
      'ela é sombra, charme e furor.',
      'E ele, sombrio, sente calor',
      'quando a vê — é puro ardor.',
      '',
      'E assim, na dança da escuridão,',
      'dois mundos batem o mesmo coração.',
      'Entre neon, passos e luar,',
      'a gata e o ceifador vão se encontrar.'
    ],
    tema: {
      fundo: "#f8f5e9",
      texto: "#3e2c1c",
      destaque: "#bfa77a",
      borda: "#e2d3b3",
      titulo: "#7c5e3c",
      textura: "assets/textura1.png"
    },
    imagem: "assets/lua.png"
  },
  {
    titulo: "ela é tão má com eu",
    autor: "",
    texto: [
      'tem uma gata preta,',
      'anda leve, meio sumida,',
      'pensa como quem dorme acordada',
      'e vive a vida toda em cima do muro —',
      'mansa, fingida.',
      '',
      'e eu?',
      'sou o ceifador sem férias.',
      'não posso cochilar,',
      'pisquei? já tem alma pra levar.',
      'sou tipo o Wi-Fi em casa de vó:',
      'sempre ligado, mas ninguém valoriza.',
      '',
      'a gente anda junto,',
      'eu e ela,',
      'ela com o rabinho em pé,',
      'eu com a foice nas costas,',
      'ela ronrona debochada',
      'eu tropeço nas próprias respostas.',
      '',
      'ela me sacaneia,',
      'desaparece só pra ver meu desespero,',
      'finge que não me escuta,',
      'só pra me chamar de exagero.',
      '',
      '"tá nervoso por quê, morte?"',
      'ela mia,',
      '"tu vive no stress, parece call center da vida."',
      'e eu rio, porque ela me desmonta,',
      'mas no fundo',
      'eu só queria um cafuné na minha conta.',
      '',
      'ela nunca dá.',
      'faz doce,',
      'me ignora com charme',
      'e me trata igual recado de mãe:',
      'lê, mas finge que não é com ela.',
      '',
      'fico só reclamando da minha sorte,',
      'com a gata preta rebolando na frente,',
      'sem me dar moral,',
      'só travessura e olhares de "te vira, mortal".',
      '',
      'mas mesmo assim,',
      'mesmo com o cansaço de cem mil passos,',
      'fico feliz.',
      'porque no fundo,',
      'essa gatinha preta',
      'me dá paz sem nem tentar.',
      'e eu?',
      'sou só um ceifador tonto,',
      'que só queria um carinho,',
      'mas aprendeu a amar',
      'o jeito torto dela de me amar sem encostar.'
    ],
    tema: {
      fundo: "#f8f5e9",
      texto: "#3e2c1c",
      destaque: "#bfa77a",
      borda: "#e2d3b3",
      titulo: "#7c5e3c",
      textura: "assets/textura1.png"
    },
    imagem: "assets/lua.png"
  },
  {
    titulo: "Ela tentou pisar no meu pé enquanto via Hamilton mas acabou só apoiando a perna na minha",
    autor: "",
    texto: [
      'Eu, o Ceifador metido a sabichão,',
      'Baixei Hamilton achando que ia causar comoção.',
      'Procurei legenda como zumbi sem cérebro,',
      'E descobri que meu esforço foi só alívio etéreo.',
      '',
      'Sentei ao lado da Nati, pronto pra arrancar risada,',
      'Mas tropecei no controle, causa da minha própria piada.',
      'Pisadela no pé virou dominação falha,',
      'Enquanto no meu calcanhar ecoava a risada mais tralha.',
      '',
      'Ela reagiu fingindo não ligar — finge bem esse teatro,',
      'Mas a perna caiu em cima da minha como um ato imprudente e ingrato.',
      'Abraço disfarçado? Sinal de fraqueza?',
      'A gente não sabe, mas fingi firmeza.',
      '',
      'filme rolava, Lin-Manuel tremia no palco,',
      'A gente só secava suor, pensando em outra fala solta no asfalto.',
      'O ato acabou, mas nosso perrengue continuou,',
      'Esperando o Thiago, herói de escapamento que chegou.',
      '',
      'Falamos de margaridas como se fosse reflexão,',
      '"Flor besta!" gritei, com grandiosa indigência e afeição.',
      'Pura bobagem, papo de quem não tem segredos,',
      'Senti vergonha alheia — mas não recuei nos enredos.',
      '',
      'Thiago chegou barulhento, moto mais estridente que trovão,',
      'Meu ego murchou como plástico colocado no chão.',
      'Posição de galã? Dei de cara no portão,',
      'E ele riu de mim, si mofa sem compaixão.',
      '',
      'Tentei pausar o filme — profissa do controle remoto,',
      'Acabei fechando tudo: adeus palco, adeus devaneio, adeus caco.',
      'Tela preta, silêncio e um gosto de fracasso doce,',
      'Eu, o Ceifador, me senti chute no traseiro esquerdo e no direito.',
      '',
      'Nati bufou, disse "cara, tu é uma piada ambulante",',
      'Ri dela também, devolvendo a cutucada com bandeja arrogante.',
      'Na amizade não há lei, apenas golpes verbais,',
      'Competição de idiotice em "time" de funerais.',
      '',
      'O relógio bateu meia-noite e o tédio virou soberano,',
      'Dissolvemos o encontro com um "tchau" mais gelado que tirano.',
      'Sem drama, sem clímax, só ironia pura,',
      'Amizade de punk, sem frescura.',
      '',
      'Essa saga é como meme velho numa rede social,',
      'Repetitiva, escrota e totalmente irracional.',
      'Se espera moral, pode esperar sentado,',
      'Aqui só tem trambolho e ego inflado.',
      '',
      'Hamilton? Que nada! O ouro foi nosso fiasco,',
      'Um show de trapalhadas, comédia sem relaxo.',
      'A vida real sempre ganha do peito pomposo,',
      'Deixando piada amarga e gosto duvidoso.',
      '',
      'E no fim, o Ceifador virou piada ambulante,',
      'Da próxima vez, fica em casa, manda mensagem antes.',
      'Poupa suor, tempo e calos desnecessários,',
      'Evita risada cruel e olhares solidários.',
      '',
      'Mas se insistir em caos com legendas imbecis,',
      'Chama a turma toda e prepara os borrifos de gás de pimenta nas raízes.',
      'Que amizade de peso se mede em sarcasmo e cria,',
      'Carneiro de eleições, com riso que desdenha e esvazia.',
      '',
      'E assim seguimos, Ceifador e Nati sem romantismo,',
      'Um duo de absurdos, sobrevivendo no egocentrismo.',
      'Que esse poema seja alerta: pipoca é melhor que legenda,',
      'E pisão no pé rende riso mais que qualquer encomenda.'
    ],
    tema: {
      fundo: "#f8f5e9",
      texto: "#3e2c1c",
      destaque: "#bfa77a",
      borda: "#e2d3b3",
      titulo: "#7c5e3c",
      textura: "assets/textura1.png"
    },
    imagem: "assets/lua.png"
  },
  {
    titulo: "pra Nati, com tudo que importa",
    autor: "",
    texto: [
      'conhecer você foi tipo achar um guarda-chuva',
      'num dia que eu nem sabia que tava chovendo.',
      'foi leve, meio do nada, meio do tudo,',
      'e no meio da minha bagunça,',
      'você foi silêncio bom.',
      '',
      'não precisou de discursos,',
      'foi nas coisas bobas —',
      'um meme, um olhar,',
      'um "tá tudo bem" que nem sempre tava,',
      'mas só de você dizer, parecia que tava sim.',
      '',
      'você me deu força sem saber,',
      'tipo mágica que não precisa de palco.',
      'não foi heroína de filme,',
      'foi mais tipo alguém que senta do lado,',
      'mesmo quando tá difícil até de respirar.',
      '',
      'e mesmo que a matemática básica tenha te feito chorar,',
      'eu juro que tô aqui — com papel, lápis e paciência.',
      'não pra resolver por você,',
      'mas pra te lembrar que tu não tá sozinha nisso.',
      'porque, sinceramente?',
      'só de você existir, já resolveu metade da minha equação.',
      '',
      'então dorme bem, Nati.',
      'você merece todos os sonhos bons.',
      'e amanhã a gente tenta de novo,',
      'juntos, sem pressa, e com coração.',
      '',
      'boa noite.',
      '🌙🖤'
    ],
    tema: {
      fundo: "#f8f5e9",
      texto: "#3e2c1c",
      destaque: "#bfa77a",
      borda: "#e2d3b3",
      titulo: "#7c5e3c",
      textura: "assets/textura1.png"
    },
    imagem: "assets/lua.png"
  },
  {
    titulo: "gata preta, fica?",
    autor: "",
    texto: [
      'ela chegou na surdina,',
      'miando baixo, patinha leve,',
      'toda cheia de razão,',
      'cheia de mundo na bagagem',
      'e de vontade de ir embora na primeira chance.',
      '',
      '"não vou ficar muito, viu?"',
      'disse, olhando de canto,',
      'como quem já sofreu mudança demais',
      'pra acreditar em pouso.',
      '',
      'e eu?',
      'eu, o ceifador bobo,',
      'com a foice torta e o coração mais ainda,',
      'fiquei tentando ajeitar as almofadas do destino',
      'pra ver se ela dormia ali…',
      'só mais uma noite.',
      '',
      'ela resmungava.',
      '"esse lugar é esquisito,',
      'não tem sol o bastante,',
      'tem silêncio demais,',
      'e tu… tu é pálido feito susto."',
      '',
      'e eu só ria.',
      'tentava botar flor no beiral,',
      'inventar comida nova,',
      'aprender a ouvir miado como língua de verdade.',
      '',
      'às vezes,',
      'ela sumia no escuro,',
      'dava volta em tudo,',
      'testava cada canto,',
      'me testava também.',
      'e voltava.',
      'sempre voltava.',
      '',
      'até que um dia —',
      'sem aviso, sem drama,',
      'só com aquele jeito manhoso de quem parece brava,',
      'mas tá só com medo de sentir demais —',
      'ela disse:',
      '',
      '"sabe o que é…',
      'eu queria ficar.',
      'tenho medo que, quando eu for,',
      'tu ache outra gata preta por aí."',
      '',
      'e ali eu travei.',
      'meu coração-de-ceifador deu tilt,',
      'minha foice quase caiu da mão.',
      'eu, que carrego almas,',
      'senti que a minha tava sendo segurada por ela.',
      '',
      '"outra gata preta?"',
      'respondi, com a voz engasgada de sorriso.',
      '"não tem.',
      'só tu sabe bagunçar meu mundo',
      'e ainda fazer ele parecer casa."',
      '',
      'e desde então,',
      'ela ficou.',
      'às vezes resmunga, às vezes arranha o sofá do tempo,',
      'mas mia baixinho quando acha que eu não tô ouvindo:',
      '"ainda bem que tu insistiu."',
      '',
      'e eu?',
      'eu continuo ceifando por aí.',
      'mas agora com patinhas me seguindo,',
      'e o coração cheio',
      'de pelo preto e paz.'
    ],
    tema: {
      fundo: "#f8f5e9",
      texto: "#3e2c1c",
      destaque: "#bfa77a",
      borda: "#e2d3b3",
      titulo: "#7c5e3c",
      textura: "assets/textura1.png"
    },
    imagem: "assets/lua.png"
  },
  {
    titulo: "menos foice, mais pausa",
    autor: "",
    texto: [
      'o ceifador vivia na correria,',
      'como quem tem prazo até pra respirar,',
      'com a cabeça cheia de "tem que"',
      'e o peito vazio de sossego.',
      '',
      'acordava com a lista do apocalipse,',
      'ia dormir com a sensação',
      'de que o mundo acabava amanhã',
      '(e ele era o responsável pelo cronograma).',
      '',
      'cada alma, uma reunião.',
      'cada missão, uma notificação.',
      'tava virando ceifador multitarefa:',
      'ceifa aqui, ajuda ali,',
      'resolve coisa que nem é tua…',
      'e no fim?',
      'só cansaço no bolso e nada no coração.',
      '',
      'aí veio ela.',
      'a gata preta.',
      'sem relógio, sem meta,',
      'com a filosofia de quem dorme 18 horas por dia',
      'e ainda se acha ocupada.',
      '',
      'ela olhou ele de cima a baixo e disse:',
      '"tu vive igual notificação de celular:',
      'barulhento, ansioso, e quase nunca é importante."',
      '',
      'ele tentou retrucar,',
      'mas ela já tinha deitado no tapete da existência',
      'e fechado os olhos como quem diz:',
      '"me acorda só se o mundo acabar de verdade — e mesmo assim, pensa duas vezes."',
      '',
      'o ceifador começou a reparar.',
      'nas pausas.',
      'no silêncio que ela fazia caber entre os miados.',
      'nas horas que ela gastava pensando',
      'antes de levantar um único bigode.',
      '',
      'e sem perceber,',
      'ele começou a desacelerar.',
      'entregas atrasadas? paciência.',
      'correções urgentes? espera.',
      'vidas pra ceifar? tudo na fila, com senha.',
      '',
      'e descobriu…',
      'que o mundo não acaba se tu for mais devagar.',
      'ele só fica mais bonito.',
      '',
      'agora ele vive assim:',
      'com uma gata preta no colo,',
      'uma tarefa por vez,',
      'e a certeza de que às vezes',
      'a maior revolução é fazer nada com elegância.'
    ],
    tema: {
      fundo: "#f8f5e9",
      texto: "#3e2c1c",
      destaque: "#bfa77a",
      borda: "#e2d3b3",
      titulo: "#7c5e3c",
      textura: "assets/textura1.png"
    },
    imagem: "assets/lua.png"
  },
  {
    titulo: "jogo de gigantes",
    autor: "",
    texto: [
      'o ceifador não vive.',
      'ele sobrevive.',
      'num canto esquisito,',
      'onde rei é covarde,',
      'e quem manda mesmo',
      'são os que não mostram a cara.',
      '',
      'o lugar fede a segredo podre,',
      'e cada passo é um teste escondido.',
      'tem o gênio —',
      'cheio de resposta bonita,',
      'mas nunca dá a certa.',
      'tem a princesa do teatro —',
      'que chora em cena e apunhala no camarim.',
      'e tem os sem alma,',
      'vazios por dentro,',
      'mas bons de disfarce.',
      '',
      'aqui, coração é peso.',
      'quem sente, afunda.',
      'quem chora, some.',
      'quem confia, dança.',
      '',
      'então o ceifador aprendeu.',
      'guardou o peito num cofre,',
      'afiou o olhar como faca',
      'e passou a ouvir só o que vinha da cabeça.',
      '',
      'nada de flores.',
      'nada de sonhos.',
      'só cálculo, silêncio e distância.',
      '',
      'porque nesse jogo de gigantes,',
      'quem hesita vira peão.',
      'quem ama vira isca.',
      'quem tropeça… muda de lugar.',
      'e ninguém volta igual depois da troca.',
      '',
      'o ceifador já viu demais.',
      'já perdeu demais.',
      'então agora ele joga frio,',
      'finge que não sente,',
      'fala pouco,',
      'e age como quem sempre soube de tudo.',
      '',
      'ele não quer trono.',
      'ele quer paz.',
      'mas, se for pra sobreviver,',
      'ele ceifa até os sorrisos.',
      '',
      'porque nesse mundo torto,',
      'até a sombra sorri com mentira.',
      'e ele?',
      'ele aprendeu que vencer',
      'é calar o coração',
      'antes que ele grite.'
    ],
    tema: {
      fundo: "#f8f5e9",
      texto: "#3e2c1c",
      destaque: "#bfa77a",
      borda: "#e2d3b3",
      titulo: "#7c5e3c",
      textura: "assets/textura1.png"
    },
    imagem: "assets/lua.png"
  },
  {
    titulo: "Patinha Quente",
    autor: "",
    texto: [
      'O ceifador tava de rolê,',
      'sozinho, sombrio, sem nada a perder.',
      'Andava por entre becos e almas,',
      'num tédio mortal, sem nenhuma calma.',
      '',
      'Até que viu, num telhado qualquer,',
      'uma gata preta com pose de mulher.',
      'Olhar afiado, sentada elegante,',
      'tipo quem sabe que é dominante.',
      '',
      'Ele parou, deu uma travada.',
      'Nem era medo, era a alma abalada.',
      '"Oi, posso?" — falou meio torto,',
      'ela olhou — "Você é do tipo morto, né? Que fofo."',
      '',
      'Ela esticou uma patinha no ar,',
      'ele pegou, sem nem pensar.',
      'E ali, por um segundo perdido,',
      'o ceifador sentiu... o proibido.',
      '',
      'Quentinha.',
      'Suave.',
      'Com cheiro de ração cara.',
      'Algo que não sentia desde a última era.',
      '',
      'Mas a gata riu por dentro, claro.',
      'Deixou ele tocar só pra fazer o raro:',
      'ver um ceifador, o dono do fim,',
      'bobo, suando de amor, por um toque assim.',
      '',
      'Ela pulou fora, rabo em pé,',
      '"Você achou que eu era pet? Tsc, até parece."',
      'E o ceifador ficou, coração em tilt,',
      'pensando em como um toque tão breve',
      'destruiu séculos de gelo e guilt.'
    ],
    tema: {
      fundo: "#f8f5e9",
      texto: "#3e2c1c",
      destaque: "#bfa77a",
      borda: "#e2d3b3",
      titulo: "#7c5e3c",
      textura: "assets/textura1.png"
    },
    imagem: "assets/lua.png"
  },
  {
    titulo: "Ossos Rubros",
    autor: "",
    texto: [
      'Depois da patinha, ele ficou encantado.',
      'Todo ceifador, agora meio enrolado.',
      'Montou um plano digno de novela:',
      'ia cortejar a gata mais bela.',
      '',
      'Poliu a foice, escovou o capuz,',
      'fez pose de lenda, andou com mais luz.',
      'Roubei flor do cemitério, pensou com fervor,',
      'mas "romântico mórbido" ainda mete pavor?',
      '',
      'Chegou na noite com o céu fechado,',
      'vento, relâmpago, tudo ensaiado.',
      'Tocou a campainha (imaginária, claro),',
      'e disse: "Gata, você me fez sentir... raro."',
      '',
      'Ela apareceu na janela do telhado,',
      'com olhos brilhando e pelo ajeitado.',
      'Olhou pra ele, devorando inteiro,',
      'com aquele olhar de "brinco contigo o dia inteiro".',
      '',
      '"Você me trouxe flor seca? Que charme gótico.',
      'Mas tá bonitinho… quase poético."',
      'Desceu em um salto, sem errar o passo,',
      'deu uma voltinha, roçou no braço.',
      '',
      '"Sabia que nunca fui fã de gente viva?',
      'Mas você… tem uma vibe bem cativa.',
      'Esse seu silêncio fúnebre combina comigo.',
      'Só não me segue muito, que eu fujo do perigo."',
      '',
      'O ceifador travou, tropeçou no ar,',
      'não sabia se morria de novo ou ia se declarar.',
      'A gata então riu e puxou ele pra perto,',
      '"Calma, caveirinha, deixa que eu faço certo."',
      '',
      'Ela enroscou o rabo na foice dele,',
      'e cochichou coisas que nem a morte prevê.',
      'Ali, sob a lua, num clima absurdo,',
      'deixou o ceifador com os ossos... bem rubros.',
      '',
      'Mas não de vergonha — dessa vez era fogo.',
      'Porque gata esperta também sente jogo.',
      'E quem diria, no final da missão,',
      'que o dono da morte ia perder o coração?'
    ],
    tema: {
      fundo: "#f8f5e9",
      texto: "#3e2c1c",
      destaque: "#bfa77a",
      borda: "#e2d3b3",
      titulo: "#7c5e3c",
      textura: "assets/textura1.png"
    },
    imagem: "assets/lua.png"
  }
];

const VERSOS_POR_BLOCO = 13;
let versoAtual = 0;
let poemaAtual = 0;
let modoNoturno = false;

function aplicarTema(tema) {
  if (modoNoturno) {
    document.documentElement.style.setProperty('--cor-fundo', '#23201a');
    document.documentElement.style.setProperty('--cor-texto', '#18120a');
    document.documentElement.style.setProperty('--cor-destaque', '#ffeec7');
    document.documentElement.style.setProperty('--cor-borda', '#3e2c1c');
    document.documentElement.style.setProperty('--cor-titulo', '#18120a');
  } else {
    document.documentElement.style.setProperty('--cor-fundo', tema.fundo);
    document.documentElement.style.setProperty('--cor-texto', tema.texto);
    document.documentElement.style.setProperty('--cor-destaque', tema.destaque);
    document.documentElement.style.setProperty('--cor-borda', tema.borda);
    document.documentElement.style.setProperty('--cor-titulo', tema.titulo);
  }
}

function exibirVerso(indice) {
  const poema = poemas[poemaAtual];
  aplicarTema(poema.tema);
  const card = document.getElementById('poema-card');
  const titulo = card.querySelector('.titulo-poema');
  const autor = card.querySelector('.autor-poema');
  const texto = card.querySelector('.texto-poema');

  // Pega o bloco de versos
  const bloco = poema.texto.slice(indice, indice + VERSOS_POR_BLOCO);

  // Animação de saída
  card.style.animation = 'fadeInCard 0.7s cubic-bezier(.77,.01,.32,1.01)';
  texto.style.opacity = 0;
  setTimeout(() => {
    titulo.textContent = poema.titulo;
    autor.textContent = poema.autor;
    texto.innerHTML = bloco.map(v => v).join('<br>');
    texto.style.opacity = 1;
    card.style.animation = '';
  }, 200);

  atualizarContador(indice, poema.texto.length);
}

function atualizarContador(indice, total) {
  const blocoAtual = Math.floor(indice / VERSOS_POR_BLOCO) + 1;
  const totalBlocos = Math.ceil(total / VERSOS_POR_BLOCO);
  document.getElementById('contador-versos').textContent = `Bloco ${blocoAtual} de ${totalBlocos}`;
}

function atualizarContadorPoemas() {
  document.getElementById('contador-poemas').textContent = `Poema ${poemaAtual + 1} de ${poemas.length}`;
}

function trocarPoema(direcao) {
  const novoPoema = poemaAtual + direcao;
  if (novoPoema >= 0 && novoPoema < poemas.length) {
    poemaAtual = novoPoema;
    versoAtual = 0;
    exibirVerso(versoAtual);
    atualizarContadorPoemas();
  }
}

function virarVerso(direcao) {
  const poema = poemas[poemaAtual];
  const total = poema.texto.length;
  const totalBlocos = Math.ceil(total / VERSOS_POR_BLOCO);
  const blocoAtual = Math.floor(versoAtual / VERSOS_POR_BLOCO);
  if (direcao === 1 && blocoAtual < totalBlocos - 1) {
    versoAtual += VERSOS_POR_BLOCO;
    exibirVerso(versoAtual);
  } else if (direcao === -1 && blocoAtual > 0) {
    versoAtual -= VERSOS_POR_BLOCO;
    exibirVerso(versoAtual);
  }
}

function toggleModoNoturno() {
  modoNoturno = !modoNoturno;
  aplicarTema(poemas[poemaAtual].tema);
  if (modoNoturno) {
    document.getElementById('modal-noturno').setAttribute('aria-hidden', 'false');
  } else {
    document.getElementById('modal-noturno').setAttribute('aria-hidden', 'true');
  }
  exibirVerso(versoAtual);
}

document.getElementById('proximo').addEventListener('click', () => virarVerso(1));
document.getElementById('anterior').addEventListener('click', () => virarVerso(-1));
document.getElementById('modo-noturno').addEventListener('click', toggleModoNoturno);
document.getElementById('fechar-modal').addEventListener('click', () => {
  document.getElementById('modal-noturno').setAttribute('aria-hidden', 'true');
});

// Acessibilidade: navegação por teclado
window.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') virarVerso(1);
  if (e.key === 'ArrowLeft') virarVerso(-1);
});

// Partículas delicadas (corações flutuantes)
function criarParticulas(qtd = 12) {
  for (let i = 0; i < qtd; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.bottom = (-10 - Math.random() * 10) + 'vh';
    p.style.animationDelay = (Math.random() * 8) + 's';
    document.body.appendChild(p);
  }
}

// Elementos do seletor
const modalSeletor = document.getElementById('modal-seletor');
const abrirSeletor = document.getElementById('abrir-seletor');
const fecharSeletor = document.getElementById('fechar-seletor');
const listaPoemas = document.querySelector('.lista-poemas');

// Função para criar o seletor de poemas
function criarSeletorPoemas() {
  listaPoemas.innerHTML = '';
  poemas.forEach((poema, index) => {
    const item = document.createElement('div');
    item.className = 'poema-item';
    item.innerHTML = `
      <h4>${poema.titulo}</h4>
      <div class="autor">${poema.autor}</div>
    `;
    item.addEventListener('click', () => {
      poemaAtual = index;
      versoAtual = 0;
      exibirVerso(versoAtual);
      atualizarContadorPoemas();
      fecharModalSeletor();
    });
    listaPoemas.appendChild(item);
  });
}

// Funções para controlar o modal do seletor
function abrirModalSeletor() {
  modalSeletor.setAttribute('aria-hidden', 'false');
  modalSeletor.style.display = 'flex';
  criarSeletorPoemas();
}

function fecharModalSeletor() {
  modalSeletor.setAttribute('aria-hidden', 'true');
  modalSeletor.style.display = 'none';
}

// Event listeners para o seletor
abrirSeletor.addEventListener('click', abrirModalSeletor);
fecharSeletor.addEventListener('click', fecharModalSeletor);

// Fechar modal do seletor ao clicar fora
modalSeletor.addEventListener('click', (e) => {
  if (e.target === modalSeletor) {
    fecharModalSeletor();
  }
});

// Inicialização
window.addEventListener('DOMContentLoaded', () => {
  criarParticulas();
  exibirVerso(versoAtual);
  atualizarContadorPoemas();
}); 
