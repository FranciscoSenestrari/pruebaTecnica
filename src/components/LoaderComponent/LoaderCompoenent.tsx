import React from "react";

export default function LoaderCompoenent() {
  //mejorar logica con hooks
  return (
    <div className=" w-lvw h-dvh absolute top-0 left-0  flex flex-col items-center justify-center opacity-70 bg-black">
      <div className="flex items-center justify-center h-full">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500"></div>
      </div>
    </div>
  );
}
