"use client";

import { routesEnum } from "@/shared/config";
import { useRouter } from "next/navigation";
import React, { FC, ReactNode } from "react";
import styles from "./NavigateButton.module.scss";

interface NavigateButtonProps {
  route: routesEnum;
  button: ReactNode;
  id?: number;
}

const NavigateButton: FC<NavigateButtonProps> = ({ route, button, id }) => {
  const router = useRouter();

  const clickHandler = () => {
    router.push(id ? route.replace(":id", `${id}`) : route);
  };

  return (
    <span
      className={styles.container}
      onClick={clickHandler}
    >
      {button}
    </span>
  );
};

export default NavigateButton;
