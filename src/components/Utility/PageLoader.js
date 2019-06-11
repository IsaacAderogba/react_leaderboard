import React from 'react'
import styled from 'styled-components';
import { Dimmer, Loader } from 'semantic-ui-react'

const PageLoader = () => (
  <StyledLoader>
    <Dimmer active>
      <Loader />
    </Dimmer>

  </StyledLoader>
)

const StyledLoader = styled.div`
  height: 100vh;
  width: 100vw;

  .dimmer {
    background-color: #282c34;
  }
`

export default PageLoader