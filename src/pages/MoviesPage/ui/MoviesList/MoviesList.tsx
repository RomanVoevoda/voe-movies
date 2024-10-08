"use client";
import React, { FC } from "react";
import styles from "./MoviesList.module.scss";
import { MovieSection, useGetMoviesByFiltersQuery } from "@/entities";
import { Button } from "@/shared/ui";
import { NavigateButton } from "@/features";
import { routesEnum } from "@/shared/config";
import { useTypedSelector } from "@/shared/hooks";
import { MoviesPagination } from "@/widgets";

const MoviesList: FC = () => {
  const filters = useTypedSelector((store) => store.filters);
  const { data, isLoading, isError } = useGetMoviesByFiltersQuery(filters);

  const items = data?.items ?? [];

  return (
    <>
      {isLoading && <h1>Загрузка...</h1>}

      {isError && <h1>Ошибка загрузки</h1>}

      {(!isLoading && items.length < 1 && !isError && <h1>Фильмы не найдены</h1>) ||
        (data && items != undefined && (
          <>
            <MoviesPagination pagesCount={data.totalPages} />

            <section className={styles.list}>
              {items.map((movie) => (
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
                      key={Date.now() + "Смотреть"}
                    />,
                    <Button
                      type="text"
                      color="pink"
                      key={Date.now() + "В избранное"}
                    >
                      В избранное
                    </Button>,
                  ]}
                  key={movie.kinopoiskId || Date.now()}
                  genre={movie.genres.map((genre) => genre.genre).join(", ")}
                  country={movie.countries.map((country) => country.country).join(", ")}
                  year={movie.year}
                  gapColumns={50}
                  gapRows={25}
                />
              ))}
            </section>

            <MoviesPagination pagesCount={data.totalPages} />
          </>
        ))}
    </>
  );
};

export default MoviesList;
