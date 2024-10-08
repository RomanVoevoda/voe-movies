"use client";
import { MovieSection, useGetMovieQuery } from "@/entities";
import { Button } from "@/shared/ui";
import { useParams } from "next/navigation";

import React, { FC } from "react";
import MoviesIdPageImages from "../MoviesIdPageImages/MoviesIdPageImages";

const MoviesIdPageInfo: FC = () => {
  const params = useParams<{ id: string }>();

  if (!params) {
    throw new Error("Page id is not defined");
  }

  const id = params.id;

  const { data, isLoading, isError } = useGetMovieQuery(+id);

  return (
    <>
      {isLoading && <h1>Загрузка...</h1>}

      {isError && <h1>Ошибка загрузки</h1>}

      {(!isLoading && data == undefined && !isError && <h1>Фильм не найден</h1>) ||
        (data != undefined && (
          <>
            <MovieSection
              type="full"
              description={data.description}
              nameRu={data.nameRu}
              posterUrl={data.posterUrl}
              ratingImdb={data.ratingImdb || 0}
              ratingKinopoisk={data.ratingKinopoisk || 0}
              buttons={[
                <Button
                  type="contained"
                  color="pink"
                  key={Date.now() + "В избранное"}
                >
                  В избранное
                </Button>,
              ]}
              key={data.kinopoiskId || Date.now()}
              genre={data.genres.map((genre) => genre.genre).join(", ")}
              country={data.countries.map((country) => country.country).join(", ")}
              year={data.year}
              gapColumns={150}
              gapRows={20}
            />
            <MoviesIdPageImages />
          </>
        ))}
    </>
  );
};

export default MoviesIdPageInfo;
