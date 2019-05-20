import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  descriptions: string[];
}

export default React.memo(({ title, descriptions }: Props) => (
  <Container>
    <Title>{title}</Title>
    <Descriptions>
      {descriptions.map(description => (
        <Description>{description}</Description>
      ))}
    </Descriptions>
  </Container>
));

const Container = styled.section`
  background-color: white;
  border-radius: 4px;
  flex-grow: 1;
  margin-left: 16px;
  margin-right: 16px;
  max-width: 480px;
  min-width: 300px;
  padding: 12px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 20px;
`;

const Descriptions = styled.ul`
  color: #333;
  font-size: 16px;
  list-style: none;
  padding-left: 40px;
`;

const Description = styled.li``;
