import {
  object,
  string,
  minLength,
  maxLength,
  pipe,
  email,
  nonEmpty,
} from "valibot";

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
