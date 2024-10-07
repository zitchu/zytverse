import React, { useEffect, useState } from "react";
import imagens from "../components/img/stk/STKimports";
import { motion, useScroll, useTransform } from "framer-motion";

function STK() {
  const images = [
    { src: imagens.dreeco2, className: "w-[15%] min-w-[70px] ml-[5%]" },
    { src: imagens.sylas2, className: "w-[25%] min-w-[70px] " },
    { src: imagens.dreeco2, className: "w-[15%] min-w-[70px] ml-[5%]" },
    { src: imagens.sylas2, className: "w-[25%] min-w-[70px] " },
    { src: imagens.climber2, className: "w-[30%] min-w-[70px]" },
    { src: imagens.joia2, className: "w-[25%] min-w-[70px]" },
    { src: imagens.loy2, className: "w-[20%] min-w-[70px]" },
    { src: imagens.leon2, className: "w-[20%] min-w-[70px] mr-[5%]" },
    { src: imagens.mk2, className: "w-[20%] min-w-[70px]" },
    { src: imagens.verdan2, className: "w-[20%] min-w-[70px]" },
    { src: imagens.hill, className: "w-[25%] min-w-[70px] " },
    { src: imagens.hill2, className: "w-[25%] min-w-[70px] " },
    { src: imagens.stone2, className: "w-[30%] min-w-[70px] -mt-[5%]" },
    { src: imagens.stone, className: "w-[45%] min-w-[70px]" },
    { src: imagens.frost, className: "w-[25%] min-w-[70px]" },
    { src: imagens.frost2, className: "w-[30%] min-w-[70px] -mt-[5%]" },
    { src: imagens.fire, className: "w-[30%] min-w-[70px]" },
    { src: imagens.fire2, className: "w-[20%] min-w-[70px] " },
    { src: imagens.cloud, className: "w-[22%] min-w-[70px]" },
    { src: imagens.cloud2, className: "w-[25%] min-w-[70px] " },
    { src: imagens.storm2, className: "w-[20%] min-w-[70px]" },
    { src: imagens.storm, className: "w-[30%] min-w-[70px] " },
    { src: imagens.zephyros, className: "w-[30%] min-w-[70px]" },
    { src: imagens.harshnag, className: "w-[33%] min-w-[70px] -mt-[10%]" },
    { src: imagens.hecaton, className: "w-[30%] min-w-[70px]" },
    { src: imagens.lymrith, className: "w-[25%] min-w-[70px] " },
    { src: imagens.hecaton, className: "w-[30%] min-w-[70px]" },
    { src: imagens.lymrith, className: "w-[25%] min-w-[70px] " },
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

  return (
    <div className="h-[250vh] w-full bg-gradient-to-b via-[#2f4f4f] from-[#8b0000] to-[#191970] pt-[50px] flex flex-wrap">
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
        <h3 className=" cinzel-regular backdrop-blur-sm leading-loose">
          A Aventura se inicia no ano de 1489 na Costa da Espada (Swordcoast) na
          cidade de Waterdeep. Naquele momento estava sendo celebrada a
          "Malhação de Tiamat" - uma celebração quanto ao expurgo da deusa
          Tiamat de entrar em Faerun, expurgo esse feito por grandes e
          desconhecidos aventureiros. <br />
          Nossos hérois se encontram pela primeira vez na margem do oceano em
          que uma gigante das tempestades está celebrando com aparentes amigos
          da Aliança dos Nobres
        </h3>
      </div>
    </div>
  );
}

export default STK;
