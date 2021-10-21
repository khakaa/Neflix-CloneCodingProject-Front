import React from "react";
import styled from "styled-components";

const DropDownModal = () => {
  return (
    <Wrap>
      <GenreListLine>
        <GenreText>핼러윈 스페셜</GenreText>
        <GenreText>한국</GenreText>
        <GenreText>미국영화</GenreText>
        <GenreText>외국 작품</GenreText>
        <GenreText>영화제 수상작</GenreText>
        <GenreText>인디</GenreText>
        <GenreText>어린이/가족</GenreText>
      </GenreListLine>
      <GenreListLine>
        <GenreText>애니메이션</GenreText>
        <GenreText>액션</GenreText>
        <GenreText>코미디</GenreText>
        <GenreText>로맨스</GenreText>
        <GenreText>스릴러</GenreText>
        <GenreText>호러</GenreText>
        <GenreText>SF</GenreText>
      </GenreListLine>
      <GenreListLine>
        <GenreText>판타지</GenreText>
        <GenreText>드라마</GenreText>
        <GenreText>범죄</GenreText>
        <GenreText>다큐멘터리</GenreText>
        <GenreText>음악/뮤지컬</GenreText>
        <GenreText>고전</GenreText>
      </GenreListLine>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: flex;
  position: absolute;
  z-index: 1000;
  background-color: black;
  border: 1px solid gray;
  opacity: 0.9;
  left: 140px;
  top: 140px;
  padding: 0;
  height: 170px;
`;

const GenreListLine = styled.ul`
  width: 85px;
  height: 200px;
  font-size: 15px;

  align-items: center;
`;

const GenreText = styled.li`
  list-style: none;
  margin: auto;
  color: white;
`;

export default DropDownModal;
