import { NavigateButton } from "@/features";
import { routesEnum } from "@/shared/config";
import { Button, FlexDiv, Icon } from "@/shared/ui";
import React, { FC } from "react";

const MoviesIdPageButtons: FC = () => {
  return (
    <FlexDiv gap={80}>
      <NavigateButton
        type="push"
        route={routesEnum.home}
        button={
          <Button
            color="gray"
            type="text"
            size="content"
          >
            <Icon
              color="gray"
              type="angle"
              direction="left"
            />
            &nbsp; Главная
          </Button>
        }
      />

      <NavigateButton
        type="back"
        button={
          <Button
            color="gray"
            type="text"
            size="content"
          >
            <Icon
              color="gray"
              type="angle"
              direction="left"
            />
            &nbsp; Назад
          </Button>
        }
      />
    </FlexDiv>
  );
};

export default MoviesIdPageButtons;
