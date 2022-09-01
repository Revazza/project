export const isGeorgian = (str) => {
  return str.length >= 2 ? /^([\u10D0-\u10F0]+)$/.test(str) : false;
};

export const emailValidation = (email) => {
  const substr = email.slice(-12, email.length);

  return (
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    ) && substr === "@redberry.ge"
  );
};

export const phoneValidation = (phone) => {
  return /^(\+?995)?(79\d{7}|5\d{8})$/.test(phone);
};

export const laptopNameValidation = (name) => {
  return /^[a-zA-Z0-9?[\]\_+=!@#()$%\^&*']*$/.test(name) && name.trim().length > 0;
};

export const isAllNum = (num) =>{

  return /^[0-9]*$/.test(num) && num.trim().length > 0;
}
