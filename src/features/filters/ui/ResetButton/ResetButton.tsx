"use client";
import React from "react";
import { Button } from "@/shared/ui";
import { useTypedDispatch } from "@/shared/hooks";
import { filtersSliceActions } from "@/entities";

const ResetButton: React.FC = () => {
  const dispatch = useTypedDispatch();

  const handleReset = () => {
    dispatch(filtersSliceActions.setDefault());
  };

  return (
    <Button
      variant="contained"
      color="dark_blue"
      onClick={handleReset}
    >
      Сбросить
    </Button>
  );
};

export default ResetButton;
