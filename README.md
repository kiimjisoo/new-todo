
1. 미입력시 버튼 비활성화 또는 유효성검사 후 경고 띄우기(내용을 입력하세요)
2. 할 일 몇개인지 표시(전체, 완료, 미완료) 
3. 중요한 일은 핀 고정 버튼 누르면 상위로 올림


날짜도 같이 기록(디데이 표시)
TodoInsert에서 날짜 선택
TodolistItem 에 d-day, 선택날짜


완료된 일은 밑으로 내리기

할 일 목록 정렬 기능
테마 적용(다크,라이트 모드)
드ㅐ그 앤 드랍 적용
할 일 수정 기능




img는 import로 가져올 수 있음

npx create-react-app new-todo
리액트 앱 생성

깃허브 new repositories
생성 후 명령어 따라침

패키지 설치
npm istall styled-reset react-icons styled-components

template 
가운데 정렬 타이틀 보임 

버튼s
submit
input


app.js 에서 데이터 todolist에 넘김
todolist에서 반복렌더링(.map 사용시 고유 key값 없으면 워닝)

uuid 고유한 값



1. ui구성
2. template 구성 후 app.js
3. todoinsert 구성 후 app.js
4. 일정 항목 - todolistitem, todolist
list에 item들 불러옴
5. app에서 배열 데이터 생성
6. 배열 todolist로 
7. props로 받아온 todos map으로 todolistitem 배열로 변환 (key값)
8. input 내용 추가 
9. checkbox true/false 제어
10. 항목 제거 - 배열 복사본 만들기 / id비교해 다른 값 제외 새 배열 만들기 / 다른 값 제거 / 새 배열 반환
11. 체크박스 - 배열 복사본 만들기  / id 값 찾음 / 반대 값 넣어줌 / 
12. count 수량 표시 - button onClick시 count값 +1 / remove onClick시 count값 -1

핀  누르면 해당 데이터 색 변경 및 상단 고정




***
완료 미완료 filter사용 

input date 변경 select X

유효성 검사 다시
(insert 전 유효성 검사 순서 바꿔야 함)