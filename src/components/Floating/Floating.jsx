import React from "react";
import "./Floating.css";
import Float1 from "../../assets/float (1).jpeg";
import Float2 from "../../assets/float (2).jpeg";
import Float3 from "../../assets/float (3).jpeg";
import Float4 from "../../assets/float (4).jpeg";
import Float5 from "../../assets/float (5).jpeg";
import Float6 from "../../assets/float (6).jpeg";
import Float7 from "../../assets/float (7).jpeg";
import Float8 from "../../assets/float (8).jpeg";
import Float9 from "../../assets/float (9).jpeg";
import Float10 from "../../assets/float (10).jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
function Floating() {
  const swiperImages = [
    Float1,
    Float2,
    Float3,
    Float4,
    Float5,
    Float6,
    Float7,
    Float8,
    Float9,
    Float10,
  ];
  return (
    <div style={{ width: "90vw", margin: "auto" }}>
      <h3>— WE BUILD REMARKABLE BRANDS.</h3>
      <div className="wrapper">
        <p className="target">
          Toreno Hotel. Genio Hotel. Boutique Hotel Trevi. Azzurri. CMG Real
          Estate.Eliseo Hotel. Pace Helvezia Hotel. Roma Citta. Monte Carlo
          Musicana Hotel. CMG Revolution Pharma. Sistena Hotel. Trattoria
          Ristorante D’AZEGLIO. Imperium. Hanna’s.
        </p>
      </div>
      <div className="swiperWrapper">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1300: {
              width: 1300,
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {swiperImages.map((image, i) => (
            <SwiperSlide key={i}>
              <img className="targetImg" src={image} alt="floatimg" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Floating;
