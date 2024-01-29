import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genreName = useGenre(gameQuery.genreId);
  const platformName = usePlatform(gameQuery.platformId);

  const heading = `${platformName?.name ?? ""} ${genreName?.name ?? ""} Games`;

  return (
    <Heading as={"h1"} paddingBottom={"0.2em"} fontSize={"3.5em"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
