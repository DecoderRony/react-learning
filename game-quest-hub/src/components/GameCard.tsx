import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import { GameDetails } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import GameCriticScore from "./GameCriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  game: GameDetails;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={"1em"} overflow={"hidden"}>
      <Image
        src={getCroppedImageUrl(game.background_image)}
        blockSize={{
          base: "10em",
          lg: "20em",
        }}
        objectFit={"cover"}
        objectPosition={"50%"}
      ></Image>
      <CardBody>
        <Stack>
          <Heading
            fontSize={{
              base: "0.7em",
              lg: "1em",
            }}
          >
            {game.name}
          </Heading>

          <HStack justifyContent={"space-between"}>
            <PlatformIconList
              platforms={game.parent_platforms.map((parent_platform) => {
                return {
                  ...parent_platform.platform,
                  id: game.id,
                };
              })}
            ></PlatformIconList>

            <GameCriticScore criticScore={game.metacritic}></GameCriticScore>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
