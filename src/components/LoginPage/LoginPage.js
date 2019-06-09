import React from 'react';
import styled from "styled-components";
import logoIcon from '../../logo-icon.png'
import logoText from '../../logo-text.png'


class LoginPage extends React.Component {
    render() {
        return (
            <div className='wrapper'>
                <nav className='navigation'>
                    <div className='LogoContainer'>
                        <div className='LogoIcon'>
                            <img src={logoIcon} />
                        </div>
                        <div className='LogoText'>
                            <img src={logoText} />
                        </div>
                    </div>
                    <ul className='links'>
                        <li>Terms</li>
                        <li>Privacy</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default LoginPage;