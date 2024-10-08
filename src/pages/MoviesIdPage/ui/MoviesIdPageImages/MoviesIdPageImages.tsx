import { FlexDiv } from "@/shared/ui";
import React, { FC } from "react";
import MoviesIdPageImagesTitle from "./MoviesIdPageImagesTitle/MoviesIdPageImagesTitle";
import MoviesIdPageImagesContent from "./MoviesIdPageImagesContent/MoviesIdPageImagesContent";

const MoviesIdPageImages: FC = () => {
  return (
    <FlexDiv
      direction="column"
      align="center"
      gap={20}
    >
      <MoviesIdPageImagesTitle />
      <MoviesIdPageImagesContent />
    </FlexDiv>
  );
};

export default MoviesIdPageImages;
