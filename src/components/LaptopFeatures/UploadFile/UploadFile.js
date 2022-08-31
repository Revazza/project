import styles from "./UploadFile.module.scss";
import React, { useEffect, useState } from "react";
import { uploadFile } from "../../../helperFunctions/HelperFunctions";

function UploadFile() {
  const [img, setImg] = useState('');

  useEffect(()=>{
    if(!localStorage.getItem('laptop_image'))
    {
      localStorage.setItem('laptop_image','');
    }
    else{
      const base64 = JSON.parse(localStorage.getItem('laptop_image'));
      setImg(base64);
    }
  },[]);

  const handleFileChange = (event) => {
    let files = event.target.files;
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (e) => {
      const base64 = e.target.result;
      setImg(base64);
      localStorage.setItem('laptop_image',JSON.stringify(base64));
    };
  };

  return (
    <div className={`${styles.file_wrapper} ${styles.error}`}>
      {img==='' && (
        <React.Fragment>
          <label className={styles.file_head}>
            ჩააგდე ან ატვირთე ლეპტოპის ფოტო
          </label>
          <label htmlFor="file-upload" className={styles.file_uploader}>
            ატივრთე
          </label>
          <input
            onChange={handleFileChange}
            id="file-upload"
            type="file"
            accept="image/*"
          />
        </React.Fragment>
      )}
      {img !=='' && <img className={styles.laptop_img} src={img} alt="okiedokie" />}
    </div>
  );
}

export default UploadFile;
