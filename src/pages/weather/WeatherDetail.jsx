import React from "react";
import { weatherIcon } from "../../javascript/ui";
import { unixTimeConvert } from "../../javascript/unixTimeConvert";
import styles from "./WeatherDetail.module.css";

export default function WeatherDetail({ item }) {
  if (!item || !Array.isArray(item) || item.length === 0) {
    return (
      <div className={styles.weatherDetail}>
        <p>날씨 정보를 불러올 수 없습니다.</p>
      </div>
    );
  }

  const firstItem = item[0];
  const date = unixTimeConvert(firstItem.dt).split(" ")[0];
  const temperature = Math.round(firstItem.main.temp);
  const description = firstItem.weather[0]?.description || "";

  return (
    <div className={styles.weatherDetail}>
      <div className={styles.top}>
        <p className={styles.date}>{date}</p>
      </div>
      <div className={styles.center}>
        <div className={styles.center_box}>
          <p className={styles.center_temperature}>
            {temperature}
            <span>°C</span>
          </p>
          <p className={styles.center_description}>{description}</p>
        </div>
        <p className={styles.center_icon}>{weatherIcon(firstItem)}</p>
      </div>
      <ul className={styles.bottom_list}>
        {item.map((value) => (
          <li className={styles.bottom_item} key={value.dt}>
            <p className={styles.clock}>
              {unixTimeConvert(value.dt).split(" ")[1]}
            </p>
            <p className={styles.icon}>{weatherIcon(value)}</p>
            <p className={styles.temperature}>{Math.round(value.main.temp)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
