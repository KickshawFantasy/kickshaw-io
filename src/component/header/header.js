import React, { useState } from "react";
import styles from "./header.module.css";
import { ethers } from "ethers";

const Header = (props) => {
  const [connected, setconnected] = props.connection;
  const [connectAddress, setconnectAddress] = useState("");
  const connect = async () => {
    if (connected) {
      setconnected(false);
      return;
    }
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    // Prompt user for account connections
    const { chainId } = await provider.getNetwork();
    if (137 !== chainId) {
      alert(`Your Wallet Is Not Connected The Polygon Network`);
      return;
    }

    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const add = await signer.getAddress();
    setconnectAddress(add);
    setconnected(true);
  };
  return (
    <div className={styles.grid}>
      <img src={require("../../assets/logo.png")} alt="kickshaw logo" />
      <button onClick={connect} className={styles.connectButton}>
        {connected ? (
          <span className={styles.connected}>
            <span>{`${connectAddress.substr(0, 3)}...${connectAddress.substr(
              39
            )}`}</span>
            <img src={require("../../assets/close2.png")} alt="" />
          </span>
        ) : (
          "Connect"
        )}
      </button>
      <button
        onClick={() => props.setMenu((prevstate) => !prevstate)}
        className={styles.navButton}
      >
        <i className="fa fa-bars" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Header;
