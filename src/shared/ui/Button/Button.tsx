import React, { FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames";

export interface ButtonProps {
  variant?: "contained" | "outlined" | "text";
  color?: "pink" | "dark_blue" | "white" | "gray";
  size?: "content" | "normal";
  submit?: boolean;
  onClick?: () => void;
  extraClass?: string;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  variant = "contained",
  color = "pink",
  size = "normal",
  children,
  submit,
  extraClass,
  ...props
}) => {
  const buttonClass = classNames(styles.button, {
    [styles[`button_${variant}`]]: true,
    [styles[`button_${size}`]]: true,
    [styles[`button_${variant}_${color}`]]: true,
    ...(extraClass ? { [extraClass]: true } : {}),
  });

  return (
    <button
      className={buttonClass}
      data-testid="Button"
      type={submit ? "submit" : "button"}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
