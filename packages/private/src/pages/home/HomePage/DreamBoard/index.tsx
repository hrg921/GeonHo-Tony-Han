import React from 'react';
import styled from 'styled-components';

import datas from './data';
import Dream from './Dream';


export default React.memo(() => (
  <Container>
    <Title>🌟 Dream Board</Title>
    <DreamContainer>
      {datas.map(data => (
        <Dream {...data} />
      ))}
    </DreamContainer>
  </Container>
));

const Container = styled.section`
  margin-top: 64px;
  width: 100%;
`;

const Title = styled.h1`
  align-items: center;
  display: flex;
  font-size: 32px;
  margin-bottom: 30px;
  justify-content: center;
`;

const DreamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
