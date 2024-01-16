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
  metacritic: number;
}

interface FetchGameResponse {
  count: number;
  results: GameDetails[];
}

const useGames = () => {
  const [games, setGames] = useState<GameDetails[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGameResponse>("/games")
      .then((response) => {
        const updatedResponse = response.data.results.map((result) => {
          return {
            ...result,
            id:
              result.id +
              Math.floor(Math.random() * 100) +
              Math.floor(Math.random() * 50),
          };
        });

        setGames(updatedResponse);
        setLoading(false);
      })
      .catch((err) => setError(err.message));

    return () => controller.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
