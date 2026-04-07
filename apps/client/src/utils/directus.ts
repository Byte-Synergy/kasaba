import {
  createDirectus,
  rest,
  authentication,
  staticToken,
} from "@directus/sdk";

const directusUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8055";

const directusToken = process.env.DIRECTUS_ADMIN_TOKEN;

export const getDirectusClient = (token?: string) => {
  const finalToken = token || directusToken;
  const client = createDirectus(directusUrl).with(rest());

  if (finalToken) {
    return client.with(staticToken(finalToken));
  }

  return client;
};
