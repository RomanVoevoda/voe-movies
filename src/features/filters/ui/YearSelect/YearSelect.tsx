"use client";
import React from "react";
import { Select } from "@/shared/ui";
import { filtersSliceActions } from "@/entities";
import { useTypedDispatch } from "@/shared/hooks";
import { yearOptions } from "@/shared/consts";

interface YearSelectProps {
  options?: string[];
}

const YearSelect: React.FC<YearSelectProps> = ({ options }) => {
  const dispatch = useTypedDispatch();

  const handleYearSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filtersSliceActions.setYearFilter(+e.target.value));
  };

  return (
    <Select
      defaultOption="Год"
      options={options || yearOptions}
      onChange={handleYearSelect}
    />
  );
};

export default YearSelect;
