import React, { useState, useEffect } from "react";
import Header from "../../component/header/header";
import styles from "./admin.module.css";
import Awaitingbox from "./components/awaitingbox/awaitingbox";
import { ethers } from "ethers";
import { mintContract } from "../../config";
import mintABI from "../../mintabi.json";

const Admin = () => {
  const [connected, setconnected] = useState(false);
  const [gold, setgold] = useState([]);
  const [platinum, setplatinum] = useState([]);

  const [goldBuyers, setgoldBuyers] = useState([]);
  const [platinumBuyers, setplatinumBuyers] = useState([]);

  //refresh
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    console.log("called");
    setRefresh((prevstate) => !prevstate);
  };

  const checkGoldFromChain = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(mintContract, mintABI, signer);

      try {
        const response = await contract.getGoldArray();
        setgoldBuyers(response);

        //send address to api to confirm, set timeout
      } catch (error) {
        console.log(error);
      }
    }
  };

  const checkPlatinumFromChain = async () => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(mintContract, mintABI, signer);

      try {
        const response = await contract.getPlatinumArray();
        setplatinumBuyers(response);

        //send address to api to confirm, set timeout
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    (async function () {
      const goldArr = goldBuyers.map((add, index) => {
        return {
          index: index,
          address: add,
          league: "gold",
        };
      });

      setgold(goldArr);
    })();
  }, [goldBuyers]);

  useEffect(() => {
    (async function () {
      const platinumArr = platinumBuyers.map((add, index) => {
        return {
          index: index,
          address: add,
          league: "platinum",
        };
      });

      setplatinum(platinumArr);
    })();
  }, [platinumBuyers]);

  useEffect(() => {
    checkGoldFromChain();
    checkPlatinumFromChain();
  }, [refresh]);

  return (
    <div className={styles.adminbody}>
      <Header connection={[connected, setconnected]} setMenu={false} />
      <h1>Admin Dashboard</h1>
      <p>Users awaiting gold league mint</p>
      {gold.length > 0 ? (
        <Awaitingbox
          data={gold}
          refresh={handleRefresh}
          connection={[connected, setconnected]}
        />
      ) : (
        <p className={styles.nouser}>
          {" "}
          There are no pending users in this section
        </p>
      )}

      <p>Users awaiting platinum league mint</p>
      {platinum.length > 0 ? (
        <Awaitingbox
          data={platinum}
          refresh={handleRefresh}
          connection={[connected, setconnected]}
        />
      ) : (
        <p className={styles.nouser}>
          {" "}
          There are no pending users in this section
        </p>
      )}
    </div>
  );
};

export default Admin;
