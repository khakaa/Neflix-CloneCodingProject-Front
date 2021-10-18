import React from "react";
import styled from "styled-components";
import MovieCard from "../components/MovieCard";
import Row from "../components/Row";

const Browse = (props) => {
  return (
    <React.Fragment>
      <Wrap>
        <BannerImg src="https://assets.nflxext.com/ffe/siteui/vlv3/68c9706b-acd1-4472-bb1d-ef3ca933154c/22ade83e-5cf7-46b8-aca2-3bd2c9465526/KR-ko-20211011-popsignuptwoweeks-perspective_alpha_website_large.jpg"></BannerImg>
      <div>
        <MovieCard></MovieCard>
      </div>
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
const BannerImg = styled.img`
  width: 100%;
  min-width: 320px;
  position: relative;
`;

export default Browse;