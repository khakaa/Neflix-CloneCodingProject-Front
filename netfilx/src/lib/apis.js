import axios from "axios";

const instance = axios.create({
  baseURL: "",
});

export const apis = {
  getMainMovie: () => instance.get("/video?largeCategory=random"),
  getCategoryMovie: (url) => instance.get(url),
};
