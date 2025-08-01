import CustomButton from "@/components/ui/Button/CustomButton";
import InputField from "@/components/ui/InputField/InputField";
import { PaymentSchema } from "@/schemas/PayemntSchema";
import { postData } from "@/services/api";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { useForm } from "react-hook-form";
export default function PeymentReques() {
  const { register, handleSubmit, formState, watch, setError } = useForm({
    resolver: valibotResolver(PaymentSchema),
  });

  const onSubmit = (data: any) => {
    postData("/payment-request", {
      payment_request: {
        description: data.description,
        first_due_date: data.first_due_date,
        first_total: data.first_total,
        payer_name: data.payer_name,
      },
    });
  };
  return (
    <div className=" flex flex-col ">
      <h1 className="text-2xl font-bold mb-4">Payment Request</h1>
      <div className="flex items-center justify-center">
        <form
          noValidate
          className="space-y-2 flex flex-col w-full max-w-md mt-4 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <InputField
              type="text"
              fieldError={formState.errors.description}
              {...register("description")}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter description"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Due Date
            </label>
            <InputField
              fieldError={formState.errors.first_due_date}
              type="date"
              {...register("first_due_date")}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Total
            </label>
            <InputField
              fieldError={formState.errors.first_total}
              {...register("first_total")}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter amount"
              inputMode="decimal"
              type="number"
              pattern="^\d*\.?\d{0,2}$"
              onChange={(e) => {
                const value = e.target.value;
                if (value && !/^\d*\.?\d{0,2}$/.test(value)) {
                  setError("first_total", {
                    type: "manual",
                    message:
                      "Please enter a valid positive amount with up to two decimal places.",
                  });
                }
              }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Payer Name
            </label>
            <InputField
              fieldError={formState.errors.payer_name}
              type="text"
              {...register("payer_name")}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Enter payer's name"
            />
          </div>

          <CustomButton
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Submit Request
          </CustomButton>
        </form>
      </div>
    </div>
  );
}
