import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import axios from "axios";

import styles from "./mintbox.module.css";
import mintABI from "../../mintabi.json";
import Loader from "../loader/loader";
import Message from "../message/message";
import { mintContract } from "../../config";

const Mintbox = (props) => {
  const [connected] = props.connection;

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [pushMessage, setPushMessage] = useState("");
  const [length, setLength] = useState(0);

  const checkLenFromChain = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(mintContract, mintABI, signer);

      try {
        const GoldResponse = await contract.getGoldArray();
        const PlatinumResponse = await contract.getPlatinumArray();

        setLength(GoldResponse.length + PlatinumResponse.length);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const mintHandler = async (league) => {
    if (window.ethereum) {
      setLoading(true);

      let fee;
      if (league === 0) {
        fee = 0.01;
      } else {
        fee = 0.025;
      }
      const valueFee = {
        value: ethers.utils.parseEther(`${fee}`),
        gasLimit: 800000,
      };
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(mintContract, mintABI, signer);

      try {
        const response = await contract.mintCard(league, valueFee);
        await response.wait();

        //send address to api to confirm, set timeout
        setMessage(
          "Membership card was minted succesfully, you will receive complete league momentarily"
        );
        setLoading(false);

        checkLenFromChain();
      } catch (error) {
        setLoading(false);
        setMessage(error.message);
      }
    }
  };

  const pushMessages = async (number) => {
    const body = {
      number,
    };
    await axios.post("https://api.kickshaw.io/message", body);
  };

  useEffect(() => {
    setPushMessage(message);
    const timeout = setTimeout(() => {
      setMessage("");
    }, 4500);

    return () => {
      clearTimeout(timeout);
    };
  }, [message]);

  useEffect(() => {
    if (length > 0) {
      pushMessages(length);
    }
  }, [length]);

  return (
    <div className={styles.mintcontainer}>
      {!!pushMessage ? <Message message={pushMessage} /> : ""}
      <h3>{props.data.name}</h3>
      <img src={props.data.image} alt={props.data.name} />
      <p>{props.data.description}</p>
      <span>Cost: {props.data.price} Matic</span>
      {loading ? (
        <button className={styles.mintButton}>
          <Loader />
        </button>
      ) : (
        <button
          className={styles.mintButton}
          onClick={() => {
            connected && mintHandler(props.data.contract);
          }}
        >
          {connected ? "Mint" : "Not Connected"}
        </button>
      )}
    </div>
  );
};

export default Mintbox;
