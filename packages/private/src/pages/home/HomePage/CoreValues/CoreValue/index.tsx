import React from 'react';
import styled from 'styled-components';

import { PADDING_LEFT as PAGE_PADDING_LEFT, PADDING_RIGHT as PAGE_PADDING_RIGHT } from '../../constants';

const GAP = 32;
const HORIZONTAL_PADDING = 16;

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
  margin-bottom: 16px;
  max-width: 480px;
  padding: 12px ${HORIZONTAL_PADDING}px;
  width: calc(
    (100vw - ${PAGE_PADDING_LEFT}px - ${PAGE_PADDING_RIGHT}px - ${GAP * 2}px) /
      3 - ${HORIZONTAL_PADDING}px * 2
  );
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
