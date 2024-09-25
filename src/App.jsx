import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionsHistory/TransactionHistory";

import ProfileData from "./userData.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.users_continer}>
      <Profile
        key={ProfileData.tag}
        name={ProfileData.username}
        tag={ProfileData.tag}
        location={ProfileData.location}
        image={ProfileData.avatar}
        followers={ProfileData.stats.followers}
        likes={ProfileData.stats.likes}
        viwes={ProfileData.stats.views}
      />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
export default App;
