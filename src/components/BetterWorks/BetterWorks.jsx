
import data from "../../Data/data.json";

// const Works = data.es.Biografia.trabajos.slice(0, 1);
const Works = data.es.Biografia.trabajos


import { FaYoutube } from "react-icons/fa";

import React from 'react'

export const BetterWorks = () => {
  return (

    <section class="h-full sm:h-[85vh] my-[2rem] py-[5rem] px-6" id="trabajos">
      <h2 class="text-center flex justify-center  my-[3rem] h-[2vh] text-size_text_mobile sm:text-size_text_desk">
        Mis mejores trabajos
      </h2>
      <ul
        class="flex flex-wrap justify-center gap-[10rem] py-[2rem] max-w-[800px] mx-auto h-[105vh] sm:h-[69vh] "
      >

        {
          Works.map((e) => (
            <a
              href={e.url}
              target="_blank"
              className="w-[300px] h-[50px]  relative ">
              <img
                className="h-auto w-full flex justify-center mx-auto "
                src={e.img}
                alt=""
              />

              <div className="hover:bg-bg-color2 transition-all 5s  cursor-pointer 
                ease-in-out opacity-0 hover:opacity-90 h-[11rem] w-full z-20 absolute top-0 bottom-0">

                <FaYoutube className="absolute top-[3rem]  w-full text-[3rem] text-[#ee2626]" />
                <p className="text-center absolute bottom-0 right-0 left-0  p-3 ">{e.titulo}</p>
              </div>

            </a>
          ))
        }
      </ul>
    </section>






  )
}




