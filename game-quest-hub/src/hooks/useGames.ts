import useData from "./useData";

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

const useGames = () => {
  const { data: games, error, isLoading } = useData<GameDetails>("/games");

  return { games, error, isLoading };
};

export default useGames;
