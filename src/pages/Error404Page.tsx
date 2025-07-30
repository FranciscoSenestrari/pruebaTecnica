import NotfoundSVG from "@/assets/notfound";
import React from "react";

export default function Error404Page() {
  return (
    <div
      className="w-dvw h-dvh
      flex items-center justify-center text-4xl font-bold text-gray-700"
    >
      <div className="flex flex-col items-center">
        <h1 className="mb-4">404 - Page Not Found</h1>
        <NotfoundSVG />
      </div>
    </div>
  );
}
