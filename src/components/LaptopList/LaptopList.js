import styles from "./LaptopList.module.scss";
import token from "../Token";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
import Loading from "../../UI/Loading/Loading";
import React from "react";
function LaptopList() {
  const { data, isLoading, error } = useFetch(`/laptops?token=${token}`);

  return (
    <React.Fragment>
      {isLoading && <Loading />}
      {data?.length === 0 && (
        <p className={styles.nothing_found}> No Laptop's found</p>
      )}
      {!isLoading && (
        <div className={styles.wrapper}>
          <div className={styles.go_back}>
            <Link to="/">
              <div className={styles.go_back_img}></div>
            </Link>
          </div>
          <label className={styles.list_label}>ჩანაწერების სია</label>
          <div className={styles.laptop_list_wrapper}>
            {data?.map((laptop) => {
              const linkUrl = `/laptop-info/${laptop.laptop.id}`;
              const fullName = `${laptop.user.name}  ${laptop.user.surname}`;
              const imgSrc = `https://pcfy.redberryinternship.ge/${laptop.laptop.image}`;

              return (
                <div className={styles.laptop_wrapper} key={laptop.laptop.id}>
                  <img className={styles.img_wrapper} src={imgSrc}></img>
                  <div className={styles.info_wrapper}>
                    <label>{fullName}</label>
                    <span>{laptop.laptop.name}</span>
                    <Link to={linkUrl}>მეტის ნახვა</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </React.Fragment>
  );
}

export default LaptopList;
