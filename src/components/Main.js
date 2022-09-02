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

  const disableLink = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.wrapper}>
      {currentLoc === "info" && (
        <div className={styles.return}>
          <Link to="/">
            <div className={styles.return_img}></div>
          </Link>
        </div>
      )}

      {currentLoc === "features" && (
        <Link to="emp-info" className={styles.to_emp_info}>
          უკან
        </Link>
      )}
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
