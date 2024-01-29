import { useQuery } from "@tanstack/react-query";
import Genres from "../data/Genres";
import APIClient from "../services/api-client";

const apiClient = new APIClient<GenreDetails>("/genres");

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
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24hrs,
    // static data passed to cache as a starter, will be refreshed after every 24hr
    initialData: { count: Genres.length, results: Genres },
  });

  return { genres, error, isLoading };
};

export default useGenres;
