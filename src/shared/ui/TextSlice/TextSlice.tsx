import classNames from "classnames";
import React, { FC, ReactNode } from "react";
import styles from "./TextSlice.module.scss";

export interface TextSliceProps {
  align?: "start" | "center" | "end";
  color?:
    | "black"
    | "dark_blue"
    | "blue"
    | "light_gray"
    | "gray"
    | "yellow"
    | "white"
    | "pink"
    | "transcluent";
  size?:
    | "small"
    | "normal"
    | "big"
    | "banners_small"
    | "banners_big"
    | "titles_small"
    | "titles_big";
  family?: "regular" | "medium" | "bold";
  indent?: number;
  children?: ReactNode;
}

const TextSlice: FC<TextSliceProps> = ({
  align = "start",
  color = "black",
  size = "normal",
  family = "regular",
  indent = 0,
  children,
}) => {
  const textClass = classNames(styles.text, {
    [styles[`text_color_${color}`]]: color,
    [styles[`text_align_${align}`]]: align,
    [styles[`text_size_${size}`]]: size,
    [styles[`text_family_${family}`]]: family,
  });
  return (
    <p
      className={textClass}
      style={{ textIndent: `${indent}px` }}
      data-testid="TextSlice"
    >
      {children}
    </p>
  );
};

export default TextSlice;