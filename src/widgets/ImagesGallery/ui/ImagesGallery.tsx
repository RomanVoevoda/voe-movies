"use client";
import React, { FC, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./ImagesGallery.module.scss";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { MovieImage } from "@/shared/model";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper/types";
import { FlexDiv, Icon, TextSlice } from "@/shared/ui";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

interface ImagesGalleryProps {
  images: MovieImage[];
  onClose: () => void;
}

const ImagesGallery: FC<ImagesGalleryProps> = ({ images, onClose }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  return (
    <FlexDiv
      direction="column"
      justify="center"
      align="center"
      wrap="nowrap"
      extraClass={styles.gallery}
    >
      <FlexDiv
        direction="row_reverse"
        extraClass={styles.gallery__icon}
      >
        <Icon
          onClick={onClose}
          color="white"
          size="big"
          type="xmark"
          interactive
        />
      </FlexDiv>

      <Swiper
        navigation={true}
        slidesPerView={1}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.gallery__swiper_main}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
      >
        {images.map((image) => (
          <SwiperSlide
            key={image.imageUrl}
            className={`${styles.gallery__slide} ${styles.gallery__slide_big}`}
          >
            <Image
              src={image.imageUrl}
              alt={"Изображение"}
              className={styles.gallery__image}
              width={0}
              height={0}
              layout="responsive"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <TextSlice
        color="white"
        size="extra_big"
        family="medium"
      >
        {currentSlide} из {images.length}
      </TextSlice>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className={styles.gallery__swiper_bottom}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex + 1)}
      >
        {images.map((image) => (
          <SwiperSlide
            key={image.imageUrl}
            className={`${styles.gallery__slide} ${styles.gallery__slide_small}`}
          >
            <Image
              src={image.imageUrl}
              alt={"Изображение"}
              className={styles.gallery__image}
              width={0}
              height={0}
              layout="responsive"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </FlexDiv>
  );
};

export default ImagesGallery;
