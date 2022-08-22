import React from "react";
import styles from "./loader.module.css";

const Loader = (props) => {
  return (
    <>
      <div className={`${styles["lds-dual-ring"]} ${styles.white}`}></div>
    </>
  );
};

export default Loader;
