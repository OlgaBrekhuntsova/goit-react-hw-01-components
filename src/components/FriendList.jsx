import React from "react";
import PropTypes from 'prop-types';
import photoDefault from "../assets/no-photo-default.jpeg";
const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            { friends.map(({id, avatar, name, isOnline}) => (
            <li key={id} className="item">
                <span className="status">{isOnline}</span>
                    <img className="avatar" src={avatar} alt={[name, "photo"].join(' ')} width="48" />
                <p className="name">{name}</p>
            </li>))}
        </ul>);
};
FriendList.defaultProps = {
    avatar: photoDefault, //не находит
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
avatar: PropTypes.string,
isOnline: PropTypes.bool,
    })).isRequired
  };
export default FriendList;