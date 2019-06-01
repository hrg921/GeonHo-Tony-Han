import React from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';


export default withRouter(
  React.memo(() => {
    return (
      <Container>
        <Title />
      </Container>
    );
  })
);

const Container = styled.section``;

const Title = styled.h1``;
