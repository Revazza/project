import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import styles from "./Main.module.scss";

function Main() {
  const location = useLocation();
  const [currentLoc, setCurrentLoc] = useState("info");
  useEffect(() => {
    if (location.pathname.includes("laptop-features")) {
      setCurrentLoc("features");
    } else {
      setCurrentLoc("info");
    }
  }, [location]);

  const disableLink = (e) =>{
    e.preventDefault();
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.return}>
        {currentLoc === "info" && (
          <Link to="/">
            <div className={styles.return_img}></div>
          </Link>
        )}
        {currentLoc === "features" && (
          <Link to="emp-info">
            <div className={styles.return_img}></div>
          </Link>
        )}
      </div>
      <div className={styles.sections}>
        <div className={styles.first}>
          <NavLink
            to="emp-info"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={disableLink}
          >
            თანამშრომლის ინფო
          </NavLink>
        </div>
        <div className={styles.second}>
          <NavLink
            to="laptop-features"
            className={({ isActive }) => (isActive ? styles.active : "")}
            onClick={disableLink}
          >
            ლეპტოპის მახასიათებლები
          </NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Main;
