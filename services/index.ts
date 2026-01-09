import axios, { AxiosInstance } from "axios";
import PostsApi from "./posts";
class Api {
  axiosClient: AxiosInstance;
  posts: PostsApi;
  constructor() {
    this.axiosClient = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com/",
    });
    this.posts = new PostsApi(this.axiosClient);
  }
}
export const api = new Api();
