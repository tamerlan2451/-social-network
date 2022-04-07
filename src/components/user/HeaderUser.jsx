import React from "react";
import styles from "./User.module.css";
import CircularProgress from "@mui/material/CircularProgress";
import Logo from "../Images/user.png";
import style from "../profile/Profile.module.css";
import { Link } from "react-router-dom";

const HeaderUser = ({ image, loading, firstname, lastname, id, freind }) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerImg}>
          {loading ? (
            <div className={styles.headerImgWrap}>
              <CircularProgress />
            </div>
          ) : (
            <div className={styles.headerImgWrap}>
              <img
                src={image ? `http://localhost:4000/${image}` : Logo}
                alt="profile"
              />
            </div>
          )}
        </div>
        <div className={styles.headerDescription}>
          <div className={styles.descriptionEdit}>
            <h2>{`${firstname} ${lastname}`}</h2>
          </div>
          <div className={styles.descriptionPosts}>
            <div className={styles.followsWrap}>
              <b>36</b> публикаций
            </div>
            <div className={styles.followsWrap}>
              <b>184</b> подписчиков
            </div>
            <div className={styles.followsWrap}>
              <b>194</b> подписок
            </div>
          </div>
          {freind ? (
            <>
              <button className={styles.otpiska}>Отписаться</button>
              <button style={{ marginLeft: "10px" }} className={styles.otpiska}>
                Отправить сообщение
              </button>
            </>
          ) : (
            <>
              <button className={styles.otpiska}>Подписаться</button>
              <button style={{ marginLeft: "10px" }} className={styles.otpiska}>
                Отправить сообщение
              </button>
            </>
          )}
        </div>
      </div>
      <div className={style.menuMain}>
        <Link className={style.menuLink} to="/public">
          <svg
            aria-label=""
            className="_8-yf5 "
            color="#262626"
            fill="#262626"
            height="12"
            role="img"
            viewBox="0 0 24 24"
            width="12"
          >
            <rect
              fill="none"
              height="18"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              width="18"
              x="3"
              y="3"
            ></rect>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="9.015"
              x2="9.015"
              y1="3"
              y2="21"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="14.985"
              x2="14.985"
              y1="3"
              y2="21"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="21"
              x2="3"
              y1="9.015"
              y2="9.015"
            ></line>
            <line
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              x1="21"
              x2="3"
              y1="14.985"
              y2="14.985"
            ></line>
          </svg>
          <div className={style.menuText}>ПУБЛИКАЦИИ</div>
        </Link>
      </div>
    </>
  );
};

export default HeaderUser;