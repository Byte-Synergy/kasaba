"use server";

import { getUserSession } from "@/utils/session";
import { cookies } from "next/headers";

export async function getSessionData() {
  return await getUserSession(await cookies());
}
