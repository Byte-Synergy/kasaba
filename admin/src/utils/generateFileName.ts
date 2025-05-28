import { v4 as uuidv4 } from "uuid";

/**
 * Fayllar uchun unikal nom generatsiya qiluvchi funksiya
 * @param originalFileName - Asl fayl nomi
 * @param prefix - Nom oldidan qo'shiladigan qo'shimcha (ixtiyoriy)
 * @returns Generatsiya qilingan unikal fayl nomi
 */
export function generateFileName(
  originalFileName: string,
  prefix: string = "file",
): string {
  // Faylning kengaytmasini ajratib olish
  const fileExtension = originalFileName.split(".").pop() || "";

  // UUID generatsiya qilish
  const uniqueId = uuidv4().split("-")[0]; // Faqat birinchi qismini olish

  // Sana va vaqtni qo'shish
  const timestamp = new Date().getTime().toString(36);

  // Generatsiya qilingan nom
  return `${prefix}_${timestamp}_${uniqueId}.${fileExtension}`;
}

/**
 * Rasmlar uchun nom generatsiya qiluvchi maxsus funksiya
 * @param originalFileName - Asl fayl nomi
 * @returns Generatsiya qilingan unikal rasm nomi
 */
export function generateImageFileName(originalFileName: string): string {
  return generateFileName(originalFileName, "img");
}

/**
 * Video fayllar uchun nom generatsiya qiluvchi funksiya
 * @param originalFileName - Asl fayl nomi
 * @returns Generatsiya qilingan unikal video fayl nomi
 */
export function generateVideoFileName(originalFileName: string): string {
  return generateFileName(originalFileName, "vid");
}

/**
 * Faylni tozalangan nomini olish
 * @param fileName - Fayl nomi
 * @returns Tozalangan fayl nomi
 */
export function sanitizeFileName(fileName: string): string {
  // Nomdan nojo belglarni olib tashlash
  return fileName
    .replace(/[^a-z0-9.]/gi, "_") // Nojo belgilarni alt chiziqqa almashtirish
    .replace(/__+/g, "_") // Bir nechta alt chiziqlarni biriga aylantrish
    .toLowerCase(); // Kichik harflarga o'tkazish
}

/**
 * Generatsiya qilingan fayl nomini tekshirish
 * @param fileName - Tekshiriladigan fayl nomi
 * @returns Fayl nomi to'g'ri formatdami
 */
export function isValidGeneratedFileName(fileName: string): boolean {
  // Nom UUID va timestamp elementlarini o'z ichiga olishi kerak
  const fileNameRegex = /^(img|vid|file)_[a-z0-9]+_[a-z0-9]+\.[a-z0-9]+$/;
  return fileNameRegex.test(fileName);
}
