import { Card, CardBody, Heading, Image, Stack } from "@chakra-ui/react";
import { GameDetails } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: GameDetails;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={"1em"} overflow={"hidden"}>
      <Image
        src={game.background_image}
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

          <PlatformIconList
            platforms={game.parent_platforms.map((parent_platform) => {
              return {
                ...parent_platform.platform,
                id: game.id,
              };
            })}
          ></PlatformIconList>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
