import axios from "axios";

axios.defaults.headers.post["Content-Type"] = "application/json";

// 文章相關的 api
const articleRequest = axios.create({
  baseURL: "https://62f1f364b1098f150807dadd.mockapi.io/",
});

// 姓名post 測試 API
const customAxios = axios.create({
  baseURL: "https://62f1f364b1098f150807dadd.mockapi.io/",
});

export { articleRequest, customAxios };

// Add a request interceptor
articleRequest.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// 文章相關的 api
export const apiArticleItem = () => articleRequest.get("/blogs");
export const apiArticleMsg = (data) => articleRequest.post("/blogs", data);

// POST
export const apiFakeData = (data) => customAxios.post("/fakeData", data);
// GET

// PUT

// DELETE
