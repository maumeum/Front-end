# 엘리스 SW 엔지니어 트랙 4기 2차 프로젝트 "마음이음"(작성중)

[![logo](https://github.com/maumeum/Front-end/assets/119808319/69a624d8-6bb0-43bd-a3e0-b3e85d13e132)](http://kdt-sw-4-team01.elicecoding.com/)
<br>
[프론트엔드 리포지토리](https://github.com/maumeum/Front-end)
<br>
[백엔드 리포지토리](https://github.com/maumeum/Back-end)

<br>

## 1. 프로젝트 소개

### 고객 페르소나
<p align="center">
  <img src="https://github.com/maumeum/Front-end/assets/119808319/8e516425-a2bb-4b5d-a027-6123730a3be7/image.png">
</p>

### 서비스 개요
마음이음은 봉사활동을 알아가고 싶은 모든 사람들을 위한 봉사자 커뮤니티 플랫폼 입니다. 

- 봉사활동을 등록하고 신청하는 간편한 시스템 제공
- 마음이음만의 ‘봉사처 인증 시스템’ & 실제 참여자가 작성하는 ‘후기 시스템’
- 캐주얼하게 봉사 동행을 구할 수 있는 커뮤니티 마련
- 봉사 전문가들에게 배우는 봉사활동 꿀팁 공유의 장

### 개발 기획
[기능명세서](https://www.notion.so/elice/f1f4634e99324282832d2874eedf3d48?v=0cf7225ab41e4f08807d27e7965aeb1f&pvs=4)
- 페이지 별 상세 기능 명세
- 기능 별 담당자 및 구현 상태 표시
- 고도화 항목 명세

[API 명세서](https://www.notion.so/elice/API-822b6d5c88954489941d46cb869828cd?pvs=4)
- 주요 기능의 Method 및 URI 명세
- request 데이터 및 response 데이터 명세
- 기능 별 권한 표시

[DB 스키마](https://www.notion.so/elice/DB-72abf389b6cc491da002fb3f9286d9b1?pvs=4)
- 각 Schema 별 field 명세
- field type 및 required 여부 표시
- field 상세 설명 명세

<br>

## 2. 기술 스택

### Language
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>

### Backend
<img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white"/>
<img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white"/>

### Frontend
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=figma&logoColor=white"/>
<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white"/>
<img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/>
<img src="https://img.shields.io/badge/ESbuild-FFCF00?style=flat-square&logo=esbuild&logoColor=white"/>
<img src="https://img.shields.io/badge/StyledComponents-DB7093?style=flat-square&logo=styledcomponents&logoColor=white"/>
<img src="https://img.shields.io/badge/🐻Zustand-FFCA28?style=flat-square&logo=zustand&logoColor=white"/>
<img src="https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=storybook&logoColor=white"/>

### Infrastructure
<img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white"/>
<img src="https://img.shields.io/badge/PM2-2B037A?style=flat-square&logo=pm2&logoColor=white"/>
<img src="https://img.shields.io/badge/NGINX-009639?style=flat-square&logo=nginx&logoColor=white"/>

<br>

## 3. 아키텍쳐 설계

<p align="center">
  <img src="https://github.com/maumeum/Front-end/assets/119808319/ddfd81c8-4b7c-4ca0-a1c7-d14c0ca14aee/image-arch.png">
</p>

<br>

## 4. 역할 분담

### Backend
[류한나](https://github.com/hanna-ryu) : 팀장 / 백엔드 
- User JWT인증 방식 로그인, 회원가입, 유저 관련 CRUD 기능 구현
- Review 조건별 / 기능별 CRUD 기능 구현 , scheduler 모듈 활용 일정시점 db 자동변경 구현  
- 팀 단체 인증 CRUD 기능 구현, , nodemailer 인증 시스템 구현, 
- winston 활용 logger 시스템 적용
- asyncHandler , errorHandler, 응답 형식 구분
- multer 활용 이미지 업로드 기능 구현

[이해인](https://github.com/LHI0915)

[탁경진](https://github.com/Takkyou)

### Frontend
[김마리나](https://github.com/marinarinarina)
- 컴포넌트 스토리북 작성
- 같이봉사해요 페이지 구현
  - 등록한 봉사활동 전체보기
  - 봉사활동 글쓰기

[류이서](https://github.com/ryuiseo)
- 커뮤니티 페이지 구현
  - 게시글 작성, 수정, 삭제
  - 댓글 작성, 수정, 삭제
- 리뷰 페이지 구현
  - 리뷰 수정, 삭제
- 홈페이지 UI 디자인

[정혜린](https://github.com/02rynn)

[최윤재](https://github.com/uniqueeest)
- 메인페이지 구현
- 회원가입, 로그인 페이지 구현
- 검색 페이지 구현
- 팀 단체 인증
- 관리자 페이지
   - 신고된 게시글, 댓글 확인 후 승인/거부
   - 팀 단체 승인/거부
   - 신고된 유저 관리
 

<br>


## 5. 소스코드 폴더 구조
```
src
├─ main.tsx
├─ App.tsx
├─ api
├─ assets
├─ components
├─ pages
├─ store
├─ styles
├─ types
└─ utils
```

|Directory|Description|
|------|---|
|main.tsx|초기설정 및 실행 파일|
|App.tsx|라우터 연결 파일|
|api|api 요청 관련 함수 모음|
|assets|폰트, 아이콘, 기본이미지|
|components|컴포넌트 정의|
|pages|페이지 정의|
|store|전역 상태를 관리하기 위한 스토어 정의|
|styles|전역 스타일 정의|
|types|interface 및 enum 정의|
|utils|자주 사용하는 기능들을 모듈화한 함수 모음|

<br>

## 6. 커밋 컨벤션

|메시지|설명|
|------|---|
|feat|새로운 기능 추가|
|fix|버그 수정|
|docs|문서 추가 및 변경|
|design|css 작업|
|style|코드 포맷팅|
|refact|코드 리팩토링|
|test|테스트 추가|
|chore|빌드 및 패키지 수정|
|rename|파일 수정 또는 위치 이동|
|remove|파일 삭제|

<br>

## 7. 구현 기능(gif 또는 동영상)

### 유저 기능
- 회원가입
- 로그인
- 회원 탈퇴
- 정보 수정 

### 봉사활동 등록 · 조회 · 신청 · 리뷰 
- 봉사활동 등록
- 봉사활동 조회
- 봉사활동 신청
- 참여한 봉사활동 리뷰

### 봉사활동·커뮤니티·댓글 신고 기능
- 부적절한 게시물, 댓글 신고기능
- 관리자의 신고 처리 기능

### 커뮤니티 게시판  동행구해요 / 궁금해요
- 내가신청한 봉사활동, 완료한 봉사활동 조회
- 참여완료 확인 기능
- 리뷰 작성기능
- 내가 쓴 게시물, 댓글 확인 기능

### 마이페이지
- 내가신청한 봉사활동, 완료한 봉사활동 조회
- 참여완료 확인 기능
- 리뷰 작성기능
- 내가 쓴 게시물, 댓글 확인 기능

### 팀 인증 (Team Authorization)
- 단체/개인에 대한 관리자의 승인/권한 부여를 통해 사용자들의 안전한 봉사활동 플랫폼을 보장

<br>

## 8. 트러블슈팅 및 배운점
