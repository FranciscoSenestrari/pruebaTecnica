import React from "react";
import CustomButton from "./Button/CustomButton";
import { Link } from "react-router";
import { logout } from "@/services/auteticate";

export default function Sidebar() {
  return (
    <aside className="w-60 bg-gray-100 border-r flex flex-col justify-between py-6 px-4 absolute z-20 h-full">
      <div className="space-y-6">
        <div className="flex flex-col items-center align-middle gap-2 mb-6">
          <span className="text-3xl">💳</span>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            PayManage
          </h2>
        </div>
        <nav className="space-y-2 text-sm font-medium">
          <CustomButton className="w-full">Home</CustomButton>
          <CustomButton className="w-full">Create Payment</CustomButton>
          <a
            href="#"
            className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-200"
          >
            📑 Payment Requests Overview
          </a>
        </nav>
      </div>
      <div className="flex botom-0">
        <button className="w-fit" onClick={() => logout()}>
          <Link to={"/"}>Logout</Link>
        </button>
      </div>
    </aside>
  );
}
