import styles from "./LaptopModel.module.scss";
import Input from "../../../UI/Input/Input";
import { laptopNameValidation } from "../../../helperFunctions/HelperFunctions";
import LaptopBrands from "./LaptopBrands";

function LaptopModel() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.laptop_name}>
        <Input
          label="ლეპტოპის სახელი"
          inputType="text"
          placeholder="HP"
          instruction="ლათინური ასოები, ციფრები, !@#$%^&*()_+="
          validateFunc={laptopNameValidation}
          errorMsg="ლათინური ასოები, ციფრები, !@#$%^&*()_+="
          storageTitle="laptop_name"
          required={true}
        />
      </div>
      <LaptopBrands />
      <div className={styles.line}></div>
      
    </div>
  );
}

export default LaptopModel;
