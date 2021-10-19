import React from "react";
import Row from "../components/Row";
import Modal from "../components/Modal";
import styled from "styled-components";

const Movies = () => {
  const [visible, setVisible] = React.useState(false); // 모달의 상태 변경

  const showModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };
  return (
    <div>
      <GenreNav>
        <Text>영화</Text>
        <Text>토글</Text>
      </GenreNav>
      <div>
        <Row showModal={showModal} visible={visible} closeModal={closeModal} />
        <Row showModal={showModal} visible={visible} closeModal={closeModal} />
        <Row showModal={showModal} visible={visible} closeModal={closeModal} />
        <Row showModal={showModal} visible={visible} closeModal={closeModal} />
      </div>
    </div>
  );
};

const GenreNav = styled.div`
  padding-top: 100px;
  display: flex;
`;

const Text = styled.div`
  color: white;
  font-size: 36px;
  font-weight: 800;
  margin-right: 20px;
`;

export default Movies;
