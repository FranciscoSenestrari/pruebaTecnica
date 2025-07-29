// src/components/ui/Button.tsx
import React, { ComponentProps } from "react";
import { buttonVariants } from "./buttonVariants";
import { VariantProps } from "tailwind-variants";
import { cn } from "@/utils/utils";

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    title?: string;
  };

export default function CustomButton({
  className,
  title,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {title ?? children}
    </button>
  );
}
