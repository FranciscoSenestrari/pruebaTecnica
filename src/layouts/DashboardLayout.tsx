import Sidebar from "@/components/ui/Sidebar/Sidebar";
import { auth } from "@/utils/firabase";
import React from "react";
import { Outlet } from "react-router";

export default function DashboardLayout() {
  const user = auth.currentUser?.email || "Guest";
  return (
    <div className="flex h-screen w-screen font-sans bg-white text-black">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <header className="flex justify-end items-center p-4 bg-gray-100 shadow-md z-10">
          <span className="font-medium">Welcome {user}</span>
        </header>

        <main className="flex-1 bg-white overflow-y-auto p-8">
          <Outlet />
        </main>
        <footer className="p-2  text-center text-sm font-bold bg-gray-300 font-sans text-gray-900">
          Francisco Senestrari
        </footer>
      </div>
    </div>
  );
}
