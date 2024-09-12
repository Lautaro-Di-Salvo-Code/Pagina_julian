
import { useState } from "react";
import data from "../../Data/data.json";
import './style.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const OpinionClients = () => {


  const VerMasFun = () => {
    setView(view + 1)
  }
  const Ocultar = () => {
    setView(view = 1)
  }
  let [view, setView] = useState(1)

  // const ClientsOpinion = data.es.Biografia.clientes.slice(0, view)
  const ClientsOpinion = data.es.Biografia.clientes


  console.log(view)
  return (
    <section className="h-[90vh] sm:h-[80vh] sm:my-[7rem] py-[5rem]" id="testimonios">
      <h2 className="text-center flex justify-center text-size_text_mobile sm:text-size_text_desk my-[3rem]  h-[5vh]">Qué Dicen Los Creadores De Mi</h2>
      <div className="py-[3rem] flex  gap-3 m-0 h-fit px-5 w-full  sm:w-[550px] mx-auto" >

        <Swiper
          className="flex justify-center h-fit max-h-[70vh]   "
          modules={[Scrollbar]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          {
            ClientsOpinion.map((e) => (

              <SwiperSlide key={e.id}> <ul className="h-[35rem] mx-auto cursor-pointer  backgroundBlue anotherBlueDark   rounded-sm p-3 w-fit  sm:w-[25rem] ">
                <img
                  className="h-auto w-[150px] max-w-[200px] mx-auto rounded-md p-4"
                  src={e.img}
                  alt=""
                />
                <ul >
                  <p className="text-center p-3 text-[1.4rem]">{e.nombre}</p>
                </ul>
                <ul className="p-3">
                  <p className="text-center min-w-[270px]">{e.opinion}</p>
                </ul>
              </ul></SwiperSlide>
            ))
          }

        </Swiper>

      </div>
    </section>
  )
}

export default OpinionClients
