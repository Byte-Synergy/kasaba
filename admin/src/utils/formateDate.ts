const Month = [
  "Yanvar",
  "Fevral",
  "Mart",
  "Aprel",
  "May",
  "Iyun",
  "Iyul",
  "Avgust",
  "Sentabr",
  "Oktabr",
  "Noyabr",
  "Dekabr",
];

// Format date to dd-mm-yyyy
export const formatDate = (date: string) => {
  const dateObj = new Date(date);
  const day = dateObj.getDate();
  const month = dateObj.getMonth();
  const year = dateObj.getFullYear();
  return `${day}-${Month[month]}${year}`;
};

// Format date to hh:mm
export const formatDateToTime = (date: string) => {
  const dateObj = new Date(date);
  const hour = dateObj.getHours();
  const minute = dateObj.getMinutes();
  return `${hour}:${minute}`;
};

// Format date to dd-mm-yyyy hh:mm
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
  return `${day}-${Month[month]} ${year}, ${hour}:${minute}`;
};
