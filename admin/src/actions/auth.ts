"use server";

import { cookies } from "next/headers";
import { setCookie } from "@/utils/session";
import eden from "@/libs/eden";
import { redirect } from "next/navigation";
import { TOKEN_COOKIE_NAME } from "@/configs/cookie";

export async function signIn(
  username: string,
  password: string,
  fetcher: typeof eden = eden,
  fetch?: Omit<RequestInit, "headers" | "method">,
) {
  const { error, data } = await fetcher.auth.signIn.post(
    {
      password,
      username,
    },
    {
      fetch,
    },
  );

  if (error) return `Login muvaffaqiyatsiz. Iltimos, qayta uruning.`;

  setCookie(data.session.id, await cookies(), data.session.exp);

  redirect("/");
}

export async function logOut() {
  // fetcher: typeof eden = eden,
  // fetch?: Omit<RequestInit, "headers" | "method">
  const cookiesStore = await cookies();
  cookiesStore.delete(TOKEN_COOKIE_NAME);

  redirect("/login");
}
