"use client";
import { MoviesFilters } from "@/widgets";
import React, { FC, useState } from "react";
import styles from "./MoviePageFilters.module.scss";
import { FlexDiv, Icon, TextSlice } from "@/shared/ui";
import classNames from "classnames";

const MoviePageFilters: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const containerClass = classNames({
    [styles.filters__container]: true,
    [styles.filters__container_open]: isOpen,
  });

  const handleIconClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <FlexDiv
      direction="column"
      wrap="nowrap"
      extraClass={styles.filters}
    >
      <FlexDiv wrap="nowrap">
        <TextSlice
          family="medium"
          color="dark_blue"
          size="titles_small"
        >
          Фильтры
        </TextSlice>
        <FlexDiv direction="row_reverse">
          <Icon
            color="dark_blue"
            direction={isOpen ? "top" : "bottom"}
            size="normal"
            interactive
            onClick={handleIconClick}
          />
        </FlexDiv>
      </FlexDiv>

      <div className={containerClass}>
        <MoviesFilters
          year
          rating
          type
          isOpen={isOpen}
        />
      </div>
    </FlexDiv>
  );
};

export default MoviePageFilters;
