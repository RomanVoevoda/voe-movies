export interface IconFactoryProps extends BaseIconInterface {
  type?: "angle" | "xmark" | "search" | "check";
  color?: "gray" | "translucent" | "white" | "dark_blue";
  size?: "small" | "normal" | "big";
  direction?: "bottom" | "right" | "left" | "top";
  interactive?: boolean;
}

export interface IconProps extends BaseIconInterface {
  className: string;
}

interface BaseIconInterface {
  ariaLabel?: string;
  onClick?: () => void;
}
