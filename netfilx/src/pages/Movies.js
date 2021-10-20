import React from "react";
import Row from "../components/Row";
import styled from "styled-components";

import { useState } from "react";

import { request } from "../shared/request";

const Movies = () => {
  const selectList = ["한국", "미국영화", "외국작품", "액션"];
  const [Selected, setSelected] = useState("");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  return (
    <>
      <GenreNav>
        <Text>영화</Text>

        <Select onChange={handleSelect} value={Selected}>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </Select>

        <p>
          Selected: <b>{Selected}</b>
        </p>
      </GenreNav>

      <Grid>
        {request.map((r) => {
          return <Row key={r.title} title={r.title} url={r.url} />;
        })}
      </Grid>
    </>
  );
};

const GenreNav = styled.div`
  padding-top: 100px;
  display: flex;
  color: white;
  align-items: center;
  padding-left: 4%;
`;

const Text = styled.div`
  font-size: 36px;
  font-weight: 800;
  margin-right: 20px;
`;

const Select = styled.select`
  width: 90px;
  height: 27px;
  border: 1px solid white;
  color: white;
  background-color: black;
  font-weight: 700;
  padding: 2px 2px 0px 2px;
`;

const Grid = styled.div`
  width: auto;
  height: auto;
  background-color: black;
  overflow-y: auto;
  margin: 3vw 0;
`;

export default Movies;
