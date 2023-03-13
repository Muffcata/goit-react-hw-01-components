import style from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={style.item}>
      <span className={isOnline ? style.status : style.offline}></span>
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
