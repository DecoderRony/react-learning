import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchResponse<T>>(endpoint)
      .then((response) => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch((err) => setError(err.message));

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
