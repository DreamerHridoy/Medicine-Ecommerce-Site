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
  return (
    <div>
      <Carousel>
        <div>
          <img className="" src={sliderimg1} />
        </div>
        <div>
          <img className="" src={sliderimg2} />
        </div>
        <div>
          <img className="" src={sliderimg3} />
        </div>
        <div>
          <img className="" src={sliderimg4} />
        </div>
        <div>
          <img className="" src={sliderimg5} />
        </div>
        <div>
          <img className="" src={sliderimg6} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
