export interface IconFactoryProps extends BaseIconInterface {
  type?: "angle" | "xmark" | "search";
  color?: "gray" | "transcluent" | "white" | "dark_blue";
  size?: "small" | "normal" | "big";
  direction?: "bottom" | "right" | "left" | "top";
}

export interface IconProps extends BaseIconInterface {
  className: string;
}

interface BaseIconInterface {
  ariaLabel?: string;
  onClick?: () => void;
}
