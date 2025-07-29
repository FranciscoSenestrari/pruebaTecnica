import React from "react";
import Billway from "../../assets/billway";
import CreditCards from "../../assets/cards.png";
import InputField from "../../components/InputField";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen w-screen max-sm:flex-col">
      <div className="w-[60%] h-full flex max-sm:hidden justify-center align-middle items-center">
        <img src={CreditCards} alt="creditcards" />
      </div>
      <div className="w-full bg-neutral-200 h-full flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center justify-center gap-2">
            <Billway className="w-1/3" />
            <h1 className="text-2xl font-bold">Payment</h1>
          </div>
          <form action="">
            <InputField />
          </form>
        </div>
      </div>
    </div>
  );
}
