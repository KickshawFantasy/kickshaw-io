import React from "react";
import Header from "../../component/header/header";
import Sidemenu from "../../component/sidemenu/sidemenu";
import styles from "./mintpage.module.css";

const Mintpage = () => {
  return (
    <>
      <Header />

      <div className={styles.grid}>
        <Sidemenu />
      </div>
    </>
  );
};

export default Mintpage;
