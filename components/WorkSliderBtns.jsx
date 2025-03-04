"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import { useState, useEffect } from "react";

const WorkSliderBtns = ({ containerStyles, btnStyles, iconStyles }) => {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    const handleSlideChange = () => {
      setIsBeginning(swiper.isBeginning);
      setIsEnd(swiper.isEnd);
    };

    swiper.on("slideChange", handleSlideChange);
    handleSlideChange();

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, [swiper]);

  return (
    <div className={containerStyles}>
      <button
        className={`${btnStyles} ${
          isBeginning ? "opacity-50 cursor-not-allowed" : "opacity-100"
        }`}
        disabled={isBeginning}
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button
        className={`${btnStyles} ${
          isEnd ? "opacity-50 cursor-not-allowed" : "opacity-100"
        }`}
        disabled={isEnd}
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
