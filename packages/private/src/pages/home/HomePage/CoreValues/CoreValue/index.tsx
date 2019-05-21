import React from 'react';
import styled from 'styled-components';


interface Props {
  title: string;
  subtitle: string;
  descriptions: string[];
}

export default React.memo(({ title, subtitle, descriptions }: Props) => (
  <Container>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    <Descriptions>
      {descriptions.map(description => (
        <Description>{description} ?</Description>
      ))}
    </Descriptions>
  </Container>
));

const Container = styled.section`
  background-color: white;
  border-radius: 4px;
  color: #333;
  flex-grow: 1;
  margin-bottom: 16px;
  margin-left: 16px;
  margin-right: 16px;
  max-width: 480px;
  min-width: 300px;
  padding: 12px 16px;
`;

const Title = styled.h1`
  font-size: 20px;
  margin-bottom: 16px;
`;

const Subtitle = styled.h2`
  color: #666;
  font-size: 18px;
  margin-bottom: 4px;
`;

const Descriptions = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  list-style: none;
  padding: 0;
`;

const Description = styled.li``;
