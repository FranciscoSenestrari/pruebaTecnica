import {
  object,
  string,
  pipe,
  nonEmpty,
  date,
  number,
  maxLength,
  transform,
  regex,
} from "valibot";

export const PaymentSchema = object({
  description: pipe(string(), nonEmpty("Please enter a description.")),
  first_due_date: pipe(
    string(),
    transform((value) => new Date(value)),
    date("Please enter a valid date.")
  ),
  first_total: pipe(
    string(),
    nonEmpty("Please enter the first total amount."),
    regex(/^\d*\.?\d{0,2}$/, "Please enter a valid amount with"),
    transform((value) => parseFloat(value)),
    number("Please enter a valid amount.")
  ),
  payer_name: pipe(
    string(),
    nonEmpty("Please enter the payer's name."),
    maxLength(200, "Payer's name cannot exceed 100 characters.")
  ),
});
