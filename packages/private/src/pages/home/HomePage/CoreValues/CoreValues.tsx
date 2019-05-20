import React from 'react';
import styled from 'styled-components';

import data from './data';
import CoreValue from './CoreValue';

export default React.memo(() => (
  <Container>
    <Title>💎 Core Values</Title>
    {data.map((value, index) => (
      <CoreValue key={index} {...value} />
    ))}
  </Container>
));

const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Title = styled.h1`
  display: flex;
  font-size: 32px;
  justify-content: center;
  margin-bottom: 20px;
  width: 100%;
`;
