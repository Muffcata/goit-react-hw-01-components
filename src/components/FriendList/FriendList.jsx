import style from './FriendList.module.css';
import PropTypes from 'prop-types';

export const Friendlist = ({ friends }) => {
  return (
    <>
      <ul className={style.list}>
        {friends.map(friend => (
          <FriendListItem
            isOnline={friend.isOnline}
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
          />
        ))}
      </ul>
    </>
  );
};

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.item}>
      <span className={isOnline ? style.status : style.offline}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

Friendlist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default Friendlist;
