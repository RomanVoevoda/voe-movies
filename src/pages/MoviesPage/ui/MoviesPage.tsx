"use client";
import React, { FC } from "react";
import styles from "./MoviesPage.module.scss";
import MoviesPageTitle from "./MoviesPageTitle/MoviesPageTitle";
import { useGetMoviesByFiltersQuery } from "@/entities";
import { useTypedSelector } from "@/shared/hooks";
import MoviesList from "./MoviesList/MoviesList";

const MoviesPage: FC = () => {
  const filters = useTypedSelector((store) => store.filters);
  const { data, isLoading, isError } = useGetMoviesByFiltersQuery(filters);

  const items = data?.items;

  return (
    <main className={styles.page}>
      <MoviesPageTitle />

      {isLoading && <h1>Загрузка...</h1>}

      {isError && <h1>Ошибка загрузки</h1>}

      {(!isLoading && items == undefined && <h1>Фильмы не найдены</h1>) ||
        (items != undefined && <MoviesList movies={items} />)}
    </main>
  );
};

export default MoviesPage;
