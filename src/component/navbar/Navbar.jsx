import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { TiWeatherCloudy } from "react-icons/ti";
import { ImLocation } from "react-icons/im";
import { BsGearFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <ul className={styles.navbar_list}>
      <li className={styles.navbar_item}>
        <Link to={"/"} className={styles.navbar_link}>
          <AiOutlineUser className={styles.icon} />
        </Link>
      </li>
      <li className={styles.navbar_item}>
        <Link to={"/Weather"} className={styles.navbar_link}>
          <TiWeatherCloudy className={styles.icon} />
        </Link>
      </li>
      <li className={styles.navbar_item}>
        <Link to={"/Location"} className={styles.navbar_link}>
          <ImLocation className={styles.icon} />
        </Link>
      </li>
      {/* <li className={styles.navbar_item}>
                <Link to={'/Option'} className={styles.navbar_link}>
                    <BsGearFill className={styles.icon} />
                </Link>
            </li> */}
    </ul>
  );
}
