import React, { FC } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames";

export interface InputProps {
  type?: "text" | "search";
  size?: "normal";
  id?: string;
  label?: string;
  ariaLabel?: string;
  placeholder?: string;
  onChange?: () => void;
}

const Input: FC<InputProps> = ({
  type = "text",
  size = "normal",
  id,
  label,
  ariaLabel,
  placeholder,
  onChange,
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
        placeholder={placeholder}
        aria-label={ariaLabel}
        className={inputClass}
        data-testid="Input"
        onChange={onChange}
      />
    </>
  );
};

export default Input;
