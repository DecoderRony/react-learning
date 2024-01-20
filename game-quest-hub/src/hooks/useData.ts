import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoaded, setLoaded] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          ...requestConfig,
        })
        .then((response) => {
          setData(response.data.results);
          setLoaded(true);
        })
        .catch((err) => setError(err.message));

      return () => controller.abort();
    },
    deps ? deps : []
  );

  return { data, error, isLoaded };
};

export default useData;
