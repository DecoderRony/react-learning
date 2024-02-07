import { SimpleGrid, Text } from "@chakra-ui/react";
import { GameDetails } from "../interfaces";
import DefinitionItem from "./DefinitionItem";
import GameCriticScore from "./GameCriticScore";

interface Props {
  game: GameDetails;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <>
      <SimpleGrid columns={2} as="dl">
        <DefinitionItem term="Platforms">
          {game.parent_platforms.map(({ platform }) => (
            <Text key={platform.id}>{platform.name}</Text>
          ))}
        </DefinitionItem>

        <DefinitionItem term="Metascore">
          <GameCriticScore criticScore={game.metacritic}></GameCriticScore>
        </DefinitionItem>

        <DefinitionItem term="Genres">
          {game.genres.map((genre) => (
            <Text key={genre.id}>{genre.name}</Text>
          ))}
        </DefinitionItem>

        <DefinitionItem term="Publisher">
          {game.publishers.map((publisher) => (
            <Text key={publisher.id}>{publisher.name}</Text>
          ))}
        </DefinitionItem>
      </SimpleGrid>
    </>
  );
};

export default GameAttributes;
