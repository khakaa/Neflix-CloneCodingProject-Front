import React from "react";
import styled from "styled-components";

import ContentThumbnail from "../components/ContentThumbnail";
import Modal from "../components/Modal";

const Browse = (props) => {
  const [visible, setVisible] = React.useState(false); // 모달의 상태 변경

  const showModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };
  return (
    <>
      <Container>
        <BannerImg src="https://assets.nflxext.com/ffe/siteui/vlv3/68c9706b-acd1-4472-bb1d-ef3ca933154c/22ade83e-5cf7-46b8-aca2-3bd2c9465526/KR-ko-20211011-popsignuptwoweeks-perspective_alpha_website_large.jpg"></BannerImg>
        {/* row */}
        <Row>
          <ContentThumbnail showModal={showModal}></ContentThumbnail>
        </Row>
        <Modal visible={visible} closeModal={closeModal} />
      </Container>
    </>
  );
};

const Container = styled.div`
  background-color: black;
  height: 100%;
`;

const BannerImg = styled.img`
  width: 100%;
  min-width: 320px;
`;

const Row = styled.div`
  margin: 2rem;
`;

export default Browse;
