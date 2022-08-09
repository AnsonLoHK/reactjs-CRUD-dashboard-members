import axios from "axios";

// 文章相關的 api
const articleRequest = axios.create({
  baseURL: "https://62f1f364b1098f150807dadd.mockapi.io",
});

// 文章相關的 api
export const apiArticleItem = () => articleRequest.get("/blogs");
export const apiArticleMsg = (data) => articleRequest.post("/blogs", data);
export const apiArticleLink = (data) => articleRequest.post("/blogs", data);
