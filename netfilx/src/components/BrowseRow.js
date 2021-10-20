import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as cardCreators } from "../redux/modules/browse";

import ContentThumbnail from "./ContentThumbnail";

const BrowseRow = (props) => {
  const dispatch = useDispatch();
  const { history } = props;
  const large_category = useSelector(
    (state) => state.browse.data.largeCategory
  );
  const state = useSelector((state) => state.browse);
  console.log(state);
  const moviecard_row = useSelector((state) => state.browse.data.datainfo);
  console.log(large_category);
  console.log(moviecard_row);
  useEffect(() => {
    dispatch(cardCreators.setMovieDB());
  }, []);

  return (
    <React.Fragment>
      <RowContainer>
        {moviecard_row.map((p, idx) => {
          return (
            <>
              <STText>{large_category}</STText>
              <ImgWrap key={idx}>
                <ContentThumbnail key={idx} {...p}></ContentThumbnail>
              </ImgWrap>
            </>
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
