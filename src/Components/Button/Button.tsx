import clsx from "clsx";
import React from "react";

import "./Button.scss";

interface Props {
  uppercase?: boolean;
  variant?: string;
  disabled?: boolean;
  appearance?: string;
  block?: boolean;
  onClick?: () => {};
  children?: any;
  className?: string;
}

const Button: React.FC<Props> = ({
  uppercase = false,
  variant = "default",
  disabled = false,
  appearance = "primary",
  block = false,
  onClick = () => null,
  children,
  className = "",
  ...props
}) => {
  const classes = clsx(
    "btn",
    `btn-${appearance}`,
    `btn-${variant}`,
    uppercase && "btn-uppercase",
    block && "btn-block",
    disabled && "btn-disabled",
    className
  );

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
