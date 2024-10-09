import { NavigateButton } from "@/features";
import { routesEnum } from "@/shared/config";
import { Button, FlexDiv } from "@/shared/ui";
import React, { FC } from "react";
import styles from "./FooterButtons.module.scss";

const FooterButtons: FC = () => {
  return (
    <FlexDiv
      wrap="nowrap"
      justify="end"
      extraClass={styles.container}
    >
      <NavigateButton
        route={routesEnum.home}
        button={
          <Button
            color="white"
            variant="text"
            size="content"
          >
            Главная
          </Button>
        }
      />
      <NavigateButton
        route={routesEnum.home}
        button={
          <Button
            color="white"
            variant="text"
            size="content"
          >
            Популярные фильмы
          </Button>
        }
      />
      <NavigateButton
        route={routesEnum.home}
        button={
          <Button
            color="white"
            variant="text"
            size="content"
          >
            Популярные сериалы
          </Button>
        }
      />
    </FlexDiv>
  );
};

export default FooterButtons;
