import React from "react";
import { ethers } from "ethers";
import styles from "./mintbox.module.css";
import { mintContract } from "../../../../config";
import mintABI from "../../../../mintabi.json";
import Loader from "../../../../component/loader/loader";
import Message from "../../../../component/message/message";

const Mintbox = ({ data, connection }) => {
  const [connected] = connection;

  const handleMint = async (receiver, index, league) => {
    console.log(receiver, index, league);
    //do URI maths
  };
  return (
    <div className={styles.mintbox}>
      <p>{data.address}</p>
      <button
        onClick={() => {
          handleMint(data.address, data.index, data.league);
        }}
      >
        {connected ? "Mint" : "Not Connected"}
      </button>
    </div>
  );
};

export default Mintbox;
