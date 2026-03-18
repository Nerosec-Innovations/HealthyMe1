import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";

import "swiper/css";
import "swiper/css/grid";

import img1 from "../assets/images/burger.png";
import img2 from "../assets/images/cake.png";
import img3 from "../assets/images/chicken.png";
import img4 from "../assets/images/deal.png";
import img5 from "../assets/images/donut.png";
import img6 from "../assets/images/fruits.png";
import img7 from "../assets/images/icecream.png";
import img8 from "../assets/images/pizza.png";
import img9 from "../assets/images/pizza-slice.png";
import img10 from "../assets/images/tomatto.png";

export default function Slider() {

  const data = [
    { img: img1, title: "Product Name", description: "Lorem ipsum amet dolor, etit tu" },
    { img: img2, title: "Product Name", description: "Lorem ipsum amet dolor, etit tu" },
    { img: img3, title: "Product Name", description: "Lorem ipsum amet dolor, etit tu" },
    { img: img4, title: "Product Name", description: "Lorem ipsum amet dolor, etit tu" },
    { img: img5, title: "Product Name", description: "Lorem ipsum amet dolor, etit tu" },
    { img: img6, title: "Product Name", description: "Lorem ipsum amet dolor, etit tu" },
    { img: img7, title: "Product Name", description: "Lorem ipsum amet dolor, etit tu" },
    { img: img8, title: "Product Name", description: "Lorem ipsum amet dolor, etit tu" },
    { img: img9, title: "Product Name", description: "Lorem ipsum amet dolor, etit tu" },
    { img: img10, title: "Product Name", description: "Lorem ipsum amet dolor, etit tu" },
  ];

  const loopData = [...data, ...data];

  return (
    <div className="Slider-Section">
      <div className="container">
        
        <div className="d-flex flex-column gap-2 mb-4">
          <h4 className="slider-small-title">Help Topics</h4>
          <h2 className="slider-main-title">Enhance Your Lifestyle</h2>
        </div>

        <Swiper
          modules={[Autoplay, Grid]}
          
          spaceBetween={30}
          slidesPerView={5}

          grid={{
            rows: 2,
            fill: "row",
          }}

          loop={true}

          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}

          speed={800}

          breakpoints={{
            320: { slidesPerView: 2, grid: { rows: 2 } },
            576: { slidesPerView: 3, grid: { rows: 2 } },
            768: { slidesPerView: 4, grid: { rows: 2 } },
            992: { slidesPerView: 5, grid: { rows: 2 } },
          }}
        >
          {loopData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slider-card">
                <img src={item.img} alt="" />
                <h5>{item.title}</h5>
                <div className="description">
                  <h6>{item.description}</h6>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
}