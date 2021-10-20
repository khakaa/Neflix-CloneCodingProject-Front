import React from "react";
import styled from "styled-components";
import ContentThumbnail from "./ContentThumbnail";

import { apis } from "../lib/apis";

const Row = (props) => {
  const { Poster, title, url } = props;

  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const res = await apis.getCategoryMovie(url);
      setMovies(res.data.dataList);
    }

    fetchData();
  }, []);

  return (
    <React.Fragment>
      <RowContainer>
        <STText>{title}</STText>
        {movies.map((m) => {
          return (
            <ImgWrap>
              <ContentThumbnail
                overview={m.overview}
                firstDate={m.first_data}
                grade={m.grade}
                posterPath={m.posterPath}
                youtubePath={m.youtubePath}
              ></ContentThumbnail>
            </ImgWrap>
          );
        })}
      </RowContainer>
    </React.Fragment>
  );
};

// Row.defaultProps = {
//   sectionTitle: "Genre",
// };

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
