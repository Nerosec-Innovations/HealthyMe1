import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Grid } from "swiper/modules";
import { Link } from 'react-router-dom';

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

import { products as allProducts } from "../data/products";

export default function Slider({ products }) {
  const data = products && products.length > 0 ? products : allProducts;
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
              <Link to={`/product/${index}`} state={item} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="slider-card">
                  <img src={item.img} alt="" />
                  <h5>{item.title}</h5>
                  <div className="description">
                    <h6>{item.description}</h6>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
}