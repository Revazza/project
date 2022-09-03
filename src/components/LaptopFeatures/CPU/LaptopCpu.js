import Cpu from "./Cpu";
import styles from "./LaptopCpu.module.scss";
import Input from "../../../UI/Input/Input";
import { isAllNum } from "../../../helperFunctions/HelperFunctions";

function LaptopCpu(props) {
  return (
    <div className={styles.wrapper}>
      <Cpu hasError={props.hasError} />
      <div className={styles.input_field} id={styles.core}>
        <Input
          label="CPU-ს ბირთვი"
          required={true}
          placeholder="14"
          instruction="მხოლოდ ციფრები"
          validateFunc={isAllNum}
          errorMsg="მხოლოდ ციფრები"
          storageTitle='laptop_cpu_cores'
          inputType='number'
        />
      </div>
      <div className={styles.input_field} id={styles.threads}>
        <Input
          label="CPU-ს ნაკადი"
          required={true}
          placeholder="365"
          instruction="მხოლოდ ციფრები"
          validateFunc={isAllNum}
          errorMsg="მხოლოდ ციფრები"
          storageTitle='laptop_cpu_threads'
          inputType='number'
        />
      </div>
    </div>
  );
}

export default LaptopCpu;
