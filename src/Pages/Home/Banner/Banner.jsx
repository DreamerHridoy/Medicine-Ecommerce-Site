/* eslint-disable react/react-in-jsx-scope */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import sliderimg1 from "../../../assets/home/Medicineslider1.jpg";
import sliderimg2 from "../../../assets/home/medicineslider2.jpg";
import sliderimg3 from "../../../assets/home/medicineslider3.jpg";
import sliderimg4 from "../../../assets/home/medicineslider4.jpg";
import sliderimg5 from "../../../assets/home/medicineslider5.jpg";
import sliderimg6 from "../../../assets/home/medicineslider6.jpg";

const Banner = () => {
  const slides = [
    sliderimg1,
    sliderimg2,
    sliderimg3,
    sliderimg4,
    sliderimg5,
    sliderimg6,
  ];

  return (
    <div className="w-full mx-auto max-h-[80vh] overflow-hidden">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        interval={4000}
        transitionTime={800}
        stopOnHover
      >
        {slides.map((slide, index) => (
          <div key={index} className="relative">
            <img
              src={slide}
              alt={`Slide ${index + 1}`}
              className="w-full h-[50vh] md:h-[70vh] object-cover"
            />
            {/* Optional Overlay Text/Button */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-white text-center px-4">
              <div>
                <h2 className="text-xl md:text-3xl font-bold mb-2">
                  Welcome to MediCare Hub
                </h2>
                <p className="text-sm md:text-base">
                  Your trusted partner in reliable health & medicine delivery.
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
