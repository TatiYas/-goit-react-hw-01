import PersonProfile from './components/PersonProfile/PersonProfile';
import userData from './components/Data/userData.json'
import FriendList from './components/FriendList'
import friends from './components/FriendList'
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
    </>
     
  );
}


