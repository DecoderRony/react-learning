import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";
import { GameDetails, Platforms as Platform } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import GameCriticScore from "./GameCriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";

interface Props {
  game: GameDetails;
  selectedPlatform: Platform | undefined;
}

const GameCard = ({ game, selectedPlatform }: Props) => {
  const platforms: Platform[] = selectedPlatform
    ? [selectedPlatform]
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
