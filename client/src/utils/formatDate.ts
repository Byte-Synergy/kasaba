const MONTHS = [
  "yanvar",
  "fevral",
  "mart",
  "aprel",
  "may",
  "iyun",
  "iyul",
  "avgust",
  "sentabr",
  "oktabr",
  "noyabr",
  "dekabr",
];

export const formatDate = (date: string | Date): string => {
  const d = new Date(date);

  const year = d.getFullYear();
  const month = d.getMonth();
  const day = String(d.getDate()).padStart(2, "0");

  return `${day}-${MONTHS[month]}, ${year}`;
};

export const formatTime = (data: string | Date): string => {
  return new Date(data).toLocaleString("uz-UZ", {
    timeZone: "Asia/Tashkent",
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const formatDateToDateTime = (date: string) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();
  const hour =
    dateObj.getHours() >= 0 && dateObj.getHours() <= 9
      ? `0${dateObj.getHours()}`
      : dateObj.getHours();
  const minute =
    dateObj.getMinutes() >= 0 && dateObj.getMinutes() <= 9
      ? `0${dateObj.getMinutes()}`
      : dateObj.getMinutes();
  return `${day}-${MONTHS[month]} ${year}, ${hour}:${minute}`;
};

export const formatDateToNumber = (date: string) => {
  const d = new Date(date)

  const year = d.getFullYear()
  const month = String(d.getMonth()).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")

  return `${day}.${month}.${year}`
}