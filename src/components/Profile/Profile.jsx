import React from "react";
import PropTypes from 'prop-types';
import photoDefault from "./no-photo-default.jpeg";
import { userStatsDefault } from "../../assets/defaults";

const Profile = ({ name, tag, location, avatar, stats: {followers, views, likes} }) => {
    return (
              <div className="profile">
                <div className="description">
    <img
      src={avatar}
      alt="Аватар пользователя"
      className="avatar"
    />
                <p className="name">{ name}</p>
                <p className="tag">@{ tag}</p>
                <p className="location">{location }</p>
  </div>

  <ul className="stats">
    <li>
      <span className="label">Followers</span>
                    <span className="quantity">{followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
                    <span className="quantity">{views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
                    <span className="quantity">{likes}</span>
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