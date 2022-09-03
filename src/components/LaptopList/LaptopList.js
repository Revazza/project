import styles from "./LaptopList.module.scss";
import token from "../Token";
import useFetch from "../../hooks/useFetch";
import { Link } from "react-router-dom";
function LaptopList() {
  const { data, isLoading, error } = useFetch(`/laptops?token=${token}`);
  console.log(data);

  return (
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
  );
}

export default LaptopList;
