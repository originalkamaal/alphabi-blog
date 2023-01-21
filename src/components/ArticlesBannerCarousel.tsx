import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  EffectCreative,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import SampleBanner from "@/assets/images/sample-banner.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box, HStack, Image, Text, useColorModeValue } from "@chakra-ui/react";

const ArticlesBannerCarousel = () => {
  return (
    <Box w="full" pos="relative">
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectCreative]}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        grabCursor={true}
        effect={"creative"}
        spaceBetween={0}
        loop={true}
        autoplay={true}
        navigation={true}
        style={{ width: "100%", paddingBottom: "10px" }}
        slidesPerView={1}
        pagination={{ clickable: true }}
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
        <HStack
          w="full"
          justifyContent="space-between"
          pos="absolute"
          top={"50%"}
          transform="translate(0,-50%)"
          zIndex={99}
        >
          <Text
            bg={useColorModeValue("gray.800", "white")}
            color={useColorModeValue("white", "gray.800")}
            fontWeight="extrabold"
            zIndex={100}
            h={30}
            w={30}
            rounded="full"
            textAlign="center"
          >
            {"<"}
          </Text>
          <Text bg="white">Next</Text>
        </HStack>
      </Swiper>
    </Box>
  );
};

export default ArticlesBannerCarousel;
