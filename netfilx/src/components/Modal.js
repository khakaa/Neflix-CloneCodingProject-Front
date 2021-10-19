import React from "react";
import styled from "styled-components";

const Modal = (props) => {
  const { visible, closeModal } = props;
  const overview =
    "내 이름은 알렉스. 아이 아빠의 정신적 학대를 피해 딸을 데리고 도망쳤다. 이제 나는 여자이자 엄마로서 세상에 정착해 홀로 육아를 하고 미래를 준비해야 한다. 궂은일을 해서라도 반드시.";
  return (
    <>
      {visible ? (
        <>
          <ModalOverlay />
          <ModalContainer>
            <Img src="https://occ-0-993-325.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSF78muRZ4z-sgV4tQp8vM1VSE2SnlLYl_ThhQXzxbWPz-008QtjCtSCnoGduPscCSIvEETZ8ovDKC3wzDI-6XcwI-Q.webp?r=916"></Img>
            <ModalDetail>
              <LinkContainer>
                <PageLink>공식 홈페이지</PageLink>
                <PageLink>공식 예고편</PageLink>
              </LinkContainer>
              <TextGrid>
                <Overview>
                  {overview.split(". ").join(".\n").split("?").join("?\n")}
                </Overview>
                <Text>
                  <GrayText>장르 : </GrayText>
                  0000
                </Text>
                <Text>
                  <GrayText>개봉일 :</GrayText>
                  2021.00.00
                </Text>

                <Text>
                  <GrayText>평점 : </GrayText>
                  00
                </Text>
                <Text>
                  <GrayText>제작 : </GrayText>
                  00
                </Text>
              </TextGrid>
              <CloseButton onClick={closeModal}>x</CloseButton>
            </ModalDetail>
          </ModalContainer>
        </>
      ) : null}
    </>
  );
};

const ModalOverlay = styled.div`
  /* padding: 500px; */
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 20;
  background-color: black;
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 60%;
  left: 50%;
  width: 90vw;
  max-width: 800px;
  z-index: 30;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
`;

const Img = styled.img`
  width: 100%;

  & > p {
    padding: 5vw;
  }
`;

const ModalDetail = styled.div`
  box-sizing: border-box;
  width: 100%;
  background-color: black;
  color: white;
  padding: 1.25rem 1.75rem;
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
  top: 0.5em;
  right: 0.5em;
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
