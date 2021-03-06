import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import HeroChart from "./HeroChart";
import HeroForm from "./HeroForm";

class LoginPage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <LoginWrapper>
          <HeroChart />
          <HeroForm
            formInputs={this.props.formInputs}
            addPlayer={this.props.addPlayer}
            changeFormValue={this.props.changeFormValue}
            onSubmitButton={this.props.onSubmitButton}
          />
        </LoginWrapper>
        <Footer />
      </>
    );
  }
}

const LoginWrapper = styled.div`
  display: flex;
  max-width: 1280px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 900px) {
    flex-direction: column;
  }
`;

export default LoginPage;
