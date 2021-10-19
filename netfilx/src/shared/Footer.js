import React from "react";
import styled from "styled-components";
import { ImFacebook2, ImInstagram, ImTwitter, ImYoutube } from "react-icons/im";

const Footer = () => {
  return (
    <FooterWrap>
      <Wrap>
        <SocialLinks>
          <a href="https://www.facebook.com/NetflixKR">
            {/* <ImFacebook2 cursor="pointer" size="1.7em" color="grey" /> */}
          </a>
          <a href="https://www.instagram.com/netflixkr/">
            {/* <ImInstagram cursor="pointer" size="26" color="grey" /> */}
          </a>
          <a href="https://www.twitter.com/NetflixKR">
            {/* <ImTwitter cursor="pointer" size="26" color="grey" /> */}
          </a>
          <a href="https://www.youtube.com/NetflixKR">
            {/* <ImYoutube cursor="pointer" size="26" color="grey" /> */}
          </a>
        </SocialLinks>
        <FooterBtnList>
          <li>
            <span>자막 및 음성</span>
          </li>
          <li>
            <span>음성지원</span>
          </li>
          <li>
            <span>고객센터</span>
          </li>
          <li>
            <span>기프트카드</span>
          </li>
          <li>
            <span>미디어 센터</span>
          </li>
          <li>
            <span>투자정보</span>
          </li>
          <li>
            <span>입사정보</span>
          </li>
          <li>
            <span>이용약관</span>
          </li>
          <li>
            <span>개인정보</span>
          </li>
          <li>
            <span>법적고지</span>
          </li>
          <li>
            <span>쿠키설정</span>
          </li>
          <li>
            <span>회사정보</span>
          </li>
          <li>
            <span>문의하기</span>
          </li>
        </FooterBtnList>
        <CompanyInfo>
          <li>
            넷플릭스서비시스코리아 유한회사 통신판매업신고번호:
            제2018-서울종로-0426호 전화번호:080-001-9587
          </li>
          <li>대표: 레지널드 숀 톰프슨</li>
          <li>이메일 주소: korea@netflix.com</li>
          <li>
            주소: 대한민국 서울특별시 종로구 우정국로 26, 센트로폴리스 A동 20층
            우편번호 03161
          </li>
          <li>사업자등록번호: 165-87-00119</li>
          <li>클라우드 호스팅: Amazon Web Services Inc.</li>
          <li>공정거래위원회 웹사이트</li>
          <li>&#123;ab0b9815-4db7-a6e6-db60208d971d&#125;</li>
        </CompanyInfo>
      </Wrap>
    </FooterWrap>
  );
};

const FooterWrap = styled.div`
  width: 100%;
  margin: 0 auto;
  color: grey;
  background-color: black;
`;

const Wrap = styled.div`
  max-width: 980px;
  background-color: black;
  margin: 0px auto;
`;

const SocialLinks = styled.div`
  display: flex;
  margin: 0px auto;
  & a {
    margin-right: 26px;
    font-size: 16px;
  }
`;

const FooterBtnList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* flex-direction:row;
    flex-wrap: wrap;
    align-items:flex-start; */
  margin: 20px auto;
  padding: 0;
  list-style: none;
  & li {
    display: block;
    list-style-type: none;
    box-sizing: border-box;
    margin: 0 0 16px 0;
  }
  & span {
    font-size: 15px;
  }
`;

const CompanyInfo = styled.ul`
  display: block;
  margin: 20px auto 0 auto;
  font-size: 11px;
  color: grey;
  line-height: 1.4;
  list-style-type: none;
  padding: 0px;
  & li {
    margin-top: 5px;
  }
  & li:nth-child(7) {
    padding-bottom: 10px;
  }
`;
export default Footer;
