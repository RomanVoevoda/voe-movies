import React, { FC, ReactNode } from "react";
import styles from "./MovieBanner.module.scss";
import { Button, FlexDiv, TextSlice } from "@/shared/ui";
import Image from "next/image";

interface MovieBannerProps {
  nameRu: string;
  description: string;
  posterUrl: string;
  announcement: string;
  button: ReactNode;
}

const MovieBanner: FC<MovieBannerProps> = ({
  posterUrl,
  nameRu,
  description,
  announcement,
  button,
}) => {
  return (
    <article
      className={styles.banner}
      data-testid="MovieBanner"
      aria-label={`баннер фильма ${nameRu}`}
    >
      <FlexDiv
        align="start"
        direction="column"
        wrap="nowrap"
        extraClass={styles.banner__info}
      >
        <TextSlice
          family="montserrat"
          size="titles_extra_small"
          color="white"
          extraClass={styles.banner__announcement}
        >
          {announcement}
        </TextSlice>

        <TextSlice
          family="medium"
          color="white"
          size="titles_medium"
          extraClass={styles.banner__title}
        >
          {nameRu}
        </TextSlice>

        <TextSlice
          color="white"
          extraClass={styles.banner__description}
        >
          {description}
        </TextSlice>

        <FlexDiv extraClass={styles.banner__buttons}>{button}</FlexDiv>
      </FlexDiv>

      <FlexDiv
        justify="end"
        extraClass={styles.banner__container}
      >
        <Image
          width={0}
          height={0}
          src={posterUrl}
          alt={`Постер фильма ${nameRu}`}
          className={styles.banner__image}
          data-tesid="MovieImage"
          layout="responsive"
        />
      </FlexDiv>
    </article>
  );
};

export default MovieBanner;
