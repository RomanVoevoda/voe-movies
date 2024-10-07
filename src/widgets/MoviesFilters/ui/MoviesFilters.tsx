"use client";
import { Button, FlexDiv, Select } from "@/shared/ui";
import React, { FC } from "react";
import styles from "./MoviesFilters.module.scss";
import { filtersTypesKeysEnum, ratingOptions, typeOptions, yearOptions } from "@/shared/consts";
import { filtersSliceActions } from "@/entities";
import classNames from "classnames";
import { useTypedDispatch } from "@/shared/hooks";

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
  const dispatch = useTypedDispatch();

  const containerClass = classNames({
    [styles.container]: true,
    [styles.container_visible]: isOpen,
  });

  const handleYearSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filtersSliceActions.setYearFilter(+e.target.value));
  };

  const handleRatingSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filtersSliceActions.setRating(+e.target.value));
  };

  const handleTypeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filtersSliceActions.setMoviesType(filtersTypesKeysEnum[e.target.value]));
  };

  const handleButtonClick = () => {
    dispatch(filtersSliceActions.setDefault());
  };

  return (
    <FlexDiv extraClass={containerClass}>
      {year && (
        <Select
          defaultOption="Год"
          options={customYearOptions || yearOptions}
          onChange={handleYearSelect}
        />
      )}

      {rating && (
        <Select
          defaultOption="Рейтинг"
          options={customRatingOptions || ratingOptions}
          onChange={handleRatingSelect}
        />
      )}

      {type && (
        <Select
          defaultOption="Тип"
          options={customTypeOptions || typeOptions}
          onChange={handleTypeSelect}
        />
      )}

      {(year || rating || type) && (
        <Button
          type="contained"
          color="dark_blue"
          onClick={handleButtonClick}
        >
          Сбросить
        </Button>
      )}
    </FlexDiv>
  );
};

export default MoviesFilters;
