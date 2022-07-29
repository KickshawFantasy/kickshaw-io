import React from "react";
import styles from "./mintbox.module.css";

const Mintbox = (props) => {
  const [connected] = props.connection;

  const mintHandler = () => {};

  return (
    <div className={styles.mintcontainer}>
      <h3>{props.data.name}</h3>
      <img
        src={require(`../../assets/${props.data.image}`)}
        alt={props.data.name}
      />
      <p>{props.data.description}</p>
      <span>Cost: {props.data.price} Matic</span>
      <button className={styles.mintButton} onClick={mintHandler}>
        {connected ? "Mint" : "Not Connect"}
      </button>
    </div>
  );
};

export default Mintbox;
