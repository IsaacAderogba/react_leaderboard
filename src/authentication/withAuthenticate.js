import React from 'react';
import LoginPage from '../components/LoginPage/LoginPage';

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
            return <LoginPage>Login</LoginPage>
        }
    }
}

export default withAuthenticate;