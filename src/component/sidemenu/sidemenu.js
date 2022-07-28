import React from "react";
import styles from "./sidemenu.module.css";

const Sidemenu = () => {
  return (
    <div className={styles.menuFlex}>
      <div>
        <a href="https://test.com">
          <i className="bi bi-house-door-fill feather"></i>
          Home
        </a>
      </div>
      <div>
        <i className={`bi bi-house-door-fill feather ${styles.opacity}`}></i>

        <a className={styles.leagues} href="https://test.com">
          Leagues
        </a>
        <ul>
          <li>
            {" "}
            <div>
              <i class="bi bi-dice-1-fill feather"></i>
              <a href="https://test.com">Platinum</a>
            </div>
          </li>
          <li>
            {" "}
            <div>
              <i class="bi bi-dice-2-fill feather"></i>

              <a href="https://test.com">Gold</a>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <i class="bi bi-star-fill feather"></i>
        <a href="https://test.com">Standings</a>
      </div>
      <div>
        <i class="bi bi-bar-chart-line-fill feather"></i>
        <a href="https://test.com">Player Stats</a>
      </div>
      <div>
        <i class="bi bi-list-columns-reverse feather"></i>
        <a href="https://test.com"> Rules/Scoring</a>
      </div>
      <div>
        <i class="bi bi-trophy-fill feather"></i>
        <a href="https://test.com">Matic Rewards</a>
      </div>
      <div>
        <i class="bi bi-file-text-fill feather"></i>
        <a href="https://test.com">Docs</a>
        <ul>
          <li>
            {" "}
            <div>
              <i class="bi bi-question-square-fill feather"></i>
              <a href="https://test.com">Help/FAQs</a>
            </div>
          </li>
          <li>
            {" "}
            <div>
              <i class="bi bi-info-square-fill feather"></i>

              <a href="https://test.com">Polygon</a>
            </div>
          </li>
          <li>
            {" "}
            <div>
              <i class="bi bi-infinity feather"></i>

              <a href="https://test.com">Metamask</a>
            </div>
          </li>
          <li>
            {" "}
            <div>
              <i class="bi bi-infinity feather"></i>

              <a href="https://test.com">WalletConnect</a>
            </div>
          </li>
          <li>
            {" "}
            <div>
              <i class="bi bi-emoji-angry-fill feather"></i>

              <a href="https://test.com">Fightpaper</a>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <i class="bi bi-discord feather"></i>
        <a href="https://test.com">KickShaw Tribe</a>
      </div>
    </div>
  );
};

export default Sidemenu;
