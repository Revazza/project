import styles from "./Laptop.module.scss";
import { useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import token from "../Token";
import { Link } from "react-router-dom";
import Loading from "../../UI/Loading/Loading";
import PersonalInfo from "./PersonalInfo";
import CpuRam from "./CpuRam";

function Laptop() {
  const location = useLocation();
  const pathname = location.pathname;
  const laptopID = pathname.substring(pathname.lastIndexOf("/") + 1);
  //   https://pcfy.redberryinternship.ge/
  const { data, isLoading, error } = useFetch(
    `/laptop/${laptopID}?token=${token}`
  );

  const user = data?.user;
  const laptop = data?.laptop;

  return (
    <React.Fragment>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className={styles.wrapper}>
          <div className={styles.go_back}>
            <Link to="/laptop-list">
              <div className={styles.go_back_img}></div>
            </Link>
          </div>
          <label className={styles.page_label}>ლეპტოპის ინფო</label>
          <div className={styles.info_wrapper}>
            <PersonalInfo user={user} laptopImg={laptop?.image}/>
            <CpuRam laptop={laptop}/>
            <div className={styles.additonal_info}>
              <div className={styles.laptop_chars}>
                <div
                  className={styles.detailed_info}
                  id={styles.characteristics}
                >
                  <p className={styles.firstP}>მდგომარეობა: </p>
                  <p>{laptop?.state}</p>
                </div>
                <div
                  className={styles.detailed_info}
                  id={styles.characteristics}
                >
                  <p className={styles.firstP}>ლეპტოპის ფასი: </p>
                  <p>{laptop?.price}</p>
                </div>
              </div>
              <div className={styles.date}>
                <div className={styles.detailed_info}>
                  <p className={styles.firstP}> შეძენის რიცხვი: </p>
                  <p>{laptop?.purchase_date}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default Laptop;
