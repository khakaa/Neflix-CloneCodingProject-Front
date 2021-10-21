import React from "react";
import styled from "styled-components";
import Modal from "./Modal";

const ContentThumbnail = (props) => {
  const {
    title,
    overview,
    first_date,
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

  return (
    <>
      <ThumbnailImg onClick={showModal} backdrop_path={backdrop_path}>
        <Textarea>{title} </Textarea>
      </ThumbnailImg>
      <Modal
        visible={visible}
        closeModal={closeModal}
        posterPath={posterPath}
        backdrop_path={backdrop_path}
        youtubePath={youtubePath}
        overview={overview}
        first_date={first_date}
        grade={grade}
        genre={genre}
      />
    </>
  );
};

const ThumbnailImg = styled.div`
  background-image: url(${(props) => `${props.backdrop_path}`});
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

export default ContentThumbnail;
