"use client";
import React from "react";
import { Select } from "@/shared/ui";
import { filtersSliceActions } from "@/entities";
import { useTypedDispatch } from "@/shared/hooks";
import { filtersTypesKeysEnum, typeOptions } from "@/shared/consts";

interface TypeSelectProps {
  options?: string[];
}

const TypeSelect: React.FC<TypeSelectProps> = ({ options }) => {
  const dispatch = useTypedDispatch();

  const handleTypeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(filtersSliceActions.setMoviesType(filtersTypesKeysEnum[e.target.value]));
  };

  return (
    <Select
      defaultOption="Тип"
      options={options || typeOptions}
      onChange={handleTypeSelect}
    />
  );
};

export default TypeSelect;
