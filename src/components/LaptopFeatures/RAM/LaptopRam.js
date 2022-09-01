import styles from "./LaptopRam.module.scss";
import { isAllNum } from "../../../helperFunctions/HelperFunctions";
import Input from "../../../UI/Input/Input";
function LaptopRam() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.input_field}>
        <Input
          label="ლეპტოპის RAM (GB)"
          inputType='number'
          validateFunc={isAllNum}
          required={true}
          instruction="მხოლოდ ციფრები"
          errorMsg="მხოლოდ ციფრები"
          storageTitle="laptop_ram"
          placeholder="16"
        />
      </div>
    </div>
  );
}

export default LaptopRam;
