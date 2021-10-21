import React, { useEffect } from "react";
import styled from "styled-components";
// import { useSelector, useDispatch } from "react-redux";
import Modal from "./Modal";

const ContentThumbnail = (props) => {
  // const poster = useSelector(
  //   (state) => state.browse.data.datainfo[0].dataList[0].backdrop_path
  // );
  // console.log(poster);
  const {
    overview,
    firstDate,
    grade,
    backdrop_path,
    posterPath,
    youtubePath,
    genre,
  } = props;

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

  // if (youtubePath === null) {
  return (
    <>
      <ThumbnailImg onClick={showModal} src={backdrop_path} />

      <Modal
        visible={visible}
        closeModal={closeModal}
        posterPath={posterPath}
        backDropPath={backdrop_path}
        overview={overview}
        firstData={firstDate}
        grade={grade}
        genre={genre}
      />
    </>
  );
  // }

  // if (youtubePath) {
  //   return (
  //     <>
  //       <Container>
  //         <ThumbnailVideo
  //           onClick={showModal}

  //           src={youtubePath}
  // src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSF78muRZ4z-sgV4tQp8vM1VSE2SnlLYl_ThhQXzxbWPz-008QtjCtSCnoGduPscCSIvEETZ8ovDKC3wzDI-6XcwI-Q.webp?r=916"
  //       />
  //     </Container>
  //     <Modal
  //       visible={visible}
  //       closeModal={closeModal}
  //       overview={overview}
  //       firstData={firstDate}
  //       grade={grade}
  //       youtubePath={youtubePath}
  //     />
  //   </>
  // );

  // }
};

const ThumbnailImg = styled.img`
  display: flex;
  height: 100%;
  width: 240px;
  padding: 0px 2px;
  border-radius: 0.4rem;
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
