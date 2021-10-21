import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as cardCreators } from "../redux/modules/browse";

import ContentThumbnail from "./ContentThumbnail";

const BrowseRow = (props) => {
  const dispatch = useDispatch();
  const { history } = props;
  const moviecard_list = useSelector((state) => state.browse.list);

  useEffect(() => {
    dispatch(cardCreators.setMovieDB());
  }, []);

  return (
    <React.Fragment>
      <RowContainer>
        {moviecard_list.map((moviecard, idx) => {
          return (
            <ScrollWrap>
              <STText>{moviecard.smallCategory}</STText>
              <ImgWrap>
                {moviecard.dataList.map((element) => (
                  <ContentThumbnail {...element} key={idx}></ContentThumbnail>
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

  /* overflow-x: scroll;
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
  } */
`;

const ScrollWrap = styled.div`
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
