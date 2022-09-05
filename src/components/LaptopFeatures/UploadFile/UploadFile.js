import styles from "./UploadFile.module.scss";
import React, { useEffect, useState } from "react";

function UploadFile(props) {
  const [img, setImg] = useState("");
  const [imgName, setImgName] = useState("");
  const [imgSize, setImgSize] = useState(0);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const fileName = file.name;
    const fileSize = file.size;
    props.onChangeFile(file);

    const blob = new Blob([file], { type: "image/jpeg" });
    const blobURL = URL.createObjectURL(blob);

    setImg(blobURL);
    setImgName(fileName);
    setImgSize(fileSize);
  };

  const imgMBSize = (imgSize / 1024 ** 2).toFixed(2);

  const isMobile = window.innerWidth <= 400;

  return (
    <div
      className={
        props.hasError
          ? `${styles.file_wrapper} ${styles.error}`
          : styles.file_wrapper
      }
    >
      {props.hasError && <div className={styles.errorImg}></div>}
      {!isMobile && (
        <label className={styles.file_head}>
          ჩააგდე ან ატვირთე ლეპტოპის ფოტო
        </label>
      )}
      {isMobile && (
        <div className={styles.mobile_file_head}>
          <div className={styles.camera_img}></div>
          <label id={styles.mobile_head} className={styles.file_head}>
            ლეპტოპის ფოტოს ატვირთვა
          </label>
        </div>
      )}

      <label
        htmlFor="file-upload"
        className={styles.file_uploader}
        id={img !== "" ? styles.uploadAgain : ""}
      >
        {!isMobile && (
          <React.Fragment>
            {img !== "" ? "თავიდან ატვირთე" : "ატვირთე"}
          </React.Fragment>
        )}
        {isMobile && ""}
      </label>
      {isMobile && (
        <React.Fragment>
          {img !== "" && (
            <label htmlFor="file-upload" className={styles.helper_upload_again}>
              თავიდან ატვირთე
            </label>
          )}
        </React.Fragment>
      )}
      <input
        onChange={handleFileChange}
        id="file-upload"
        type="file"
        accept="image/*"
      />
      {imgName !== "" && (
        <div className={styles.file_name}>
          <div className={styles.success_img}> </div>
          <span className={styles.first_span}>{imgName}</span>
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
