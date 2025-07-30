import CustomButton from "@/components/ui/Button/CustomButton";
import InputField from "@/components/ui/InputField/InputField";
import { UserSchema } from "@/schemas/UserSchema";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form";

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: valibotResolver(UserSchema),
  });
  const onSubmit = (data: any) => {};
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
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
