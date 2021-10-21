import axios from "axios";

const instance = axios.create({
  baseURL: "http://3.35.231.100/",
});

export const apis = {
  getMainMovie: () => instance.get("/video?largeCategory=drama"),
  getCategoryMovie: (url) => instance.get(url),
};
