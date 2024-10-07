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
            type="text"
            size="content"
            padding={0}
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
            type="text"
            size="content"
            padding={0}
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
            type="text"
            size="content"
            padding={0}
          >
            Популярные сериалы
          </Button>
        }
      />
    </FlexDiv>
  );
};

export default FooterButtons;
