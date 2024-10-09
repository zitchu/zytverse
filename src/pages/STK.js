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
      src: imagens.dreeco,
      nome: "Dreeco",
      text: "Dreeco, o Guardião da Floresta.",
    },
    { src: imagens.joia, nome: "Joia", text: "Joia, a Sabedoria Brilhante." },
    { src: imagens.leon, nome: "Leon", text: "Leon, o Bravura Inabalável." },
    { src: imagens.loy, nome: "Loy", text: "Loy, o Estrategista Silencioso." },
    {
      src: imagens.sylas,
      nome: "Sylas",
      text: "Sylas, o Feiticeiro das Sombras.",
    },
    {
      src: imagens.climber,
      nome: "Climber",
      text: "Climber, o Montanhista Indomável.",
    },
    { src: imagens.mk, nome: "M.K.", text: "MK, a Força Destruidora." },
    {
      src: imagens.verdan,
      nome: "Verdan",
      text: "Verdan, o Guardião do Verdejante.",
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
    <div className="h-[550vh] md:h-[250vh] w-full bg-gradient-to-b via-[#2f4f4f] from-[#8b0000] to-[#191970] pt-[50px] flex flex-wrap">
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
        <h1 className="text-2xl cinzel-black my-8">Storm King's Thunder</h1>
        <h3 className="text-xs md:text-lg  cinzel-regular backdrop-blur-sm leading-loose">
          A Aventura se inicia no ano de 1489 na Costa da Espada (Swordcoast) na
          cidade de Waterdeep. Naquele momento estava sendo celebrada a
          "Malhação de Tiamat" - uma celebração quanto ao expurgo da deusa
          Tiamat de entrar em Faerun, expurgo esse feito por grandes e
          desconhecidos aventureiros. <br />
          Nossos hérois se encontram pela primeira vez na margem do oceano em
          que uma gigante das tempestades está celebrando com aparentes amigos
          da Aliança dos Nobres além de toda a população, encantada em ver uma
          gigante das tempestades (os maiores dentre os gigantes reais) tão
          próxima e diferente da maioria dos gigantes, dócil e alegre.
          <br />A comemoração fez despertar também os primeiros laços entre os
          hérois que viramimpelidos por seus contatos com suas facções a que
          investigassem os rumores de ataques de gigantes.
        </h3>
        <div className="w-[80%]">
          <img
            src={capa}
            alt="capa"
            className="object-cover rounded mt-20"
            style={{
              maskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 2%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 98%)",
              WebkitMaskImage:
                "linear-gradient(to right, rgba(0,0,0,0) 2%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 98%)",
            }}
          />
        </div>

        <h3 className="text-xs md:text-lg cinzel-regular mt-8 backdrop-blur-sm leading-loose">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, a
          repudiandae iste non voluptas nihil temporibus explicabo dolorum
          harum, sint unde deserunt blanditiis exercitationem aliquid voluptatem
          earum nulla nemo provident maxime fugiat eos quis? Ipsa, pariatur
          aspernatur ab consectetur autem blanditiis animi labore quidem odio
          reiciendis a vel minima totam repudiandae itaque, ea quaerat
          perferendis. Ut aliquid, a eius, quod omnis eos sed in atque fuga
          tenetur nihil. Fugiat autem quae id excepturi amet! Obcaecati
          blanditiis incidunt ullam officia ipsam ad animi, dolores provident
          natus asperiores optio labore adipisci, fugit modi amet commodi? Nemo
          voluptate aliquam, eveniet alias, quae nobis possimus quis officia.
          Aperiam, veritatis? Molestiae neque officiis optio omnis esse maxime
          unde nobis. Corrupti, dolorem dolores quisquam delectus aliquid
          adipisci, tempore veritatis facilis natus, porro tenetur aspernatur.
          Facilis cupiditate minima facere nobis nisi aperiam nemo libero nam
          maxime reprehenderit consequuntur hic sed assumenda aliquam vel
          aspernatur temporibus fugiat voluptatem, tempore beatae tenetur?
          Itaque sit minima ratione consequuntur. Similique facere aliquid
          voluptatem blanditiis velit nulla molestiae, eaque placeat nihil.
          Voluptatum, illo tempora, id voluptates perspiciatis quidem magni
          pariatur ipsum praesentium dicta placeat alias maxime! Sed sunt ipsum
          eum molestias nulla nisi ad numquam libero vel, recusandae porro eaque
          ducimus tenetur repudiandae aspernatur vero consequuntur natus aliquam
          ratione officia impedit cupiditate sapiente. Mollitia saepe sint, aut
          quas repellat tempore commodi harum tempora doloremque sed ducimus
          minus soluta iste, maiores labore beatae!
        </h3>
        <div className="flex flex-wrap md:flex-nowrap ">
          {tokens.map((token, index) => (
            <div key={index} className="p-2 pt-4 relative group ">
              <img
                src={token.src}
                alt={`token-${index}`}
                className="object-contain w-[100px] h-[100px] transition-transform duration-300 group-hover:scale-110"
              />

              <div className="rounded cinzel-black absolute inset-0 flex justify-center opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 text-white text-sm transition-opacity duration-300">
                <span>{token.nome}</span>
              </div>

              <div className="w-auto h-auto cinzel-regular -ml-2 absolute mt-4 bg-gray-800 text-white text-xs  rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-start">
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
          <h3 className="cinzel-regular mt-8 backdrop-blur-sm leading-loose">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eos
            itaque a quaerat commodi animi ipsa aliquid omnis quibusdam
            explicabo, aspernatur optio tenetur? Modi illo iure error illum
            nesciunt reprehenderit voluptatem dolorum facere et? Rem iusto ipsum
            pariatur voluptate, totam, odio magnam impedit quas error incidunt,
            vitae doloremque laborum expedita. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Rerum eos itaque a quaerat commodi
            animi ipsa aliquid omnis quibusdam explicabo, aspernatur optio
            tenetur? Modi illo iure error illum nesciunt reprehenderit
            voluptatem dolorum facere et? Rem iusto ipsum pariatur voluptate,
            totam, odio magnam impedit quas error incidunt, vitae doloremque
            laborum expedita. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Rerum eos itaque a quaerat commodi animi ipsa aliquid omnis
            quibusdam explicabo, aspernatur optio tenetur? Modi illo iure error
            illum nesciunt reprehenderit voluptatem dolorum facere et? Rem iusto
            ipsum pariatur voluptate, totam, odio magnam impedit quas error
            incidunt, vitae doloremque laborum expedita. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Rerum eos itaque a quaerat
            laborum expedita.
          </h3>
        )}
      </div>
    </div>
  );
}

export default STK;
