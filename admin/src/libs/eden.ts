"use server";

import type { AppType } from "@/types/server";
import { treaty } from "@elysiajs/eden";

if (!process.env.NEXT_PUBLIC_API_URL)
  throw new Error("NEXT_PUBLIC_API_URL is not set");

const eden = treaty<AppType>(process.env.NEXT_PUBLIC_API_URL).api.rest;

export default eden;
