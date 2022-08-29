export const isGeorgian = (str) => {
  return str.length >= 2 ? /^([\u10D0-\u10F0]+)$/.test(str) : false;
};
