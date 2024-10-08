import React, { FC } from "react";
import styles from "./MoviesIdPage.module.scss";
import MoviesIdPageButtons from "./MoviesIdPageButtons/MoviesIdPageButtons";
import MoviesIdPageInfo from "./MoviesIdPageInfo/MoviesIdPageInfo";
import MoviesIdPageImages from "./MoviesIdPageImages/MoviesIdPageImages";

const MovieIdPage: FC = () => {
  return (
    <main className={styles.page}>
      <MoviesIdPageButtons />
      <MoviesIdPageInfo />
    </main>
  );
};

export default MovieIdPage;
