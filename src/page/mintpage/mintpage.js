import React from "react";
import Header from "../../component/header/header";
import Sidemenu from "../../component/sidemenu/sidemenu";
import styles from "./mintpage.module.css";

const Mintpage = () => {
  return (
    <>
      <Header />
      <div className={styles.grid}>
        <div>
          <Sidemenu />
        </div>
        <h1>Test</h1>
      </div>
    </>
  );
};

export default Mintpage;
