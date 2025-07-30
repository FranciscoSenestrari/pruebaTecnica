import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@utils/firabase";

export const login = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const logout = () => {
  return auth.signOut();
};
