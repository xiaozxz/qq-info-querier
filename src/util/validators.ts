export const isQQNumber = (str: string): boolean => {
  let reg = /^[1-9][0-9]{4,10}$/g;
  return reg.test(str);
};
