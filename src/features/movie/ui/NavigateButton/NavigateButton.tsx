"use client";

import { routesEnum } from "@/shared/config";
import { useRouter } from "next/navigation";
import React, { FC, ReactNode } from "react";
import styles from "./NavigateButton.module.scss";

interface NavigateButtonProps {
  route?: routesEnum;
  button: ReactNode;
  id?: number;
  type?: "back" | "push";
}

const NavigateButton: FC<NavigateButtonProps> = ({ route = "/", button, id, type = "push" }) => {
  const router = useRouter();

  const clickPushHandler = () => {
    router.push(id ? route.replace(":id", `${id}`) : route);
  };

  const clickBackHandler = () => {
    router.back();
  };

  return (
    <span
      className={styles.container}
      onClick={type === "push" ? clickPushHandler : clickBackHandler}
      role="link"
    >
      {button}
    </span>
  );
};

export default NavigateButton;
