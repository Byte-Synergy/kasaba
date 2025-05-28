async function blobUrlToFile(
  blobUrl: string,
  fileName: string = "image.jpg",
): Promise<File> {
  try {
    // Blob URL dan blob ni olish
    const response = await fetch(blobUrl);
    const blob = await response.blob();

    // Fayl obyektini yaratish
    const file = new File([blob], fileName, { type: blob.type });
    return file;
  } catch (error) {
    console.error("Blob URL ni faylga aylantirishda xatolik:", error);
    throw error;
  }
}

export default blobUrlToFile;
