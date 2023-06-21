export const asinValidation = (asin) => {
  return typeof asin === "string" && asin.match(/^[A-Z0-9]{10}$/) !== null;
};
export const urlValidation = (url) => {
  const regex =
    /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
  return !!url.match(regex);
};
