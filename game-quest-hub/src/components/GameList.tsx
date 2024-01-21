import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameList = ({ gameQuery }: Props) => {
  const { games, error, isLoaded } = useGames(gameQuery);
  const GameCardSkeletonCount = [1, 2, 3, 4, 5, 6];
  if (!isLoaded) {
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
        </SimpleGrid>
      </>
    );
  }
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
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameList;
