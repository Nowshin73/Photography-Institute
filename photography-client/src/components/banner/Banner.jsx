import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "../../assets/img1.1-bfb4e799.jpg";
import img2 from "../../assets/img2.1-8969de38.jpg";
import img3 from "../../assets/img3-7a66876d.png";
import img4 from "../../assets/img4-0a264cbd.png";
import img5 from "../../assets/img5-31c9725a.png";
import img6 from "../../assets/img6-ca97e03a.png";

const slides = [img6, img1, img2, img3, img4, img5];

const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        className="h-[90vh]"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-[90vh]">
              <img
                src={img}
                alt="banner"
                className="w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 text-white text-center px-4">
                <h1 className="text-2xl md:text-7xl font-bold">
                  Learn Photography
                </h1>
                <p className="text-lg md:text-xl max-w-2xl">
                  Easy to understand, professionally produced videos and guides
                </p>
                <button className="button-secondary">
                  Explore now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
