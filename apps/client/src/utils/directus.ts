import {
  createDirectus,
  rest,
  authentication,
  staticToken,
} from "@directus/sdk";

const directusUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8055";

export const getDirectusClient = (token?: string) => {
  const client = createDirectus(directusUrl).with(rest());

  if (token) {
    return client.with(staticToken(token));
  }

  return client;
};
