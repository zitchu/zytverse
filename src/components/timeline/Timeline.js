import mapaparadoxia1 from "../img/misc/Mapa 1.jpg";
import mapaparadoxia2 from "../img/misc/Mapa 2.jpg";
import stk from "../img/stk/capa.png";
import phandalim from "../img/phandalim/phandalim.png";
import phandalim2 from "../img/phandalim/phandalim2.jpg";
import capathali from "../img/phandalim/capathali.jpg";
import tumba from "../img/tomb/tumba.jpg";
import logo from "../img/dualidade/logo.jpg";
import landing from "../img/dualidade/landing.png";
import coroacao from "../img/dualidade/coroacao.png";

const Timeline = [
  {
    id: 1,
    titulo: "Paradoxia",
    subtitulo: "o começo de tudo",
    ano: "2-1 A.BB.",
    duracao: "1 ano",
    cidade: "Agalor",
    detalhes:
      "Campanha com foco náutico, repleta de exploração marítima e combates variados entre embarcações e criaturas marinhas.",
    resumo:
      "Aventuras num mundo de Fantasia próprio original. A história girou em torno de pirataria e do duelo entre dois irmãos devoradores de mentes, um de foco na expansão econômica por meio de uma madeireira e o outro com foco naval militar.",
    imagem: mapaparadoxia1,
  },
  {
    id: 2,
    titulo: "Storm King's Thunder",
    subtitulo: "um recomeço",
    ano: "1489-1490 D.R.",
    duracao: "1 ano",
    cidade: "Waterdeep",
    detalhes:
      "Foco em viagens de várias formas como marítima aérea e terrestre em diversas formas de locomoção e visitando lares de diversos tipos de gigantes.",
    resumo:
      "Gigantes estão fora de controle na Costa da Espada de Faerun, ataques em algumas cidades estão deixando as autoridades alarmadas. Essa campanha se baseou na lida com os gigantes e tentativas de acabar com esses ataques.",
    imagem: stk,
  },
  {
    id: 3,
    titulo: "A Mina Perdida de Phandelver (Saga Phandalin 1)",
    subtitulo: "pesquisa",
    ano: "1491 D.R",
    duracao: "cerca de 6 meses",
    cidade: "Neverwinter",
    detalhes:
      "Pequenas missões pontuais interligadas por um vilão em comum, que utilizou artifícios para se aproximar e investigar as ações do grupo.",
    resumo:
      "Uma forja de itens mágicos há muitos anos perdida pode ser agora encontrada por um grupo de anões que precisa da ajuda do grupo para realizar a busca. As aventuras davam pequenas pistas para o derradeiro encontro da mina.",
    imagem: phandalim,
  },
  {
    id: 4,
    titulo: "Dragons of Icespire Peak (Saga Phandalin 2)",
    subtitulo: "maquinações",
    ano: "1491-1492 D.R",
    duracao: " cerca de 1 ano",
    cidade: "Phandalin",
    detalhes:
      "Apesar de encontrada a mina, outros perigos necessitam de novas missões para impedir que dragões causem problemas na região de Phandalin",
    resumo:
      "A vilã 'Aranha' coloca seus planos em ação, exigindo do grupo grandes sacrifícios e muita superação. Utilizando outras peças no tabuleiro, incluindo dragões, ela busca pôr seu esquema em prática.",
    imagem: phandalim2,
  },
  {
    id: 5,
    titulo: "Strixhaven de Paradoxia",
    subtitulo: "um mistério",
    ano: "87 D.BB.",
    duracao: "quase 1 ano",
    cidade: "Strixhaven",
    detalhes:
      "De volta a Paradoxia quase 90 anos depois. Apesar de não explorar muito do mundo fez sua estreia a esola de mágia de Strixhaven.",
    resumo:
      "Coisas estranhas começam a acontecer nos bastidores da escola e um desafortunado mas estudioso grupo de alunos acabam se envolvendo enquanto descobrem pistas em busca de quem pode ser responsável.",
    imagem: mapaparadoxia2,
  },
  {
    id: 6,
    titulo: "A Busca de Thalivar (Saga Phandalin pós)",
    subtitulo: "encontrando ferramentas",
    ano: "1492 D.R.",
    duracao: "uma semana",
    cidade: "Leilon",
    detalhes:
      "Heróis caídos no passado se unem no Plano Etéreo para ajudar o mago Thalivar em uma jornada de viagens planares e exploração de locais inóspitos.",
    resumo:
      "Em busca de uma forma de retornar do pós-vida, Thalivar solicita aos aventureiros ingredientes raros, específicos e difíceis de obter, levando-os a enfrentar perigos místicos e astrais.",
    imagem: capathali,
  },
  {
    id: 7,
    titulo: "Tomb of Annihilation",
    subtitulo: "causas",
    ano: "1493 D.R.",
    duracao: "4 meses",
    cidade: "Porto Nianzaru",
    detalhes:
      "Uma viagem ao continente perigoso de Chult que trouxe uma busca para investigar e impedir a maldição da morte, uma luta verdadeira luta contra o calendário.",
    resumo:
      "Em busca de respostas eu até mesmo cura para uma doença que se espalhou por todo o mundo leva o grupo ao perigoso continente de Chult e pela exploração sobrevivência e busca de recursos os aventureiros tentam prevalecer.",
    imagem: tumba,
  },
  {
    id: 8,
    titulo: "Dualidade (Online)",
    subtitulo: "consequências",
    ano: "1495- D.R.",
    duracao: "1 ano",
    cidade: "Waterdeep",
    detalhes:
      "O fim do verão marca em Waterdeep uma inquietude entre a nobreza. Circulam rumores e fofocas sobre o que torna os nobres tão mais quietos do que o habitual. Em uma missão de espionagem, o grupo descobriu uma série de traições e mistérios",
    resumo:
      "Agora, com uma posição mais elevada em sua facção, o grupo recebe sua primeira missão séria e secreta: investigar e desmascarar um membro do Conselho dos Lordes que não é quem diz ser. Somente sua recente entrada na ordem garante que não estejam em conluio com o lorde falso. O futuro da cidade pode depender de seus próximos passos.",
    imagem: landing,
  },
  {
    id: 9,
    titulo: "Dualidade (Presencial)",
    subtitulo: "e mais consequências",
    ano: "1495- D.R.",
    duracao: "1 ano",
    cidade: "Neverwinter",
    detalhes:
      "Em Neverwinter, após concluírem uma captura de um famoso bandido local, os aventureiros devem seguir indícios de naufrágio para a Stormwreck Isle para descobrir o motivo e se possível alterá-lo.",
    resumo:
      "Uma nova oferta surge, prometendo mil peças de ouro se embarcarem no porto da cidade. As histórias ouvidas na taverna sobre navios perdidos e famílias deixadas para trás acendem diferentes reações no grupo. A embarcação Cada-Vento-Sol os aguarda ao anoitecer, levando-os rumo a uma missão que promete perigos e recompensas em igual medida.",
    imagem: logo,
  },
  {
    id: 10,
    titulo: "Dualidade (Unificada)",
    subtitulo: "Responsabilidade",
    ano: "1496 D.R.",
    duracao: "6 meses",
    cidade: "Waterdeep e Phandalim",
    detalhes:
      "Em Phandalim, novos detalhes se desenrolam e apontam finalmente onde está a 'organização' na bagunça dos dragões. Em Waterdeep a ascenção de Rosiel",
    resumo:
      "Após meses de investigação atrás das máscaras do dragão os planos finalmente se revelaram, 'caos controlado' para abrir espaço a um velho conhecido dos hérois chegar ao poder, se aproveitando dos sucessos deles para tal",
    imagem: coroacao,
  },
];

export default Timeline;
