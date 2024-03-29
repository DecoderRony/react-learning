import { useInfiniteQuery } from "@tanstack/react-query";
import { FetchResponse, GameDetails } from "../interfaces";
import APIClient from "../services/api-client";
import useGameQueryStore from "../store";

const apiClient = new APIClient<GameDetails>("/games");

const useGames = () => {
  const gameQuery = useGameQueryStore((selector) => selector.gameQuery);

  return useInfiniteQuery<FetchResponse<GameDetails>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000, //24hrs
  });
};

export default useGames;
