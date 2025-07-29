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
    nonEmpty("Por favor ingrese su email."),
    email(" El formato del email no es valido.")
  ),
  password: pipe(
    string(),
    nonEmpty("Por favor ingrese su contraseña."),
    minLength(8, "La contraseña debe tener al menos 8 caracteres.")
  ),
});
