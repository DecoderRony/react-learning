import {
  AbsoluteCenter,
  Box,
  Heading,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";
import useGame from "../hooks/useGame";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailsPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug!);
  const height = `calc(90vh - 3em)`;

  if (isLoading)
    return (
      <Box p={5} pos={"relative"} height={height}>
        <AbsoluteCenter>
          <Spinner size="xl" />
        </AbsoluteCenter>
      </Box>
    );

  if (error || !game) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} py={5}>
      <Box>
        <Heading>{game.name}</Heading>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <GameAttributes game={game} />
      </Box>

      <Box>
        <Box marginY={2}>
          <GameTrailer gameId={game.id}></GameTrailer>
        </Box>
        <GameScreenshots gameId={game.id}></GameScreenshots>
      </Box>
    </SimpleGrid>
  );
};

export default GameDetailsPage;
