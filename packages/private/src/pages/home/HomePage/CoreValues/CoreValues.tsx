import React from 'react';
import styled from 'styled-components';

import CoreValue from './CoreValue';
import data from './data';

export default React.memo(() => (
  <Container>
    <Title>💎 Core Values</Title>
    <CoreValueContainer>
      {data.map((value, index) => (
        <CoreValue key={index} {...value} />
      ))}
    </CoreValueContainer>
  </Container>
));

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  display: flex;
  font-size: 32px;
  justify-content: center;
  margin-bottom: 30px;
  width: 100%;
`;

const CoreValueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
