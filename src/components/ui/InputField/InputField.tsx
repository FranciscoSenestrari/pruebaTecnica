import React, { ComponentProps } from "react";
import { cn } from "@utils/utils";
import { FieldError } from "react-hook-form";

export default function InputField({
  className,
  fieldError,
  ...props
}: {
  fieldError?: FieldError | undefined;
} & ComponentProps<"input">) {
  return (
    <>
      <input
        className={cn(
          className,
          "w-full border rounded-md px-2  focus:border-blue-500 bg-white"
        )}
        {...props}
      />
      {fieldError && (
        <p className=" font-bold text-red-600 text-xs mt-1 shadow-red-400 drop-shadow-lg">
          {fieldError.message}
        </p>
      )}
    </>
  );
}
