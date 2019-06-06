import React from 'react';
import styled from 'styled-components';
import { Props } from './interface';

const PADDING = 20;

export default React.memo((props: Props) => {
  const { title, imageUrl, descriptions } = props;

  return (
    <Container imageUrl={imageUrl}>
      <Title>{title}</Title>
      {descriptions.map((description, index) => (
        <Description key={index}>{description}</Description>
      ))}
    </Container>
  );
});

const Container = styled.section<{ imageUrl: string }>`
  &::after {
    background-image: url(${props => props.imageUrl});
    background-position: bottom;
    background-size: cover;
    content: '';
    height: 100%;
    left: 0;
    opacity: 0.25;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  color: white;
  margin-bottom: 30px;
  padding: ${PADDING}px;
  position: relative;

  &:nth-child(4n) {
    margin-right: 0;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 4px;
`;
