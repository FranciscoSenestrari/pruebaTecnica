import React, { ComponentProps } from "react";
import CustomButton from "../Button/CustomButton";

export default function Modal({
  closeModal,
  open,
  children,
  title,
}: { closeModal: () => void; open: boolean } & ComponentProps<"div">) {
  return (
    <div className="fixed inset-0 bg-black opacity-90 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-black"
          onClick={closeModal}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        {children}

        <div className="flex justify-end">
          <CustomButton
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={closeModal}
          >
            Cerrar
          </CustomButton>
        </div>
      </div>
    </div>
  );
}
