import { useState, useEffect } from "react";
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
}

interface FetchGameResponse {
  count: number;
  results: GameDetails[];
}

const useGames = () => {
  const [games, setGames] = useState<GameDetails[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGameResponse>("/games")
      .then((response) => setGames(response.data.results))
      .catch((err) => setError(err.message));

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;
