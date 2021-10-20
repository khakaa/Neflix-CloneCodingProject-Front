import React from "react";
import Row from "../components/Row";
import styled from "styled-components";

import { request } from "../shared/request";

const Movies = () => {
  return (
    <>
      <GenreNav>
        <div>영화</div>
        <div>토글</div>
      </GenreNav>

      <Grid>
        {request.map((req) => {
          return <Row title={req.title} url={req.url} />;
        })}
      </Grid>
    </>
  );
};

const GenreNav = styled.div`
  padding-top: 100px;
`;

const Grid = styled.div`
  width: auto;
  height: auto;
  background-color: black;
  overflow-y: auto;
  margin: 3vw 0;
`;

export default Movies;
