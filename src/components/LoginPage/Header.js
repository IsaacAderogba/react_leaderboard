import React from "react";
import styled from "styled-components";
import logoIcon from "../../logo-icon.png";
import logoText from "../../logo-text.png";

class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <nav>
          <div>
            <div className="LogoIcon">
              <img src={logoIcon} alt="Logo of website in icon format" />
            </div>
            <div className="LogoText">
              <img src={logoText} alt="Logo of website in text format" />
            </div>
          </div>
          <ul className="links">
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </nav>
      </StyledHeader>
    );
  }
}

const StyledHeader = styled.div`
  border-bottom: 1px solid #eaeaea;

  nav {
    display: flex;
    height: 10vh;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 16px;
    justify-content: space-between;
    align-items: center;

    ul li {
      display: inline-block;
      font-size: 20px;
      color: #ffffff;
      margin-left: 64px;

      @media only screen and (max-width: 700px) {
        margin-left: 24px;
      }
    }

    & > div {
        display: flex;
        align-items: center;

        .LogoIcon {
            height: 35px;
            margin-right: 16px;
            padding-right: 16px
            border-right: 1px solid #EAEAEA;

            img {
            height: inherit;
            }

            @media only screen and (max-width: 700px) {
                border: none;
            }
        }

        .LogoText {
            height: 35px;
            img {
                height: inherit;
            }
            @media only screen and (max-width: 700px) {
                display: none;
            }
        }
    }
  }
`;

export default Header;
