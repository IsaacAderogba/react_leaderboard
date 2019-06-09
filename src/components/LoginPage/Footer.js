import React from "react";
import styled from "styled-components";

class Footer extends React.Component {
  render() {
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
            by Isaac Aderogba
          </p>
        </footer>
      </StyledFooter>
    );
  }
}

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
  }
`;

export default Footer;
