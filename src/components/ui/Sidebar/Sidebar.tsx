import React, { useEffect, useRef } from "react";
import CustomButton from "../Button/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "@/services/auteticate";
import logoutSVG from "@/assets/logout.svg";
import ArrowSVG from "@/assets/arrow";
import Billway from "@/assets/billway";
import { useSidebar } from "@/store/sidebarStore";

export default function Sidebar() {
  const { isOpen, toggleSidebar, closeSidebar } = useSidebar();
  const navigate = useNavigate();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        closeSidebar();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeSidebar]);

  return (
    <>
      <button
        ref={buttonRef}
        className="fixed top-4 left-4 z-30 bg-gray-100 rounded p-2 shadow"
        onClick={toggleSidebar}
      >
        <ArrowSVG
          className={`transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <aside
        ref={sidebarRef}
        className={`transition-all duration-300 bg-gray-100 border-r flex flex-col justify-between py-6 px-4 absolute z-20 h-full ${
          isOpen ? "w-60 left-0" : "w-0 -left-64 overflow-hidden"
        }`}
        style={{ minWidth: isOpen ? "15rem" : "0" }}
      >
        <div className="space-y-6">
          <div className="flex flex-col items-center align-middle gap-2 mb-6">
            <Billway className="w-1/6 fill-blue-500  shadow-blue-700 drop-shadow-lg p-0" />
            <h2 className="text-2xl font-bold flex items-center gap-2">
              PayManager
            </h2>
          </div>
          <nav className="space-y-2 text-sm font-medium">
            <CustomButton
              className="w-full"
              onClick={() => navigate("/dashboard")}
            >
              Home
            </CustomButton>
            <CustomButton
              className="w-full"
              onClick={() => {
                navigate("/payment-request");
              }}
            >
              Peyment Request
            </CustomButton>
            <CustomButton
              className="w-full"
              onClick={() => {
                navigate("/payment-list");
              }}
            >
              Payment List
            </CustomButton>
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
