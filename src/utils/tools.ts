export const deepClone = <T = any>(data: T): T => {
  return JSON.parse(JSON.stringify(data));
};
