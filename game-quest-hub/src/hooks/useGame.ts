import { useQuery } from "@tanstack/react-query";
import { GameDetails } from "../interfaces";
import APIClient from "../services/api-client";

const apiClient = new APIClient<GameDetails>("/games");

const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
  });

export default useGame;
