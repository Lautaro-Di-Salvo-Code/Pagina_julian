
import { useState } from "react";
import data from "../../Data/data.json";
import './style.css'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OpinionClients = () => {
  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  
  const ClientsOpinion = data.es.Biografia.clientes



  return (
    <section data-scroll-spy className="h-[90vh] sm:h-[80vh] sm:my-[7rem] py-[5rem]" id="testimonios">
      <h2 className="text-center flex justify-center text-size_text_mobile sm:text-size_text_desk my-[3rem]  h-[5vh]">Qué Dicen Los Creadores De Mi</h2>
      <div className='max-w-[1000px] m-auto'>
        <div className="mt-20">
          <Slider {...settings} >
            {ClientsOpinion.map((d) => (
              <div key={d.id} className={`${"anotherBlueDark  p-2 border-[#242344] border border-spacing-8 h-[623px] text-black rounded-xl"}`}>
                <div className='h-56    backgroundBlue flex justify-center items-center rounded-t-xl'>
                  <img src={d.img} alt="" className="h-44 w-44 rounded-full" />
                </div>
                <div className="flex flex-col items-center justify-center gap-4 p-4">
                  <p className="text-xl font-semibold text-white">{d.nombre}</p>
                  <p className="text-center text-white">{d.opinion}</p>
                  <button className=' backgroundBlue scale-100 hover:scale-110 text-white text-lg px-6 py-1 rounded-xl'>Read More</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  )
}

export default OpinionClients
