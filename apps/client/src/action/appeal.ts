"use server";

import { getDirectusClient } from "@/utils/directus";
import { createItem } from "@directus/sdk";

export type AppealData = {
  full_name: string;
  phone_number: string;
  type: "question" | "offer" | "appeal";
  message: string;
};

export async function submitAppeal(data: AppealData) {
  const client = getDirectusClient();

  try {
    const result = await client.request(
      createItem("appeals", {
        full_name: data.full_name,
        phone_number: data.phone_number,
        type: data.type,
        message: data.message,
        status: "not_read",
      })
    );
    return { success: true, data: result };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Failed to submit appeal";
    console.error("Error submitting appeal to Directus:", error);
    return { success: false, error: errorMessage };
  }
}
