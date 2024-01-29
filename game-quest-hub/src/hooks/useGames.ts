import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { FetchResponse } from "../interfaces";
import apiClient from "../services/api-client";

export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

export interface GameDetails {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) => {
  const {
    data: games,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<GameDetails>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
          },
        })
        .then((response) => response.data),
  });

  return { games, error, isLoading };
};

export default useGames;
