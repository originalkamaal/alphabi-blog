import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SampleBanner from "@/assets/images/sample-banner.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, Image } from "@chakra-ui/react";

const ArticlesBannerCarousel = () => {
  return (
    <Swiper
      spaceBetween={0}
      style={{ width: "100%" }}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image
          _hover={{
            filter: "brightness(0.7)",
            transitionDuration: "0.3s",
            transitionTimingFunction: "ease-in-ease-out",
          }}
          src={SampleBanner.src}
          w="full"
          borderRadius={30}
          my="-4"
          p={4}
        />
      </SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};

export default ArticlesBannerCarousel;
