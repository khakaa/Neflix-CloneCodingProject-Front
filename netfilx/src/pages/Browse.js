import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";

import { actionCreators as cardCreators } from "../redux/modules/browse";

import BrowseRow from "../components/BrowseRow";
import banner from "../shared/img/netflix-banner.jpeg";

const Browse = (props) => {
  const dispatch = useDispatch();
  const { history } = props;
  const movieGenre_list = useSelector((state) => state.browse.list);

  useEffect(() => {
    dispatch(cardCreators.setMovieDB());
  }, []);

  return (
    <React.Fragment>
      <Wrap>
        <BannerImg src={banner}>
          <BtnWrap>
            <Button1>재생</Button1>
            <Button2>상세정보</Button2>
          </BtnWrap>
        </BannerImg>

        <Grid>
          {movieGenre_list.map((movieGenre, idx) => {
            return (
              <>
                <STText>{movieGenre.smallCategory}</STText>
                <BrowseRow />
              </>
            );
          })}
        </Grid>
      </Wrap>
    </React.Fragment>
  );
};

const Wrap = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  width: auto;
  height: auto;
  background-color: black;
  overflow-y: auto;
  margin: 3vw 3vw;
`;

const BtnWrap = styled.div`
  position: absolute;
  bottom: 100px;
  left: 20px;
`;

const Button1 = styled.button`
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
  color: black;
  background-color: white;
  &:hover {
    background-color: #6d6d6e66;
  }
`;

const Button2 = styled.button`
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

const BannerImg = styled.div`
  background: url(https://assets.nflxext.com/ffe/siteui/vlv3/68c9706b-acd1-4472-bb1d-ef3ca933154c/22ade83e-5cf7-46b8-aca2-3bd2c9465526/KR-ko-20211011-popsignuptwoweeks-perspective_alpha_website_large.jpg);
  background-size: cover;
  width: 100%;
  min-width: 320px;
  position: relative;
  width: auto;
  height: 600px;
  background-color: black;
`;

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
/* const Row = styled.div`
  margin: 2rem;
`; */

export default Browse;
