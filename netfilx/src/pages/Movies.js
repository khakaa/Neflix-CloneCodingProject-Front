import React from "react";
import Row from "../components/Row";
import Modal from "../components/Modal";
import styled from "styled-components";
import { useState } from "react";

const Movies = () => {
  const [visible, setVisible] = React.useState(false); // 모달의 상태 변경
  const selectList = ["한국", "미국영화", "외국작품", "액션"];
  const [Selected, setSelected] = useState("");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
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

        <Select onChange={handleSelect} value={Selected}>
          {selectList.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </Select>

        <p>
          Selected: <b>{Selected}</b>
        </p>
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
  color: white;
  align-items: center;
  padding-left: 4%;
`;

const Text = styled.div`
  font-size: 36px;
  font-weight: 800;
  margin-right: 20px;
`;
const Select = styled.select`
  width: 90px;
  height: 27px;
  border: 1px solid white;
  color: white;
  background-color: black;
  font-weight: 700;
  padding: 2px 2px 0px 2px;
`;
export default Movies;
