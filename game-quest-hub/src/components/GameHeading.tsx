import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { genres } = useGenres();
  const { platforms } = usePlatforms();

  const genreName = genres.results.find((res) => res.id === gameQuery.genreId);
  const platformName = platforms.results.find(
    (res) => res.id === gameQuery.platformId
  );

  const heading = `${platformName?.name ?? ""} ${genreName?.id ?? ""} Games`;

  return (
    <Heading as={"h1"} paddingBottom={"0.2em"} fontSize={"3.5em"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
