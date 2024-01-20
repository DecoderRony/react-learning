import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platforms } from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GenreDetails } from "../hooks/useGenres";

interface Props {
  selectedGenre: GenreDetails | undefined;
  selectedPlatform: Platforms | undefined;
}

const GameList = ({ selectedGenre, selectedPlatform }: Props) => {
  const { games, error, isLoaded } = useGames(selectedGenre, selectedPlatform);
  const GameCardSkeletonCount = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        paddingY={"0.8em"}
        spacing={"1em"}
      >
        {!isLoaded &&
          GameCardSkeletonCount.map((skeleton) => (
            <GameCardSkeleton key={skeleton}></GameCardSkeleton>
          ))}

        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameList;
