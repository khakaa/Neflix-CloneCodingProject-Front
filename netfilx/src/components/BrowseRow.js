import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { actionCreators as cardCreators } from "../redux/modules/browse";

import ContentThumbnail from "./ContentThumbnail";

const BrowseRow = (props) => {
  const dispatch = useDispatch();
  const { history } = props;
  const movieGenre_list = useSelector((state) => state.browse.list);

  useEffect(() => {
    dispatch(cardCreators.setMovieDB());
  }, []);

  return (
    <RowContainer>
      <ImgWrap>
        {movieGenre_list.map((movieGenre, idx) => {
          return (
            <>
              {movieGenre.dataList.map((element) => (
                <ContentThumbnail
                  {...element}
                  key={movieGenre.smallCategory}
                ></ContentThumbnail>
              ))}
            </>
          );
        })}
      </ImgWrap>
    </RowContainer>
  );
};

BrowseRow.defaultProps = {
  sectionTitle: "Genre",
};

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

export default BrowseRow;
