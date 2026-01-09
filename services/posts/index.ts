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
}
