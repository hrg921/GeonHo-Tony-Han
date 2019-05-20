import React from 'react';
import styled from 'styled-components';

import CoreValues from './CoreValues';

export default React.memo(() => (
  <Container>
    <Title>🔭 GeonHo Tony Han</Title>
    <CoreValues />
  </Container>
));

const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 40px;
`;
