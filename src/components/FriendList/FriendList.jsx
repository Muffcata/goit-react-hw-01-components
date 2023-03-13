import style from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

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
