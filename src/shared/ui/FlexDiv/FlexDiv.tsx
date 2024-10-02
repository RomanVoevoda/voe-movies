import classNames from "classnames";
import React, { FC, ReactNode } from "react";
import styles from "./FlexDiv.module.scss";

export interface FlexDivProps {
  justify?: "start" | "center" | "end";
  align?: "start" | "center" | "end";
  direction?: "row" | "column" | "row_reverse" | "column_reverse";
  wrap?: "wrap" | "nowrap";
  extraClass?: string;
  gap?: number;
  children?: ReactNode;
}
const FlexDiv: FC<FlexDivProps> = ({
  direction = "row",
  align = "center",
  justify = "start",
  wrap = "wrap",
  gap = 0,
  children,
  extraClass,
}) => {
  const flexClass = classNames(styles.flex, {
    [styles[`flex_justify_${justify}`]]: justify,
    [styles[`flex_align_${align}`]]: align,
    [styles[`flex_${direction}`]]: direction,
    [styles[`flex_${wrap}`]]: wrap,
    [`${extraClass}`]: extraClass,
  });
  return (
    <div
      className={flexClass}
      style={{ gap: `${gap}px` }}
      data-testid="FlexDiv"
    >
      {children}
    </div>
  );
};

export default FlexDiv;
