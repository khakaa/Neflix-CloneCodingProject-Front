import instance from "./axios";

//const accessToken = document.cookie.split("=")[1];

//axios 의 인스턴스를 생성해서 API라는 변수에 담고 API를 반환
// baseURL을 미리 지정해줬기 때문에 함수의 첫 번째 인자에 들어가는 url은
// http://localhost:4000/ + 내가 작성한 url 즉 예시로
// getPost함수에서는 instance.get('http://localhost:4000/posts')로 요청을 보내게 됩니다.
// get과 delete의 경우 두 번째 인자에 데이터를 담아 보낼수 없기 때문에 서버에 데이터를 보낼경우 쿼리를 이용하여 보내주도록 합니다.

export const apis = {
  getCard: () => instance.get("/api/", {}),
  // 게시물 불러오기
};