import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import styles from "./Main.module.scss";

function Main() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.return}>
        <Link to="/">
          <div className={styles.return_img}></div>
        </Link>
      </div>
      <div className={styles.sections}>
        <div className={styles.first}>
          <NavLink to="emp-info" className={({isActive})=> isActive ? styles.active:''}>თანამშრომლის ინფო</NavLink>
        </div>
        <div className={styles.second}>
        <NavLink to="laptop-features" className={({isActive})=> isActive ? styles.active:''}>ლეპტოპის მახასიათებლები</NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Main;

