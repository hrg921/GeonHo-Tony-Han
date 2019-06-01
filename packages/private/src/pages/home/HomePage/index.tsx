import React from 'react';
import styled from 'styled-components';

import { PADDING_LEFT, PADDING_RIGHT } from './constants';
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
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-left: ${PADDING_LEFT}px;
  padding-right: ${PADDING_RIGHT}px;
  padding-top: 20px;
  width: calc(100% - 96px);
`;

const Title = styled.h1`
  font-size: 40px;
`;
