import React, { FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

export interface ButtonProps {
  type?: "contained" | "outlined" | "text";
  color?: "pink" | "dark_blue" | "white" | "gray";
  size?: "normal";
  submit?: boolean;
  onClick?: () => void;
  children: ReactNode;
  padding?: number;
}

const Button: FC<ButtonProps> = ({
  type = "contained",
  color = "pink",
  submit = false,
  size = "normal",
  onClick,
  children,
  padding,
}) => {
  const buttonClass = classNames(styles.button, {
    [styles[`button_${type}`]]: true,
    [styles[`button_${size}`]]: true,
    [styles[`button_${type}_${color}`]]: true,
  });

  return (
    <button
      className={buttonClass}
      onClick={onClick}
      type={submit ? "submit" : "button"}
      data-testid="Button"
      style={{ padding: `${padding}px` }}
    >
      {children}
    </button>
  );
};

export default Button;
