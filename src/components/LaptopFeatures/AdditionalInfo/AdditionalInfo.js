import React, { useEffect, useState } from "react";
import styles from "./AdditionalInfo.module.scss";
import inputStyles from "../../../UI/Input/Input.module.scss";
import Input from "../../../UI/Input/Input";
import { isAllNum } from "../../../helperFunctions/HelperFunctions";
import RadioButtons from "../../../UI/RadioButton/RadioButtons";

function AdditionalInfo() {
  const [date, setDate] = useState("");
  const [inputType, setInputType] = useState("text");

  const handleMouseLeave = () => {
    setInputType("text");
  };
  const handleMouseEnter = () => {
    setInputType("date");
  };

  const onChangeDate = (event) => {
    const newDate = event.target.value;
    setDate(newDate);
    localStorage.setItem("laptop_purchase_date", newDate);
  };

  useEffect(() => {
    const storageDate = localStorage.getItem("laptop_purchase_date");
    if (!storageDate) {
      const obj = {
        hasError:false,
        value:'',
      }
      localStorage.setItem("laptop_purchase_date", JSON.stringify(obj));
    } else {
      setDate(storageDate);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.date_wrapper}>
        <div className={inputStyles.wrapper}>
          <label>შეძენის რიცხვი(არჩევითი)</label>
          <input
            type={inputType}
            placeholder={date !== "" ? date : "თთ / დდ / წწ"}
            onChange={onChangeDate}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            required={true}
            value={date}
          />
        </div>
      </div>
      <div className={styles.price_wrapper}>
        <Input
          label="ლეპტოპის ფასი"
          inputType="number"
          validateFunc={isAllNum}
          storageTitle="laptop_price"
          instruction="მხოლოდ ციფრები"
          errorMsg="მხოლოდ ციფრები"
          required={true}
        />
        <div className={styles.currency}></div>
      </div>

      <div className={styles.state_wrapper}>
        <RadioButtons
          title="ლეპტოპის მდგომარეობა"
          name="laptop_state"
          storageTitle="laptop_state"
          value1="ახალი"
          value2="მეორადი"
        />
      </div>
    </div>
  );
}

export default AdditionalInfo;
