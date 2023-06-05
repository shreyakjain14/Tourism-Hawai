import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// import required modules

import useWindowWidth from "../utils/useWindowWidth";
import { HIGHLIGHTS, IMG_ROOT } from "../utils/constants";
import HighlightCard from "./HighlightCard";
import Footer from "./Footer";
import { disableScroll, enableScroll } from "../utils/scroll";

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const windowWidth = useWindowWidth();
  const backgroundImageUrl =
    IMG_ROOT + "bg-img" + (windowWidth >= 559 ? "@2x" : "") + ".png";

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

  const openMenu = () => {
    setIsMenuOpen(true);
    disableScroll();
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    enableScroll();
  };

  useEffect(() => {
    if (windowWidth >= 768) {
      setIsMenuOpen(false);
      enableScroll();
    }
  }, [windowWidth]);

  return (
    <>
      <div
        className="flex flex-col align-center w-full  bg-cover min-h-[560px]"
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
      >
        <nav className="p-6 md:mt-6 max-md:mt-0 max-md:w-full  relative max-md:left-0 md:mx-auto bg-white rounded-xl flex justify-between">
          <div className="flex items-center ">
            <Link to="" className="mr-20 text-xl">
              Aloha
            </Link>
            <div
              className={
                !isMenuOpen
                  ? "max-md:hidden"
                  : "absolute right-0 top-0 z-10 bg-white p-10 w-[90vw] h-screen flex flex-col"
              }
            >
              <button
                onClick={closeMenu}
                className={"md:hidden " + (isMenuOpen && "absolute right-7 ")}
              >
                <img src={IMG_ROOT + "close.png"} />
              </button>
              <Link
                to="home"
                className={
                  "mr-10 text-base " + (isMenuOpen && "mt-[7.5rem] ml-10")
                }
              >
                Home
              </Link>
              <Link
                to="surfing"
                className={"mr-10 text-base " + (isMenuOpen && "mt-10 ml-10")}
              >
                Surfing
              </Link>
              <Link
                to="vulcano"
                className={"mr-10 text-base " + (isMenuOpen && "mt-10 ml-10")}
              >
                Vulcano
              </Link>
              <button
                className={
                  "bg-[#008080] text-white px-6 py-2 rounded-lg " +
                  (isMenuOpen && "mt-12 ml-10")
                }
              >
                Book a trip
              </button>
            </div>
          </div>
          <button className="md:hidden" onClick={openMenu}>
            <img src={IMG_ROOT + "menu.png"} />
          </button>
        </nav>
        <h1 className="text-center mt-[4.5rem] mb-[7.5rem] text-white size text-9xl overflow-auto">
          Welcome <br />
          to Hawaii
        </h1>
      </div>
      <div className="md:mx-44 max-md:mx-4">
        <h3 className="text-base mt-10 mb-6">Highlights</h3>
        <div className="flex overflow-x-auto flex-nowrap flex-shrink-0 flex-grow-0">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={8}
            slidesPerView={calculateSlides()}
            navigation
            // pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
          >
            {HIGHLIGHTS.map((highlight, index) => (
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
