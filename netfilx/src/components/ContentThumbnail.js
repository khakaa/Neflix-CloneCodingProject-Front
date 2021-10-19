import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

const ContentThumbnail = (props) => {
  const { showModal } = props;

  return (
    <>
      <Container onClick={showModal}>
        <ThumbnailImg src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSF78muRZ4z-sgV4tQp8vM1VSE2SnlLYl_ThhQXzxbWPz-008QtjCtSCnoGduPscCSIvEETZ8ovDKC3wzDI-6XcwI-Q.webp?r=916" />
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 100%;
`;

const ThumbnailImg = styled.img`
  padding: 2px;
  border-radius: 0.4rem;
  transition: transform 200ms ease-in-out;
  @media screen and (min-width: 320px) and (max-width: 1440px) {
    width: 25%;
  }

  :hover {
    cursor: pointer;
    transform: scale(1.1);
    z-index: 100;
    display: absolute;
  }
`;

export default ContentThumbnail;
