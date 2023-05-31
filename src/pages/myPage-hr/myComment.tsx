import React, { useState } from 'react';
import { Container, Main, MenuBar, TabMenu } from './voluntHistory.ts';

import Tab from '../../components/Tab/Tab.tsx';
import MyPost from '../../components/MyPost/MyPost.tsx';

function myComment() {
  const [currTab, setCurrTab] = useState('내가 댓글 단 게시글');
  const handleClickTab = (tab: string) => {
    setCurrTab(tab);
  };

  const tabs = ['내가 쓴 게시글', '내가 댓글 단 게시글', '내가 쓴 후기'];
  return (
    <>
      <Container>
        <MenuBar>
          <p>내가쓴글</p>
          <p>내가 댓글 쓴글</p>
          <p>봉사내역조회</p>
        </MenuBar>

        <Main>
          <TabMenu>
            <Tab currTab={currTab} onClick={handleClickTab} tabs={tabs} />
          </TabMenu>
          <MyPost></MyPost>
        </Main>
      </Container>
    </>
  );
}

export default myComment;
