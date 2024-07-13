import React from "react";
import clsx from "clsx";

const Button = ({ children, className, ...props }) => (
  <button
    {...props}
    className={clsx(
      "bg-white p-4 hover:bg-gray-200 active:bg-gray-300 rounded-md font-bold uppercase shadow-sm",
      "disabled:opacity-50",
      className
    )}
  >
    {children}
  </button>
);

export default Button;
