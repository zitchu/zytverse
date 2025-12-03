import React, { useState, useRef, useEffect } from "react";
import darcell from "../components/img/dualidade/darcell.jpg";
import ernesto from "../components/img/dualidade/ernesto.jpg";
import oni from "../components/img/dualidade/oni.jpg";
import remy from "../components/img/dualidade/remy.jpg";
import perola from "../components/img/dualidade/perola.jpg";
import zeuqs from "../components/img/dualidade/zeuqs.jpg";
import melasquez from "../components/img/dualidade/melasquez.jpg";
import rosiel from "../components/img/dualidade/rosiel.jpg";
import silverhand from "../components/img/dualidade/silverhand.jpg";
import erro from "../components/img/dualidade/erro.jpg";
import cyrius from "../components/img/dualidade/cyrius.jpg";

function Dualidade() {
  const [showSpoilers, setShowSpoilers] = useState(false);
  const modalRef = useRef(null);

  // Personagens principais (para exibição central)
  const mainCharacters = [
    {
      src: darcell,
      nome: "Darcell",
      descricao:
        "O nobre meio-elfo bardo com talento para intrigas políticas e encantamentos sutis.",
    },
    {
      src: ernesto,
      nome: "Ernesto",
      descricao:
        "O humano guerreiro tático, especialista em estratégia militar e defesa urbana.",
    },
    {
      src: oni,
      nome: "Oni",
      descricao:
        "O tiefling ladino misterioso, mestre em infiltração e coleta de informações.",
    },
    {
      src: remy,
      nome: "Remy",
      descricao:
        "O gnomo inventor, gênio criativo com dispositivos mágicos e soluções inusitadas.",
    },
    {
      src: perola,
      nome: "Pérola",
      descricao:
        "A aasimar clériga, canalizadora de poder divino e guia espiritual do grupo.",
    },
    {
      src: zeuqs,
      nome: "Zeuqs",
      descricao:
        "O draconato feiticeiro, com linhagem dracônica e poderes elementais brutais.",
    },
  ];

  // Personagens de destaque (para exibição central)
  const destacados = [
    { src: oni, nome: "Oni" },
    { src: ernesto, nome: "Ernesto" },
    { src: zeuqs, nome: "Zeuqs" },
    { src: perola, nome: "Pérola" },
  ];

  // NPCs de destaque
  const npcs = [
    {
      src: melasquez,
      nome: "Melasquez",
      descricao:
        "Conselheiro real e mestre das finanças, conhecedor de todos os segredos monetários da cidade.",
    },
    {
      src: rosiel,
      nome: "Rosiel",
      descricao:
        "O dragão vermelho disfarçado, Lorde Aberto e posteriormente Rei de Waterdeep.",
    },
    {
      src: silverhand,
      nome: "Laeral Silverhand",
      descricao:
        "Lorde de Waterdeep e Arpespada, principal opositora política de Rosiel.",
    },
    {
      src: erro,
      nome: "Erro",
      descricao:
        "Espião mestre e agente duplo, especialista em inteligência e contra-informação.",
    },
    {
      src: cyrius,
      nome: "Cyrius",
      descricao:
        "Mago da corte e pesquisador arcanista, guardião de conhecimentos proibidos.",
    },
  ];

  // Personagens para as colunas laterais
  const colunaEsquerda = [
    { src: oni, nome: "Oni" },
    { src: ernesto, nome: "Ernesto" },
    { src: remy, nome: "Remy" },
  ];

  const colunaDireita = [
    { src: zeuqs, nome: "Zeuqs" },
    { src: perola, nome: "Pérola" },
    { src: darcell, nome: "Darcell" },
  ];

  // Fecha o modal ao clicar fora
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setShowSpoilers(false);
    }
  };

  // Fecha o modal com a tecla ESC
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setShowSpoilers(false);
      }
    };

    if (showSpoilers) {
      document.addEventListener("keydown", handleEscapeKey);
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Limpa os event listeners
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSpoilers]);

  return (
    <div className="p-4 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 pt-[50px] min-h-screen text-white relative">
      {/* Botão de Spoilers */}
      <div className="fixed top-24 right-4 z-50">
        <button
          onClick={() => setShowSpoilers(true)}
          className="bg-gradient-to-r from-[#2596be] to-[#78b056] hover:from-[#1d7a9c] hover:to-[#659a45] text-white px-6 py-3 rounded-lg font-bold cinzel-regular shadow-lg transition-all duration-300 hover:scale-105"
        >
          🏰 Ver Resumo da Trama
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
            className="bg-gradient-to-b  max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* Cabeçalho do Modal */}
            <div className="sticky top-0 bg-gradient-to-r from-slate-900 to-[#2596be] text-[#78b056] p-6 rounded-t-xl flex justify-between items-center">
              <h2 className="text-2xl font-bold cinzel-black">
                🏰 Dualidade - Resumo da Trama em Waterdeep
              </h2>
              <button
                onClick={() => setShowSpoilers(false)}
                className="text-[#78b056] hover:text-white text-2xl transition-colors"
                aria-label="Fechar modal"
              >
                ✕
              </button>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-8 cinzel-regular space-y-8">
              <div className="mb-6">
                <p className="text-lg italic border-l-4 border-[#2596be] pl-4 py-2 bg-[#2596be]/10">
                  Resumo revisado da trama em Waterdeep com o final correto.
                </p>
              </div>

              <section>
                <h3 className="text-xl font-bold cinzel-black mb-4 text-slate-900 bg-[#78b056]/20 inline-block px-4 py-2 rounded-lg">
                  1. A Ascensão de Rosiel em Waterdeep
                </h3>
                <p className="text-justify leading-relaxed mb-4">
                  Rosiel, um dragão vermelho disfarçado, começou como um dos
                  Lordes de Waterdeep. Gradualmente, manipulou a política da
                  cidade, criando uma rivalidade polarizada com Laeral
                  Silverhand e ampliando sua influência.
                </p>
                <p className="text-justify leading-relaxed">
                  Com manobras políticas, charme sinistro e intimidação velada,
                  Rosiel:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                  <li className="text-justify leading-relaxed">
                    Isolou suas oposições
                  </li>
                  <li className="text-justify leading-relaxed">
                    Conquistou o apoio de facções influenciáveis
                  </li>
                  <li className="text-justify leading-relaxed">
                    Reescreveu parte das estruturas de poder
                  </li>
                </ul>
                <p className="text-justify leading-relaxed mt-4">
                  ➡{" "}
                  <span className="font-semibold text-[#2596be]">
                    Tornou-se o novo Lorde Aberto de Waterdeep.
                  </span>
                </p>
                <p className="text-justify leading-relaxed mt-2">
                  Pouco depois, alavancando sua popularidade e manipulação:
                </p>
                <p className="text-justify leading-relaxed mt-2">
                  ➡{" "}
                  <span className="font-semibold text-[#2596be]">
                    Rosiel se proclamou Rei de Waterdeep,
                  </span>{" "}
                  rompendo tradições milenares.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold cinzel-black mb-4 text-slate-900 bg-[#78b056]/20 inline-block px-4 py-2 rounded-lg">
                  2. A Zombaria Grandiosa — A "Promoção" dos Jogadores
                </h3>
                <p className="text-justify leading-relaxed mb-4">
                  Em sua coroação e durante seu reinado curto porém turbulento,
                  Rosiel:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 mb-4">
                  <li className="text-justify leading-relaxed">
                    Ofereceu aos personagens cargos de conselheiros reais
                  </li>
                  <li className="text-justify leading-relaxed">
                    Colocou alguns como chefes da guarda
                  </li>
                  <li className="text-justify leading-relaxed">
                    Os enalteceu em público como "parte de seu círculo"
                  </li>
                </ul>
                <p className="text-justify leading-relaxed">
                  Essas honrarias eram, ao mesmo tempo:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-[#2596be]/10 p-4 rounded-lg border-l-4 border-[#2596be]">
                    <p className="font-semibold text-[#2596be]">
                      Elogios e insultos
                    </p>
                    <p className="text-sm mt-1">Presentes e humilhações</p>
                  </div>
                  <div className="bg-red-500/10 p-4 rounded-lg border-l-4 border-red-500">
                    <p className="font-semibold text-red-600">
                      Estratégias de controle
                    </p>
                    <p className="text-sm mt-1">e desprezo velado</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-bold cinzel-black mb-4 text-slate-900 bg-[#78b056]/20 inline-block px-4 py-2 rounded-lg">
                  3. As 10 Máscaras e a Quase-Ascensão de Tiamat
                </h3>
                <p className="text-justify leading-relaxed mb-4">
                  No final da campanha, Rosiel conseguiu um feito devastador:
                </p>
                <p className="text-justify leading-relaxed mb-4 text-center text-xl font-bold text-[#2596be]">
                  ➡ Ele obteve as 10 máscaras dracônicas.
                </p>
                <p className="text-justify leading-relaxed">
                  Com elas, realizou um ritual que o transformou em algo além de
                  um simples dragão:
                </p>
                <p className="text-justify leading-relaxed mt-4 text-center text-xl font-bold text-red-600">
                  ➡ Rosiel tornou-se brevemente o Receptáculo de Tiamat.
                </p>
                <p className="text-justify leading-relaxed mt-4">
                  Durante esse estado:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4 mt-2">
                  <li className="text-justify leading-relaxed">
                    Sua forma era colossal
                  </li>
                  <li className="text-justify leading-relaxed">
                    Waterdeep estava à beira da destruição
                  </li>
                  <li className="text-justify leading-relaxed">
                    Seu poder era comparável ao de uma divindade
                  </li>
                  <li className="text-justify leading-relaxed">
                    A cidade viveu seu momento mais sombrio
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold cinzel-black mb-4 text-slate-900 bg-[#78b056]/20 inline-block px-4 py-2 rounded-lg">
                  4. A Sessão Final — A Queda de Rosiel
                </h3>
                <p className="text-justify leading-relaxed mb-4">
                  Os jogadores enfrentaram Rosiel em seu auge absoluto. Mesmo
                  canalizando Tiamat e reforçado pelas 10 máscaras, ele foi
                  derrotado pelo grupo em um combate final épico.
                </p>
                <div className="bg-gradient-to-r from-[#2596be]/10 to-red-500/10 p-6 rounded-lg border border-[#2596be]/30 mt-6">
                  <p className="text-center text-xl font-bold cinzel-black text-[#2596be]">
                    ➡ Rosiel caiu,
                  </p>
                  <p className="text-center text-lg font-semibold cinzel-regular text-[#2596be] mt-2">
                    Waterdeep foi salva,
                  </p>
                  <p className="text-center text-lg font-semibold cinzel-regular text-[#2596be]">
                    e as máscaras foram neutralizadas.
                  </p>
                </div>
                <p className="text-justify leading-relaxed mt-6">
                  O reinado dracônico durou pouco, mas deixou cicatrizes
                  políticas e sociais na cidade. As estruturas de poder foram
                  abaladas, alianças foram quebradas e reconstruídas, e
                  Waterdeep jamais seria a mesma após a breve mas catastrófica
                  passagem de Rosiel.
                </p>
              </section>

              {/* Botão para fechar no rodapé */}
              <div className="sticky bottom-0  pt-6 border-t border-[#2596be]/30">
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowSpoilers(false)}
                    className="bg-gradient-to-r from-slate-900 to-[#2596be] text-[#78b056] hover:from-[#2596be] hover:to-slate-900 px-8 py-3 rounded-lg font-bold cinzel-regular transition-all duration-300"
                  >
                    Fechar Resumo
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Container principal com layout de 3 colunas */}
      <div className="max-w-7xl mx-auto my-auto flex flex-col lg:flex-row gap-8">
        {/* Coluna da esquerda - Imagem */}
        <div className="hidden py-2 lg:flex w-1/6 lg:w-1/4 flex-row lg:flex-col h-[calc(100vh-100px)] md:h-[calc(100vh-50px)]">
          {colunaEsquerda.map((character, index) => (
            <div
              key={index}
              className="h-1/3 flex items-center justify-center p-2"
            >
              <div className="w-full aspect-square rounded-full overflow-hidden border-2 border-[#2596be]/50 shadow-lg">
                <img
                  src={character.src}
                  className="w-full h-full object-cover"
                  alt={character.nome}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Versão mobile para os personagens */}
        <div className="lg:hidden w-full mt-4">
          <div className="flex flex-row justify-center items-center space-x-2 overflow-x-auto py-2">
            {mainCharacters.map((character, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-[#2596be]/50 shadow">
                  <img
                    src={character.src}
                    className="w-full h-full object-cover"
                    alt={character.nome}
                  />
                </div>
                <p className="text-xs mt-2 text-[#78b056] font-semibold">
                  {character.nome}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Coluna central - Conteúdo principal */}
        <div className="lg:w-1/2">
          <div className="cinzel-regular bg-gradient-to-b from-slate-800/40 to-slate-900/40 p-8 rounded-xl backdrop-blur-sm border border-[#2596be]/30">
            <h1 className="text-3xl lg:text-4xl font-bold cinzel-black text-center mb-8 text-[#78b056]">
              🏰 Dualidade
            </h1>

            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold cinzel-black mb-4 text-[#78b056] border-b border-[#2596be] pb-2">
                  A Trama em Waterdeep
                </h2>
                <p className="text-justify leading-relaxed text-lg">
                  Em Waterdeep, a Cidade dos Esplendores, uma nova era de
                  intrigas políticas e perigos sobrenaturais se desenrola. O
                  equilíbrio de poder está prestes a mudar, e seis aventureiros
                  são arrastados para o centro de uma conspiração que ameaça não
                  apenas a cidade, mas todo o equilíbrio do continente.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold cinzel-black mb-4 text-[#78b056] border-b border-[#2596be] pb-2">
                  O Conflito Político
                </h2>
                <p className="text-justify leading-relaxed text-lg">
                  As ruas de Waterdeep ecoam com sussurros sobre o Lorde Aberto
                  Rosiel, cuja ascensão ao poder foi tão rápida quanto
                  misteriosa. Enquanto Laeral Silverhand e seus aliados tentam
                  manter a tradição e a estabilidade, forças ocultas trabalham
                  nos bastidores, manipulando nobres, mercadores e até mesmo as
                  guildas mais poderosas.
                </p>
              </div>

              {/* Personagens de Destaque (4 principais) */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold cinzel-black text-center mb-6 text-[#78b056]">
                  👑 Personagens de Destaque
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {destacados.map((character, index) => (
                    <div
                      key={index}
                      className="group relative bg-slate-800/30 rounded-lg p-4 border border-[#2596be]/30 hover:border-[#78b056] transition-all duration-300"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#2596be]/50 mb-3">
                          <img
                            src={character.src}
                            alt={character.nome}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="cinzel-black text-center text-lg text-[#78b056] font-bold">
                          {character.nome}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gradient-to-br from-slate-800/50 to-[#2596be]/30 p-6 rounded-lg border border-[#2596be]/20">
                  <h3 className="text-xl font-bold cinzel-black mb-3 text-[#78b056]">
                    🏛️ Waterdeep
                  </h3>
                  <p className="text-justify leading-relaxed">
                    A maior e mais poderosa cidade da Costa da Espada, governada
                    pelos Lordes de Waterdeep. Conhecida por sua riqueza, magia
                    e complexa teia política.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-red-900/30 p-6 rounded-lg border border-red-600/20">
                  <h3 className="text-xl font-bold cinzel-black mb-3 text-red-200">
                    🐉 A Ameaça
                  </h3>
                  <p className="text-justify leading-relaxed">
                    Mais do que uma simples disputa política, Waterdeep enfrenta
                    uma ameaça ancestral que se infiltrou nos mais altos
                    escalões do poder, ameaçando transformar a cidade em seu
                    domínio pessoal.
                  </p>
                </div>
              </div>

              {/* NPCs de destaque */}
              <div className="mt-8">
                <h2 className="text-2xl font-bold cinzel-black text-center mb-6 text-[#78b056]">
                  🎭 NPCs de Destaque
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {npcs.map((npc, index) => (
                    <div
                      key={index}
                      className="group relative bg-slate-800/30 rounded-lg p-4 border border-[#2596be]/30 hover:border-[#78b056] transition-all duration-300"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#2596be]/50 mb-2">
                          <img
                            src={npc.src}
                            alt={npc.nome}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="cinzel-black text-center text-sm text-[#78b056]">
                          {npc.nome}
                        </div>
                      </div>
                      {npc.descricao && (
                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 bg-slate-900 text-white text-xs cinzel-regular p-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg pointer-events-none border border-[#2596be]">
                          <div className="relative">
                            <div className="text-center leading-tight">
                              {npc.descricao}
                            </div>
                            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-900"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-slate-800/50 to-[#2596be]/30 p-6 rounded-lg border border-[#2596be]/20 mt-8">
                <h3 className="text-xl font-bold cinzel-black mb-3 text-[#78b056]">
                  📜 Sobre a Campanha
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-[#78b056] mr-2">•</span>
                    <span>
                      <span className="font-semibold text-[#78b056]">
                        Título:
                      </span>{" "}
                      Dualidade
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#78b056] mr-2">•</span>
                    <span>
                      <span className="font-semibold text-[#78b056]">
                        Localização:
                      </span>{" "}
                      Waterdeep, Costa da Espada
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#78b056] mr-2">•</span>
                    <span>
                      <span className="font-semibold text-[#78b056]">
                        Tema:
                      </span>{" "}
                      Intriga política, conspiração, identidade secreta
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#78b056] mr-2">•</span>
                    <span>
                      <span className="font-semibold text-[#78b056]">
                        Conflito Central:
                      </span>{" "}
                      Ascensão de um dragão disfarçado ao poder
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Coluna da direita - Imagem */}
        <div className="w-1/6 py-2  lg:w-1/4 hidden lg:flex flex-row lg:flex-col h-[calc(100vh-100px)] md:h-[calc(100vh-50px)]">
          {colunaDireita.map((character, index) => (
            <div
              key={index}
              className="h-1/3 flex items-center justify-center p-2"
            >
              <div className="w-full aspect-square rounded-full overflow-hidden border-2 border-[#2596be]/50 shadow-lg">
                <img
                  src={character.src}
                  className="w-full h-full object-cover"
                  alt={character.nome}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dualidade;
