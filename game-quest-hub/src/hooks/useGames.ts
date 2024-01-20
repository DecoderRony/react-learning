import useData from "./useData";
import { GenreDetails } from "./useGenres";

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

const useGames = (
  selectedGenre: GenreDetails | undefined,
  selectedPlatform: Platforms | undefined
) => {
  const {
    data: games,
    error,
    isLoaded,
  } = useData<GameDetails>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id]
  );

  return { games, error, isLoaded };
};

export default useGames;
