import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { Container } from './tab.ts';

Tab.defaultProps = {
  currTab: '신청한 봉사',
  onClick: () => {},
  tabs: ['신청한 봉사', '완료한 봉사'],
};

interface EachTabProps {
  active?: boolean;
}

const EachTab = styled.p<EachTabProps>`
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: black;
  padding: 10px;
  + p {
    margin-left: 1.6rem;
  }

  ${(props) =>
    props.active &&
    css`
      font-weight: bold;
      color: var(--button--color);
      box-shadow: inset 0px -4px 0px var(--button--color);
    `}
`;

export default function Tab({
  currTab,
  onClick,
  tabs,
}: {
  currTab: string;
  onClick: () => void;
  tabs: string[];
}) {
  return (
    <Container>
      {tabs.map((tab, i) => {
        return (
          <EachTab
            key={`${tab}-${i}`}
            active={currTab === tab}
            onClick={() => onClick(tab)}
          >
            {tab}
          </EachTab>
        );
      })}
    </Container>
  );
}
