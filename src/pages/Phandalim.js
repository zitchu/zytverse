import React, { useState, useRef, useEffect } from "react";
import Arendele from "../components/img/phandalim/Arendele.png";
import Bom from "../components/img/phandalim/Bom.png";
import darknym from "../components/img/phandalim/darknym.png";
import ek from "../components/img/phandalim/ek.png";
import Hagar from "../components/img/phandalim/Hagar.png";
import hincsu from "../components/img/phandalim/hinc-su.png";
import Iggu from "../components/img/phandalim/Iggu.png";
import Makrik from "../components/img/phandalim/Makrik.png";
import mindartis from "../components/img/phandalim/mindartis.png";
import Nym from "../components/img/phandalim/Nym.png";
import petervivo from "../components/img/phandalim/petervivo.png";
import talisco from "../components/img/phandalim/talisco.png";

function Phandalim() {
  const [activeTab, setActiveTab] = useState(1);
  const [showSpoilers, setShowSpoilers] = useState(false);
  const [currentCampaign, setCurrentCampaign] = useState(1);
  const modalRef = useRef(null);

  // Dados das campanhas com imagens importadas
  const campaigns = [
    {
      id: 1,
      titulo: "A Mina Perdida de Phandelver",
      subtitulo: "pesquisa",
      ano: "1491 D.R",
      duracao: "cerca de 6 meses",
      cidade: "Neverwinter",
      detalhes: "Pequenas missões pontuais interligadas por um vilão em comum, que utilizou artifícios para se aproximar e investigar as ações do grupo.",
      resumo: "Uma forja de itens mágicos há muitos anos perdida pode ser agora encontrada por um grupo de anões que precisa da ajuda do grupo para realizar a busca. As aventuras davam pequenas pistas para o derradeiro encontro da mina.",
      spoilers: `**Resumo detalhado da campanha "A Mina Perdida de Phandelver":**

**I. O Início em Neverwinter**
A aventura começou em Neverwinter, onde um grupo de aventureiros foi contratado por Gundren Rockseeker, um anão em busca da lendária Forja das Ondas de Phandelver. A mina havia sido perdida há séculos e continha poderosas capacidades de forjar itens mágicos.

**II. A Chegada em Phandalin**
Os aventureiros viajaram para a pequena cidade de Phandalin, onde descobriram que Gundren havia sido capturado. A cidade estava sob a influência de vários grupos problemáticos, incluindo a Gangue Redbrand, que aterrorizava os habitantes locais.

**III. As Missões em Phandalin**
O grupo realizou várias missões para ganhar a confiança dos moradores:
- Limparam a mansão Tresendar da Gangue Redbrand
- Investigaram ruínas antigas na Floresta dos Espinhos
- Enfrentaram ogros e orcs nas montanhas próximas
- Descobriram um culto do Dragão na Torre de Vidro

**IV. A Descoberta da Mina**
Seguindo pistas deixadas por Gundren, os aventureiros encontraram a entrada da Mina Perdida. Dentro, enfrentaram goblins, bugbears e finalmente o vilão Nezznar, o "Aranha Negra", que buscava controlar a forja para seus próprios propósitos.

**V. A Forja das Ondas**
Na parte mais profunda da mina, o grupo encontrou a lendária Forja das Ondas, um local de poder mágico capaz de criar itens extraordinários. Eles derrotaram Nezznar e seus capangas, salvando Gundren e garantindo que a forja não caísse em mãos erradas.`,
      // Personagens da primeira campanha: Hagar, Peter Vivo, Arendele, Nym
      imagens: [Hagar, petervivo, Arendele, Nym]
    },
    {
      id: 2,
      titulo: "Dragons of Icespire Peak",
      subtitulo: "maquinações",
      ano: "1491-1492 D.R",
      duracao: "cerca de 1 ano",
      cidade: "Phandalin",
      detalhes: "Apesar de encontrada a mina, outros perigos necessitam de novas missões para impedir que dragões causem problemas na região de Phandalin",
      resumo: "A vilã 'Aranha' coloca seus planos em ação, exigindo do grupo grandes sacrifícios e muita superação. Utilizando outras peças no tabuleiro, incluindo dragões, ela busca pôr seu esquema em prática.",
      spoilers: `**Resumo detalhado da campanha "Dragons of Icespire Peak":**

**I. O Retorno a Phandalin**
Após os eventos da Mina Perdida, Phandalin começou a prosperar. No entanto, um novo perigo surgiu quando um dragão branco chamado Cryovain estabeleceu seu território no Pico Icespire, ameaçando toda a região.

**II. A "Aranha" em Ação**
A vilã conhecida como "A Aranha" (Cryovain) revelou seus verdadeiros planos. Ela manipulou eventos na região, usando o dragão como peça em seu jogo de poder. Seu objetivo era controlar Phandalin e seus recursos.

**III. As Missões Contra o Dragão**
O grupo realizou várias missões para proteger Phandalin:
- Ajudaram o mosteiro de Ajunta Pall contra ataques de criaturas do gelo
- Investigaram ruínas ancestrais no Pantano dos Goblins
- Protegeram caravanas de suprimentos contra ataques
- Enfrentaram cultistas que adoravam o dragão

**IV. A Ascensão da Ameaça**
"A Aranha" intensificou seus ataques, usando magia e manipulação para colocar os habitantes de Phandalin uns contra os outros. Ela revelou ter aliados entre os próprios moradores da cidade.

**V. O Confronto Final**
O grupo rastreou "A Aranha" até sua fortaleza nas montanhas. Lá, descobriram que ela planejava usar um artefato antigo para controlar Cryovain completamente. Em um confronto épico, os aventureiros enfrentaram tanto a vilã quanto seu dragão, salvando Phandalin mais uma vez.`,
      // Personagens da segunda campanha: Bom, Hinc Su, Iggu, EK
      imagens: [Bom, hincsu, Iggu, ek]
    },
    {
      id: 3,
      titulo: "A Busca de Thalivar",
      subtitulo: "encontrando ferramentas",
      ano: "1492 D.R.",
      duracao: "uma semana",
      cidade: "Leilon",
      detalhes: "Heróis caídos no passado se unem no Plano Etéreo para ajudar o mago Thalivar em uma jornada de viagens planares e exploração de locais inóspitos.",
      resumo: "Em busca de uma forma de retornar do pós-vida, Thalivar solicita aos aventureiros ingredientes raros, específicos e difíceis de obter, levando-os a enfrentar perigos místicos e astrais.",
      spoilers: `**Resumo detalhado da campanha "A Busca de Thalivar":**

**I. O Chamado de Leilon**
A aventura começou em Leilon, onde os aventureiros foram contatados por Thalivar, um mago poderoso preso no Plano Etéreo. Ele buscava uma maneira de retornar ao mundo material após sua morte mágica.

**II. A Jornada Planar**
Thalivar guiou o grupo através de múltiplos planos de existência:
- O Plano Etéreo, onde espíritos vagam
- O Plano Elemental do Fogo, com vulcões em erupção
- O Plano das Sombras, repleto de ilusões e enganos
- O Plano Astral, onde pensamentos tomam forma

**III. Os Ingredientes Raros**
Para o ritual de retorno, Thalivar precisava de ingredientes específicos:
1. Lágrimas de um Fênix (Plano Elemental do Fogo)
2. Sombra de uma Estrela Cadente (Plano das Sombras)
3. Eco de um Grito Ancestral (Plano Astral)
4. Raiz da Árvore do Mundo (Plano Material)

**IV. Os Perigos Enfrentados**
Cada ingrediente exigiu superar desafios únicos:
- Negociar com elementais de fogo
- Resolver enigmas das sombras
- Enfrentar criaturas astrais que se alimentam de memórias
- Proteger locais sagrados de saqueadores

**V. O Ritual e o Retorno**
Com todos os ingredientes coletados, o grupo realizou o complexo ritual que permitiu a Thalivar retornar. No processo, aprenderam segredos sobre a natureza da vida, morte e magia que mudariam sua compreensão do universo.`,
      // Personagens da terceira campanha: Makrik, Mindartis, Dark Nym, Talisco
      imagens: [Makrik, mindartis, darknym, talisco]
    }
  ];

  const currentCampaignData = campaigns.find(camp => camp.id === currentCampaign) || campaigns[0];

  // Nomes dos personagens para cada campanha (para alt tags)
  const characterNames = {
    1: ["Hagar", "Peter Vivo", "Arendele", "Nym"],
    2: ["Bom", "Hinc Su", "Iggu", "EK"],
    3: ["Makrik", "Mindartis", "Dark Nym", "Talisco"]
  };

  // Fecha o modal ao clicar fora
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowSpoilers(false);
    }
  };

  // Fecha o modal com a tecla ESC
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        setShowSpoilers(false);
      }
    };

    if (showSpoilers) {
      document.addEventListener('keydown', handleEscapeKey);
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Limpa os event listeners
    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showSpoilers]);

  const handleTabClick = (tabId, campaignId) => {
    setActiveTab(tabId);
    setCurrentCampaign(campaignId);
  };

  return (
    <div className="p-4 bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 pt-[50px] min-h-screen text-white relative">
      {/* Título Principal */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold cinzel-black text-center py-4 text-amber-300">
          Saga Phandalin
        </h1>
      </div>

      {/* Abas dentro da página */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {campaigns.map((campaign) => (
            <button
              key={campaign.id}
              onClick={() => handleTabClick(campaign.id, campaign.id)}
              className={`px-6 py-4 rounded-xl font-bold cinzel-regular transition-all duration-300 flex flex-col items-center justify-center h-full min-h-[120px] ${
                activeTab === campaign.id
                  ? 'bg-gradient-to-br from-amber-600 to-amber-700 text-white shadow-lg transform scale-[1.02] border-2 border-amber-400'
                  : 'bg-emerald-800/60 text-amber-100 hover:bg-emerald-700/60 hover:shadow-md border border-amber-600/30'
              }`}
            >
              <span className="text-xl text-center mb-2">{campaign.titulo.split(' (')[0]}</span>
              <span className="text-sm opacity-90 text-center">{campaign.subtitulo}</span>
              <div className="mt-2 text-xs bg-emerald-900/50 px-3 py-1 rounded-full">
                {campaign.ano} • {campaign.duracao}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Botão de Spoilers */}
      <div className="max-w-7xl mx-auto mb-8 flex justify-end">
        <button
          onClick={() => setShowSpoilers(true)}
          className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 py-3 rounded-lg font-bold cinzel-regular shadow-lg transition-all duration-300 hover:scale-105"
        >
          Ver Resumo Detalhado
        </button>
      </div>

      {/* Modal de Spoilers */}
      {showSpoilers && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          {/* Overlay - clicar aqui fecha o modal */}
          <div 
            className="absolute inset-0"
            onClick={() => setShowSpoilers(false)}
            aria-hidden="true"
          />
          
          {/* Modal em si - clicar aqui NÃO fecha */}
          <div 
            ref={modalRef}
            className="bg-gradient-to-b from-amber-50 to-emerald-50 text-emerald-900 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* Cabeçalho do Modal */}
            <div className="sticky top-0 bg-gradient-to-r from-emerald-900 to-amber-800 text-amber-100 p-6 rounded-t-xl flex justify-between items-center">
              <h2 className="text-2xl font-bold cinzel-black">
                {currentCampaignData.titulo} - Resumo Detalhado
              </h2>
              <button
                onClick={() => setShowSpoilers(false)}
                className="text-amber-200 hover:text-white text-2xl transition-colors"
                aria-label="Fechar modal"
              >
                ✕
              </button>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-8 cinzel-regular space-y-6">
              <div className="mb-6">
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="bg-amber-100 px-4 py-2 rounded-lg">
                    <span className="font-semibold">Ano:</span> {currentCampaignData.ano}
                  </div>
                  <div className="bg-amber-100 px-4 py-2 rounded-lg">
                    <span className="font-semibold">Duração:</span> {currentCampaignData.duracao}
                  </div>
                  <div className="bg-amber-100 px-4 py-2 rounded-lg">
                    <span className="font-semibold">Local:</span> {currentCampaignData.cidade}
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {currentCampaignData.spoilers.split('\n\n').map((paragraph, index) => (
                  <div key={index} className="mb-4">
                    {paragraph.split('\n').map((line, lineIndex) => {
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return (
                          <h3 key={lineIndex} className="text-xl font-bold cinzel-black mb-3 text-emerald-900 bg-amber-100 inline-block px-4 py-2 rounded-lg">
                            {line.replace(/\*\*/g, '')}
                          </h3>
                        );
                      }
                      return (
                        <p key={lineIndex} className="text-justify leading-relaxed mb-3">
                          {line}
                        </p>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Botão para fechar no rodapé */}
              <div className="sticky bottom-0 bg-gradient-to-b from-amber-50 to-emerald-50 pt-6 border-t border-amber-300">
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowSpoilers(false)}
                    className="bg-gradient-to-r from-emerald-900 to-amber-800 text-amber-100 hover:from-amber-800 hover:to-emerald-900 px-8 py-3 rounded-lg font-bold cinzel-regular transition-all duration-300"
                  >
                    Fechar Resumo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Container principal para organizar layout */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        
        {/* Coluna da esquerda - Imagens (Desktop) */}
        <div className="hidden lg:flex lg:w-1/4 flex-col lg:sticky lg:top-32 lg:self-start lg:h-[calc(100vh-200px)]">
          <div className="h-full flex flex-col space-y-4">
            {currentCampaignData.imagens.slice(0, 2).map((img, index) => (
              <div key={index} className="flex-1 flex items-center justify-center p-2">
                <img
                  src={img}
                  alt={`${characterNames[currentCampaign][index]} - ${currentCampaignData.titulo}`}
                  className="w-full h-full object-contain rounded-xl shadow-lg border-2 border-amber-600/30 bg-emerald-900/20 p-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Coluna central - Conteúdo da Campanha */}
        <div className="w-full lg:w-1/2">
          <div className="cinzel-regular bg-gradient-to-b from-emerald-900/40 to-emerald-950/40 p-8 rounded-xl backdrop-blur-sm border border-amber-600/30">
            <div className="text-center mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold cinzel-black mb-2 text-amber-300">
                {currentCampaignData.titulo}
              </h1>
              <h2 className="text-xl font-semibold cinzel-regular mb-4 text-amber-200">
                {currentCampaignData.subtitulo}
              </h2>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <div className="bg-emerald-800/50 px-4 py-2 rounded-lg border border-amber-600/30">
                  <span className="font-semibold text-amber-200">Ano:</span> {currentCampaignData.ano}
                </div>
                <div className="bg-emerald-800/50 px-4 py-2 rounded-lg border border-amber-600/30">
                  <span className="font-semibold text-amber-200">Duração:</span> {currentCampaignData.duracao}
                </div>
                <div className="bg-emerald-800/50 px-4 py-2 rounded-lg border border-amber-600/30">
                  <span className="font-semibold text-amber-200">Cidade:</span> {currentCampaignData.cidade}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold cinzel-black mb-4 text-amber-200 border-b border-amber-600 pb-2">
                  Contexto da Aventura
                </h3>
                <p className="text-justify leading-relaxed text-lg">
                  {currentCampaignData.detalhes}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold cinzel-black mb-4 text-amber-200 border-b border-amber-600 pb-2">
                  Resumo da História
                </h3>
                <p className="text-justify leading-relaxed text-lg">
                  {currentCampaignData.resumo}
                </p>
              </div>

              {/* Personagens da campanha */}
              <div className="bg-emerald-900/30 p-6 rounded-lg border border-amber-600/20 mt-8">
                <h3 className="text-xl font-bold cinzel-black mb-3 text-amber-200">
                  👥 Personagens Destacados
                </h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {characterNames[currentCampaign].map((name, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-emerald-800/30 p-3 rounded-lg">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-amber-600/30">
                        <img
                          src={currentCampaignData.imagens[index]}
                          alt={name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-amber-200 font-medium">{name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-900/30 p-6 rounded-lg border border-amber-600/20">
                <h3 className="text-xl font-bold cinzel-black mb-3 text-amber-200">
                  📋 Detalhes da Campanha
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span><span className="font-semibold text-amber-300">Título:</span> {currentCampaignData.titulo}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span><span className="font-semibold text-amber-300">Subtítulo:</span> {currentCampaignData.subtitulo}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span><span className="font-semibold text-amber-300">Período:</span> {currentCampaignData.ano} ({currentCampaignData.duracao})</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-400 mr-2">•</span>
                    <span><span className="font-semibold text-amber-300">Local Principal:</span> {currentCampaignData.cidade}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna da direita - Imagens (Desktop) */}
        <div className="hidden lg:flex lg:w-1/4 flex-col lg:sticky lg:top-32 lg:self-start lg:h-[calc(100vh-200px)]">
          <div className="h-full flex flex-col space-y-4">
            {currentCampaignData.imagens.slice(2, 4).map((img, index) => (
              <div key={index} className="flex-1 flex items-center justify-center p-2">
                <img
                  src={img}
                  alt={`${characterNames[currentCampaign][index + 2]} - ${currentCampaignData.titulo}`}
                  className="w-full h-full object-contain rounded-xl shadow-lg border-2 border-amber-600/30 bg-emerald-900/20 p-2"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Versão mobile para as imagens */}
        <div className="lg:hidden w-full mt-8">
          <div className="grid grid-cols-2 gap-4">
            {currentCampaignData.imagens.map((img, index) => (
              <div key={index} className="rounded-xl shadow-lg border-2 border-amber-600/30 overflow-hidden bg-emerald-900/20">
                <div className="aspect-square flex items-center justify-center p-4">
                  <img
                    src={img}
                    alt={`${characterNames[currentCampaign][index]} - ${currentCampaignData.titulo}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-emerald-900/40 p-3 text-center">
                  <p className="text-amber-200 font-medium">{characterNames[currentCampaign][index]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicador de aba ativa (mobile) */}
      <div className="lg:hidden mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-emerald-900/40 p-4 rounded-lg border border-amber-600/30 text-center">
            <p className="text-amber-200">
              Visualizando: <span className="font-bold">{currentCampaignData.titulo}</span>
            </p>
            <div className="flex justify-center space-x-2 mt-2">
              {campaigns.map((campaign) => (
                <button
                  key={campaign.id}
                  onClick={() => handleTabClick(campaign.id, campaign.id)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTab === campaign.id
                      ? 'bg-amber-400 scale-125'
                      : 'bg-amber-700/50'
                  }`}
                  aria-label={`Ir para ${campaign.titulo}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Phandalim;