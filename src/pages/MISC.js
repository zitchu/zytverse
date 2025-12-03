import React, { useState, useRef, useEffect } from "react";

function MISC() {
  const [activeTab, setActiveTab] = useState(1);
  const [showSpoilers, setShowSpoilers] = useState(false);
  const [currentCampaign, setCurrentCampaign] = useState(1);
  const modalRef = useRef(null);

  // Dados das campanhas com placeholders
  const campaigns = [
    {
      id: 1,
      titulo: "Campanha MISC 1",
      subtitulo: "subtítulo placeholder",
      ano: "XXXX D.R",
      duracao: "duração placeholder",
      cidade: "Cidade Placeholder",
      detalhes: "Detalhes placeholder para a campanha MISC 1. Esta é uma descrição de exemplo que será substituída pelo conteúdo real.",
      resumo: "Resumo placeholder para a campanha MISC 1. Este é um resumo de exemplo que será substituído pelo conteúdo real da história.",
      spoilers: `**Resumo detalhado da campanha "Campanha MISC 1":**

**I. Introdução Placeholder**
Este é um parágrafo de exemplo para a introdução da campanha. O conteúdo real será inserido aqui posteriormente.

**II. Desenvolvimento Placeholder**
Este é um parágrafo de exemplo para o desenvolvimento da campanha. O conteúdo real será inserido aqui posteriormente.

**III. Conclusão Placeholder**
Este é um parágrafo de exemplo para a conclusão da campanha. O conteúdo real será inserido aqui posteriormente.`,
      imagens: [
        "https://via.placeholder.com/400x400/8B5CF6/FFFFFF?text=Personagem+1",
        "https://via.placeholder.com/400x400/F59E0B/FFFFFF?text=Personagem+2",
        "https://via.placeholder.com/400x400/EC4899/FFFFFF?text=Personagem+3",
        "https://via.placeholder.com/400x400/10B981/FFFFFF?text=Personagem+4"
      ]
    },
    {
      id: 2,
      titulo: "Campanha MISC 2",
      subtitulo: "subtítulo placeholder",
      ano: "XXXX D.R",
      duracao: "duração placeholder",
      cidade: "Cidade Placeholder",
      detalhes: "Detalhes placeholder para a campanha MISC 2. Esta é uma descrição de exemplo que será substituída pelo conteúdo real.",
      resumo: "Resumo placeholder para a campanha MISC 2. Este é um resumo de exemplo que será substituído pelo conteúdo real da história.",
      spoilers: `**Resumo detalhado da campanha "Campanha MISC 2":**

**I. Introdução Placeholder**
Este é um parágrafo de exemplo para a introdução da campanha. O conteúdo real será inserido aqui posteriormente.

**II. Desenvolvimento Placeholder**
Este é um parágrafo de exemplo para o desenvolvimento da campanha. O conteúdo real será inserido aqui posteriormente.

**III. Conclusão Placeholder**
Este é um parágrafo de exemplo para a conclusão da campanha. O conteúdo real será inserido aqui posteriormente.`,
      imagens: [
        "https://via.placeholder.com/400x400/A855F7/FFFFFF?text=Personagem+5",
        "https://via.placeholder.com/400x400/EAB308/FFFFFF?text=Personagem+6",
        "https://via.placeholder.com/400x400/D946EF/FFFFFF?text=Personagem+7",
        "https://via.placeholder.com/400x400/84CC16/FFFFFF?text=Personagem+8"
      ]
    },
    {
      id: 3,
      titulo: "Campanha MISC 3",
      subtitulo: "subtítulo placeholder",
      ano: "XXXX D.R",
      duracao: "duração placeholder",
      cidade: "Cidade Placeholder",
      detalhes: "Detalhes placeholder para a campanha MISC 3. Esta é uma descrição de exemplo que será substituída pelo conteúdo real.",
      resumo: "Resumo placeholder para a campanha MISC 3. Este é um resumo de exemplo que será substituído pelo conteúdo real da história.",
      spoilers: `**Resumo detalhado da campanha "Campanha MISC 3":**

**I. Introdução Placeholder**
Este é um parágrafo de exemplo para a introdução da campanha. O conteúdo real será inserido aqui posteriormente.

**II. Desenvolvimento Placeholder**
Este é um parágrafo de exemplo para o desenvolvimento da campanha. O conteúdo real será inserido aqui posteriormente.

**III. Conclusão Placeholder**
Este é um parágrafo de exemplo para a conclusão da campanha. O conteúdo real será inserido aqui posteriormente.`,
      imagens: [
        "https://via.placeholder.com/400x400/9333EA/FFFFFF?text=Personagem+9",
        "https://via.placeholder.com/400x400/CA8A04/FFFFFF?text=Personagem+10",
        "https://via.placeholder.com/400x400/C026D3/FFFFFF?text=Personagem+11",
        "https://via.placeholder.com/400x400/65A30D/FFFFFF?text=Personagem+12"
      ]
    }
  ];

  const currentCampaignData = campaigns.find(camp => camp.id === currentCampaign) || campaigns[0];

  // Nomes dos personagens para cada campanha
  const characterNames = {
    1: ["Personagem 1", "Personagem 2", "Personagem 3", "Personagem 4"],
    2: ["Personagem 5", "Personagem 6", "Personagem 7", "Personagem 8"],
    3: ["Personagem 9", "Personagem 10", "Personagem 11", "Personagem 12"]
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
    <div className="p-4 bg-gradient-to-b from-purple-950 via-purple-900 to-purple-950 pt-[50px] min-h-screen text-white relative">
      {/* Título Principal */}
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl lg:text-4xl font-bold cinzel-black text-center py-4 text-yellow-300">
          Em breve sobre as aventuras fora do universo compartilhado
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
                  ? 'bg-gradient-to-br from-purple-600 to-yellow-500 text-white shadow-lg transform scale-[1.02] border-2 border-yellow-400'
                  : 'bg-purple-800/60 text-yellow-100 hover:bg-purple-700/60 hover:shadow-md border border-yellow-600/30'
              }`}
            >
              <span className="text-xl text-center mb-2">{campaign.titulo}</span>
              <span className="text-sm opacity-90 text-center">{campaign.subtitulo}</span>
              <div className="mt-2 text-xs bg-purple-900/50 px-3 py-1 rounded-full">
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
          className="bg-gradient-to-r from-purple-600 to-yellow-500 hover:from-purple-700 hover:to-yellow-600 text-white px-6 py-3 rounded-lg font-bold cinzel-regular shadow-lg transition-all duration-300 hover:scale-105"
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
            className="bg-gradient-to-b from-yellow-50/90 to-purple-50/90 text-purple-900 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* Cabeçalho do Modal */}
            <div className="sticky top-0 bg-gradient-to-r from-purple-900 to-yellow-700 text-yellow-100 p-6 rounded-t-xl flex justify-between items-center">
              <h2 className="text-2xl font-bold cinzel-black">
                📜 {currentCampaignData.titulo} - Resumo Detalhado
              </h2>
              <button
                onClick={() => setShowSpoilers(false)}
                className="text-yellow-200 hover:text-white text-2xl transition-colors"
                aria-label="Fechar modal"
              >
                ✕
              </button>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-8 cinzel-regular space-y-6">
              <div className="mb-6">
                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="bg-yellow-100/80 px-4 py-2 rounded-lg border border-yellow-300/50">
                    <span className="font-semibold text-purple-800">Ano:</span> <span className="text-purple-900">{currentCampaignData.ano}</span>
                  </div>
                  <div className="bg-yellow-100/80 px-4 py-2 rounded-lg border border-yellow-300/50">
                    <span className="font-semibold text-purple-800">Duração:</span> <span className="text-purple-900">{currentCampaignData.duracao}</span>
                  </div>
                  <div className="bg-yellow-100/80 px-4 py-2 rounded-lg border border-yellow-300/50">
                    <span className="font-semibold text-purple-800">Local:</span> <span className="text-purple-900">{currentCampaignData.cidade}</span>
                  </div>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {currentCampaignData.spoilers.split('\n\n').map((paragraph, index) => (
                  <div key={index} className="mb-4">
                    {paragraph.split('\n').map((line, lineIndex) => {
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return (
                          <h3 key={lineIndex} className="text-xl font-bold cinzel-black mb-3 text-purple-900 bg-yellow-100/80 inline-block px-4 py-2 rounded-lg border-l-4 border-yellow-500">
                            {line.replace(/\*\*/g, '')}
                          </h3>
                        );
                      }
                      return (
                        <p key={lineIndex} className="text-justify leading-relaxed mb-3 text-purple-800">
                          {line}
                        </p>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Botão para fechar no rodapé */}
              <div className="sticky bottom-0 bg-gradient-to-b from-yellow-50/90 to-purple-50/90 pt-6 border-t border-yellow-300">
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowSpoilers(false)}
                    className="bg-gradient-to-r from-purple-900 to-yellow-700 text-yellow-100 hover:from-yellow-700 hover:to-purple-900 px-8 py-3 rounded-lg font-bold cinzel-regular transition-all duration-300"
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
                <div className="w-full aspect-square rounded-xl shadow-lg border-2 border-yellow-500/30 bg-gradient-to-br from-purple-900/20 to-yellow-900/10 p-1">
                  <img
                    src={img}
                    alt={`${characterNames[currentCampaign][index]} - ${currentCampaignData.titulo}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna central - Conteúdo da Campanha */}
        <div className="w-full lg:w-1/2">
          <div className="cinzel-regular bg-gradient-to-b from-purple-900/40 to-purple-950/40 p-8 rounded-xl backdrop-blur-sm border border-yellow-500/30">
            <div className="text-center mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold cinzel-black mb-2 text-yellow-300">
                {currentCampaignData.titulo}
              </h1>
              <h2 className="text-xl font-semibold cinzel-regular mb-4 text-yellow-200">
                {currentCampaignData.subtitulo}
              </h2>
              <div className="flex flex-wrap justify-center gap-4 mt-4">
                <div className="bg-gradient-to-br from-purple-800/50 to-yellow-900/30 px-4 py-2 rounded-lg border border-yellow-500/30">
                  <span className="font-semibold text-yellow-200">Ano:</span> <span className="text-yellow-100">{currentCampaignData.ano}</span>
                </div>
                <div className="bg-gradient-to-br from-purple-800/50 to-yellow-900/30 px-4 py-2 rounded-lg border border-yellow-500/30">
                  <span className="font-semibold text-yellow-200">Duração:</span> <span className="text-yellow-100">{currentCampaignData.duracao}</span>
                </div>
                <div className="bg-gradient-to-br from-purple-800/50 to-yellow-900/30 px-4 py-2 rounded-lg border border-yellow-500/30">
                  <span className="font-semibold text-yellow-200">Cidade:</span> <span className="text-yellow-100">{currentCampaignData.cidade}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold cinzel-black mb-4 text-yellow-200 border-b border-yellow-500 pb-2">
                  Contexto da Aventura
                </h3>
                <p className="text-justify leading-relaxed text-lg text-yellow-100">
                  {currentCampaignData.detalhes}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold cinzel-black mb-4 text-yellow-200 border-b border-yellow-500 pb-2">
                  Resumo da História
                </h3>
                <p className="text-justify leading-relaxed text-lg text-yellow-100">
                  {currentCampaignData.resumo}
                </p>
              </div>

              {/* Personagens da campanha */}
              <div className="bg-gradient-to-br from-purple-900/30 to-yellow-900/10 p-6 rounded-lg border border-yellow-500/20 mt-8">
                <h3 className="text-xl font-bold cinzel-black mb-3 text-yellow-200">
                  👥 Personagens Destacados
                </h3>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {characterNames[currentCampaign].map((name, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-gradient-to-r from-purple-800/30 to-yellow-800/10 p-3 rounded-lg border border-yellow-500/20">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-yellow-500/40">
                        <img
                          src={currentCampaignData.imagens[index]}
                          alt={name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-yellow-200 font-medium">{name}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/30 to-yellow-900/10 p-6 rounded-lg border border-yellow-500/20">
                <h3 className="text-xl font-bold cinzel-black mb-3 text-yellow-200">
                  📋 Detalhes da Campanha
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span><span className="font-semibold text-yellow-300">Título:</span> <span className="text-yellow-100">{currentCampaignData.titulo}</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span><span className="font-semibold text-yellow-300">Subtítulo:</span> <span className="text-yellow-100">{currentCampaignData.subtitulo}</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span><span className="font-semibold text-yellow-300">Período:</span> <span className="text-yellow-100">{currentCampaignData.ano} ({currentCampaignData.duracao})</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span><span className="font-semibold text-yellow-300">Local Principal:</span> <span className="text-yellow-100">{currentCampaignData.cidade}</span></span>
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
                <div className="w-full aspect-square rounded-xl shadow-lg border-2 border-yellow-500/30 bg-gradient-to-br from-purple-900/20 to-yellow-900/10 p-1">
                  <img
                    src={img}
                    alt={`${characterNames[currentCampaign][index + 2]} - ${currentCampaignData.titulo}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Versão mobile para as imagens */}
        <div className="lg:hidden w-full mt-8">
          <div className="grid grid-cols-2 gap-4">
            {currentCampaignData.imagens.map((img, index) => (
              <div key={index} className="rounded-xl shadow-lg border-2 border-yellow-500/30 overflow-hidden bg-gradient-to-br from-purple-900/20 to-yellow-900/10">
                <div className="aspect-square flex items-center justify-center p-2">
                  <img
                    src={img}
                    alt={`${characterNames[currentCampaign][index]} - ${currentCampaignData.titulo}`}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="bg-gradient-to-r from-purple-900/40 to-yellow-900/20 p-3 text-center">
                  <p className="text-yellow-200 font-medium">{characterNames[currentCampaign][index]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Indicador de aba ativa (mobile) */}
      <div className="lg:hidden mt-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-purple-900/40 to-yellow-900/20 p-4 rounded-lg border border-yellow-500/30 text-center">
            <p className="text-yellow-200">
              Visualizando: <span className="font-bold text-yellow-300">{currentCampaignData.titulo}</span>
            </p>
            <div className="flex justify-center space-x-2 mt-2">
              {campaigns.map((campaign) => (
                <button
                  key={campaign.id}
                  onClick={() => handleTabClick(campaign.id, campaign.id)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeTab === campaign.id
                      ? 'bg-yellow-400 scale-125'
                      : 'bg-yellow-700/50'
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

export default MISC;