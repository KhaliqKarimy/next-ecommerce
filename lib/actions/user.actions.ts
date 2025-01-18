"use server";

import { signIn, signOut } from "@/auth";

import { IUserSignIn } from "@/types";
import { redirect } from "next/navigation";

export async function signInWithCredentials(user: IUserSignIn) {
  return await signIn("credentials", { ...user, redirect: false });
}

export const SignOut = async () => {
  const redirecTo = await signOut({ redirect: false });

  redirect(redirecTo.redirect);
};
