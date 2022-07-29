import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>Copyright ©2022 Kickshaw LLC. Kickshaw.io All Rights Reserved.</p>{" "}
      <p>
        Privacy Policy - Terms Of Service - Acceptable Use Policy - Powered by:
        Goalserve and Polygon.
      </p>
      <p>
        Disclaimer: This site is not in any way affiliated with, endorsed or
        licensed by the National Football League, any NFL team or NFLPA member.
      </p>
    </div>
  );
};

export default Footer;
