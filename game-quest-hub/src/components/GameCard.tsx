import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import { GameDetails } from "../hooks/useGames";
import usePlatform from "../hooks/usePlatform";
import { Platforms as Platform } from "../interfaces";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";
import GameCardContainer from "./GameCardContainer";
import GameCriticScore from "./GameCriticScore";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: GameDetails;
}

const GameCard = ({ game }: Props) => {
  const selectedPlatformId = useGameQueryStore(
    (selector) => selector.gameQuery.platformId
  );

  const platforms: Platform[] = selectedPlatformId
    ? [usePlatform(selectedPlatformId) ?? ({} as Platform)]
    : game.parent_platforms.map((parent_platform) => parent_platform.platform);

  return (
    <GameCardContainer>
      <Card>
        <Image
          src={getCroppedImageUrl(game.background_image)}
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
              <PlatformIconList platforms={platforms}></PlatformIconList>

              <GameCriticScore criticScore={game.metacritic}></GameCriticScore>
            </HStack>
          </Stack>
        </CardBody>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
