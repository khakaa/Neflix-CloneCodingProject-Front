import React from "react";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../lib/apis";
// import getToken from "../../shared/Token";

// 액션타입생성(리듀서 작성시 재사용되기 때문에 액션타입을 지정하는것임)
const SET_MOVIE = "SET_MOVIE";

//액션생성함수
//타입이 SET_POST인 오브젝트를 반환해주는 액션으로
//const 무엇 = cratAction(타입, (어떤파라미터) => ({변경될파라미터}));
const setMovie = createAction(SET_MOVIE, (moviecard_list) => ({
  moviecard_list,
}));

//초기상태값 //무비카드하나에 들어가야할 기본내용
const initialState = {
  data: {
    largeCategory: "영화",
    datainfo: [
      {
        size: 2,
        smallCategory: "드라마",
        dataList: [
          {
            genre: ["드라마", "코믹"],
            id: 12345,
            title: "오징어게임",
            poster_path:
              "https://image.tmdb.org/t/p/w500//5UDe6oVAIv6PC7eJ046o6oCyQc3.jpg",
            overview: "2021년 9월 Netflix에서 방영을 시작한 서바이벌 스릴러",
            first_data: "2021.10.06",
            grade: "7.6",
            series: "오징어게임",
            youtubePath:
              "https://www.youtube.com/embed/xbFoFdjX-QY?autoplay=1&mute=1",
            backdrop_path:
              "https://image.tmdb.org/t/p/w500/70nxSw3mFBsGmtkvcs91PbjerwD.jpg",
          },
          {
            genre: ["드라마", "코믹"],
            id: 12345,
            title: "오징어게임",
            poster_path:
              "https://image.tmdb.org/t/p/w500//5UDe6oVAIv6PC7eJ046o6oCyQc3.jpg",
            overview: "2021년 9월 Netflix에서 방영을 시작한 서바이벌 스릴러",
            first_data: "2021.10.06",
            grade: "7.6",
            series: "오징어게임",
            youtubePath:
              "https://www.youtube.com/embed/xbFoFdjX-QY?autoplay=1&mute=1",
            backdrop_path:
              "https://image.tmdb.org/t/p/w500/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
          },
        ],
      },
      {
        size: 2,
        smallCategory: "호러",
        dataList: [
          {
            genre: ["호러", "코믹"],
            id: 12345,
            title: "오징어게임",
            poster_path:
              "https://image.tmdb.org/t/p/w500//5UDe6oVAIv6PC7eJ046o6oCyQc3.jpg",
            overview: "2021년 9월 Netflix에서 방영을 시작한 서바이벌 스릴러",
            first_data: "2021.10.06",
            grade: "7.6",
            series: "오징어게임",
            youtubePath:
              "https://www.youtube.com/embed/xbFoFdjX-QY?autoplay=1&mute=1",
            backdrop_path:
              "https://image.tmdb.org/t/p/w500/70nxSw3mFBsGmtkvcs91PbjerwD.jpg",
          },
          {
            genre: ["호러", "코믹"],
            id: 12345,
            title: "오징어게임",
            poster_path:
              "https://image.tmdb.org/t/p/w500//5UDe6oVAIv6PC7eJ046o6oCyQc3.jpg",
            overview: "2021년 9월 Netflix에서 방영을 시작한 서바이벌 스릴러",
            first_data: "2021.10.06",
            grade: "7.6",
            series: "오징어게임",
            youtubePath:
              "https://www.youtube.com/embed/xbFoFdjX-QY?autoplay=1&mute=1",
            backdrop_path:
              "https://image.tmdb.org/t/p/w500/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
          },
        ],
      },
      {
        size: 2,
        smallCategory: "액션",
        dataList: [
          {
            genre: ["액션", "코믹"],
            id: 12345,
            title: "오징어게임",
            poster_path:
              "https://image.tmdb.org/t/p/w500//5UDe6oVAIv6PC7eJ046o6oCyQc3.jpg",
            overview: "2021년 9월 Netflix에서 방영을 시작한 서바이벌 스릴러",
            first_data: "2021.10.06",
            grade: "7.6",
            series: "오징어게임",
            youtubePath:
              "https://www.youtube.com/embed/xbFoFdjX-QY?autoplay=1&mute=1",
            backdrop_path:
              "https://image.tmdb.org/t/p/w500/70nxSw3mFBsGmtkvcs91PbjerwD.jpg",
          },
          {
            genre: ["액션", "코믹"],
            id: 12345,
            title: "오징어게임",
            poster_path:
              "https://image.tmdb.org/t/p/w500//5UDe6oVAIv6PC7eJ046o6oCyQc3.jpg",
            overview: "2021년 9월 Netflix에서 방영을 시작한 서바이벌 스릴러",
            first_data: "2021.10.06",
            grade: "7.6",
            series: "오징어게임",
            youtubePath:
              "https://www.youtube.com/embed/xbFoFdjX-QY?autoplay=1&mute=1",
            backdrop_path:
              "https://image.tmdb.org/t/p/w500/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
          },
        ],
      },
    ],
  },
  data: {
    largeCategory: "TV프로그램",
    datainfo: [
      {
        size: 2,
        smallCategory: "로맨스",
        dataList: [
          {
            genre: ["드라마", "로맨스"],
            id: 12345,
            title: "오징어게임",
            poster_path:
              "https://image.tmdb.org/t/p/w500//5UDe6oVAIv6PC7eJ046o6oCyQc3.jpg",
            overview: "2021년 9월 Netflix에서 방영을 시작한 서바이벌 스릴러",
            first_data: "2021.10.06",
            grade: "7.6",
            series: "오징어게임",
            youtubePath:
              "https://www.youtube.com/embed/xbFoFdjX-QY?autoplay=1&mute=1",
            backdrop_path:
              "https://image.tmdb.org/t/p/w500/70nxSw3mFBsGmtkvcs91PbjerwD.jpg",
          },
          {
            genre: ["드라마", "코믹"],
            id: 12345,
            title: "오징어게임",
            poster_path:
              "https://image.tmdb.org/t/p/w500//5UDe6oVAIv6PC7eJ046o6oCyQc3.jpg",
            overview: "2021년 9월 Netflix에서 방영을 시작한 서바이벌 스릴러",
            first_data: "2021.10.06",
            grade: "7.6",
            series: "오징어게임",
            youtubePath:
              "https://www.youtube.com/embed/xbFoFdjX-QY?autoplay=1&mute=1",
            backdrop_path:
              "https://image.tmdb.org/t/p/w500/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
          },
        ],
      },
      {
        size: 2,
        smallCategory: "판타지",
        dataList: [
          {
            genre: ["호러", "코믹"],
            id: 12345,
            title: "오징어게임",
            poster_path:
              "https://image.tmdb.org/t/p/w500//5UDe6oVAIv6PC7eJ046o6oCyQc3.jpg",
            overview: "2021년 9월 Netflix에서 방영을 시작한 서바이벌 스릴러",
            first_data: "2021.10.06",
            grade: "7.6",
            series: "오징어게임",
            youtubePath:
              "https://www.youtube.com/embed/xbFoFdjX-QY?autoplay=1&mute=1",
            backdrop_path:
              "https://image.tmdb.org/t/p/w500/70nxSw3mFBsGmtkvcs91PbjerwD.jpg",
          },
          {
            genre: ["호러", "코믹"],
            id: 12345,
            title: "오징어게임",
            poster_path:
              "https://image.tmdb.org/t/p/w500//5UDe6oVAIv6PC7eJ046o6oCyQc3.jpg",
            overview: "2021년 9월 Netflix에서 방영을 시작한 서바이벌 스릴러",
            first_data: "2021.10.06",
            grade: "7.6",
            series: "오징어게임",
            youtubePath:
              "https://www.youtube.com/embed/xbFoFdjX-QY?autoplay=1&mute=1",
            backdrop_path:
              "https://image.tmdb.org/t/p/w500/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
          },
        ],
      },
      {
        size: 2,
        smallCategory: "액션",
        dataList: [
          {
            genre: ["액션", "코믹"],
            id: 12345,
            title: "오징어게임",
            poster_path:
              "https://image.tmdb.org/t/p/w500//5UDe6oVAIv6PC7eJ046o6oCyQc3.jpg",
            overview: "2021년 9월 Netflix에서 방영을 시작한 서바이벌 스릴러",
            first_data: "2021.10.06",
            grade: "7.6",
            series: "오징어게임",
            youtubePath:
              "https://www.youtube.com/embed/xbFoFdjX-QY?autoplay=1&mute=1",
            backdrop_path:
              "https://image.tmdb.org/t/p/w500/70nxSw3mFBsGmtkvcs91PbjerwD.jpg",
          },
          {
            genre: ["액션", "코믹"],
            id: 12345,
            title: "오징어게임",
            poster_path:
              "https://image.tmdb.org/t/p/w500//5UDe6oVAIv6PC7eJ046o6oCyQc3.jpg",
            overview: "2021년 9월 Netflix에서 방영을 시작한 서바이벌 스릴러",
            first_data: "2021.10.06",
            grade: "7.6",
            series: "오징어게임",
            youtubePath:
              "https://www.youtube.com/embed/xbFoFdjX-QY?autoplay=1&mute=1",
            backdrop_path:
              "https://image.tmdb.org/t/p/w500/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
          },
        ],
      },
    ],
  },
};

