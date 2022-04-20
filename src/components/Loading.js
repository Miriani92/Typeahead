import React from "react";
import styles from "./Loading.module.css";
import loader from "../assets/loader.svg";

const Loading = () => {
  return (
    <div>
      <img src={loader} alt="loader" className={styles.loader}></img>
    </div>
  );
};

export default Loading;
