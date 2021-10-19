import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

const ContentThumbnail = (props) => {
  const [visible, setVisible] = React.useState(false); // 모달의 상태 변경

  React.useEffect(() => {
    if (visible === true) {
      document.body.style.overflow = "hidden";
    }

    return function cleanup() {
      document.body.style.overflow = "unset";
    };
  });

  const showModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  return (
    <>
      <Container onClick={showModal}>
        <ThumbnailImg src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSF78muRZ4z-sgV4tQp8vM1VSE2SnlLYl_ThhQXzxbWPz-008QtjCtSCnoGduPscCSIvEETZ8ovDKC3wzDI-6XcwI-Q.webp?r=916" />
      </Container>
      <Modal visible={visible} closeModal={closeModal} />
    </>
  );
};

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const ThumbnailImg = styled.img`
  border-radius: 0.4rem;
  width: 25%;
  max-width: 250px;
  transition: transform 200ms ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
    z-index: 100;
    display: absolute;
  }
`;

export default ContentThumbnail;
