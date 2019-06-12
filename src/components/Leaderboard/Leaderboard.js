import React from 'react';

class Leaderboard extends React.Component {
    render() {
        return (
            <button onClick={this.props.onCompleteRound}>Complete Round</button>
        );
    }
}

export default Leaderboard;