import React from "react";
import styled from "styled-components";

import MovieCard from "../components/MovieCard";

const Browse = (props) => {
  return (
    <>
      <BannerImg src="https://assets.nflxext.com/ffe/siteui/vlv3/68c9706b-acd1-4472-bb1d-ef3ca933154c/22ade83e-5cf7-46b8-aca2-3bd2c9465526/KR-ko-20211011-popsignuptwoweeks-perspective_alpha_website_large.jpg"></BannerImg>
      <div>
        <MovieCard></MovieCard>
      </div>
    </>
  );
};

const BannerImg = styled.img`
  width: 100%;
  min-width: 320px;
`;

export default Browse;
