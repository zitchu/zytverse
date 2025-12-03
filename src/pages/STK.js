import React, { useEffect, useState, useRef } from "react";
import imagens from "../components/img/stk/STKimports";
import capa from "../components/img/stk/capa.png";
import { motion, useScroll, useTransform } from "framer-motion";

function STK() {
  const images = [
    { src: imagens.dreeco2, className: "w-[15%] min-w-[70px] ml-[5%]" },
    { src: imagens.sylas2, className: "w-[25%] min-w-[70px] " },
    { src: imagens.dreeco2, className: "w-[15%] min-w-[70px] ml-[5%]" },
    { src: imagens.sylas2, className: "w-[25%] min-w-[70px] " },
    { src: imagens.climber2, className: "w-[30%] min-w-[70px]" },
    { src: imagens.joia2, className: "w-[25%] min-w-[70px]" },
    { src: imagens.climber2, className: "w-[30%] min-w-[70px]" },
    { src: imagens.joia2, className: "w-[25%] min-w-[70px]" },
    { src: imagens.loy2, className: "w-[20%] min-w-[70px]" },
    { src: imagens.leon2, className: "w-[20%] min-w-[70px] mr-[5%]" },
    { src: imagens.loy2, className: "w-[20%] min-w-[70px]" },
    { src: imagens.leon2, className: "w-[20%] min-w-[70px] mr-[5%]" },
    { src: imagens.mk2, className: "w-[20%] min-w-[70px]" },
    { src: imagens.verdan2, className: "w-[20%] min-w-[70px]" },
    { src: imagens.mk2, className: "w-[20%] min-w-[70px]" },
    { src: imagens.verdan2, className: "w-[20%] min-w-[70px]" },
    { src: imagens.hill, className: "w-[25%] min-w-[70px] " },
    { src: imagens.hill2, className: "w-[25%] min-w-[70px] " },
    { src: imagens.stone2, className: "w-[35%] min-w-[70px] -mt-[5%]" },
    { src: imagens.stone, className: "w-[25%] min-w-[70px]" },
    { src: imagens.frost, className: "w-[25%] min-w-[70px]" },
    { src: imagens.frost2, className: "w-[30%] min-w-[70px] -mt-[5%]" },
    { src: imagens.fire, className: "w-[30%] min-w-[70px]" },
    { src: imagens.fire2, className: "w-[20%] min-w-[70px] " },
    { src: imagens.cloud2, className: "w-[25%] min-w-[70px] " },
    { src: imagens.cloud, className: "w-[22%] min-w-[70px]" },
    { src: imagens.storm2, className: "w-[20%] min-w-[70px]" },
    { src: imagens.storm, className: "w-[30%] min-w-[70px] " },
    { src: imagens.zephyros, className: "w-[30%] min-w-[70px]" },
    { src: imagens.harshnag, className: "w-[33%] min-w-[70px] -mt-[10%]" },
    { src: imagens.hecaton, className: "w-[30%] min-w-[70px]" },
    { src: imagens.lymrith, className: "w-[25%] min-w-[70px] " },
    { src: imagens.hecaton, className: "w-[30%] min-w-[70px]" },
    { src: imagens.lymrith, className: "w-[25%] min-w-[70px] " },
  ];

  const tokens = [
    {
      src: imagens.climber,
      nome: "Climber",
      text: "o bravo paladino draconato servo de klauth",
    },
    {
      src: imagens.dreeco,
      nome: "Dreeco",
      text: "o esperto halfling ladino de pontaria mortal",
    },
    {
      src: imagens.joia,
      nome: "Joia",
      text: "A carismática shifter de um continente distante que brandia uma incrível espada magica",
    },
    {
      src: imagens.leon,
      nome: "Leon",
      text: "Com sua fiel coruja e magias poderosas que a faziam baforar fogo o mago Leon sempre deu suporte arcano ao grupo",
    },
    {
      src: imagens.loy,
      nome: "Loy",
      text: (
        <span>
          o erudito bardo humano com sua flauta mais afi
          <span className="line-through">n</span>
          ada que uma espada
        </span>
      ),
    },
    {
      src: imagens.mk,
      nome: "M.K.",
      text: "Warforged mágico de combate, M.K. sempre foi o Tanque do grupo e encarou de frente os perigos",
    },
    {
      src: imagens.sylas,
      nome: "Sylas",
      text: "Lendário caçador de gigantes empunhando o Machado giant slayer",
    },
    {
      src: imagens.verdan,
      nome: "Verdan",
      text: "O druida Firbolg com sua conexão com a natureza e sabedoria afiada.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll();
  const [showSpoilers, setShowSpoilers] = useState(false);
  const modalRef = useRef(null);

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [1, 1, 1, 1, 0]
  );

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

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      const scrollableHeight = totalScrollHeight - windowHeight;

      const newIndex = Math.floor(
        window.scrollY / (scrollableHeight / (images.length / 2))
      );

      if (newIndex >= 0 && newIndex < images.length / 2) {
        setCurrentIndex(newIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [images.length]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-b via-[#2f4f4f] from-[#8b0000] to-[#191970] pt-[50px] text-white relative">
      {/* Botão de Spoilers fixo */}
      <div className="fixed top-24 right-4 z-50">
        <button
          onClick={() => setShowSpoilers(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white px-6 py-3 rounded-lg font-bold cinzel-regular shadow-lg transition-all duration-300 hover:scale-105"
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
            className="bg-gradient-to-b from-blue-50 to-purple-50 text-gray-900 max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {/* Cabeçalho do Modal */}
            <div className="sticky top-0 bg-gradient-to-r from-[#191970] to-[#8b0000] text-white p-6 rounded-t-xl flex justify-between items-center">
              <h2 className="text-2xl font-bold cinzel-black">
                ⛈️ Storm King's Thunder - Resumo Cronológico
              </h2>
              <button
                onClick={() => setShowSpoilers(false)}
                className="text-blue-200 hover:text-white text-2xl transition-colors"
                aria-label="Fechar modal"
              >
                ✕
              </button>
            </div>

            {/* Conteúdo do Modal */}
            <div className="p-8 cinzel-regular space-y-8">
              <div className="mb-6">
                <p className="text-lg italic border-l-4 border-blue-600 pl-4 py-2 bg-blue-50">
                  Resumo detalhado da campanha "Storm King's Thunder", baseado
                  no material fornecido.
                </p>
              </div>

              <section>
                <h3 className="text-xl font-bold cinzel-black mb-4 text-gray-900 bg-blue-100 inline-block px-4 py-2 rounded-lg">
                  I. O Início em Waterdeep e a Malhação de Tiamat
                </h3>
                <p className="text-justify leading-relaxed mb-4">
                  A aventura se inicia no ano de 1489, na Costa da Espada (Sword
                  Coast), na cidade de Waterdeep. Naquele momento, estava sendo
                  celebrada a "Malhação de Tiamat" — uma celebração pelo expurgo
                  da deusa Tiamat, impedida de entrar em Faerûn por grandes e
                  desconhecidos aventureiros.
                </p>
                <p className="text-justify leading-relaxed">
                  Nossos heróis se encontram pela primeira vez na margem do
                  oceano, onde uma gigante das tempestades celebra com aparentes
                  amigos da Aliança dos Nobres, além de toda a população,
                  encantada em ver uma gigante das tempestades (os maiores
                  dentre os gigantes reais) tão próxima e, diferente da maioria
                  dos gigantes, dócil e alegre.
                </p>
                <p className="text-justify leading-relaxed mt-4">
                  A comemoração despertou também os primeiros laços entre os
                  heróis, que se viram impelidos por seus contatos com suas
                  facções a investigar os rumores de ataques de gigantes que
                  estavam acontecendo em cidades próximas.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold cinzel-black mb-4 text-gray-900 bg-blue-100 inline-block px-4 py-2 rounded-lg">
                  II. A Jornada com Zephyros
                </h3>
                <p className="text-justify leading-relaxed mb-4">
                  Já no começo da busca por respostas, nossos personagens se
                  veem na necessidade de aceitar a ajuda de um misterioso
                  gigante das tempestades chamado Zephyros, que os leva em sua
                  torre voadora para ajudá-los em sua jornada.
                </p>
                <p className="text-justify leading-relaxed">
                  Ele revela muitos dos perigos que enfrentarão enquanto seguem
                  os segredos da corte do Rei Hekaton, que parece ter
                  desaparecido justamente quando todos os gigantes estão no mais
                  completo caos. Zephyros explica sobre o "Ordenamento" — as
                  leis ancestrais que governam as relações entre os gigantes.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold cinzel-black mb-4 text-gray-900 bg-blue-100 inline-block px-4 py-2 rounded-lg">
                  III. A Quebra do Ordenamento
                </h3>
                <p className="text-justify leading-relaxed mb-4">
                  Após o impedimento do culto do dragão de trazer de volta a
                  deusa Tiamat para o plano de Faerûn, o Deus Annam
                  'All-Father', pai de todos os gigantes, decide abandoná-los e
                  quebrar o Ordenamento como punição.
                </p>
                <p className="text-justify leading-relaxed">
                  Annam entendia que os gigantes foram muito passivos e quase
                  permitiram, em sua passividade, que a deusa dragão entrasse em
                  Faerûn. Esta quebra das leis ancestrais causou o caos entre
                  todas as raças de gigantes.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold cinzel-black mb-4 text-gray-900 bg-blue-100 inline-block px-4 py-2 rounded-lg">
                  IV. O Plano de Lymrith
                </h3>
                <p className="text-justify leading-relaxed mb-4">
                  Aproveitando a confusão causada pela quebra do Ordenamento, a
                  dragão azul Lymrith se infiltrou na corte do rei Hekaton,
                  tornando-se sua conselheira.
                </p>
                <p className="text-justify leading-relaxed">
                  Seu plano era ambicioso: plantar discórdia entre as filhas de
                  Hekaton (causando uma briga de sucessão), causar a morte da
                  Rainha e sequestrar o próprio Rei Hekaton. Seu objetivo era
                  controlar os gigantes através do caos e instabilidade.
                </p>
              </section>

              <section>
                <h3 className="text-xl font-bold cinzel-black mb-4 text-gray-900 bg-blue-100 inline-block px-4 py-2 rounded-lg">
                  V. O Confronto Final e o Desfecho
                </h3>
                <p className="text-justify leading-relaxed mb-4">
                  Não fossem nossos corajosos aventureiros, todo o equilíbrio do
                  continente estaria ameaçado, e a própria sucessão dos
                  gigantes, junto com o risco de um domínio por parte de
                  Lymrith, estaria em perigo.
                </p>
                <p className="text-justify leading-relaxed">
                  Os heróis enfrentaram gigantes de diferentes raças,
                  desvendaram os planos de Lymrith, e em um confronto épico,
                  impediram que a dragão azul assumisse o controle sobre os
                  gigantes e, por extensão, sobre grande parte da Costa da
                  Espada.
                </p>
              </section>

              {/* Botão para fechar no rodapé */}
              <div className="sticky bottom-0 bg-gradient-to-b from-blue-50 to-purple-50 pt-6 border-t border-blue-300">
                <div className="flex justify-center">
                  <button
                    onClick={() => setShowSpoilers(false)}
                    className="bg-gradient-to-r from-[#191970] to-[#8b0000] text-white hover:from-[#8b0000] hover:to-[#191970] px-8 py-3 rounded-lg font-bold cinzel-regular transition-all duration-300"
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
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 p-4">
        {/* Coluna da esquerda - Imagens animadas */}
        <div className="hidden lg:flex lg:w-1/4 flex-col lg:sticky lg:top-20 lg:self-start lg:h-[calc(100vh-100px)]">
          <div className="h-full flex flex-col justify-center items-center">
            <motion.div style={{ opacity }} className="w-full">
              <div className="flex flex-col items-center justify-center space-y-8">
                <div
                  className="w-full flex justify-center"
                  style={{
                    maskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,0) 2%, rgba(0,0,0,1))",
                    WebkitMaskImage:
                      "linear-gradient(to bottom, rgba(0,0,0,0) 2%, rgba(0,0,0,1))",
                  }}
                >
                  <img
                    src={images[currentIndex * 2]?.src}
                    alt={`image-${currentIndex * 2}`}
                    className="object-contain max-h-[40vh]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Coluna central - Conteúdo principal */}
        <div className="w-full lg:w-1/2">
          <div className="cinzel-regular bg-gradient-to-b from-gray-800/30 to-gray-900/30 p-8 rounded-xl backdrop-blur-sm border border-gray-700">
            <h1 className="text-3xl lg:text-4xl font-bold cinzel-black text-center mb-8">
              Storm King's Thunder
            </h1>

            <div className="space-y-6">
              <p className="text-justify leading-relaxed text-lg">
                A aventura se inicia no ano de 1489, na Costa da Espada (Sword
                Coast), na cidade de Waterdeep. Naquele momento, estava sendo
                celebrada a "Malhação de Tiamat" — uma celebração pelo expurgo
                da deusa Tiamat, impedida de entrar em Faerûn por grandes e
                desconhecidos aventureiros.
              </p>

              <p className="text-justify leading-relaxed text-lg">
                Nossos heróis se encontram pela primeira vez na margem do
                oceano, onde uma gigante das tempestades celebra com aparentes
                amigos da Aliança dos Nobres, além de toda a população,
                encantada em ver uma gigante das tempestades (os maiores dentre
                os gigantes reais) tão próxima e, diferente da maioria dos
                gigantes, dócil e alegre.
              </p>

              <p className="text-justify leading-relaxed text-lg">
                A comemoração despertou também os primeiros laços entre os
                heróis, que se viram impelidos por seus contatos com suas
                facções a investigar os rumores de ataques de gigantes que
                estavam acontecendo em cidades próximas.
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <img
                src={capa}
                alt="capa"
                className="object-cover rounded-lg max-w-full h-auto"
              />
            </div>

            <div className="mt-8 space-y-6">
              <p className="text-justify leading-relaxed text-lg">
                Já no começo da busca por respostas, nossos personagens se veem
                na necessidade de aceitar a ajuda de um misterioso gigante das
                tempestades chamado Zephyros, que os leva em sua torre voadora
                para ajudá-los em sua jornada. Ele revela muitos dos perigos que
                enfrentarão enquanto seguem os segredos da corte do Rei Hekaton,
                que parece ter desaparecido justamente quando todos os gigantes
                estão no mais completo caos.
              </p>
            </div>

            {/* Tokens dos personagens */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold cinzel-black text-center mb-6">
                Personagens
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {tokens.map((token, index) => (
                  <div
                    key={index}
                    className="relative group bg-gray-800/30 rounded-lg p-4 border border-gray-700 hover:border-blue-500 transition-all duration-300"
                  >
                    <div className="flex flex-col items-center">
                      <img
                        src={token.src}
                        alt={`token-${index}`}
                        className="object-contain w-20 h-20 md:w-24 md:h-24 transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="mt-2 cinzel-black text-center text-sm md:text-base">
                        {token.nome}
                      </div>
                    </div>
                    {token.text && (
                      <div className="absolute bottom-full left-0 right-0 mx-auto mb-2 w-full max-w-[200px] bg-gray-900 text-white text-xs cinzel-regular p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 shadow-lg pointer-events-none">
                        <div className="relative">
                          <div className="text-center leading-tight">
                            {token.text}
                          </div>
                          {/* Seta do tooltip */}
                          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-gray-900"></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Coluna da direita - Imagens animadas */}
        <div className="hidden lg:flex lg:w-1/4 flex-col lg:sticky lg:top-20 lg:self-start lg:h-[calc(100vh-100px)]">
          <div className="h-full flex flex-col justify-center items-center">
            <motion.div style={{ opacity }} className="w-full">
              <div className="flex flex-col items-center justify-center space-y-8">
                <div
                  className="w-full flex justify-center"
                  style={{
                    maskImage:
                      "linear-gradient(to top, rgba(0,0,0,0) 2%, rgba(0,0,0,1))",
                    WebkitMaskImage:
                      "linear-gradient(to top, rgba(0,0,0,0) 2%, rgba(0,0,0,1))",
                  }}
                >
                  <img
                    src={images[currentIndex * 2 + 1]?.src}
                    alt={`image-${currentIndex * 2 + 1}`}
                    className="object-contain max-h-[40vh]"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Versão mobile para as imagens */}
        <div className="lg:hidden w-full mt-8">
          <div className="flex justify-between items-center p-4">
            <motion.div style={{ opacity }} className="w-1/2 pr-2">
              <div
                className="flex justify-center"
                style={{
                  maskImage:
                    "linear-gradient(to right, rgba(0,0,0,0) 2%, rgba(0,0,0,1))",
                  WebkitMaskImage:
                    "linear-gradient(to right, rgba(0,0,0,0) 2%, rgba(0,0,0,1))",
                }}
              >
                <img
                  src={images[currentIndex * 2]?.src}
                  alt={`image-${currentIndex * 2}`}
                  className="object-contain max-h-[30vh]"
                />
              </div>
            </motion.div>

            <motion.div style={{ opacity }} className="w-1/2 pl-2">
              <div
                className="flex justify-center"
                style={{
                  maskImage:
                    "linear-gradient(to left, rgba(0,0,0,0) 2%, rgba(0,0,0,1))",
                  WebkitMaskImage:
                    "linear-gradient(to left, rgba(0,0,0,0) 2%, rgba(0,0,0,1))",
                }}
              >
                <img
                  src={images[currentIndex * 2 + 1]?.src}
                  alt={`image-${currentIndex * 2 + 1}`}
                  className="object-contain max-h-[30vh]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default STK;
