import { MovieInfo } from "@/shared/model";
import React, { FC } from "react";
import styles from "./MoviesList.module.scss";
import { MovieSection } from "@/entities";
import { Button } from "@/shared/ui";
import { NavigateButton } from "@/features";
import { routesEnum } from "@/shared/config";

interface MoviesListProps {
  movies: MovieInfo[];
}

const MoviesList: FC<MoviesListProps> = ({ movies }) => {
  return (
    <section className={styles.list}>
      {movies.map((movie) => (
        <MovieSection
          type="preview"
          description={movie.description}
          nameRu={movie.nameRu}
          posterUrl={movie.posterUrl}
          ratingImdb={movie.ratingImdb || 0}
          ratingKinopoisk={movie.ratingKinopoisk || 0}
          buttons={[
            <NavigateButton
              route={routesEnum.movieById}
              id={movie.kinopoiskId}
              button={<Button color="pink">Смотреть</Button>}
            />,
            <Button
              type="text"
              color="pink"
            >
              В избранное
            </Button>,
          ]}
          key={movie.kinopoiskId}
          genre={movie.genres.map((genre) => genre.genre).join(", ")}
          country={movie.countries.map((country) => country.country).join(", ")}
          year={movie.year}
          gapColumns={50}
          gapRows={25}
        />
      ))}
    </section>
  );
};

export default MoviesList;
