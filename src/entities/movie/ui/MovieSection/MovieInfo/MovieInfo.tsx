import { MovieInfoProps } from "@/entities/movie/model/types";
import { TextSlice } from "@/shared/ui";
import React, { FC } from "react";
import styles from "./MovieInfo.module.scss";

const MovieInfo: FC<MovieInfoProps> = ({ genre, country, year, gapColumns, gapRows }) => {
  if (!genre && !country && !year) {
    return null;
  }

  return (
    <section
      className={styles.info}
      style={{ rowGap: gapRows, columnGap: gapColumns }}
    >
      {genre && (
        <>
          <TextSlice
            color="gray"
            size="normal"
            family="regular"
          >
            Жанр:
          </TextSlice>

          <TextSlice
            color="gray"
            size="normal"
            family="regular"
          >
            {genre}
          </TextSlice>
        </>
      )}
      {country && (
        <>
          <TextSlice
            color="gray"
            size="normal"
            family="regular"
          >
            Страна:
          </TextSlice>
          <TextSlice
            color="gray"
            size="normal"
            family="regular"
          >
            {country}
          </TextSlice>
        </>
      )}

      {year && (
        <>
          <TextSlice
            color="gray"
            size="normal"
            family="regular"
          >
            Год:
          </TextSlice>
          <TextSlice
            color="gray"
            size="normal"
            family="regular"
          >
            {year}
          </TextSlice>
        </>
      )}
    </section>
  );
};

export default MovieInfo;
