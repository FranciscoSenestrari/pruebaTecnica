import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@utils/firabase";

export const login = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};
export const registerUser = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
export const logout = () => {
  return auth.signOut();
};
