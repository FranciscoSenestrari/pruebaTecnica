import React, { ComponentProps } from "react";
import { cn } from "@utils/utils";

export default function InputField({
  className,
  ...props
}: ComponentProps<"input">) {
  return (
    <input
      className={cn(
        className,
        "w-full border rounded-md px-2  focus:border-blue-500 bg-white"
      )}
      {...props}
    />
  );
}
