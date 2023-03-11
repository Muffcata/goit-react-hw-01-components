import Profile from './Profile/Profile';
import user from 'data/user.json';
import Statistics from './Statistics/statistics';
import data from 'data/data.json';

export const App = () => {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};

export default App;
