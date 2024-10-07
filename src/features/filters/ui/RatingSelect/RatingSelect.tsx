"use client";
import React from "react";
import { Select } from "@/shared/ui";
import { filtersSliceActions } from "@/entities";
import { useTypedDispatch } from "@/shared/hooks";
import { ratingOptions } from "@/shared/consts";

interface RatingSelectProps {
  options?: string[];
}

const RatingSelect: React.FC<RatingSelectProps> = ({ options }) => {
  const dispatch = useTypedDispatch();

  const handleRatingSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filtersSliceActions.setRating(+e.target.value));
  };

  return (
    <Select
      defaultOption="Рейтинг"
      options={options || ratingOptions}
      onChange={handleRatingSelect}
    />
  );
};

export default RatingSelect;
