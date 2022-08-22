import React, { useState, useEffect } from "react";
import styles from "./mintbox.module.css";
import { ethers } from "ethers";
import mintABI from "../../mintabi.json";
import Loader from "../loader/loader";
import Message from "../message/message";
import { mintContract } from "../../config";

const Mintbox = (props) => {
  const [connected] = props.connection;

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [pushMessage, setPushMessage] = useState("");

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
      } catch (error) {
        setLoading(false);
        setMessage(error.message);
      }
    }
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
            mintHandler(props.data.contract);
          }}
        >
          {connected ? "Mint" : "Not Connected"}
        </button>
      )}
    </div>
  );
};

export default Mintbox;
