"use client";
import { FlexDiv, TextSlice } from "@/shared/ui";
import { FC } from "react";
import { PaginationButton } from "@/features";
import { useTypedSelector } from "@/shared/hooks";

interface MoviesPaginationProps {
  pagesCount: number;
}

const MoviesPagination: FC<MoviesPaginationProps> = ({ pagesCount }) => {
  const currentPage = useTypedSelector((store) => store.filters.page);

  const buttonsValues = [
    currentPage >= 3 ? currentPage - 2 : undefined,
    currentPage >= 2 ? currentPage - 1 : undefined,
    currentPage,
    currentPage <= pagesCount - 1 ? currentPage + 1 : undefined,
    currentPage <= pagesCount - 2 ? currentPage + 2 : undefined,
  ];

  return (
    <FlexDiv
      justify="center"
      align="center"
      wrap="nowrap"
      gap={5}
    >
      {currentPage > 3 && <PaginationButton page={1} />}

      {currentPage > 3 && (
        <TextSlice
          family="medium"
          size="small"
          expanse="content"
        >
          ...
        </TextSlice>
      )}

      {buttonsValues.map((p) =>
        p ? (
          <PaginationButton
            key={p}
            page={p}
            isActive={p === currentPage}
          />
        ) : null,
      )}

      {currentPage < pagesCount - 2 && (
        <TextSlice
          family="medium"
          size="small"
          expanse="content"
        >
          ...
        </TextSlice>
      )}

      {currentPage < pagesCount - 2 && <PaginationButton page={pagesCount} />}
    </FlexDiv>
  );
};

export default MoviesPagination;
