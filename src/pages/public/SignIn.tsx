import LoaderCompoenent from "@/components/LoaderComponent/LoaderCompoenent";
import CustomButton from "@/components/ui/Button/CustomButton";
import InputField from "@/components/ui/InputField/InputField";
import { UserSchema } from "@/schemas/UserSchema";
import { registerUser } from "@/services/auteticate";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: valibotResolver(UserSchema),
  });
  const [loading, setLoading] = useState(false);
  const onSubmit = (data: any) => {
    try {
      setLoading(true);
      registerUser(data.email, data.password);
      toast.success("Sign-in successful with data:");
      setLoading(false);
    } catch (error) {
      toast.error("Sign-in failed, please try again.");
      setLoading(false);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        {loading && <LoaderCompoenent />}

        <h1 className="text-2xl font-bold shadow-blue-700 drop-shadow-lg">
          Sign In
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
        <CustomButton title="Sign In" className="mt-4" type="submit" />
      </form>
    </>
  );
}
