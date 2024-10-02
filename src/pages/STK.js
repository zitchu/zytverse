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
import harshnag from "../components/img/stk/harshnag.png";
import hecaton from "../components/img/stk/hecaton.png";
import hill from "../components/img/stk/hill.png";
import hill2 from "../components/img/stk/hill2.png";
import lymrith from "../components/img/stk/lymrith.png";
import stone from "../components/img/stk/stone.png";
import stone2 from "../components/img/stk/stone2.png";
import storm from "../components/img/stk/storm.png";
import storm2 from "../components/img/stk/storm2.png";
import zephyros from "../components/img/stk/zephyros.png";

function STK() {
  const images = [
    { src: loy2, className: "w-1/4 min-w-[70px] " },
    { src: dreeco2, className: "w-1/5 min-w-[70px]  mr-[5%]" },
    { src: climber2, className: "w-1/3 min-w-[70px] -mt-[15%]" },
    { src: joia2, className: "w-1/3 min-w-[70px] -mt-[20%]" },
    { src: sylas2, className: "w-1/3 min-w-[70px] -mt-[12%] -scale-x-100" },
    { src: leon2, className: "w-1/4 min-w-[70px] -mt-[18%] mr-[5%]" },
    { src: mk2, className: "w-1/3 min-w-[70px] -mt-[10%]" },
    { src: verdan2, className: "w-1/3 min-w-[70px] -mt-[22%]" },
    { src: hill, className: "w-[40%] min-w-[70px] " },
    { src: hill2, className: "w-[40%] min-w-[70px] -scale-x-100" },
    { src: stone2, className: "w-[60%] min-w-[70px] -mt-[40%]" },
    { src: stone, className: "w-[45%] min-w-[70px] -mt-[30%]" },
    { src: frost, className: "w-1/2 min-w-[70px] -mt-[30%]" },
    { src: frost2, className: "w-[65%] min-w-[70px] -mt-[30%]" },
    { src: fire, className: "w-[60%] min-w-[70px] -mt-[30%]" },
    { src: fire2, className: "w-[40%] min-w-[70px] -mt-[25%] -scale-x-100" },
    { src: cloud, className: "w-1/2 min-w-[70px] -mt-[20%]" },
    { src: cloud2, className: "w-[60%] min-w-[70px] -mt-[23%] -scale-x-100" },
    { src: storm2, className: "w-[40%] min-w-[70px] -mt-[30%]" },
    { src: storm, className: "w-[60%] min-w-[70px] -mt-[30%] -scale-x-100" },
    { src: zephyros, className: "w-1/2 min-w-[70px] -mt-[30%]" },
    { src: harshnag, className: "w-[60%] min-w-[70px] -mt-[35%]" },
    { src: hecaton, className: "w-[65%] min-w-[70px] -mt-[30%]" },
    { src: lymrith, className: "w-1/2 min-w-[70px] -mt-[30%] -scale-x-100" },
  ];

  return (
    <div className="h-auto w-full bg-gradient-to-b via-[#2f4f4f] from-[#8b0000] to-[#191970] pt-[50px] flex flex-wrap">
      {images.map((image, index) => (
        <div
          key={index}
          className={`w-1/2 p-2 ${
            index % 2 === 0 ? "justify-start" : "justify-end"
          } flex trans`}
        >
          <img
            src={image.src}
            alt={`image-${index}`}
            className={`${image.className} image-shadow object-contain`}
          />
        </div>
      ))}

      <div className="absolute w-full px-[20%] text-white flex flex-col justify-center items-center text-justify">
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          voluptatum cupiditate voluptate sit doloremque? Necessitatibus,
          recusandae consequatur. Molestiae tenetur minus repellendus doloremque
          tempora deleniti vitae dolorem omnis enim, ea perferendis aperiam
          atque ab incidunt ad cum tempore quia facilis asperiores? Eligendi
          dolore laudantium, modi quis quas necessitatibus possimus excepturi
          soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          voluptatum cupiditate voluptate sit doloremque? Necessitatibus,
          recusandae consequatur. Molestiae tenetur minus repellendus doloremque
          tempora deleniti vitae dolorem omnis enim, ea perferendis aperiam
          atque ab incidunt ad cum tempore quia facilis asperiores? Eligendi
          dolore laudantium, modi quis quas necessitatibus possimus excepturi
          soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          voluptatum cupiditate voluptate sit doloremque? Necessitatibus,
          recusandae consequatur. Molestiae tenetur minus repellendus doloremque
          tempora deleniti vitae dolorem omnis enim, ea perferendis aperiam
          atque ab incidunt ad cum tempore quia facilis asperiores? Eligendi
          dolore laudantium, modi quis quas necessitatibus possimus excepturi
          soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          voluptatum cupiditate voluptate sit doloremque? Necessitatibus,
          recusandae consequatur. Molestiae tenetur minus repellendus doloremque
          tempora deleniti vitae dolorem omnis enim, ea perferendis aperiam
          atque ab incidunt ad cum tempore quia facilis asperiores? Eligendi
          dolore laudantium, modi quis quas necessitatibus possimus excepturi
          soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          voluptatum cupiditate voluptate sit doloremque? Necessitatibus,
          recusandae consequatur. Molestiae tenetur minus repellendus doloremque
          tempora deleniti vitae dolorem omnis enim, ea perferendis aperiam
          atque ab incidunt ad cum tempore quia facilis asperiores? Eligendi
          dolore laudantium, modi quis quas necessitatibus possimus excepturi
          soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          voluptatum cupiditate voluptate sit doloremque? Necessitatibus,
          recusandae consequatur. Molestiae tenetur minus repellendus doloremque
          tempora deleniti vitae dolorem omnis enim, ea perferendis aperiam
          atque ab incidunt ad cum tempore quia facilis asperiores? Eligendi
          dolore laudantium, modi quis quas necessitatibus possimus excepturi
          soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          voluptatum cupiditate voluptate sit doloremque? Necessitatibus,
          recusandae consequatur. Molestiae tenetur minus repellendus doloremque
          tempora deleniti vitae dolorem omnis enim, ea perferendis aperiam
          atque ab incidunt ad cum tempore quia facilis asperiores? Eligendi
          dolore laudantium, modi quis quas necessitatibus possimus excepturi
          soluta?
        </div>
        <div className="px-[5%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          voluptatum cupiditate voluptate sit doloremque? Necessitatibus,
          recusandae consequatur. Molestiae tenetur minus repellendus doloremque
          tempora deleniti vitae dolorem omnis enim, ea perferendis aperiam
          atque ab incidunt ad cum tempore quia facilis asperiores? Eligendi
          dolore laudantium, modi quis quas necessitatibus possimus excepturi
          soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          voluptatum cupiditate voluptate sit doloremque? Necessitatibus,
          recusandae consequatur. Molestiae tenetur minus repellendus doloremque
          tempora deleniti vitae dolorem omnis enim, ea perferendis aperiam
          atque ab incidunt ad cum tempore quia facilis asperiores? Eligendi
          dolore laudantium, modi quis quas necessitatibus possimus excepturi
          soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          voluptatum cupiditate voluptate sit doloremque? Necessitatibus,
          recusandae consequatur. Molestiae tenetur minus repellendus doloremque
          tempora deleniti vitae dolorem omnis enim, ea perferendis aperiam
          atque ab incidunt ad cum tempore quia facilis asperiores? Eligendi
          dolore laudantium, modi quis quas necessitatibus possimus excepturi
          soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          voluptatum cupiditate voluptate sit doloremque? Necessitatibus,
          recusandae consequatur. Molestiae tenetur minus repellendus doloremque
          tempora deleniti vitae dolorem omnis enim, ea perferendis aperiam
          atque ab incidunt ad cum tempore quia facilis asperiores? Eligendi
          dolore laudantium, modi quis quas necessitatibus possimus excepturi
          soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          voluptatum cupiditate voluptate sit doloremque? Necessitatibus,
          recusandae consequatur. Molestiae tenetur minus repellendus doloremque
          tempora deleniti vitae dolorem omnis enim, ea perferendis aperiam
          atque ab incidunt ad cum tempore quia facilis asperiores? Eligendi
          dolore laudantium, modi quis quas necessitatibus possimus excepturi
          soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          voluptatum cupiditate voluptate sit doloremque? Necessitatibus,
          recusandae consequatur. Molestiae tenetur minus repellendus doloremque
          tempora deleniti vitae dolorem omnis enim, ea perferendis aperiam
          atque ab incidunt ad cum tempore quia facilis asperiores? Eligendi
          dolore laudantium, modi quis quas necessitatibus possimus excepturi
          soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          voluptatum cupiditate voluptate sit doloremque? Necessitatibus,
          recusandae consequatur. Molestiae tenetur minus repellendus doloremque
          tempora deleniti vitae dolorem omnis enim, ea perferendis aperiam
          atque ab incidunt ad cum tempore quia facilis asperiores? Eligendi
          dolore laudantium, modi quis quas necessitatibus possimus excepturi
          soluta?
        </div>
      </div>
    </div>
  );
}

export default STK;
