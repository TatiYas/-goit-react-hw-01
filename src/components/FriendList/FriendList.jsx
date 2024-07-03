import style from './FriendList.module.css';
import FriendListItem from '../FriendsListItem/FriendListItem';
export default function FriendList({ friends }) {
  return (
    <ul className={style.list}>
      {friends.map(friend => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}