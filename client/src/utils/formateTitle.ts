export const FormateToTitle = (title?: string, countChar: number = 70) => {
  if (title) {
    if (title.length < 50) return title;
    return `${title.slice(0, countChar)}...`;
  }
  return "";
};
