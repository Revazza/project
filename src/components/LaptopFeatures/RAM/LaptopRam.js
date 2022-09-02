import styles from "./LaptopRam.module.scss";
import { isAllNum } from "../../../helperFunctions/HelperFunctions";
import Input from "../../../UI/Input/Input";
import RadioButtons from "../../../UI/RadioButton/RadioButtons";
function LaptopRam() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.input_field}>
        <Input
          label="ლეპტოპის RAM (GB)"
          inputType="number"
          validateFunc={isAllNum}
          required={true}
          instruction="მხოლოდ ციფრები"
          errorMsg="მხოლოდ ციფრები"
          storageTitle="laptop_ram"
          placeholder="16"
        />
      </div>
      <div className={styles.ram_type}>
        <RadioButtons
          title="მეხსიერების ტიპი"
          name="ram_type"
          value1="SSD"
          value2="HDD"
          storageTitle='laptop_hard_drive_type'
        />
      </div>
      <div className={styles.line}></div>
    </div>
  );
}

export default LaptopRam;
