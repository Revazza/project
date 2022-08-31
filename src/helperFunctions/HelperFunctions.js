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
  return /^(\+?995)?(79\d{7}|5\d{8})$/.test(phone)
};

export const uploadFile = (inputElement)=> {
  let file = inputElement.files[0];
  let reader = new FileReader();
  reader.onloadend = function() {
    console.log('Encoded Base 64 File String:', reader.result);
    return reader.result;
    
    /******************* for Binary ***********************/
    let data=(reader.result).split(',')[1];
     let binaryBlob = atob(data);
     console.log('Encoded Binary File String:', binaryBlob);
    return binaryBlob;
  }
  reader.readAsDataURL(file);
}
