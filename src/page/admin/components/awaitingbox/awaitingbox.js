import React from "react";
import Mintbox from "../mintbox/mintbox";
import styles from "./awaitingbox.module.css";

const Awaitingbox = ({ data, connection }) => {
  return (
    <div className={styles.awaitingbox}>
      <h3>Address</h3>
      {data.map((item) => {
        return <Mintbox connection={connection} key={item.index} data={item} />;
      })}
    </div>
  );
};

export default Awaitingbox;
