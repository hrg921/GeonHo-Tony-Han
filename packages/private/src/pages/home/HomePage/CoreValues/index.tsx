import React from 'react';
import styled from 'styled-components';

import CoreValues from './CoreValues';

export default React.memo(() => (
  <Wrapper>
    <CoreValues />
  </Wrapper>
));

const Wrapper = styled.section`
  margin-top: 40px;
  width: 100%;
`;
