import { FlexDiv, TextSlice } from "@/shared/ui";
import Image from "next/image";
import React, { FC } from "react";
import styles from "./MovieCard.module.scss";
import { MovieCardProps } from "@/entities/movie/model/types";

const MovieCardSmall: FC<MovieCardProps> = ({
  posterUrl,
  nameRu,
  year,
  ratingKinopoisk,
  onClick,
}) => {
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      onClick?.();
      event.preventDefault();
    }
  };

  return (
    <article
      className={styles.card}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      data-testid="MovieCard"
    >
      <FlexDiv
        direction="column"
        align="center"
        wrap="nowrap"
        gap={10}
      >
        <Image
          src={posterUrl}
          placeholder="blur"
          blurDataURL={posterUrl}
          alt={nameRu}
          className={styles.card__image}
          width={0}
          height={0}
          data-testid="MovieImage"
          layout="responsive"
        />
        <FlexDiv
          direction="column"
          align="center"
          justify="end"
          wrap="nowrap"
        >
          <TextSlice
            color="dark_blue"
            family="medium"
            size="normal"
          >
            {nameRu}
          </TextSlice>
          <FlexDiv
            wrap="nowrap"
            align="end"
          >
            <TextSlice
              color="transcluent"
              size="small"
            >
              {year}г.
            </TextSlice>
            <TextSlice
              align="end"
              color="yellow"
              family="medium"
              size="normal"
            >
              {ratingKinopoisk || 0}/10
            </TextSlice>
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </article>
  );
};

export default MovieCardSmall;
