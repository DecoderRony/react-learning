import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { Platforms } from "../interfaces";
import APIClient from "../services/api-client";

const apiClient = new APIClient<GameDetails>("/games");

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
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }),
  });

  return { games, error, isLoading };
};

export default useGames;
