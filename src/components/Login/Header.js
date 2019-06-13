import React from "react";
import styled from "styled-components";
import logoIcon from "../../logo-icon.png";

const Header = props => {
  const renderText = () => {
    if (props.configData !== undefined) {
      return <h1>{props.configData[0].tournamentName}</h1>;
    } else {
      return <h1>Leaderboard</h1>;
    }
  };

  const resetLeaderboard = () => {
    localStorage.clear();
    window.location.reload();
  }

  return (
    <StyledHeader>
      <nav>
        <div>
          <div className="LogoIcon">
            <img src={logoIcon} alt="Logo of website in icon format" />
          </div>
          <div className="LogoText">{renderText()}</div>
        </div>
        <ul className="links">
          <li onClick={resetLeaderboard}>Reset Leaderboard</li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

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
      color: #E4E6E8;
      margin-left: 64px;
      cursor: pointer;
      transition-duration: 0.3s;


      @media only screen and (max-width: 700px) {
        margin-left: 24px;
      }
    }

    ul li:hover {
      color: #61DAFB;
      transition: color 0.3s ease-in-out;
    }

    & > div {
        display: flex;
        align-items: center;

        .LogoIcon {
            height: 30px;
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

        .LogoText h1 {
            font-size: 32px;
            font-weight: bold;
            color: #61DAFB;

            @media only screen and (max-width: 700px) {
                display: none;
            }
        }
    }
  }
`;

export default Header;
