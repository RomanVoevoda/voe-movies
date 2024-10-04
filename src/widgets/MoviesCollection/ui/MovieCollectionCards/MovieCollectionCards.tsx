import { MovieCard } from "@/entities";
import { NavigateButton } from "@/features";
import { routesEnum } from "@/shared/config";
import { MovieInfo } from "@/shared/model";
import { Button, FlexDiv, Icon } from "@/shared/ui";
import React, { FC } from "react";
import styles from "./MoviesCollectionCards.module.scss";
import { useRouter } from "next/navigation";

interface MovieCollectionCardsProps {
  movies: MovieInfo[];
}

const MovieCollectionCards: FC<MovieCollectionCardsProps> = ({ movies }) => {
  const router = useRouter();

  const handleCardClick = (movie: MovieInfo) => {
    router.push(routesEnum.movieById.replace(":id", `${movie.kinopoiskId}`));
  };

  return (
    <FlexDiv
      direction="column"
      align="end"
      gap={20}
    >
      <NavigateButton
        route={routesEnum.movies}
        button={
          <Button
            type="text"
            color="dark_blue"
            padding={0}
          >
            Смотреть все &nbsp;
            <Icon
              type="angle"
              color="dark_blue"
              direction="right"
            />
          </Button>
        }
      />
      <FlexDiv
        wrap="nowrap"
        gap={20}
        extraClass={styles.container}
        align="start"
      >
        {movies.slice(0, 8).map((movie) => (
          <MovieCard
            key={movie.kinopoiskId}
            year={movie.year}
            nameRu={movie.nameRu}
            posterUrl={movie.posterUrl}
            ratingKinopoisk={movie.ratingKinopoisk}
            onClick={() => handleCardClick(movie)}
          />
        ))}
      </FlexDiv>
    </FlexDiv>
  );
};

export default MovieCollectionCards;
