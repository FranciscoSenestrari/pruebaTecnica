import React, { ComponentProps } from "react";
import { cn } from "../utils/utils";

export default function InputField({
  className,
  ...props
}: ComponentProps<"input">) {
  return (
    <input
      className={cn(className, "w-full border-2 rounded-md p-2 ")}
      {...props}
    />
  );
}
