import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

const ContentThumbnail = (props) => {
  const { overview, firstData, grade, posterPath, youtubePath } = props;

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

  if (youtubePath === null) {
    return (
      <>
        <Container>
          <ThumbnailImg
            onClick={showModal}
            // src={posterPath}
            src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSF78muRZ4z-sgV4tQp8vM1VSE2SnlLYl_ThhQXzxbWPz-008QtjCtSCnoGduPscCSIvEETZ8ovDKC3wzDI-6XcwI-Q.webp?r=916"
          />
        </Container>
        <Modal
          visible={visible}
          closeModal={closeModal}
          posterPath={posterPath}
          overview={overview}
          firstData={firstData}
          grade={grade}
        />
      </>
    );
  }

  if (youtubePath) {
    return (
      <>
        <Container>
          <ThumbnailVideo
            onClick={showModal}
            // src={posterPath}
            src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSF78muRZ4z-sgV4tQp8vM1VSE2SnlLYl_ThhQXzxbWPz-008QtjCtSCnoGduPscCSIvEETZ8ovDKC3wzDI-6XcwI-Q.webp?r=916"
          />
        </Container>
        <Modal
          visible={visible}
          closeModal={closeModal}
          overview={overview}
          firstData={firstData}
          grade={grade}
          youtubePath={youtubePath}
        />
      </>
    );
  }
};

const Container = styled.div`
  height: 100%;
  min-width: 350px;
`;

const ThumbnailImg = styled.img`
  padding: 0px 2px;
  border-radius: 0.4rem;
  /* width: 25%; */
  transition: transform 200ms ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
    z-index: 100;
    display: absolute;
  }
`;

const ThumbnailVideo = styled.video``;

export default ContentThumbnail;
