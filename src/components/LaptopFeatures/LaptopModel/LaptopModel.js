import styles from "./LaptopModel.module.scss";
import Input from "../../../UI/Input/Input";
import { laptopNameValidation } from "../../../helperFunctions/HelperFunctions";

function LaptopModel() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.laptop_name}>
        <Input
          validateFunc={laptopNameValidation}
          inputType="text"
          placeholder="HP"
          required={true}
          label="ლეპტოპის სახელი"
          instruction="ლათინური ასოები, ციფრები, !@#$%^&*()_+="
          errorMsg="ლათინური ასოები, ციფრები, !@#$%^&*()_+="
        />
      </div>
    </div>
  );
}

export default LaptopModel;
