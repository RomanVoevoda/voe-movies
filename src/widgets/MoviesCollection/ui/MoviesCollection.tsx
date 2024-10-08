"use client";
import React, { FC, useEffect, useState } from "react";
import styles from "./MoviesCollection.module.scss";
import MoviesCollectionButtons from "./MoviesCollectionButtons/MoviesCollectionButtons";
import { MoviesCollections } from "@/shared/model";
import { useGetMoviesCollectionQuery } from "@/entities";
import MovieCollectionCards from "./MovieCollectionCards/MovieCollectionCards";

const MoviesCollection: FC = () => {
  const currentCollections: Array<MoviesCollections["type"]> = [
    "TOP_POPULAR_ALL",
    "COMICS_THEME",
    "VAMPIRE_THEME",
    "CATASTROPHE_THEME",
  ];
  const [collection, setCollection] = useState<MoviesCollections["type"]>(currentCollections[0]);

  const { data, isLoading, isError } = useGetMoviesCollectionQuery({ type: collection, page: 1 });

  if (isLoading) {
    return <h1>Загрузка...</h1>;
  }

  if (isError) {
    return <h1>Ошибка загрузки</h1>;
  }

  const items = data?.items ?? [];

  return (
    <>
      <section
        aria-label="коллекция фильмов"
        className={styles.section}
      >
        <MoviesCollectionButtons
          collections={currentCollections}
          currentCollection={collection}
          setCurrentCollection={setCollection}
        />
        {(!isLoading && items.length < 1 && !isError && <h1>Коллекция не найдена</h1>) ||
          (data && items != undefined && <MovieCollectionCards movies={items} />)}
      </section>
    </>
  );
};

export default MoviesCollection;
