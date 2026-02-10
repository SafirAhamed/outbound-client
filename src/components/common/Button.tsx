"use client";

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ type, ...props }: ButtonProps) {
  return <button type={type ?? "button"} {...props} />;
}
