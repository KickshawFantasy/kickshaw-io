import React, { useState } from "react";
import Header from "../../component/header/header";
import Mintbox from "../../component/mintbox/mintbox";
import Sidemenu from "../../component/sidemenu/sidemenu";
import styles from "./mintpage.module.css";
import { Platinum, Gold } from "../../config";
import Footer from "../../component/footer/footer";

const Mintpage = () => {
  const [menu, setmenu] = useState(false);

  const [connected, setconnected] = useState(false);

  return (
    <>
      <Header connection={[connected, setconnected]} setMenu={setmenu} />
      <div className={styles.grid}>
        <div className={menu ? "" : styles.removed}>
          <Sidemenu />
        </div>
        <div className={styles.mintbody}>
          <h1>Mint Event</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but{" "}
          </p>
          <hr />
          <div className={styles.mintGrid}>
            <Mintbox connection={[connected]} data={Platinum} />
            <Mintbox connection={[connected]} data={Gold} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Mintpage;
