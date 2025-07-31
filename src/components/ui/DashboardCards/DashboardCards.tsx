import { cn } from "@/utils/utils";
import React, { ComponentProps } from "react";
import CustomButton from "../Button/CustomButton";

export default function DashboardCards({
  title,
  children,
  classNameBody,
}: Readonly<
  ComponentProps<"div"> & { title?: string; classNameBody?: string }
>) {
  return (
    <div className="bg-neutral-300 shadow-md rounded-lg p-6 w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <div className={cn(classNameBody, "flex flex-wrap")}>{children}</div>
    </div>
  );
}
