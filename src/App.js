import React from "react";
import LeaderboardPage from "./components/Leaderboard/LeaderboardPage";
import withAuthenticate from "./authentication/withAuthenticate";

const ComponentFromWithAuthenticate = withAuthenticate(LeaderboardPage);

class App extends React.Component {
  render() {
    return <ComponentFromWithAuthenticate />;
  }
}

export default App;
