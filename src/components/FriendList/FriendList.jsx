import React from "react";
import PropTypes from 'prop-types';
import photoDefault from "./no-photo-default.jpeg";
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={styles.friend_list}>
            { friends.map(({id, avatar, name, isOnline}) => (
            <li key={id} className={styles.item}>
                    <span className={styles.status} style ={{backgroundColor: isOnline ? 'green' : 'red'}}></span>
                    <img className={styles.avatar} src={avatar} alt={[name, "photo"].join(' ')} width="48" />
                <p className={styles.name}>{name}</p>
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