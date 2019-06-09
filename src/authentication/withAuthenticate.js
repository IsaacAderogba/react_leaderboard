import React from 'react';

const withAuthenticate = App => {
    return class extends React.Component {
        constructor() {
            super();

            this.state = {
                isLoggedIn: false
            }
        }

        render() {
            if(this.state.isLoggedIn) {
                return <App />
            }
            return <div>Login</div>
        }
    }
}

export default withAuthenticate;