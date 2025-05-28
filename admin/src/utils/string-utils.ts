/**
 * So'zlarni "kebab-case" formatiga keltiruvchi funksiya
 * @param {string} input
 * @returns {string}
 */
export function convertToKebabCase(input: string) {
  if (!input || typeof input !== "string") {
    return "";
  }

  const cleanString = input.replace(/[^\p{L}\p{N}\s]/gu, "");

  const words = cleanString.split(/\s+/);

  return words.join("-").toLowerCase();
}
