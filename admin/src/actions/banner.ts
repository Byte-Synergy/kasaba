"use server";

import eden from "@/libs/eden";
import { getUserSession } from "@/utils/session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function getBanners(
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const { data, error, status } = await fetcher.banner.get({ fetch });

  return { data, error, status };
}

export async function deleteBanner(
  bannerId: number,
  redirectTo?: string,
  fetch?: Omit<RequestInit, "headers" | "method">,
  fetcher: typeof eden = eden,
) {
  const cookiesStore = await cookies();
  const session = await getUserSession(cookiesStore);

  const { response } = await fetcher.banner({ bannerId }).delete(undefined, {
    fetch,
    headers: {
      authorization: `Bearer ${session}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to delete banner with ID ${bannerId}`);
  }

  if (redirectTo) redirect(redirectTo);
}

// export async function createBanner(
//   body: {
//     file: File | Blob;
//     type: "fit" | "full" | "link" | "hero1 | hero2"; // yoki sizdagi real turlar
//     [key: string]: any;
//   },
//   fetch?: Omit<RequestInit, "headers" | "method">,
//   fetcher: typeof eden = eden,
// ) {
//   const cookiesStore = await cookies();
//   const session = await getUserSession(cookiesStore);

//   const payload = {
//     url: body.url || "", // Ensure 'url' is provided or default to an empty string
//     file: body.file, // Ensure 'file' is of type File or Blob
//     type: body.type, // Explicitly assign 'type'
//     ...body, // Include other fields dynamically
//   };

//   const { data, error, status } = await fetcher.banner.post(payload, {
//     fetch,
//     headers: {
//       authorization: `Bearer ${session}`,
//     },
//   });

//   if (error) {
//     throw new Error(`Failed to create banner: ${error.message}`);
//   }

//   return { data, error, status };
// }