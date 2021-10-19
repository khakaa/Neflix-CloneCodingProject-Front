import React from "react";
import styled from "styled-components";

const Modal = (props) => {
  return (
    <>
      <ModalOverlay />
      <ModalWrapper>
        <PreviewModalPlayer></PreviewModalPlayer>
        <div>공식 홈페이지</div>
        <div>공식 예고편</div>
        <CloseButton>x</CloseButton>
      </ModalWrapper>
    </>
  );
};

const ModalOverlay = styled.div`
  position: absolute;
  opacity: 0.5;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 20;
  background-color: lightgray;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 850px;
  padding: 48px;
  z-index: 30;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.25rem;
`;

const PreviewModalPlayer = styled.image`
  width: 850px;
  height: 480px;
`;

const CloseButton = styled.button``;

export default Modal;
