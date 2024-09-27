import React, { FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

export interface ButtonProps {
  type?: "contained" | "outlined" | "text";
  color?: "pink" | "dark_blue";
  submit?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  type = "contained",
  color = "pink",
  submit = false,
  onClick,
  children,
}) => {
  const buttonClass = classNames(styles.button, {
    [styles[`button_${type}`]]: true,
    [styles[`button_${type}_${color}`]]: true,
  });

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      type={submit ? "submit" : "button"}
      data-testid="Button"
    >
      {children}
    </button>
  );
};

export default Button;
