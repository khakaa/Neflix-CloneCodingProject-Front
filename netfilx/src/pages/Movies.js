import React from "react";
import Row from "../components/Row";
import styled from "styled-components";
import DropDownModal from "../components/DropDownModal";
import { AiFillCaretDown } from "react-icons/ai";

import { request } from "../shared/request";

const Movies = () => {
  const [dropDownOn, setDropDownOn] = React.useState(false);

  const toggleModalSetting = () => {
    if (dropDownOn === false) {
      setDropDownOn(true);
    }
    if (dropDownOn === true) {
      setDropDownOn(false);
    }
  };

  return (
    <>
      <GenreNav>
        <Text>영화</Text>
        <GenreBox onClick={() => toggleModalSetting()}>
          장르
          <AiFillCaretDown />
        </GenreBox>
      </GenreNav>
      {dropDownOn === true ? <DropDownModal /> : <div />}
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

const GenreBox = styled.div`
  width: 90px;
  height: 27px;
  border: 1px solid white;
  line-height: 27px;
  text-align: center;
  position: relative;
  align-items: center;
`;

const Text = styled.div`
  font-size: 36px;
  font-weight: 800;
  margin-right: 20px;
`;

const Grid = styled.div`
  width: auto;
  height: auto;
  background-color: black;
  overflow-y: auto;
  margin: 3vw 0;
`;

export default Movies;
