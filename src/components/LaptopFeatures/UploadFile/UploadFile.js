import styles from "./UploadFile.module.scss";
import React, { useEffect, useState } from "react";

function UploadFile() {
  const [img, setImg] = useState("");
  const [imgName, setImgName] = useState("");
  const [imgSize, setImgSize] = useState(0);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("laptop_image")) {
      const obj = {
        hasError: false,
        value: "",
      };
      localStorage.setItem("laptop_image", JSON.stringify(obj));
    } else {
      const image = JSON.parse(localStorage.getItem("laptop_image"));
      setImg(image.base64);
      setImgName(image.imgName);
      setImgSize(image.imgSize);
      console.log(image);
      if (image.hasError) {
        setHasError(true);
      }
    }
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const fileName = file.name;
    const fileSize = file.size;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (e) => {
      const base64 = e.target.result;
      setImg(base64);
      setImgName(fileName);
      setImgSize(fileSize);
      localStorage.setItem(
        "laptop_image",
        JSON.stringify({
          base64,
          imgName: fileName,
          imgSize: fileSize,
          hasError: false,
        })
      );
    };
  };

  const imgMBSize = (imgSize / 1024 ** 2).toFixed(2);

  return (
    <div
      className={
        hasError
          ? `${styles.file_wrapper} ${styles.error}`
          : styles.file_wrapper
      }
    >
      {!hasError && (
        <label className={styles.file_head}>
          ჩააგდე ან ატვირთე ლეპტოპის ფოტო
        </label>
      )}
      <label
        htmlFor="file-upload"
        className={styles.file_uploader}
        id={img !== "" ? styles.uploadAgain : ""}
      >
        {img !== "" ? "თავიდან ატვირთე" : "ატვირთე"}
      </label>
      <input
        onChange={handleFileChange}
        id="file-upload"
        type="file"
        accept="image/*"
      />
      {imgName !== "" && (
        <div className={styles.file_name}>
          <div className={styles.success_img}> </div>
          <span>{imgName}</span>
          <span className={styles.file_size}>{imgMBSize} mb</span>
        </div>
      )}
      {img !== "" && (
        <img className={styles.laptop_img} src={img} alt={imgName} />
      )}
    </div>
  );
}

export default UploadFile;
