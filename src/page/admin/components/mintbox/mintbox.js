import React, { useState, useEffect, useRef } from "react";
import { ethers } from "ethers";
import axios from "axios";

import styles from "./mintbox.module.css";
import { mintContract } from "../../../../config";
import mintABI from "../../../../mintabi.json";
import Loader from "../../../../component/loader/loader";
import Message from "../../../../component/message/message";

const Mintbox = ({ data, connection, refresh }) => {
  const [connected] = connection;

  const arrayRef = useRef();

  const [loader, setloader] = useState(false);
  const [message, setMessage] = useState("");
  const [pushMessage, setPushMessage] = useState("");

  const platinumLinks = [
    "https://2022-platinum-qb1.s3.filebase.com/",
    "https://2022-platinum-qb2.s3.filebase.com/",
    "https://2022-platinum-qbr.s3.filebase.com/",
    "https://2022-platinum-rb1.s3.filebase.com/",
    "https://2022-platinum-rb2.s3.filebase.com/",
    "https://2022-platinum-rb3.s3.filebase.com/",
    "https://2022-platinum-rbr.s3.filebase.com/",
    "https://2022-platinum-wri.s3.filebase.com/",
    "https://2022-platinum-wr2.s3.filebase.com/",
    "https://2022-platinum-wr3.s3.filebase.com/",
    "https://2022-platinum-wr4.s3.filebase.com/",
    "https://2022-platinum-wm.s3.filebase.com/",
    "https://2022-platinum-te1.s3.filebase.com/",
    "https://2022-platinum-te2.s3.filebase.com/",
    "https://2022-platinum-ter.s3.filebase.com/",
    "https://2022-platinum-di1.s3.filebase.com/",
    "https://2022-platinum-di2.s3.filebase.com/",
    "https://2022-platinum-d3.s3.filebase.com/",
    "https://2022-platinum-dir.s3.filebase.com/",
    "https://2022-platinum-lb1.s3.filebase.com/",
    "https://2022-platinum-lb2.s3.filebase.com/",
    "https://2022-platinum-lb3.s3.filebase.com/",
    "https://2022-platinum-b4.s3.filebase.com/",
    "https://2022-platinum-lbr.s3.filebase.com/",
    "https://2022-platinum-cb1.s3.filebase.com/",
    "https://2022-platinum-cb2.s3.filebase.com/",
    "https://2022-platinum-cb3.s3.filebase.com/",
    "https://2022-platinum-cbr.s3.filebase.com/",
    "https://2022-platinum-sa1.s3.filebase.com/",
    "https://2022-platinum-sa2.s3.filebase.com/",
    "https://2022-platinum-sa3.s3.filebase.com/",
    "https://2022-platinum-sar.s3.filebase.com/",
    "https://2022-diamond.s3.filebase.com/",
  ];

  const goldLinks = [
    "https://2022-gold-qb1.s3.filebase.com/",
    "https://2022-gold-qb2.s3.filebase.com/",
    "https://2022-gold-qbr.s3.filebase.com/",
    "https://2022-gold-rb1.s3.filebase.com/",
    "https://2022-gold-rb3.s3.filebase.com/",
    "https://2022-gold-wr1.s3.filebase.com/",
    "https://2022-gold-lb3.s3.filebase.com/",
    "https://2022-gold-lb4.s3.filebase.com/",
    "https://2022-gold-rb2.s3.filebase.com/",
    "https://2022-gold-rbr.s3.filebase.com/",
    "https://2022-gold-wr2.s3.filebase.com/",
    "https://2022-gold-wr3.s3.filebase.com/",
    "https://2022-gold-wr4.s3.filebase.com/",
    "https://2022-gold-wm.s3.filebase.com/",
    "https://2022-gold-te1.s3.filebase.com/",
    "https://2022-gold-te2.s3.filebase.com/",
    "https://2022-gold-ter.s3.filebase.com/",
    "https://2022-gold-dl1.s3.filebase.com/",
    "https://2022-gold-di2.s3.filebase.com/",
    "https://2022-gold-d13.s3.filebase.com/",
    "https://2022-gold-dir.s3.filebase.com/",
    "https://2022-gold-lb1.s3.filebase.com/",
    "https://2022-gold-b2.s3.filebase.com/",
    "https://2022-gold-lbr.s3.filebase.com/",
    "https://2022-gold-cb1.s3.filebase.com/",
    "https://2022-gold-cb2.s3.filebase.com/",
    "https://2022-gold-cb3.s3.filebase.com/",
    "https://2022-gold-cbr.s3.filebase.com/",
    "https://2022-gold-sa1.s3.filebase.com/",
    "https://2022-gold-sa2.s3.filebase.com/",
    "https://2022-gold-sa3.s3.filebase.com/",
    "https://2022-gold-sar.s3.filebase.com/",
    "https://2022-emerald.s3.filebase.com/",
  ];

  const handleMint = async (receiver, index, league) => {
    const numbers = arrayRef.current.value.trim().split(",");
    if (arrayRef.current.value.trim().length < 33) {
      setMessage("Mint list cannot be less than 33");

      return;
    }
    if (window.ethereum) {
      setloader(true);
      const valueFee = {
        gasLimit: 8000000,
      };
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(mintContract, mintABI, signer);

      try {
        if (league === "gold") {
          const getavailableLink = () => {
            return new Promise(async (resolve) => {
              const linkarr = [];
              goldLinks.forEach((folder, index) => {
                let link = `${folder}${numbers[index]}.json`;
                linkarr.push(link);
              });
              if (linkarr.length === 33) {
                resolve(linkarr);
              }
            });
          };

          const availablelink = await getavailableLink();

          const result = await contract.mintLeague(
            receiver,
            availablelink,
            index,
            league,
            valueFee
          );

          await result.wait();

          //update DB

          const body = {
            address: receiver,
            files: availablelink,
            league: league,
          };
          const dbresponse = await axios.post("http://localhost:3001", body);

          if (dbresponse.status === 200)
            setMessage("League Mint Completed, Refreshing data");
          else {
            setMessage("DB was not updated, check console");
          }

          refresh();

          setloader(false);
        } else if (league === "platinum") {
          const getavailableLink = () => {
            return new Promise(async (resolve, reject) => {
              const linkarr = [];
              platinumLinks.forEach((folder, index) => {
                let link = `${folder}${numbers[index]}.json`;
                linkarr.push(link);
              });
              if (linkarr.length === 33) {
                resolve(linkarr);
              }
            });
          };

          const availablelink = await getavailableLink();

          const result = await contract.mintLeague(
            receiver,
            availablelink,
            index,
            league,
            valueFee
          );

          await result.wait();

          //update DB

          const body = {
            address: receiver,
            files: availablelink,
            league: league,
          };
          const dbresponse = await axios.post("http://localhost:3001", body);

          if (dbresponse.status === 200)
            setMessage("League Mint Completed, Refreshing data");
          else {
            setMessage("DB was not updated, check console");
          }

          refresh();

          setloader(false);
        }
      } catch (error) {
        setMessage("check error in console");
        refresh();
        setloader(false);
      }
    }
    //do URI maths
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
    <div className={styles.mintbox}>
      {!!pushMessage ? <Message message={pushMessage} /> : ""}
      <p>{data.address}</p>
      <input
        ref={arrayRef}
        type="text"
        placeholder="12,25,52,32,68,52,333,65,74,56,96,32,56,85,45,23,65,85,21,45,78,54,12,65,96,36,52,38,75,31,58,89,457"
      />
      <button
        onClick={() => {
          connected && handleMint(data.address, data.index, data.league);
        }}
      >
        {loader ? <Loader /> : connected ? "Mint" : "Not Connected"}
      </button>
    </div>
  );
};

export default Mintbox;
