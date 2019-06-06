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
  font-size: 32px;
  margin-bottom: 30px;
  width: 100%;
  text-align: center;
`;

const CoreValueContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 32px;
  width: 100%;

  @media screen and (max-width: 750px) {
    grid-template-columns: 1fr;
  }
`;
