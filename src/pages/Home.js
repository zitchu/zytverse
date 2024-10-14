import React from "react";

/* import { useNavigate } from "react-router-dom"; */
import Timeline from "../components/timeline/Timeline";

function Home() {
  /* const navigate = useNavigate(); */

  return (
    <div className="h-auto w-full text-black prata flex flex-col  relative">
      <div className="mt-[50px] pt-4 bg-gray-900">
        <div className=" text-white w-auto h-full cinzel-regular px-4">
          Linha do tempo do universo principal de aventuras
        </div>
        {Timeline.map((element) => {
          return (
            <div>
              <div
                key={element.id}
                className=" flex flex-col justify-center items-center  text-white cinzel-regular text-xs md:text-sm  "
              >
                <div className="pt-4 p-4 border-2 rounded-lg w-[25%] bg-blue-600">
                  <div className="text-center cinzel-black">
                    {" "}
                    {element.titulo}
                  </div>
                  <div className=" ">subtitulo: {element.subtitulo}</div>
                  <div className=" ">ano: {element.ano}</div>
                  <div className=" ">duracao: {element.duracao}</div>
                  <div className=" ">cidade: {element.cidade}</div>
                  <div className=" ">detalhes: {element.detalhes}</div>
                </div>
                <div className="border-white  w-1 h-4 border-2 flex justify-center item inset-0  left-[50%] bottom-0 " />
              </div>
              <div className="w-full bg-gray-900 h-4 bottom-0 absolute" />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
