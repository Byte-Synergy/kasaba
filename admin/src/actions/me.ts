"use server";

import { TOKEN_COOKIE_NAME } from "@/configs/cookie";
import eden from "@/libs/eden";
import { getUserSession } from "@/utils/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getMe(
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const cookiesStore = await cookies();
  const session = await getUserSession(cookiesStore);

  const { data, error, status } = await fetcher.users.getMe.get({
    headers: {
      authorization: `Bearer ${session}`,
    },
    fetch,
  });

  return { data, error, status };
}

export async function logout() {
  const cookiesStore = await cookies();

  cookiesStore.delete(TOKEN_COOKIE_NAME);

  redirect("/login");
}
