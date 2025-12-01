import React from "react";
import { weatherIcon } from "../../javascript/ui";
import { unixTimeConvertDay } from "../../javascript/unixTimeConvert";
import styles from "./WeatherItem.module.css";

export default function WeatherItem({ item, index, onclick }) {
  if (!item) {
    return null;
  }

  const day = unixTimeConvertDay(item.dt);
  const temperature = Math.round(item.main.temp);

  return (
    <li className={styles.item} onClick={() => onclick(index)}>
      <p className={styles.today}>{day}</p>
      <div className={styles.weather_box}>
        <p className={styles.temperature}>{temperature}°C</p>
        <p className={styles.icon}>{weatherIcon(item)}</p>
      </div>
    </li>
  );
}
