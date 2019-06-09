import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import HeroChart from './HeroChart'


class LoginPage extends React.Component {
  render() {
    return (
      <>
        <Header />
            <LoginWrapper>
                <HeroChart />
            </LoginWrapper>
        <Footer />
      </>
    );
  }
}

const LoginWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
`;


export default LoginPage;
