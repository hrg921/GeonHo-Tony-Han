import React from 'react';
import styled from 'styled-components';

import { PADDING_LEFT as PAGE_PADDING_LEFT, PADDING_RIGHT as PAGE_PADDING_RIGHT } from '../../constants';
import { Props } from './interface';

const GAP = 32;
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
  height: calc(
    (
        (
            100vw - ${PAGE_PADDING_LEFT}px - ${PAGE_PADDING_RIGHT}px -
              ${GAP * 3}px
          ) / 4 - ${PADDING}px * 2
      ) * 240 / 352
  );
  margin-bottom: 30px;
  margin-right: ${GAP}px;
  max-width: 352px;
  padding: ${PADDING}px;
  position: relative;
  width: calc(
    (100vw - ${PAGE_PADDING_LEFT}px - ${PAGE_PADDING_RIGHT}px - ${GAP * 3}px) /
      4 - ${PADDING}px * 2
  );

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
