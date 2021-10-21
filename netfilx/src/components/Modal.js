import React from "react";
import styled, { keyframes } from "styled-components";
import ReactPlayer from "react-player/youtube";

const Modal = (props) => {
  const {
    visible,
    closeModal,
    overview,
    first_date,
    grade,
    genre,
    posterPath,
    youtubePath,
    backdrop_path,
  } = props;

  return (
    <div className={visible ? "openModal" : "closeModal"}>
      {visible ? (
        <>
          <ModalOverlay onClick={closeModal} />
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            {youtubePath ? (
              <div style={{ width: "100%" }}>
                <ReactPlayer
                  url={youtubePath}
                  muted={true}
                  controls={true}
                  playing={true}
                  width="100%"
                />
              </div>
            ) : (
              <Img src={backdrop_path} />
            )}
            <ModalDetail>
              <LinkContainer>
                <PageLink>공식 홈페이지</PageLink>
              </LinkContainer>
              <TextGrid>
                <Overview>
                  {overview.split(". ").join(".\n").split("?").join("?\n")}
                </Overview>
                <Text>
                  <GrayText>장르 : </GrayText>
                  {genre.join(", ")}
                </Text>
                <Text>
                  <GrayText>개봉일 : </GrayText>
                  {first_date}
                </Text>

                <Text>
                  <GrayText>평점 : </GrayText>
                  {grade}
                </Text>
              </TextGrid>
              <CloseButton onClick={closeModal}>x</CloseButton>
            </ModalDetail>
          </ModalContainer>
        </>
      ) : null}
    </div>
  );
};

const modalBgShow = keyframes`
  from {
    opacity : 0;
  }
  to {
    opacity : 0.8;
  }
`;

const modalShow = keyframes`
  from {
    opacity : 0;
    margin-top :-50px;
  }
  to {
    opacity : 1;
    margin-top : 0;

  }
`;

const ModalOverlay = styled.div`
  width: 100%;
  position: fixed;
  opacity: 0.8;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 20;
  background-color: black;
  animation: ${modalBgShow} 0.5s;
`;

const ModalContainer = styled.div`
  border-radius: 0.4rem;
  height: fit-content;
  overflow-y: scroll;
  position: fixed;
  top: 50%;
  bottom: 50%;
  left: 50%;
  width: 90vw;
  max-width: 1000px;
  z-index: 100000;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  -ms-overflow-style: none;
  animation: ${modalShow} 0.5s;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const ModalDetail = styled.div`
  background-color: #141414;
  box-sizing: border-box;
  width: 100%;
  color: white;
  padding: 32px 48px;
`;

const LinkContainer = styled.div`
  display: flex;
  font-weight: bold;
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

const TextGrid = styled.div`
  display: flex;
  flex-direction: column;
`;

const PageLink = styled.a`
  text-decoration: none;
  margin: 0 2rem 0 0;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Overview = styled.p`
  white-space: pre-line;
  font-size: 1.25rem;
  margin-bottom: 1rem;

  @media (max-width: 59.375rem) {
    font-size: 1.125rem;
  }

  @media (max-width: 34.375rem) {
    font-size: 1rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  margin-bottom: 0.25rem;

  @media (max-width: 59.375rem) {
    font-size: 0.875rem;
  }

  @media (max-width: 34.375rem) {
    font-size: 0.75rem;
  }
`;

const GrayText = styled.span`
  color: #737373;
`;

const CloseButton = styled.button`
  cursor: pointer;
  position: absolute;
  top: 1em;
  right: 1em;
  font-size: 20px;
  padding: 8px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background-color: #181818;
  color: white;
`;

export default Modal;
