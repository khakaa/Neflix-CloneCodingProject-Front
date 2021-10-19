import React from "react";
import styled from "styled-components";

import ContentThumbnail from "./ContentThumbnail";
const Row = (props) => {
  const { sectionTitle, fetchUrl, fetchUrlTMDB, Poster } = props;

  return (
    <React.Fragment>
      <RowContainer>
        <STText>{sectionTitle}</STText>
        <ImgWrap>
          <ContentThumbnail></ContentThumbnail>
          <ContentThumbnail></ContentThumbnail>
          <ContentThumbnail></ContentThumbnail>
          <ContentThumbnail></ContentThumbnail>
          <ContentThumbnail></ContentThumbnail>
          <ContentThumbnail></ContentThumbnail>
          <ContentThumbnail></ContentThumbnail>
        </ImgWrap>
      </RowContainer>
    </React.Fragment>
  );
};

Row.defaultProps = {
  sectionTitle: "Genre",
};

const STText = styled.span`
  background-color: black;
  color: #fff;
  font-weight: 800;
  font-size: 3vmin;
  opacity: 0.85;
  letter-spacing: -1px;
  transition: 150ms ease-in-out;
  :hover {
    opacity: 1;
  }
`;

const ImgWrap = styled.div`
  width: 100%;
  display: flex;

  padding: 1.2vmin 0 1.2vmin 0;
  margin: 0 0 3vmin 0;
  overflow-x: scroll;
  overflow-y: none;
  overflow: auto;
  scroll-behavior: smooth;

  ::-webkit-scrollbar {
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ff000080;
    border-radius: 10px;

    border: 2px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
  }
`;

const RowContainer = styled.div`
  padding: 0 0 0 4%;
`;

// const Card = styled.div`
//   height: 124px;
//   min-width: 220px;
//   background-color: white;
// `;

export default Row;
