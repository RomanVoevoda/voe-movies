"use client";
import { FC } from "react";
import { Button } from "@/shared/ui";
import { useTypedDispatch } from "@/shared/hooks";
import { filtersSliceActions } from "@/entities";
import styles from "./PaginationButton.module.scss";

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
      variant={isActive ? "contained" : "text"}
      color="dark_blue"
      size="content"
      extraClass={styles.button}
    >
      {page}
    </Button>
  );
};

export default PaginationButton;
