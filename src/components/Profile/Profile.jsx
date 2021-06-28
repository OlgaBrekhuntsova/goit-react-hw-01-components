import React from "react";
import PropTypes from 'prop-types';
import photoDefault from "./no-photo-default.jpeg";
import { userStatsDefault } from "../../assets/defaults";
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, stats: {followers, views, likes} }) => {
    return (
              <div className={styles.profile}>
                <div className={styles.description}>
    <img
      src={avatar}
      alt="Аватар пользователя"
      className={styles.avatar}
    />
                <p className={styles.name}>{ name}</p>
                <p className={styles.tag}>@{ tag}</p>
                <p className={styles.location}>{location }</p>
  </div>

  <ul className={styles.stats}>
          <li className={styles.stats_item}>
      <span className={styles.label}>Followers</span>
                    <span className={styles.quantity}>{followers}</span>
    </li>
    <li className={styles.stats_item}>
      <span className={styles.label}>Views</span>
                    <span className={styles.quantity}>{views}</span>
    </li>
    <li className={styles.stats_item}>
      <span className={styles.label}>Likes</span>
                    <span className={styles.quantity}>{likes}</span>
    </li>
  </ul>
</div>
    );
 };

Profile.defaultProps = {
  avatar: photoDefault,
  stats: userStatsDefault,
  // followers: 0,
};

Profile.propTypes = {
 name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    likes: PropTypes.number,
    followers: PropTypes.number,
    views: PropTypes.number,
  }),
};

export default Profile;