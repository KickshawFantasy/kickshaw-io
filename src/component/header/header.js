import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <div className={styles.grid}>
      <img src={require("../../assets/logo.png")} alt="kickshaw logo" />
      <button className={styles.connectButton}>Connect</button>
      <button
        onClick={() => props.setMenu((prevstate) => !prevstate)}
        className={styles.navButton}
      >
        <i class="fa fa-bars" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Header;
