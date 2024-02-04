import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((selector) => selector.gameQuery.genreId);
  const platformId = useGameQueryStore(
    (selector) => selector.gameQuery.platformId
  );
  const genreName = useGenre(genreId);
  const platformName = usePlatform(platformId);

  const heading = `${platformName?.name ?? ""} ${genreName?.name ?? ""} Games`;

  return (
    <Heading as={"h1"} paddingBottom={"0.2em"} fontSize={"3.5em"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
