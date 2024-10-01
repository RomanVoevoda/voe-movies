import { MovieRatingProps } from "@/entities/movie/model/types";
import { FlexDiv, TextSlice } from "@/shared/ui";
import React, { FC } from "react";

const MovieRating: FC<MovieRatingProps> = ({ ratingKinopoisk, ratingImdb }) => {
  if (!ratingKinopoisk || !ratingImdb) return null;

  return (
    <FlexDiv
      direction="column"
      align="end"
    >
      {ratingKinopoisk && (
        <TextSlice
          color="yellow"
          family="medium"
          align="end"
          size="normal"
        >
          КиноПоиск:&nbsp;{ratingKinopoisk}/10
        </TextSlice>
      )}
      {ratingImdb && (
        <TextSlice
          color="yellow"
          family="medium"
          align="end"
          size="normal"
        >
          IMDB:&nbsp;{ratingImdb}/10
        </TextSlice>
      )}
    </FlexDiv>
  );
};

export default MovieRating;