//미들웨어
//무비카드 가져오기
const setMovieDB = () => {
  return function (dispatch, getState, { history }) {
    apis
      .getMainMovie()
      .then((res) => {
        console.log(res);
        console.log(res.data.data.datainfo);
        dispatch(setMovie(res.data.data.datainfo));
      })
      .catch((err) => {
        //요청이 정상적으로 안됬을때 수행
        console.log(err, "에러");
      });
  };
};

//상세페이지 포스트값 조회

// 리듀서
export default handleActions(
  {
    [SET_MOVIE]: (state, action) =>
      produce(state, (draft) => {
        // undifined는 값이 잘넘어가고있다. 값이 나올경우 어딘가에 문제가 있는것

        console.log(action.payload.moviecard_list);
        draft.list = action.payload.moviecard_list;
        // 새 배열에서 푸시를 하게되면 데이터 중복으로 계속 불러와지게됨.
        // draft.list.push(...action.payload.post_list.postings);

        // draft.list = draft.list.reduce((acc, cur) => {
        //   if (acc.findIndex((a) => a.id === cur.id) === -1) {
        //     return [...acc, cur];
        //   } else {
        //     acc[acc.findIndex((a) => a.id === cur.id)] = cur;
        //     return acc;
        //   }
        // }, []);

        // 페이징도 넣어줍니다.
        // if (action.payload.paging) {
        //   draft.paging = action.payload.paging;
        // }
        // //payload안에는 필요한 state값을 담고있다.

        // draft.is_loading = false;
      }),
  },
  initialState
);

const actionCreators = {
  setMovie,
  setMovieDB,
};

export { actionCreators };
