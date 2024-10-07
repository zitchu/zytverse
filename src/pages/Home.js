import React from "react";
import imagem1 from "../components/img/misc/inicial.jpg";
import imagem2 from "../components/img/stk/cloud.png";
/* import { useNavigate } from "react-router-dom"; */

function Home() {
  /* const navigate = useNavigate(); */

  return (
    <div className="h-[400vh] w-full text-black prata flex flex-col  relative">
      <div className="pt-[50px] absolute h-full w-full">
        <img
          src={imagem1}
          alt="Descrição da imagem"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="image-shadow">
        <img src={imagem2} alt="Descrição da imagem" className="" />
      </div>
      <div>agreste</div>
    </div>
  );
}

export default Home;
