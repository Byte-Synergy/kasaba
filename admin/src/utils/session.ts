import { TOKEN_COOKIE_NAME } from "@/configs/cookie";
import eden from "@/libs/eden";
import { Cookies } from "@/types/cookie";

export function getUserSession(cookies: Pick<Cookies, "get">) {
  const sessionId = cookies.get(TOKEN_COOKIE_NAME)?.value;

  return sessionId;
}
export function setCookie(
  sessionId: string,
  cookies: Pick<Cookies, "set">,
  expires: number,
) {
  cookies.set(TOKEN_COOKIE_NAME, sessionId, {
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "lax",
    expires: Date.now() + expires * 1000,
  });
}

export function getUserFromSession(
  cookies: Pick<Cookies, "get">,
  fetcher: typeof eden = eden,
) {
  const sessionId = cookies.get(TOKEN_COOKIE_NAME)?.value;
  if (sessionId == null) return null;

  return getUserSessionById(sessionId, fetcher);
}

async function getUserSessionById(
  sessionId: string,
  fetcher: typeof eden = eden,
) {
  const { data, status } = await fetcher.users.getMe.get({
    headers: {
      authorization: `Bearer ${sessionId}`,
    },
  });
  return status === 200 ? data : null;
}

export async function updateUserSessionExpiration(
  cookies: Pick<Cookies, "get" | "set">,
) {
  const sessionId = cookies.get(TOKEN_COOKIE_NAME)?.value;
  if (sessionId == null) return null;

  const user = await getUserSessionById(sessionId);
  if (user == null) return;

  const { data, error } = await eden.auth.refresh.get({
    headers: {
      authorization: `Refresh ${sessionId}`,
    },
  });
  if (error) return;

  setCookie(data.id, cookies, data.exp);
}
