import axios, { AxiosRequestConfig } from "axios";
import { FetchResponse, GameDetails } from "../interfaces";

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

  get = (id: number | string) =>
    axiosInstance
      .get<GameDetails>(`${this.endpoint}/${id}`)
      .then((response) => response.data);
}

export default APIClient;
