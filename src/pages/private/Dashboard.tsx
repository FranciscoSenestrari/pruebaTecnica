import DashboardCards from "@/components/ui/DashboardCards/DashboardCards";
import React from "react";

export default function Dashboard() {
  return (
    <div className=" flex flex-col  p-4">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="flex gap-4 mt-6 max-sm:flex-col justify-evenly">
        <DashboardCards title="Dashboard Overview">
          <p>Contenido del Dashboard Overview</p>
        </DashboardCards>
        <DashboardCards title="Recent Activities" />
      </div>
    </div>
  );
}
