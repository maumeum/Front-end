import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import { Container } from '@components/Tab/tab.ts';
import { TabTypes } from '@components/Tab/TabTypes.ts';
interface TabProps {
	currTab: TabTypes;
	onClick?: (tab: TabTypes) => void;
	tabs: TabTypes[];
}
interface EachTabProps {
	active?: boolean;
}

export default function Tab({ currTab, onClick, tabs }: TabProps) {
	return (
		<Container>
			{tabs?.map((tab, i) => {
				return (
					<EachTab
						key={`${tab}-${i}`}
						active={currTab === tab}
						onClick={() => onClick?.(tab)}>
						{tab}
					</EachTab>
				);
			})}
		</Container>
	);
}

const EachTab = styled.p<EachTabProps>`
	font-size: 1.8rem;
	line-height: 2.2rem;
	color: black;
	padding: 10px;
	+ p {
		margin-left: 1.6rem;
	}

	${props =>
		props.active &&
		css`
			font-weight: bold;
			color: var(--button--color);
			box-shadow: inset 0px -4px 0px var(--button--color);
		`}
`;
