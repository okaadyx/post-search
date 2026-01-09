import { AxiosInstance } from "axios";
import { Post } from "./types";

export default class PostsApi {
  client: AxiosInstance;
  constructor(client: AxiosInstance) {
    this.client = client;
  }
  async fetchPosts() {
    const { data } = await this.client.get<Post>("/posts");
    return data;
  }
}
