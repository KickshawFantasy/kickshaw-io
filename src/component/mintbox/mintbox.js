import React from "react";
import styles from "./mintbox.module.css";

const Mintbox = (props) => {
  const mintHandler = () => {};

  return (
    <div className={styles.mintcontainer}>
      <h3>{props.data.name}</h3>
      <img src={require("../../assets/black.png")} alt={props.data.name} />
      <p>{props.data.description}</p>
      <span>Cost: {props.data.price} Matic</span>
      <button className={styles.mintButton} onClick={mintHandler}>
        Mint
      </button>
    </div>
  );
};

export default Mintbox;
