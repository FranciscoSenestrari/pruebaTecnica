import React, { useState } from "react";
import CustomButton from "../Button/CustomButton";
import { Link } from "react-router-dom";
import { logout } from "@/services/auteticate";
import logoutSVG from "@/assets/logout.svg";
import ArrowSVG from "@/assets/arrow";
import Billway from "@/assets/billway";

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <button
        className="fixed top-4 left-4 z-30 bg-gray-200 rounded p-2 shadow"
        onClick={() => setOpen((prev) => !prev)}
      >
        <ArrowSVG
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <aside
        className={`transition-all duration-300 bg-gray-100 border-r flex flex-col justify-between py-6 px-4 absolute z-20 h-full ${
          open ? "w-60 left-0" : "w-0 -left-64 overflow-hidden"
        }`}
        style={{ minWidth: open ? "15rem" : "0" }}
      >
        <div className="space-y-6">
          <div className="flex flex-col items-center align-middle gap-2 mb-6">
            <Billway className="w-1/6 fill-blue-500  shadow-blue-700 drop-shadow-lg p-0" />
            <h2 className="text-2xl font-bold flex items-center gap-2">
              PayManager
            </h2>
          </div>
          <nav className="space-y-2 text-sm font-medium">
            <CustomButton className="w-full">Home</CustomButton>
            <CustomButton className="w-full">Create Payment</CustomButton>
          </nav>
        </div>
        <div className="flex botom-0">
          <button className="w-fit" onClick={() => logout()}>
            <Link to={"/"} className="flex items-center gap-2 p-3 rounded-lg ">
              <img className="" src={logoutSVG} alt="logout" /> Logout
            </Link>
          </button>
        </div>
      </aside>
    </>
  );
}
