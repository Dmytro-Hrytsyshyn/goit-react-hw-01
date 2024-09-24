import React from "react";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, followers, viwes, likes }) => {
  return (
    <div className={styles.profile_container}>
      <div className={styles.profiles}>
        <img
          className={styles.avatar}
          src={image}
          alt="User avatar"
          width={100}
          height={100}
        />
        <p className={styles.user_name}>{name}</p>
        <p className={styles.info_user}>@{tag}</p>
        <p className={styles.info_user}>{location}</p>
      </div>

      <ul className={styles.list_statistic}>
        <li className={styles.list_item_statistic}>
          <span className={styles.name_statistic}>Followers</span>
          <span className={styles.result_statistic}>{followers}</span>
        </li>
        <li className={styles.list_item_statistic}>
          <span className={styles.name_statistic}>Views</span>
          <span className={styles.result_statistic}>{viwes}</span>
        </li>
        <li className={styles.list_item_statistic}>
          <span className={styles.name_statistic}>Likes</span>
          <span className={styles.result_statistic}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
