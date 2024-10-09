import React, { ChangeEvent, FC } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

export interface InputProps {
  type?: "text" | "search";
  size?: "adaptive" | "normal";
  id?: string;
  label?: string;
  ariaLabel?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
  type = "text",
  size = "normal",
  id,
  label,
  ariaLabel,
  ...props
}) => {
  const inputClass = classNames({
    [styles["input"]]: true,
    [styles[`input_${size}`]]: size,
  });

  return (
    <>
      {label && (
        <label
          htmlFor={id}
          data-testid="InputLabel"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={id}
        className={inputClass}
        data-testid="Input"
        aria-label={ariaLabel}
        {...props}
      />
    </>
  );
};

export default Input;
