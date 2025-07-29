// src/components/ui/button.ts
import { tv } from "tailwind-variants";

export const buttonVariants = tv({
  base: "inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",

  variants: {
    variant: {
      default: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-300",
      confirm:
        "bg-green-500 text-white hover:bg-green-600 focus:ring-green-300",
      danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-300",
      warning:
        "bg-yellow-400 text-black hover:bg-yellow-500 focus:ring-yellow-300",
      ghost:
        "bg-transparent hover:bg-gray-100 text-gray-800 focus:ring-gray-300",
    },
    size: {
      sm: "text-sm px-3 py-1.5",
      md: "text-base px-4 py-2",
      lg: "text-lg px-5 py-3",
    },
  },

  defaultVariants: {
    variant: "default",
    size: "md",
  },
});
