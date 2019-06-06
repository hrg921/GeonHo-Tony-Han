import React from 'react';
import styled from 'styled-components';

import CoreValues from './CoreValues';
import DreamBoard from './DreamBoard';

export default React.memo(() => (
  <Container>
    <Title>🔭 GeonHo Tony Han</Title>
    <CoreValues />
    <DreamBoard />
  </Container>
));

const Container = styled.section`
  margin: auto;
  max-width: 1440px;
  padding-left: 16px;
  padding-right: 16px;
`;

const Title = styled.h1`
  font-size: 40px;
  margin-top: 20px;
  text-align: center;
`;
