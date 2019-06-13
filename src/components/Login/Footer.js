import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledFooter>
      <footer>
        <p>
          Made with{" "}
          <span role="img" aria-label="coffee">
            ☕️
          </span>{" "}
          and{" "}
          <span role="img" aria-label="love">
            🤘🏼️
          </span>{" "}
          by <a href='https://github.com/IsaacAderogba'>Isaac Aderogba</a>
        </p>
      </footer>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  border-top: 1px solid #eaeaea;

  footer {
    height: 10vh;
    margin: 0 auto;
    max-width: 1280px;
    display: flex;
    align-items: center;
    padding: 0 16px;

    p {
      font-size: 16px;
      color: lightslategrey;
    }

    a {
      color: #E4E6E8;
      cursor: pointer;
      transition-duration: 0.3s;

    }

    a:hover {
      color: #61DAFB;
      transition: color 0.3s ease-in-out;
    }


  }
`;

export default Footer;
