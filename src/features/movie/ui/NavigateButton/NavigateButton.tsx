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

  const handleNavigation = () => {
    if (type === "push") {
      router.push(id ? route.replace(":id", `${id}`) : route);
    } else {
      router.back();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleNavigation();
    }
  };

  return (
    <span
      className={styles.container}
      onClick={handleNavigation}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="link"
    >
      {button}
    </span>
  );
};

export default NavigateButton;
