import React, { useEffect, useState } from "react";
import Input from "../../UI/Input/Input";
import styles from "./EmployeeInfo.module.scss";
import Button from "../../UI/Button/Button";
import {
  isGeorgian,
  emailValidation,
  phoneValidation,
} from "../../helperFunctions/HelperFunctions";
import { useNavigate } from "react-router-dom";
import Teams from "./Teams";
function EmployeeInfo() {
  const navigate = useNavigate();
  const [teamError,setTeamError] = useState(false);
  const [positionError,setPositionError] = useState(false);
  

  const handleNextClick = (event) => {
    
    event.preventDefault();

    const positionID = JSON.parse(localStorage.getItem("position_id"));
    const teamID = JSON.parse(localStorage.getItem("team_id"));
    const name = JSON.parse(localStorage.getItem("name"));
    const email = JSON.parse(localStorage.getItem("email"));
    const surname = JSON.parse(localStorage.getItem("surname"));
    const phone = JSON.parse(localStorage.getItem("phone_number"));

    if (teamID === -1) {
      setTeamError(true);
    }
    else if (positionID === -1) {
      setPositionError(true);
    } else if (
      !name.hasErrors &&
      name.isTouched &&
      !email.hasErrors &&
      email.isTouched &&
      !surname.hasErrors &&
      surname.isTouched &&
      !phone.hasErrors &&
      phone.isTouched
    ) {
      setPositionError(false);
      setTeamError(false);
      navigate('/add-note/laptop-features');
    }

  };

  const isMobile = window.innerHeight;

  return (
    <form className={styles.form_wrapper} onSubmit={handleNextClick}>
      <div className={styles.input_field} id={styles.name}>
        <Input
          label="სახელი"
          inputType="text"
          placeholder="გრიშა"
          instruction="მინიმუმ 2 სიმბოლო, ქართული ასოები"
          validateFunc={isGeorgian}
          errorMsg="გამოიყენე ქართული ასოები"
          storageTitle="name"
          required={true}
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
          storageTitle="surname"
          required={true}
        />
      </div>

      <Teams teamHasError={teamError} posHasError={positionError} />

      <div className={styles.contact_info} id={styles.email}>
        <Input
          label="მეილი"
          inputType="text"
          placeholder="grish666@redberry.ge"
          instruction="უნდა მთავრდებოდეს @redberry.ge-ით"
          validateFunc={emailValidation}
          errorMsg="უნდა მთავრდებოდეს @redberry.ge-ით"
          storageTitle="email"
          required={true}
        />
      </div>
      <div className={styles.contact_info} id={styles.phone}>
        <Input
          label="ტელეფონის ნომერი"
          inputType="text"
          placeholder="+995 598 00 07 01"
          instruction={isMobile? 'ქართული მობ-ნომრის ფორმატი':"უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"}
          validateFunc={phoneValidation}
          errorMsg="უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს"
          storageTitle="phone_number"
          required={true}
        />
      </div>
      <div className={styles.next}>
        <Button title="შემდეგი" type="submit" />
      </div>
    </form>
  );
}

export default EmployeeInfo;
