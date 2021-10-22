import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import ContentThumbnail from "./ContentThumbnail";

const BrowseRow = (props) => {
  const moviecard_list = useSelector((state) => state.browse.list);

  return (
    <React.Fragment>
      <RowContainer>
        {moviecard_list.map((moviecard, idx) => {
          return (
            <ScrollWrap>
              <STText key={moviecard.idx}>{moviecard.smallCategory}</STText>
              <ImgWrap>
                {moviecard.dataList.map((element, idx) => (
                  <div>
                    <ContentThumbnail
                      {...element}
                      key={element.idx}
                    ></ContentThumbnail>
                  </div>
                ))}
              </ImgWrap>
            </ScrollWrap>
          );
        })}
      </RowContainer>
    </React.Fragment>
  );
};

BrowseRow.defaultProps = {
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
`;

const ScrollWrap = styled.div`
  width: 100%;
  overflow-x: scroll;
  margin: 0 0 3vmin 0;

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
  padding: 0 0 0 1%;
  width: 100%;
  overflow-x: scroll;
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

// const Card = styled.div`
//   height: 124px;
//   min-width: 220px;
//   background-color: white;
// `;

export default BrowseRow;
