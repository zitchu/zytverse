import React from "react";
import cloud from "../components/img/stk/cloud.png";
import cloud2 from "../components/img/stk/cloud2.png";
import dreeco2 from "../components/img/stk/dreeco2.png";
import joia2 from "../components/img/stk/joia2.png";
import leon2 from "../components/img/stk/leon2.png";
import loy2 from "../components/img/stk/loy2.png";
import sylas2 from "../components/img/stk/sylas2.png";
import climber2 from "../components/img/stk/climber2.png";
import mk2 from "../components/img/stk/mk2.png";
import verdan2 from "../components/img/stk/verdan2.png";
import fire from "../components/img/stk/fire.png";
import fire2 from "../components/img/stk/fire2.png";
import frost from "../components/img/stk/frost.png";
import frost2 from "../components/img/stk/frost2.png";
import hecaton from "../components/img/stk/hecaton.png";
import hill from "../components/img/stk/hill.png";
import hill2 from "../components/img/stk/hill2.png";
import lymrith from "../components/img/stk/lymrith.png";
import stone from "../components/img/stk/stone.png";
import storm from "../components/img/stk/storm.png";
import storm2 from "../components/img/stk/storm2.png";
import zephyros from "../components/img/stk/zephyros.png";

function STK() {
  const images = [
    dreeco2,
    climber2,
    loy2,
    verdan2,
    sylas2,
    leon2,
    joia2,
    mk2,
    cloud,
    cloud2,
    fire,
    fire2,
    frost,
    frost2,
    hecaton,
    hill,
    hill2,
    lymrith,
    storm2,
    storm,
    stone,
    zephyros,
  ];

  return (
    <div className="h-[300vh] w-full bg-gradient-to-b via-[#2f4f4f] from-[#8b0000] to-[#191970] pt-[50px] flex flex-wrap">
      {images.map((image, index) => (
        <div
          key={index}
          className={`w-1/2 p-2 ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          } flex`}
        >
          <img
            src={image}
            alt={`image-${index}`}
            className="w-1/4 image-shadow object-contain "
          />
        </div>
      ))}
    </div>
  );
}

export default STK;
