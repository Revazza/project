import React from "react";
import { Link } from "react-router-dom";
import Input from "../../UI/Input/Input";
import styles from "./EmployeeInfo.module.scss";
import { isGeorgian } from "../../helperFunctions/HelperFunctions";
import Dropdown from "../../UI/Dropdown/Dropdown";

function EmployeeInfo() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.return}>
        <Link to="/">
          <img src="./assets/arrow.png" />
        </Link>
      </div>
      <div className={styles.form_wrapper}>
        <div className={styles.input_field} id={styles.name}>
          <Input
            label="სახელი"
            inputType="text"
            placeholder="გრიშა"
            instruction="მინიმუმ 2 სიმბოლო, ქართული ასოები"
            validateFunc={isGeorgian}
            errorMsg="გამოიყენე ქართული ასოები"
          />
        </div>
        <div className={styles.input_field} id={styles.lastname}>
          <Input
            label="გვარი"
            inputType="text"
            placeholder="ონიანი"
            instruction="მინიმუმ 2 სიმბოლო, ქართული ასოები"
            validateFunc={isGeorgian}
            errorMsg="გამოიყენე ქართული ასოები"
          />
        </div>

        <div className={styles.teams_wrapper}>
          <Dropdown url="/teams" title='თიმი'/>
        </div>
      </div>
    </div>
  );
}

export default EmployeeInfo;
