import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

const ContentThumbnail = (props) => {
  const {
    movieTitle,
    overview,
    firstDate,
    grade,
    backDropPath,
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
      <ThumbnailImg onClick={showModal} backDropPath={backDropPath}>
        <Textarea>{movieTitle} </Textarea>
      </ThumbnailImg>
      <Modal
        visible={visible}
        closeModal={closeModal}
        posterPath={posterPath}
        backDropPath={backDropPath}
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
  //       <ThumbnailVideo
  //         onClick={showModal}
  //         src={youtubePath}
  //         src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSF78muRZ4z-sgV4tQp8vM1VSE2SnlLYl_ThhQXzxbWPz-008QtjCtSCnoGduPscCSIvEETZ8ovDKC3wzDI-6XcwI-Q.webp?r=916"
  //       />
  //       <Modal
  //         visible={visible}
  //         closeModal={closeModal}
  //         overview={overview}
  //         firstData={firstDate}
  //         grade={grade}
  //         youtubePath={youtubePath}
  //       />
  //     </>
  //   );
  // }
};

const ThumbnailImg = styled.div`
  background-image: url(${(props) => `${props.backDropPath}`});
  background-size: cover;
  background-position: center;
  width: 30vmin;
  height: 17vmin;
  margin: 0px 4px;
  position: relative;
  border-radius: 0.4rem;
  transition: transform 200ms ease-in-out;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
    z-index: 100;
    display: absolute;
  }
`;

const Textarea = styled.div`
  color: white;
  position: absolute;
  text-align: center;
  width: 100%;
  font-size: 1.5em;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 10%;
`;

const ThumbnailVideo = styled.video``;

export default ContentThumbnail;
