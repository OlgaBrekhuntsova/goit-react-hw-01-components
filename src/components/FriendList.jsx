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
export default FriendList;