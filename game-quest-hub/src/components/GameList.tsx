import { Flex, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { GameQuery } from "../App";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameList = ({ gameQuery }: Props) => {
  const { data, error, isLoading, hasNextPage, fetchNextPage } =
    useGames(gameQuery);
  const GameCardSkeletonCount = [1, 2, 3, 4, 5, 6];

  if (error) {
    return (
      <Flex alignItems="center" justifyContent="center">
        <Text>{error.message}</Text>;
      </Flex>
    );
  }

  const fetchedGamesCount =
    data?.pages.reduce((acc, page) => acc + page.results.length, 0) ?? 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={hasNextPage}
      next={() => fetchNextPage()}
      loader={
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
      }
    >
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
        {isLoading &&
          GameCardSkeletonCount.map((skeleton) => (
            <GameCardSkeleton key={skeleton}></GameCardSkeleton>
          ))}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                selectedPlatform={gameQuery.platform}
              />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default GameList;
