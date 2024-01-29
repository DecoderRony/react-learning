import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse } from "../interfaces";

const axiosInstance = axios.create({
  params: {
    key: "ebdf6923fd374388b34237211714c2c2",
  },
  baseURL: "https://api.rawg.io/api",
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config?: AxiosRequestConfig) =>
    axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((response) => response.data);
}

export default APIClient;
