import Cpu from "./Cpu";
import styles from "./LaptopCpu.module.scss";
import Input from "../../../UI/Input/Input";
import { isAllNum } from "../../../helperFunctions/HelperFunctions";

function LaptopCpu() {
  return (
    <div className={styles.wrapper}>
      <Cpu />
      <div className={styles.input_field} id={styles.core}>
        <Input
          label="CPU-ს ბირთვი"
          required={true}
          placeholder="14"
          instruction="მხოლოდ ციფრები"
          validateFunc={isAllNum}
          errorMsg="მხოლოდ ციფრები"
          storageTitle='laptop_cpu_cores'
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
        />
      </div>
    </div>
  );
}

export default LaptopCpu;
