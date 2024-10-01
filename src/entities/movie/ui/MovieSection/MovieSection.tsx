import { FlexDiv, TextSlice } from "@/shared/ui";
import Image from "next/image";
import React, { FC, useEffect, useState } from "react";
import styles from "./MovieSection.module.scss";
import { MovieSectionProps } from "@/entities/movie/model/types";
import MovieInfo from "./MovieInfo/MovieInfo";
import MovieRating from "./MovieRating/MovieRating";
import classNames from "classnames";

const MovieSection: FC<MovieSectionProps> = ({
  type,
  posterUrl,
  nameRu,
  year,
  ratingKinopoisk,
  ratingImdb,
  description,
  genre,
  country,
  gapColumns,
  gapRows,
  buttons,
}) => {
  const imgClass = classNames({
    [styles[`card__image`]]: true,
    [styles[`card__image_${type}`]]: type,
  });

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      aria-label={`Информация о фильме ${nameRu}`}
      data-testid="MovieSection"
    >
      <FlexDiv
        direction={windowWidth < 1200 ? "column" : "row"}
        wrap="nowrap"
        align="start"
        gap={windowWidth < 1200 ? 10 : 40}
      >
        <Image
          src={posterUrl}
          alt={nameRu}
          placeholder="blur"
          blurDataURL={posterUrl}
          width={0}
          height={0}
          className={imgClass}
          data-testid="MovieImage"
        />

        <FlexDiv
          direction="column"
          gap={windowWidth < 1200 ? 20 : 50}
        >
          <FlexDiv
            wrap="nowrap"
            align="start"
            direction={windowWidth < 1200 ? "column" : "row"}
            gap={windowWidth < 1200 ? 10 : 40}
          >
            <TextSlice
              size="titles_big"
              family="bold"
              color="blue"
            >
              {nameRu}
            </TextSlice>

            <MovieRating
              ratingKinopoisk={ratingKinopoisk}
              ratingImdb={ratingImdb}
            />
          </FlexDiv>

          <TextSlice
            color="black"
            size="normal"
            family="regular"
          >
            {description}
          </TextSlice>

          <FlexDiv
            direction="column"
            gap={20}
          >
            {type === "full" && (
              <TextSlice
                color="blue"
                family="bold"
                size="titles_small"
              >
                О фильме
              </TextSlice>
            )}

            <MovieInfo
              genre={genre}
              year={year}
              country={country}
              gapColumns={gapColumns}
              gapRows={gapRows}
            />

            <FlexDiv
              direction={windowWidth < 1200 ? "row" : "row_reverse"}
              justify="start"
              align="end"
              gap={20}
            >
              {buttons}
            </FlexDiv>
          </FlexDiv>
        </FlexDiv>
      </FlexDiv>
    </section>
  );
};

export default MovieSection;
