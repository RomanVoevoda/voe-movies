"use client";

import React, { ChangeEvent, FC, useEffect, useRef, useState } from "react";
import styles from "./Select.module.scss";
import classNames from "classnames";
import Icon from "../Icon/Icon";

export interface SelectProps {
  options: string[];
  defaultOption: string;
  id?: string;
  ariaLabel?: string;
  label?: string;
  size?: "small";
  color?: "gray";
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<SelectProps> = ({
  options,
  defaultOption,
  id,
  ariaLabel,
  label,
  onChange,
  size = "small",
  color = "gray",
}) => {
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const filteredOptions = Array.from(new Set(options));

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [isOpen, onChange]);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(isOpen);

    const event = new Event("change", {
      bubbles: true,
    }) as unknown as ChangeEvent<HTMLSelectElement>;

    Object.defineProperty(event, "target", {
      writable: false,
      value: { value: option },
    });

    onChange?.(event);
  };

  const handleSelectClick = () => {
    setIsOpen((prev) => !prev);
  };

  const selectClass = classNames({
    [styles[`select`]]: true,
    [styles[`select_${size}`]]: size,
    [styles[`select_${color}`]]: color,
  });

  const optionsClass = classNames({
    [styles[`select__options`]]: true,
    [styles[`select__options_open`]]: isOpen,
  });

  return (
    <>
      {label && (
        <label
          htmlFor={id}
          data-testid="Label"
        >
          {label}
        </label>
      )}

      <div
        id={id}
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        className={selectClass}
        onClick={handleSelectClick}
        role="select"
        tabIndex={0}
        ref={rootRef}
        data-testid="Select"
      >
        <p>{selectedOption}</p>

        <span className={styles.select__icon}>
          <Icon
            color={color}
            size={size}
            type="angle"
            direction={isOpen ? "top" : "bottom"}
          />
        </span>

        <div
          className={optionsClass}
          data-testid="options-container"
        >
          <div className={styles.select__container}>
            {filteredOptions.map((option) => (
              <div
                key={option}
                role="option"
                className={styles.select__option}
                onClick={() => handleOptionClick(option)}
                data-testid={`Option ${option}`}
              >
                <p>{option}</p>
                {option === selectedOption && (
                  <span className={styles.select__icon}>
                    <Icon
                      color={color}
                      size={size}
                      type="check"
                    />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Select;
