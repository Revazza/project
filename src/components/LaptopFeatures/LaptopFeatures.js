import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import LaptopCpu from "./CPU/LaptopCpu";
import styles from "./LaptopFeatures.module.scss";
import LaptopModel from "./LaptopModel/LaptopModel";
import LaptopRam from "./RAM/LaptopRam";
import UploadFile from "./UploadFile/UploadFile";
import Button from "../../UI/Button/Button";

function LaptopFeatures() {

  const onSubmit = (event) =>{
    event.preventDefault();

    const laptop_image = JSON.parse(localStorage.getItem('laptop_image'));
    const laptop_brand_id = JSON.parse(localStorage.getItem('laptop_brand_id'));
    const laptop_cpu = JSON.parse(localStorage.getItem('laptop_cpu'));
    const laptop_hard_drive_type  = JSON.parse(localStorage.getItem('laptop_hard_drive_type'));
    const laptop_purchase_date = JSON.parse(localStorage.getItem('laptop_purchase_date'));


    const laptop_name = JSON.parse(localStorage.getItem('laptop_name'));
    const laptop_cpu_cores = JSON.parse(localStorage.getItem('laptop_cpu_cores'));
    const laptop_ram = JSON.parse(localStorage.getItem('laptop_ram'));
    const laptop_state = JSON.parse(localStorage.getItem('laptop_state'));
    const laptop_price = JSON.parse(localStorage.getItem('laptop_price'));

    console.log(laptop_image);
    console.log(laptop_name);
    console.log(laptop_brand_id);
    console.log(laptop_cpu);
    console.log(laptop_cpu_cores);
    console.log(laptop_ram);
    console.log(laptop_hard_drive_type);
    console.log(laptop_state);
    console.log(laptop_purchase_date);
    console.log(laptop_price);
    
  }

  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <UploadFile />
      <LaptopModel />
      <LaptopCpu />
      <LaptopRam />
      <AdditionalInfo />
      <div className={styles.btn_wrapper}>
        <Button type='submit' title='დამახსოვრება'/>
      </div>
    </form>
  );
}

export default LaptopFeatures;
