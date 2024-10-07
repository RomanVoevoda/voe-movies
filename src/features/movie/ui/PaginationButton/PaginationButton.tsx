"use client";
import { FC } from "react";
import { Button } from "@/shared/ui";
import { useTypedDispatch } from "@/shared/hooks";
import { filtersSliceActions } from "@/entities";

interface PaginationButtonProps {
  page: number;
  isActive?: boolean;
}

const PaginationButton: FC<PaginationButtonProps> = ({ page, isActive }) => {
  const dispatch = useTypedDispatch();

  const handleClick = () => {
    dispatch(filtersSliceActions.setPage(page));
  };

  return (
    <Button
      onClick={handleClick}
      type={isActive ? "contained" : "text"}
      padding={5}
      color="dark_blue"
      size="content"
    >
      {page}
    </Button>
  );
};

export default PaginationButton;
