import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameList = ({ gameQuery }: Props) => {
  const { games, error, isLoading } = useGames(gameQuery);
  const GameCardSkeletonCount = [1, 2, 3, 4, 5, 6];

  if (error) {
    return (
      <Flex alignItems="center" justifyContent="center">
        <Text>{error.message}</Text>;
      </Flex>
    );
  }

  if (isLoading) {
    return (
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        paddingY={"0.8em"}
        spacing={"1.5em"}
      >
        {GameCardSkeletonCount.map((skeleton) => (
          <GameCardSkeleton key={skeleton}></GameCardSkeleton>
        ))}
      </SimpleGrid>
    );
  }

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 4,
      }}
      paddingY={"0.8em"}
      spacing={"1.5em"}
    >
      {games?.results.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          selectedPlatform={gameQuery.platform}
        />
      ))}
    </SimpleGrid>
  );
};

export default GameList;
