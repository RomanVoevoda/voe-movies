import { FlexDiv, TextSlice } from "@/shared/ui";
import Image from "next/image";
import React, { FC } from "react";
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
    [styles[`section__image`]]: true,
    [styles[`section__image_${type}`]]: type,
  });

  return (
    <section
      aria-label={`Информация о фильме ${nameRu}`}
      data-testid="MovieSection"
      className={styles.section}
    >
      <FlexDiv
        direction="row"
        wrap="nowrap"
        align="start"
        gap={40}
        extraClass={styles.section__container_main}
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
          layout="responsive"
        />

        <FlexDiv
          direction="column"
          gap={50}
          extraClass={styles.section__container_columns}
        >
          <FlexDiv
            wrap="nowrap"
            align="start"
            direction="row"
            gap={40}
            extraClass={styles.section__container_main}
          >
            <TextSlice
              size="titles_big"
              family="bold"
              color="blue"
              extraClass={styles.section__title}
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
              direction="row_reverse"
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
