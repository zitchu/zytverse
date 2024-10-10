import React, { useEffect, useState } from "react";
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
    { src: imagens.joia, 
      nome: "Joia", 
      text: "A carismática shifter de um continente distante que brandia uma incrível espada magica" },
    { src: imagens.leon, 
      nome: "Leon", text: "" },
      { 
        src: imagens.loy, 
        nome: "Loy", 
        text: (
          <span>
            o erudito bardo humano com sua flauta mais afi
            <span className="line-through">n</span>
            ada que uma espada
          </span>
        )
      },
      
    { src: imagens.mk, 
      nome: "M.K.", 
      text: "" },
    {
      src: imagens.sylas,
      nome: "Sylas",
      text: "Lendário caçador de gigantes empunhando o Machado giant slayer",
    },
    {
      src: imagens.verdan,
      nome: "Verdan",
      text: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [1, 1, 1, 1, 0]
  );

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

  const [showSpoiler, setShowSpoiler] = useState(false);

  const toggleSpoiler = () => {
    setShowSpoiler(!showSpoiler);
  };

  return (
    <div className="h-[300vh] md:h-[250vh] w-full bg-gradient-to-b via-[#2f4f4f] from-[#8b0000] to-[#191970] pt-[50px] flex flex-wrap">
      <motion.div style={{ opacity }}>
        <div className="w-full p-2 flex fixed items-center h-full">
          <div className="flex items-center justify-between w-full">
            <div
              className={`flex w-[20%] ${images[currentIndex * 2]?.className}`}
              style={{
                maskImage:
                  "linear-gradient(to left, rgba(0,0,0,0) 2%, rgba(0,0,0,1))",
                WebkitMaskImage:
                  "linear-gradient(to left, rgba(0,0,0,0) 2%, rgba(0,0,0,1))",
              }}
            >
              <img
                src={images[currentIndex * 2]?.src}
                alt={`image-${currentIndex * 2}`}
                className={`object-contain image-shadow`}
              />
            </div>
            <div
              className={`flex w-[20%] ${
                images[currentIndex * 2 + 1]?.className
              }`}
              style={{
                maskImage:
                  "linear-gradient(to right, rgba(0,0,0,0) 2%, rgba(0,0,0,1))",
                WebkitMaskImage:
                  "linear-gradient(to right, rgba(0,0,0,0) 2%, rgba(0,0,0,1))",
              }}
            >
              <img
                src={images[currentIndex * 2 + 1]?.src}
                alt={`image-${currentIndex * 2 + 1}`}
                className={`object-contain image-shadow -mr-[5%]`}
              />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="absolute w-full pt-[2%] px-[20%] text-white flex flex-col justify-center items-center text-justify">
        <h1 className="mt-20 md:mt-0 md:text-2xl cinzel-black my-8">
          Storm King's Thunder
        </h1>
        <h3 className="text-xs md:text-lg cinzel-regular backdrop-blur-sm">
          A aventura se inicia no ano de 1489, na Costa da Espada (Sword Coast),
          na cidade de Waterdeep. Naquele momento, estava sendo celebrada a
          "Malhação de Tiamat" — uma celebração pelo expurgo da deusa Tiamat,
          impedida de entrar em Faerûn por grandes e desconhecidos aventureiros.{" "}
          <br />
          Nossos heróis se encontram pela primeira vez na margem do oceano, onde
          uma gigante das tempestades celebra com aparentes amigos da Aliança
          dos Nobres, além de toda a população, encantada em ver uma gigante das
          tempestades (os maiores dentre os gigantes reais) tão próxima e,
          diferente da maioria dos gigantes, dócil e alegre. <br />A comemoração
          despertou também os primeiros laços entre os heróis, que se viram
          impelidos por seus contatos com suas facções a investigar os rumores
          de ataques de gigantes que estavam acontecendo em cidades próximas.
        </h3>
        <div className="w-[80%]">
          <img src={capa} alt="capa" className="object-cover rounded mt-10" />
        </div>

        <h3 className="text-xs md:text-lg cinzel-regular mt-8 backdrop-blur-sm">
          Já no começo da busca por respostas, nossos personagens se veem na
          necessidade de aceitar a ajuda de um misterioso gigante das
          tempestades chamado Zephyros, que os leva em sua torre voadora para
          ajudá-los em sua jornada. Ele revela muitos dos perigos que
          enfrentarão enquanto seguem os segredos da corte do Rei Hekaton, que
          parece ter desaparecido justamente quando todos os gigantes estão no
          mais completo caos.
        </h3>

        <div className="flex flex-wrap md:flex-nowrap ">
          {tokens.map((token, index) => (
            <div key={index} className="p-2 pt-4 relative group ">
              <div className="block md:hidden w-auto h-auto cinzel-regular -ml-2 absolute  bg-gray-800 text-white text-xs  rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-start z-10">
                {token.text}
              </div>
              <div className="rounded cinzel-black absolute inset-0 flex justify-evenly top-0 opacity-0 group-hover:opacity-100  bg-opacity-50 text-white text-sm transition-opacity duration-300">
                {token.nome}
              </div>
              <img
                src={token.src}
                alt={`token-${index}`}
                className="object-contain w-[100px] h-[100px] py-2 transition-transform duration-300 group-hover:scale-110"
              />

              <div className="hidden md:block w-auto h-auto cinzel-regular -ml-2 absolute -mt-2 bg-gray-800 text-white text-xs  rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-start z-10">
                {token.text}
              </div>
            </div>
          ))}
        </div>
        <button
          className="cinzel-regular  px-4 py-2 rounded-lg silver-button mt-20"
          onClick={toggleSpoiler}
        >
          Spoilers!
        </button>

        {showSpoiler && (
          <h3 className="cinzel-regular mt-8 backdrop-blur-sm text-xs md:text-lg">
            Após o impedimento do culto do dragão de trazer de volta a deusa
            Tiamat para o plano de Faerûn, o Deus Annam 'All-Father', pai de
            todos os gigantes, decide abandoná-los e quebrar o{" "}
            <strong>Ordenamento</strong> como punição, por entender que os
            gigantes foram muito passivos e quase permitiram, em sua
            passividade, que a deusa dragão entrasse em Faerûn. Com isso, a
            dragão azul Lymrith aproveitou a confusão para se infiltrar na corte
            do rei Hekaton, tornando-se sua conselheira, plantando discórdia
            entre suas filhas (e na briga de sucessão) e ainda causando a morte
            da Rainha e o sequestro do Rei. Não fossem nossos corajosos
            aventureiros, todo o equilíbrio do continente estaria ameaçado, e a
            própria sucessão dos gigantes, junto com o risco de um domínio por
            parte de Lymrith, estaria em perigo.
          </h3>
        )}
      </div>
    </div>
  );
}

export default STK;
