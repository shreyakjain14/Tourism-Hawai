import { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import useWindowWidth from "../utils/useWindowWidth";
import HighlightCard from "./HighlightCard";
import Footer from "./Footer";
import Header from "./Header";
import { fetchHighlight } from "../utils/services";

const Dashboard = () => {
  const [highlights, setHighlights] = useState([]);
  const windowWidth = useWindowWidth();

  // 176 +176 = 352

  const calculateSlides = () => {
    if (windowWidth > 1450) return 3;
    else if (windowWidth > 1300) return 2.7;
    else if (windowWidth > 1150) return 2.3;
    else if (windowWidth > 1000) return 1.8;
    else if (windowWidth > 700) return 1.2;
    else if (windowWidth > 500) return 1.1;
    else return 1;
  };

  useEffect(() => {
    fetchHighlight(setHighlights);
  }, []);

  return (
    <>
      <Header />
      <div className="md:mx-44 max-md:mx-4">
        <h3 className="text-base mt-10 mb-6">Highlights</h3>
        <div className="flex overflow-x-auto flex-nowrap flex-shrink-0 flex-grow-0">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={8}
            slidesPerView={calculateSlides()}
            navigation
            className="pb-2"
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
          >
            {highlights.map((highlight: any, index) => (
              <SwiperSlide key={index}>
                <HighlightCard key={index} {...highlight} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
