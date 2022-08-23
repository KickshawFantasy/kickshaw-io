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
          <h1>Join a League</h1>
          <p>
            Every Player Deck is loaded with elite NFL fantasy players! Weekly
            Play-to-Earn Matic Rewards! 100% of the Matic Reward Pool is
            distributed every season!
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
