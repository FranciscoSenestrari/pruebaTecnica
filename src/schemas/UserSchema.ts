import { object, string, minLength, pipe, email, nonEmpty } from "valibot";

export const UserSchema = object({
  email: pipe(
    string(),
    nonEmpty("Please enter your email."),
    email("Please enter a valid email address.")
  ),
  password: pipe(
    string(),
    nonEmpty("Please enter your password."),
    minLength(8, "Password must be at least 8 characters long.")
  ),
});

export const RegisterSchema = object({
  ...UserSchema.entries,
  confirm_password: pipe(string(), nonEmpty("Please confirm your passwor.")),
});
