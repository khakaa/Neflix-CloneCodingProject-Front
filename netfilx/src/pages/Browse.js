import React from "react";
import styled from "styled-components";
import Row from "../components/Row";

const Browse = () => {
  return (
    <React.Fragment>
      <Wrap>
        <Banner>
          <BtnWrap>
            <Button>재생</Button>
            <Button>상세정보</Button>
          </BtnWrap>
        </Banner>

        <Grid>
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </Grid>
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  width: 100%;
`;

const Banner = styled.div`
  width: auto;
  height: 600px;
  background-color: black;
  position: relative;
`;
const Grid = styled.div`
  width: auto;
  height: auto;
  background-color: black;
  overflow-y: auto;
`;

const BtnWrap = styled.div`
  position: absolute;
  bottom: 100px;
  left: 20px;
`;

const Button = styled.button`
  width: 115px;
  height: 45px;
  border: none;
  padding: 4px;
  margin: 0px 12px;
  font-size: 0.9rem;
  outline: 0px;
  border-radius: 4px;

  text-align: center;
  cursor: pointer;
  color: white;
  background-color: #6d6d6eb3;
  &:hover {
    background-color: #6d6d6e66;
  }
`;

export default Browse;
