import { NavigateButton } from "@/features";
import { routesEnum } from "@/shared/config";
import { Button, FlexDiv, Icon, TextSlice } from "@/shared/ui";
import React, { FC } from "react";

const MoviesPageTitle: FC = () => {
  return (
    <>
      <FlexDiv>
        <NavigateButton
          route={routesEnum.home}
          button={
            <Button
              type="text"
              color="gray"
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
