import PersonProfile from './components/PersonProfile/PersonProfile';
import userData from './components/Data/userData.json';
import FriendList from './components/FriendList/FriendList';
import friends from './components/Data/friends.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/Data/transactions.json'
export default App;
function App() {
  return (
    <>
    <PersonProfile
    name={userData.username}
    tag={userData.tag}
    location={userData.location}
    image={userData.avatar}
    stats={userData.stats}
  />
  <FriendList friends={friends} />
  <TransactionHistory items={transactions} />
  
  </>
     
  );
}


