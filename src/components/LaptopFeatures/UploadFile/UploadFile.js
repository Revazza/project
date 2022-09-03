import styles from "./UploadFile.module.scss";
import React, { useEffect, useState } from "react";

function UploadFile(props) {
  const [img, setImg] = useState("");
  const [imgName, setImgName] = useState("");
  const [imgSize, setImgSize] = useState(0);

  //change hasError to false

  useEffect(() => {
    if (!localStorage.getItem("laptop_image")) {
      const obj = {
        value: "",
        imgName: "",
        imgSize: 0,
      };
      localStorage.setItem("laptop_image", JSON.stringify(obj));
    } else {
      const image = JSON.parse(localStorage.getItem("laptop_image"));

      // console.log(image);
      setImg(image.value);
      setImgName(image.imgName);
      setImgSize(image.imgSize);
    }
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const fileName = file.name;
    const fileSize = file.size;
    props.onChangeFile(file);

    const blob = new Blob([file], { type: "image/jpeg" });
    const blobURL = URL.createObjectURL(blob);

    //
    

    //

    setImg(blobURL);
    setImgName(fileName);
    setImgSize(fileSize);
    localStorage.setItem(
      "laptop_image",
      JSON.stringify({
        value: blobURL,
        imgName: fileName,
        imgSize: fileSize,
      })
    );
  };

  const imgMBSize = (imgSize / 1024 ** 2).toFixed(2);

  return (
    <div
      className={
        props.hasError
          ? `${styles.file_wrapper} ${styles.error}`
          : styles.file_wrapper
      }
    >
      {props.hasError && <div className={styles.errorImg}></div>}
      <label className={styles.file_head}>
        ჩააგდე ან ატვირთე ლეპტოპის ფოტო
      </label>
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
