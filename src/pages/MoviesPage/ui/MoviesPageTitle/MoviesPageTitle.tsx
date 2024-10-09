import { NavigateButton } from "@/features";
import { routesEnum } from "@/shared/config";
import { Button, FlexDiv, Icon, TextSlice } from "@/shared/ui";
import React, { FC } from "react";
import MoviePageFilters from "../MoviePageFilters/MoviePageFilters";

const MoviesPageTitle: FC = () => {
  return (
    <>
      <FlexDiv>
        <NavigateButton
          route={routesEnum.home}
          button={
            <Button
              variant="text"
              color="gray"
              size="content"
            >
              <Icon
                type="angle"
                direction="left"
                color="gray"
              />
              &nbsp; Назад
            </Button>
          }
        />
      </FlexDiv>

      <MoviePageFilters />

      <TextSlice
        color="dark_blue"
        family="medium"
        size="normal"
        align="center"
      >
        Результаты поиска
      </TextSlice>
    </>
  );
};

export default MoviesPageTitle;
