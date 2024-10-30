import React, { useState } from "react";
import Timeline from "../components/timeline/Timeline";
import { motion } from "framer-motion";
import zyt from "../components/img/zyt.png";

function Home() {
  const [activeItem, setActiveItem] = useState(null);
  return (
    <div className="h-auto w-full text-black prata flex flex-col py-4  relative bg-azul-escuro">
      <div className="mt-[50px] py-4 ">
        <div className="flex flex-col h-auto">
          <div className="m-8 mb-20">
            <h1 className="text-white cinzel-black p-4 leading-loose mx-[10%] text-center text-3xl md:text-6xl shadow-text">
              Zytverse
            </h1>
          </div>
          <div className="flex w-full items-end mb-20">
            <div className="w-full h-full flex">
              <img
                src={zyt}
                alt="zytlogo"
                className="image-shadow p-1 min-w-32 hidden md:block"
              />
            </div>
            <div className="text-white cinzel-regular px-4 leading-loose mx-[10%] text-justify ">
              Esta página conta sobre as aventuras de RPG (Role PLaying Game)
              orquestradas pelo mestre Jeanluiz Monteiro Com amigos diversos em
              vários anos e várias campanhas que duraram poucas sessões, meses
              ou até anos construindo um mundo ou mais de um mundo onde o
              desenvolvimento da história em conjunto com os jogadores tem
              impacto nas histórias que estão por vir e que serão relevantes e
              com consequentes do que acontece nas aventuras.
            </div>
          </div>
        </div>
        <div>
          <div className=" text-white w-auto h-full cinzel-regular p-4 text-center text-2xl">
            Linha do tempo do universo principal de aventuras
          </div>
          {Timeline.map((element, index) => {
            const isActive = activeItem === element.id;
            const isEven = index % 2 === 0;
            const isLast = index === Timeline.length - 1;

            return (
              <div
                key={element.id}
                onMouseClick={() => setActiveItem(element.id)}
                onClick={() => setActiveItem(element.id)}
              >
                <div className="flex flex-col justify-center items-center text-white cinzel-regular text-xs md:text-sm">
                  <div className="pt-4 p-4 border-2 rounded-lg w-[25%] cursor-pointer bg-blue-600 hover:bg-blue-500 transition-all duration-300 ease-in-out">
                    <div className="text-center cinzel-black">
                      {element.titulo}
                    </div>
                    <div className="text-center cinzel-bold">
                      {element.subtitulo}
                    </div>
                    <div className="">
                      <strong className="cinzel-black pr-2">ano: </strong>
                      {element.ano}
                    </div>
                    <div className="">
                      <strong className="cinzel-black pr-2">duração: </strong>
                      {element.duracao}
                    </div>
                    <div className="">
                      <strong className="cinzel-black pr-2">cidade: </strong>
                      {element.cidade}
                    </div>
                    <div className="">
                      <strong className="cinzel-black pr-2">detalhes: </strong>
                      {element.detalhes}
                    </div>
                  </div>

                  {isActive && (
                    <>
                      <motion.div
                        initial={{
                          opacity: 0,

                          scale: 0.8,
                        }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className={`my-2 p-2 bg-gray-900 w-[30%] rounded-lg absolute ${
                          isEven ? "left-10 " : "right-10 "
                        } overflow-hidden`}
                        style={{
                          maskImage:
                            "radial-gradient(circle, rgba(0,0,0,0) -10%, rgba(0,0,0,1) -20%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)",
                          WebkitMaskImage:
                            "radial-gradient(circle, rgba(0,0,0,0) -10%, rgba(0,0,0,1) -20%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 90%)",
                        }}
                      >
                        <img
                          className="object-contain overflow-hidden"
                          alt={element.titulo}
                          src={element.imagem}
                        />
                      </motion.div>

                      <motion.div
                        initial={{
                          opacity: 0,
                          x: isEven ? 100 : -100,
                          scale: 0.8,
                        }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{
                          opacity: 0,
                          x: isEven ? -100 : 100,
                          scale: 0.8,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className={`mt-2 p-2 bg-blue-500 w-[30%] rounded-lg absolute ${
                          isEven ? "right-10 " : "left-10 "
                        }`}
                      >
                        {element.resumo}
                      </motion.div>
                    </>
                  )}

                  {!isLast && (
                    <div className="border-white w-1 h-[5rem] border-2 flex justify-center item inset-0 left-[50%] bottom-0" />
                  )}
                </div>
              </div>
            );
          })}
          <div className="text-white w-auto h-full cinzel-regular px-4 my-[10%] text-center">
            Faço aqui um convite a que conheça nossas histórias
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
