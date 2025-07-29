import Billway from "@assets/billway";
import InputField from "@components/ui/InputField/InputField";
import CardsLogo from "@assets/cards.png";
import CustomButton from "@/components/ui/Button/CustomButton";

export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen w-screen max-sm:flex-col">
      <div className="w-[60%] h-full flex max-sm:hidden justify-center align-middle items-center">
        <img src={CardsLogo} alt="creditcards" />
      </div>
      <div className="w-full bg-neutral-200 h-full flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center justify-center gap-4 ">
          <div className="flex items-center justify-center gap-2">
            <Billway className="w-1/3 fill-blue-500  shadow-blue-700 drop-shadow-lg" />
            <h1 className="text-2xl font-bold shadow-blue-700 drop-shadow-lg">
              Payment
            </h1>
          </div>
          <form className="flex flex-col w-full max-w-md mt-4">
            <label>
              <span className="text-sm font-semibold">Email</span>
              <InputField type="email" />
            </label>
            <label className="mt-4">
              <span className="text-sm font-semibold">Password</span>
              <InputField type="password" />
            </label>
            <CustomButton title="Login" className="mt-4" />
          </form>
        </div>
      </div>
    </div>
  );
}
