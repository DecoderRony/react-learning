import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../interfaces";
import apiClient from "../services/api-client";
import Genres from "../data/Genres";

export interface GenreDetails {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const {
    data: genres,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient
        .get<FetchResponse<GenreDetails>>("/genres")
        .then((response) => response.data),
    staleTime: 24 * 60 * 60 * 1000, // 24hrs,
    // static data passed to cache as a starter, will be refreshed after every 24hr
    initialData: { count: Genres.length, results: Genres },
  });

  return { genres, error, isLoading };
};

export default useGenres;
