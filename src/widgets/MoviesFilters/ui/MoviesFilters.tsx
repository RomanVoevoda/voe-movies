"use client";
import { FlexDiv } from "@/shared/ui";
import React, { FC } from "react";
import styles from "./MoviesFilters.module.scss";
import classNames from "classnames";
import { RatingSelect, ResetButton, TypeSelect, YearSelect } from "@/features";

interface MoviesFiltersProps {
  year?: boolean;
  rating?: boolean;
  type?: boolean;
  customYearOptions?: string[];
  customRatingOptions?: string[];
  customTypeOptions?: string[];
  isOpen: boolean;
}

const MoviesFilters: FC<MoviesFiltersProps> = ({
  year,
  rating,
  type,
  customYearOptions,
  customRatingOptions,
  customTypeOptions,
  isOpen,
}) => {
  const containerClass = classNames({
    [styles.container]: true,
    [styles.container_visible]: isOpen,
  });

  return (
    <FlexDiv extraClass={containerClass}>
      {year && <YearSelect options={customYearOptions} />}

      {rating && <RatingSelect options={customRatingOptions} />}

      {type && <TypeSelect options={customTypeOptions} />}

      {(year || rating || type) && <ResetButton />}
    </FlexDiv>
  );
};

export default MoviesFilters;
