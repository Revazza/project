import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import LaptopCpu from "./CPU/LaptopCpu";
import styles from "./LaptopFeatures.module.scss";
import LaptopModel from "./LaptopModel/LaptopModel";
import LaptopRam from "./RAM/LaptopRam";
import UploadFile from "./UploadFile/UploadFile";
import Button from "../../UI/Button/Button";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import token from "../Token";


function LaptopFeatures() {
  const [imgError, setImgError] = useState(false);
  const [brandError, setBrandError] = useState(false);
  const [cpuError, setCpuError] = useState(false);
  const [isImgUploaded,setIsImgUploaded]  = useState(false);
  const [file, setFile] = useState();
  const navigate = useNavigate();

  const handleFileChange = (newFile) => {
    setFile(newFile);
    setIsImgUploaded(true);
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    let info = {
      laptop_brand_id: JSON.parse(localStorage.getItem("laptop_brand_id"))
        .value,
      laptop_cpu: JSON.parse(localStorage.getItem("laptop_cpu")).value,
      laptop_hard_drive_type: JSON.parse(
        localStorage.getItem("laptop_hard_drive_type")
      ).value,
      laptop_purchase_date: JSON.parse(
        localStorage.getItem("laptop_purchase_date")
      ).value,

      laptop_name: JSON.parse(localStorage.getItem("laptop_name")).value,
      laptop_cpu_cores: +JSON.parse(localStorage.getItem("laptop_cpu_cores"))
        .value,
      laptop_cpu_threads: JSON.parse(localStorage.getItem("laptop_cpu_threads"))
        .value,
      laptop_ram: +JSON.parse(localStorage.getItem("laptop_ram")).value,
      laptop_state: JSON.parse(localStorage.getItem("laptop_state")).value,
      laptop_price: +JSON.parse(localStorage.getItem("laptop_price")).value,
      token: token,
    };

    if (!isImgUploaded) {
      setImgError(true);
    }
    if (info.laptop_brand_id === "") {
      setBrandError(true);
    } else {
      setBrandError(false);
    }
    if (info.laptop_cpu === "") {
      setCpuError(true);
    } else {
      setCpuError(false);
    }

    if (
      info.laptop_brand_id.value !== "" &&
      isImgUploaded &&
      info.laptop_cpu.value !== ""
    ) {
      const phoneNum = JSON.parse(localStorage.getItem("phone_number")).value;
      info = {
        ...info,
        name: JSON.parse(localStorage.getItem("name")).value,
        surname: JSON.parse(localStorage.getItem("surname")).value,
        team_id: JSON.parse(localStorage.getItem("team_id")),
        position_id: JSON.parse(localStorage.getItem("position_id")),
        email: JSON.parse(localStorage.getItem("email")).value,
        phone_number: phoneNum.includes("+995") ? phoneNum : `+995${phoneNum}`,
      };

      const formData = new FormData();
      formData.append('laptop_image',file,'elon.jpeg')
      for (let key in info) {
        formData.append(key, info[key]);
      }

      const request = await axios({
        method: "post",
        url: "https://pcfy.redberryinternship.ge/api/laptop/create",
        data: formData,
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      });

      if(request.status === 200)
      {
        navigate('/thank-page');
      }
    }
  };

  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <UploadFile hasError={imgError} onChangeFile={handleFileChange} />
      <LaptopModel hasError={brandError} />
      <LaptopCpu hasError={cpuError} />
      <LaptopRam />
      <AdditionalInfo />
      <div className={styles.btn_wrapper}>
        <Button type="submit" title="????????????????????????????????????" />
      </div>
    </form>
  );
}

export default LaptopFeatures;
