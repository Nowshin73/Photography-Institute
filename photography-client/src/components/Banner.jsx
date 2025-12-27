import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "/assets/img1.1-bfb4e799.jpg";
import img2 from "/assets/img2.1-8969de38.jpg";
import img3 from "/assets/img3-7a66876d.png";
import img4 from "/assets/img4-0a264cbd.png";
import img5 from "/assets/img5-31c9725a.png";
import img6 from "/assets/img6-ca97e03a.png";

const slides = [img6, img1, img2, img3, img4, img5];

const Banner = () => {
  return (
    <div className="banner">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus
        interval={4000}
      >
        {slides.map((img, index) => (
          <div key={index}>
            <img className="banner-img h-[90vh]" src={img} alt="banner" />
            <div className="banner-des relative top-[-30rem] flex flex-col gap-4 items-center justify-center text-white">
              <span className="text-2xl md:text-7xl">Learn Photography</span>
              <span className="text-xl">
                easy to understand, professionally produced videos and guides
              </span>
              <button className="button-secondary">Explore now</button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
