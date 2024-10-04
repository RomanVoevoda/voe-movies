import { Banner, MoviesCollection } from "@/widgets";
import React, { FC } from "react";
import styles from "./HomePage.module.scss";

const HomePage: FC = () => {
  return (
    <main className={styles.page}>
      <Banner />
      <MoviesCollection />
    </main>
  );
};

export default HomePage;
