import React from 'react';
import Card from '../../components/Card/Card.tsx';
import car from '../../assets/images/car.png';

function myVolunHistory() {
  const props = {
    title: '위로가 필요한 요즘, 따뜻한 말한마디와 사진한장',
    thumbnail: car,
    nickname: '[포인핸드] 행동하는 사람',
    profile: car,
    recruitStatus: '모집중',
  };

  return (
    <>
      <aside>dd</aside>
      <Card
        recruitStatus={props.recruitStatus}
        title={props.title}
        thumbnail={props.thumbnail}
        nickname={props.nickname}
        profile={props.profile}
      />
    </>
  );
}

export default myVolunHistory;
