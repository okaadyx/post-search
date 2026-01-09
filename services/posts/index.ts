import { AxiosInstance } from "axios";

export default class PostsApi {
  client: AxiosInstance;
  constructor(client: AxiosInstance) {
    this.client = client;
  }
  async fetchPosts() {
    const { data } = await this.client.get("/posts");
    return data;
  }
  async searchPosts(query: string) {
    const { data } = await this.client.get(`/posts?q=${query}`);
    return data;
  }
}
