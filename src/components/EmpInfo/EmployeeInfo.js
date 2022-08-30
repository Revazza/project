import React from "react";
import Input from "../../UI/Input/Input";
import styles from "./EmployeeInfo.module.scss";
import Button from '../../UI/Button/Button';
import {
  isGeorgian,
  emailValidation,
  phoneValidation,
} from "../../helperFunctions/HelperFunctions";
import Dropdown from "../../UI/Dropdown/Dropdown";
import {useNavigate} from 'react-router-dom';
function EmployeeInfo() {

  const navigate = useNavigate();

  const handleNextClick = () =>{

  }
  

  return (
    <form className={styles.form_wrapper}>
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

      <div className={styles.dropdown_wrapper} id={styles.teams}>
        <Dropdown url="/teams" title="თიმი" />
      </div>
      <div className={styles.dropdown_wrapper} id={styles.positions}>
        <Dropdown url="/positions" title="პოზიცია" />
      </div>
      <div className={styles.contact_info} id={styles.email}>
        <Input
          label="მეილი"
          inputType="text"
          placeholder="grish666@redberry.ge"
          instruction="უნდა მთავრდებოდეს @redberry.ge-ით"
          validateFunc={emailValidation}
          errorMsg="უნდა მთავრდებოდეს @redberry.ge-ით"
        />
      </div>
      <div className={styles.contact_info} id={styles.phone}>
        <Input
          label="ტელეფონის ნომერი"
          inputType="text"
          placeholder="+995 598 00 07 01"
          instruction="უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
          validateFunc={phoneValidation}
          errorMsg="უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
        />
      </div>
      <div className={styles.next}>
        <Button title='შემდეგი' type='button' />
      </div>
    </form>
  );
}

export default EmployeeInfo;
