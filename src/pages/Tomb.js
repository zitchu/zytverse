import React, { useState, useRef, useEffect } from "react";
import trevinho from "../components/img/tomb/trevinho.png";
import tebas from "../components/img/tomb/tebas.png";
import orion from "../components/img/tomb/orion.png";
import jorge from "../components/img/tomb/jorge.png";
import gwynda from "../components/img/tomb/gwynda.png";
import craban from "../components/img/tomb/craban.png";
import aquarius from "../components/img/tomb/aquarius.png";
import ianben from "../components/img/tomb/ianben.png";

function Tomb() {
  const [showSpoilers, setShowSpoilers] = useState(false);
  const modalRef = useRef(null);

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
    <div className="p-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 pt-[50px] min-h-screen text-white relative">
      {/* Botão de Spoilers */}
      <div className="fixed top-24 right-4 z-50">
        <button
          onClick={() => setShowSpoilers(true)}
          className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 rounded-lg font-bold cinzel-regular shadow-lg transition-all duration-300 hover:scale-105"
        >
          Ver Resumo Cronológico
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
            className="bg-gradient-to-b from-rose-50 to-amber-50 text-gray-900 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* Cabeçalho do Modal */}
            <div className="sticky top-0 bg-gradient-to-r from-gray-900 to-rose-900 text-rose-100 p-6 rounded-t-xl flex justify-between items-center">
              <h2 className="text-2xl font-bold cinzel-black">
                Tomb of Annihilation - Resumo Cronológico
              </h2>
              <button
                onClick={() => setShowSpoilers(false)}
                className="text-rose-200 hover:text-white text-2xl transition-colors"
                aria-label="Fechar modal"
              >
                ✕
              </button>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-8 cinzel-regular space-y-8">
              <div className="mb-6">
                <p className="text-lg italic border-l-4 border-rose-600 pl-4 py-2 bg-rose-50">
                  Resumo detalhado da campanha "Tomb of Annihilation", baseado
                  no material fornecido.
                </p>
              </div>

              <section>
                <h3 className="text-xl font-bold cinzel-black mb-4 text-gray-900 bg-rose-100 inline-block px-4 py-2 rounded-lg">
                  I. O Início da Maldição e a Viagem a Chult (Episódios 1–5)
                </h3>
                <p className="text-justify leading-relaxed mb-4">
                  A aventura começou em Baldur's Gate, onde a Maldição da Morte
                  (Maldiçoon da Morte) estava afetando as pessoas. Esta maldição
                  impedia que os mortos fossem ressuscitados e fazia com que
                  aqueles que já haviam sido revividos começassem a definhar e a
                  morrer lentamente.
                </p>
                <p className="text-justify leading-relaxed">
                  Os aventureiros foram contratados e patrocinados por Syndra
                  Silvane, uma aventureira aposentada que era vítima da
                  maldição. A missão era viajar até o continente de Chult para
                  encontrar a fonte da maldição, um artefato chamado Soulmonger.
                </p>
                <p className="text-justify leading-relaxed mt-4">
                  Após uma viagem de 20 dias, o navio naufragou, e os
                  sobreviventes (incluindo Trevinho, Orion, Jorge, Terai, e mais
                  tarde, Tebas e Yanbén) chegaram a Port Nyanzaru.
                </p>
                <p className="text-justify leading-relaxed mt-4">
                  Na cidade, eles buscaram o contato de Syndra, o príncipe
                  mercante Wakanga O'tamu, e testemunharam a morte de uma vítima
                  da maldição. O grupo também participou da Corrida do Carrasco
                  (Executioner's Run), um evento local onde enfrentaram
                  armadilhas e dinossauros, resultando na perda de dois
                  companheiros. A vitória na corrida rendeu-lhes os guias Faro e
                  Gandolo, que se ofereceram para servir o grupo gratuitamente.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold cinzel-black mb-4 text-gray-900 bg-rose-100 inline-block px-4 py-2 rounded-lg">
                  II. Exploração da Selva e a Fortaleza (Episódios 6–11)
                </h3>
                <p className="text-justify leading-relaxed mb-4">
                  A expedição se aprofundou na selva, focada na navegação e
                  sobrevivência, muitas vezes contando com a magia de Tebas para
                  prover água. O grupo descobriu um desvio de rota, percebendo
                  que estavam mais ao leste do que o planejado.
                </p>
                <p className="text-justify leading-relaxed">
                  Eles encontraram botas queimadas contendo um mapa e instruções
                  para acessar um repositório em um posto avançado/fortaleza. A
                  sequência de acesso envolvia encontrar um retrato e um livro,
                  e soltar 150 pés de corda, enquanto pronunciava a frase "perna
                  propriedade de tigre" (leg property of tigerant).
                </p>
                <p className="text-justify leading-relaxed mt-4">
                  Na fortaleza, eles encontraram e derrotaram uma múmia,
                  adquiriram itens mágicos (incluindo a espada Sword of Onix), e
                  Terai (Silver Dusk) foi amaldiçoado no processo.
                </p>
                <p className="text-justify leading-relaxed mt-4">
                  O grupo também encontrou o livro Conto dos Dois Dragões (A
                  Tale of Two Dragons), de Arthur Simber, o pai da guia
                  Shantala. Dragonbait, o pseudo-dragão que acompanhava
                  Shantala, revelou que Shantala os havia enganado, estando
                  magicamente ligada a uma missão para encontrar o "Anel do
                  Inverno" (Ring of Winter). Eles libertaram Shantala, mas o
                  pseudo-dragão continuou seguindo-os.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold cinzel-black mb-4 text-gray-900 bg-rose-100 inline-block px-4 py-2 rounded-lg">
                  III. A Busca pelos Cubos em Omu (Episódios 12–23)
                </h3>
                <p className="text-justify leading-relaxed mb-4">
                  O grupo chegou às ruínas da cidade-reino de Mezro,
                  identificada como a cidade de Omu. Omu era uma antiga cidade
                  em decadência, que havia caído após a saída do deus Ubtao e a
                  Praga da Magia.
                </p>
                <p className="text-justify leading-relaxed">
                  Eles descobriram que para acessar a Tumba da Aniquilação,
                  precisavam coletar nove peças de quebra-cabeça (cubos)
                  espalhadas em santuários dedicados aos Nove Deuses Traiçoeiros
                  (Nine Trickster Gods) que substituíram Ubtao.
                </p>
                <p className="text-justify leading-relaxed mt-4">
                  Durante a exploração da cidade, eles entraram no Templo de
                  Ubtao, onde conseguiram benefícios mágicos. Eles também
                  exploraram o Colégio de Magos, onde descobriram um mapa para a
                  toca de Vogario.
                </p>
                <p className="text-justify leading-relaxed mt-4">
                  Em uma das explorações, Orion desapareceu temporariamente após
                  interagir com um espelho mágico, retornando com um novo Charm.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold cinzel-black mb-4 text-gray-900 bg-rose-100 inline-block px-4 py-2 rounded-lg">
                  IV. Conquista dos Templos e a Traição (Episódios 24–36)
                </h3>
                <p className="text-justify leading-relaxed mb-4">
                  O grupo começou a jornada para coletar os cubos, enfrentando
                  os desafios de cada santuário:
                </p>
                <ol className="list-decimal list-inside space-y-3 pl-4">
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">Templo de Wongo:</span>{" "}
                    Ganharam um Charm ao derrotar o guardião.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">Templo de Kubazan:</span>{" "}
                    Derrotaram o Froghemoth (Lagartão-Sapo) guardião, adquirindo
                    o segundo cubo.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">Templo de Shagambi:</span>{" "}
                    Resolveram o desafio de honra em combate, obtendo o terceiro
                    cubo.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">Templo de I'jin:</span>{" "}
                    Solucionaram o enigma através de uma sequência correta de
                    movimentos, guiados pelo conselho do crânio falante Yaka.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">Templo de Moa:</span>{" "}
                    Solucionaram o enigma através de um mosaico e uma frase que
                    se referia ao sacrifício e traição da serpente.
                  </li>
                </ol>
                <p className="text-justify leading-relaxed mt-4">
                  O grupo soube que o líder Yuan-ti por trás do Soulmonger era
                  Ras Nsi. Eles foram ao seu palácio e apresentaram provas (uma
                  tábua recuperada) de que Ras Nsi havia traído a rainha
                  Nannapaca de Omu para acelerar o ritual.
                </p>
                <p className="text-justify leading-relaxed mt-4">
                  Ras Nsi, reconhecendo que o ritual estava progredindo para um
                  ponto perigoso para ele próprio, concordou em não mais se opor
                  ao grupo.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold cinzel-black mb-4 text-gray-900 bg-rose-100 inline-block px-4 py-2 rounded-lg">
                  V. A Tumba da Aniquilação (Episódios 37–46)
                </h3>
                <p className="text-justify leading-relaxed mb-4">
                  Com os nove cubos coletados, o grupo finalmente entrou na
                  Tumba da Aniquilação.
                </p>
                <ul className="list-disc list-inside space-y-3 pl-4">
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">Yaka, a Armadilha:</span>{" "}
                    Dentro da Tumba, eles encontraram um crânio falante dourado,
                    Yaka, que se revelou a armadilha mais elaborada de Acererak,
                    distraindo e drenando a sorte do grupo.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">Armadilhas e Níveis:</span>{" "}
                    Eles progrediram pelos níveis, enfrentando enigmas
                    complexos, como os caixões de sapo (que continham Deuses), e
                    armadilhas que envolviam ilusões e Golems.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">
                      O Corredor das Engrenagens:
                    </span>{" "}
                    Nos níveis superiores, eles encontraram salas com mecanismos
                    móveis e engrenagens.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">
                      O Confronto Final (Atropal):
                    </span>{" "}
                    Eles chegaram ao quinto andar, onde estava o Soulmonger,
                    sustentando uma divindade da morte nascente: o Atropal, uma
                    criatura colossal.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">A Batalha Incomum:</span> A
                    luta não foi um combate direto, exigindo que o grupo
                    atacasse pontos críticos do Atropal e os mecanismos que o
                    sustentavam, em vez de simplesmente causar dano. Eles também
                    enfrentaram a yuan-ti Fenthaza, rival de Ras Nsi, que tentou
                    ajudar a criatura.
                  </li>
                  <li className="text-justify leading-relaxed">
                    <span className="font-semibold">Vitória:</span> O grupo
                    conseguiu destruir o Atropal, o que resultou na destruição
                    do Soulmonger e, consequentemente, quebrou a Maldição da
                    Morte.
                  </li>
                </ul>
                <p className="text-justify leading-relaxed mt-4">
                  A campanha terminou com a vitória dos aventureiros, que
                  resgataram as almas presas e salvaram as vítimas da maldição.
                  Acererak, o vilão mestre por trás da tumba, escapou,
                  retirando-se para sua filactéria.
                </p>
              </section>

              {/* Botão para fechar no rodapé */}
              <div className="sticky bottom-0 bg-gradient-to-b from-rose-50 to-amber-50 pt-6 border-t border-rose-300">
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowSpoilers(false)}
                    className="bg-gradient-to-r from-gray-900 to-rose-900 text-rose-100 hover:from-rose-900 hover:to-gray-900 px-8 py-3 rounded-lg font-bold cinzel-regular transition-all duration-300"
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
      <div className="max-w-7xl mx-auto my-auto flex flex-col lg:flex-row gap-8">
        {/* Coluna da esquerda - Imagem */}
        <div className="hidden lg:flex w-1/6 lg:w-1/4 flex-row lg:flex-col h-[calc(100vh-100px)] md:h-[calc(100vh-50px)] ">
          <img src={trevinho} className="h-1/4 object-contain" alt="trevinho" />
          <img src={craban} className="h-1/4 object-contain" alt="craban" />
          <img src={gwynda} className="h-1/4 object-contain" alt="gwynda" />
          <img src={ianben} className="h-1/4 object-contain" alt="ianben" />
        </div>
        <div className="lg:hidden w-full mt-4">
          <div className="flex flex-row justify-center items-center space-x-2 overflow-x-auto py-2">
            <img
              src={trevinho}
              className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg shadow"
              alt="trevinho"
            />
            <img
              src={craban}
              className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg shadow"
              alt="craban"
            />
            <img
              src={gwynda}
              className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg shadow"
              alt="gwynda"
            />
            <img
              src={ianben}
              className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg shadow"
              alt="ianben"
            />
            <img
              src={aquarius}
              className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg shadow"
              alt="aquarius"
            />
            <img
              src={jorge}
              className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg shadow"
              alt="jorge"
            />
            <img
              src={orion}
              className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg shadow"
              alt="orion"
            />
            <img
              src={tebas}
              className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg shadow"
              alt="tebas"
            />
          </div>
        </div>

        {/* Coluna central - Texto */}
        <div className="lg:w-1/2">
          <div className="cinzel-regular bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
            <h1 className="text-3xl lg:text-4xl font-bold cinzel-black text-center mb-8 text-rose-300">
              Tomb of Annihilation
            </h1>

            <div className="space-y-6">
              <p className="text-justify leading-relaxed text-lg">
                A campanha épica de RPG que se desenrolou ao longo de 46
                episódios acompanha um grupo de aventureiros em uma missão de
                importância vital para salvar o mundo de uma ameaça global
                conhecida como Maldição da Morte. Essa aflição impedia que os
                mortos fossem ressuscitados e, de forma mais urgente, causava o
                definhamento daqueles que já haviam sido revividos, levando-os a
                uma morte lenta.
              </p>
              <p className="text-justify leading-relaxed text-lg">
                A jornada, repleta de mistério e perigo, é iniciada em Baldur's
                Gate e é patrocinada por Syndra Silvane, uma respeitada
                aventureira que está entre as vítimas da maldição. O objetivo
                era encontrar e eliminar a fonte mágica no selvagem continente
                de Chult.
              </p>
            </div>
          </div>

          <div className="cinzel-regular bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 mt-8">
            <h2 className="text-2xl font-bold cinzel-black mb-4 text-rose-200 border-b border-rose-700 pb-2">
              A Expedição e a Selva
            </h2>
            <div className="space-y-6">
              <p className="text-justify leading-relaxed text-lg">
                Após quase um mês a viagem culmina com um naufrágio, levando os
                aventureiros a Port Nyanzaru, onde se veem obrigados a se
                adaptar rapidamente. Eles enfrentam desafios locais, como a
                perigosa Corrida do Carrasco (Executioner's Run), um evento
                punitivo que lhes rendeu guias cruciais para a travessia.
              </p>
              <p className="text-justify leading-relaxed text-lg">
                A maior parte da saga se concentra na exploração da densa e
                traiçoeira selva de Chult. Em meio a altas temperaturas, chuva e
                criaturas selvagens (incluindo dinossauros, zumbis e piratas),
                os heróis descobrem ruínas antigas e vestígios de civilizações
                perdidas, como a cidade que sofreu a Praga da Magia.
              </p>
            </div>
          </div>

          <div className="cinzel-regular bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700 mt-8">
            <h2 className="text-2xl font-bold cinzel-black mb-4 text-rose-200 border-b border-rose-700 pb-2">
              A Busca por Respostas
            </h2>
            <div className="space-y-6">
              <p className="text-justify leading-relaxed text-lg">
                O caminho para a fonte da maldição é pavimentado com enigmas,
                armadilhas complexas e a busca por artefatos cruciais. O grupo
                precisa coletar itens, resolver quebra-cabeças, e lidar com
                adversários de diversas origens (incluindo magos vermelhos e
                seguidores de cultos internos).
              </p>
              <p className="text-justify leading-relaxed text-lg">
                Em uma reviravolta contínua, os aventureiros lidam com alianças
                questionáveis, descobrem traições entre os responsáveis pela
                maldição, e são forçados a fazer escolhas difíceis, culminando
                em uma perigosa descida para o coração da ameaça, onde enfrentam
                as forças finais que sustentam o mal.
              </p>
            </div>
          </div>
        </div>

        {/* Coluna da direita - Imagem */}
        <div className="w-1/6 lg:w-1/4 hidden lg:flex flex-row lg:flex-col h-[calc(100vh-100px)] md:h-[calc(100vh-50px)]">
          <img src={aquarius} className="h-1/4 object-contain" alt="aquarius" />
          <img src={jorge} className="h-1/4 object-contain" alt="jorge" />
          <img src={orion} className="h-1/4 object-contain" alt="orion" />
          <img src={tebas} className="h-1/4 object-contain" alt="tebas" />
        </div>
      </div>
    </div>
  );
}

export default Tomb;
