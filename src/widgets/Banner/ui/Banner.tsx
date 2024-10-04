"use client";
import { MovieBanner, useGetMoviesPremieresQuery } from "@/entities";
import { NavigateButton } from "@/features";
import { routesEnum } from "@/shared/config";
import { Button } from "@/shared/ui";
import React, { FC } from "react";

const Banner: FC = () => {
  const { data, isLoading, isError } = useGetMoviesPremieresQuery({ year: 2024 });
  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  if (isError || data == undefined) {
    return <h1>Ошибка загрузки</h1>;
  }

  const { items } = data;

  return (
    <MovieBanner
      nameRu={items[0].nameRu}
      description={items[0].description}
      posterUrl={items[0].posterUrl}
      announcement="УЖЕ В КИНО"
      button={
        <NavigateButton
          route={routesEnum.movieById}
          id={items[0].kinopoiskId}
          button={
            <Button
              type="contained"
              color="pink"
            >
              Смотреть
            </Button>
          }
        />
      }
    />
  );
};

export default Banner;
