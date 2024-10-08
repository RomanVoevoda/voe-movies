import React, { FC } from "react";
import styles from "./MoviesPage.module.scss";
import MoviesPageTitle from "./MoviesPageTitle/MoviesPageTitle";
import MoviesList from "./MoviesList/MoviesList";

const MoviesPage: FC = () => {
  return (
    <main className={styles.page}>
      <MoviesPageTitle />

      <MoviesList />
    </main>
  );
};

export default MoviesPage;
