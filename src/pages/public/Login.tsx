import Billway from "@assets/billway";
import InputField from "@components/ui/InputField/InputField";
import CustomButton from "@/components/ui/Button/CustomButton";
import { useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { UserSchema } from "@/schemas/UserSchema";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { login } from "@/services/auteticate";
import toast from "react-hot-toast";
import { FirebaseError } from "firebase/app";
import LoaderCompoenent from "@/components/LoaderComponent/LoaderCompoenent";
import "./style.css";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigator = useNavigate();
  const { register, handleSubmit, formState } = useForm({
    resolver: valibotResolver(UserSchema),
  });

  const onSubmit = (data: any) => {
    setLoading(true);
    try {
      const fetchUser = async () => {
        setLoading(true);
        try {
          const response = await login(data.email, data.password);
          if (response.user) {
            console.log("Login successful:", response.user);
            toast.success("Login successful!");
            navigator("/dashboard");
          }
        } catch (err: FirebaseError | any) {
          console.error("Error:", err);
          toast.error(`Login failed, ${err}"`);
        } finally {
          setLoading(false);
        }
      };
      fetchUser();
    } catch (error) {}
  };
  return (
    <div className="flex flex-col items-center justify-center gap-4 ">
      {loading && <LoaderCompoenent />}
      <div className="flex items-center justify-center gap-2">
        <Billway className="w-1/3 fill-blue-500  shadow-blue-700 drop-shadow-lg" />
        <h1 className="text-2xl font-bold shadow-blue-700 drop-shadow-lg">
          PayManager
        </h1>
      </div>
      <form
        className="flex flex-col w-full max-w-md mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label>
          <span className="text-sm font-semibold">Email</span>
          <InputField
            type="email"
            {...register("email")}
            fieldError={formState.errors.email}
          />
        </label>
        <label className="mt-4">
          <span className="text-sm font-semibold">Password</span>
          <InputField
            type="password"
            {...register("password")}
            fieldError={formState.errors.password}
          />
        </label>
        <CustomButton title="Login" className="mt-4" type="submit" />
      </form>
      <Link className="" to={"/signin"}>
        Sign In
      </Link>
    </div>
  );
}
