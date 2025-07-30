import React from "react";
import { Outlet } from "react-router-dom";
import CardsLogo from "@assets/cards.png";
import LoaderCompoenent from "@/components/LoaderComponent/LoaderCompoenent";
import { useState } from "react";

export default function IndexLayout() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen w-screen max-sm:flex-col">
      {loading && <LoaderCompoenent />}
      <div className="w-[60%] h-full flex max-sm:hidden justify-center align-middle items-center">
        <img src={CardsLogo} alt="creditcards" />
      </div>
      <div className="w-full bg-neutral-200 h-full flex flex-col items-center justify-center p-4">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
