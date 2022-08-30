import React from "react";
import styles from "./sidemenu.module.css";

const Sidemenu = () => {
  return (
    <div className={styles.menuFlex}>
      <div>
        <a href="https://kickshaw.io/">
          <i className="bi bi-house-door-fill feather"></i>
          Home
        </a>
      </div>
      <div>
        <i className={`bi bi-house-door-fill feather ${styles.opacity}`}></i>

        <p className={styles.leagues}>Leagues</p>
        <ul>
          <li>
            {" "}
            <div>
              <i className="bi bi-dice-1-fill feather"></i>
              <a href="https://kickshaw.io/?mainmenu=platinum">Platinum</a>
            </div>
          </li>
          <li>
            {" "}
            <div>
              <i className="bi bi-dice-2-fill feather"></i>

              <a href="https://kickshaw.io/?mainmenu=gold">Gold</a>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <i className="bi bi-star-fill feather"></i>
        <a href="https://kickshaw.io/?mainmenu=standings">Standings</a>
      </div>
      <div>
        <i className="bi bi-bar-chart-line-fill feather"></i>
        <a href="https://kickshaw.io/?mainmenu=stats">Player Stats</a>
      </div>
      <div>
        <i className="bi bi-list-columns-reverse feather"></i>
        <a href="https://kickshaw.io/?mainmenu=rules"> Rules/Scoring</a>
      </div>
      <div>
        <i className="bi bi-trophy-fill feather"></i>
        <a href="https://kickshaw.io/?mainmenu=rewards">Matic Rewards</a>
      </div>
      <div>
        <i className="bi bi-file-text-fill feather"></i>
        <p>Docs</p>
        <ul>
          <li>
            {" "}
            <div>
              <i className="bi bi-question-square-fill feather"></i>
              <a href="https://kickshaw.io/?mainmenu=help_faqs">Help/FAQs</a>
            </div>
          </li>
          <li>
            {" "}
            <div>
              <i className="bi bi-info-square-fill feather"></i>

              <a href="https://kickshaw.io/?mainmenu=polygon">Polygon</a>
            </div>
          </li>
          <li>
            {" "}
            <div>
              <i className="bi bi-infinity feather"></i>

              <a href="https://kickshaw.io/?mainmenu=metamask">Metamask</a>
            </div>
          </li>
          <li>
            {" "}
            <div>
              <i className="bi bi-infinity feather"></i>

              <a href="https://kickshaw.io/?mainmenu=walletconnect">
                WalletConnect
              </a>
            </div>
          </li>
          <li>
            {" "}
            <div>
              <i className="bi bi-emoji-angry-fill feather"></i>

              <a href="https://kickshaw.io/?mainmenu=white_paper">Fightpaper</a>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <i className="bi bi-discord feather"></i>
        <a href="https://kickshaw.io/?mainmenu=community">KickShaw Tribe</a>
      </div>
    </div>
  );
};

export default Sidemenu;
