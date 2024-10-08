"use client";
import { useGetMovieImagesQuery } from "@/entities";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { FC } from "react";
import styles from "./MoviesIdPageImagesContent.module.scss";

const MoviesIdPageImagesContent: FC = () => {
  const params = useParams<{ id: string }>();

  if (!params) {
    throw new Error("Page id is not defined");
  }

  const id = params.id;

  const { data, isLoading, isError } = useGetMovieImagesQuery({ id: +id, type: "STILL" });

  const items = data?.items;
  return (
    <>
      {isLoading && <h1>Загрузка...</h1>}

      {isError && <h1>Ошибка загрузки</h1>}
      {(!isLoading && items == undefined && <h1>Изображения не найдены</h1>) ||
        (data && items != undefined && (
          <>
            <div className={styles.container}>
              {items.slice(0, 6).map((image) => (
                <div
                  key={image.imageUrl}
                  className={styles.container__wrapper}
                >
                  <Image
                    src={image.imageUrl}
                    width={0}
                    height={0}
                    alt={"Изображение"}
                    className={styles.container__image}
                    layout="responsive"
                  />
                </div>
              ))}
            </div>
          </>
        ))}
    </>
  );
};

export default MoviesIdPageImagesContent;
