import { Button, FlexDiv, Icon, TextSlice } from "@/shared/ui";
import React, { FC } from "react";

const MoviesIdPageImagesTitle: FC = () => {
  return (
    <>
      <TextSlice
        color="dark_blue"
        align="center"
        size="titles_medium"
      >
        Кадры из фильма
      </TextSlice>
      <FlexDiv direction="row_reverse">
        <Button
          color="dark_blue"
          type="text"
          size="content"
        >
          Смотреть все &nbsp;
          <Icon
            color="dark_blue"
            direction="right"
            size="small"
          />
        </Button>
      </FlexDiv>
    </>
  );
};

export default MoviesIdPageImagesTitle;
