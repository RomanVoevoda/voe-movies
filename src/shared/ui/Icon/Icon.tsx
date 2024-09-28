import { FC } from "react";
import { IconFactoryProps } from "./types";
import AngleIcon from "./AngleIcon/AngleIcon";
import styles from "./Icon.module.scss";
import classNames from "classnames";
import XmarkIcon from "./XmarkIcon/XmarkIcon";
import SearchIcon from "./SearchIcon/SearchIcon";

const Icon: FC<IconFactoryProps> = ({
  type = "angle",
  color = "gray",
  size = "small",
  direction = "bottom",
  ariaLabel,
  onClick,
}) => {
  const iconClass = classNames({
    [styles[`icon`]]: true,
    [styles[`icon_${type}`]]: type,
    [styles[`icon_${color}`]]: color,
    [styles[`icon_${size}`]]: size,
    [styles[`icon_${direction}`]]: direction,
  });

  const iconProps = {
    className: iconClass,
    ariaLabel,
    onClick,
  };

  switch (type) {
    case "angle":
      return <AngleIcon {...iconProps} />;
    case "xmark":
      return <XmarkIcon {...iconProps} />;
    case "search":
      return <SearchIcon {...iconProps} />;
    default:
      return <AngleIcon {...iconProps} />;
  }
};

export default Icon;
