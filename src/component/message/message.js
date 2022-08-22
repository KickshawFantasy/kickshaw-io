import React, { useEffect, useState } from "react";
import styles from "./message.module.css";

const Message = (props) => {
  const [appear, setAppear] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAppear(false);
    }, 4500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className={`${styles.messagebody} ${appear ? styles.appear : ""}`}>
      <p>{props.message}</p>
      <div className={styles.linearactivity}>
        <div className={styles.indeterminate}></div>
      </div>
    </div>
  );
};

export default Message;
