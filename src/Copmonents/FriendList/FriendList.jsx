import FriendListItem from "../FriendListItem/FriendListItem";
import styles from "../FriendList/FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friends_list}>
      {friends.map((friend) => (
        <li className={styles.friends_list_item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
