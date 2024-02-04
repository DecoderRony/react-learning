import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../store";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  const selectedGenredId = useGameQueryStore(
    (selector) => selector.gameQuery.genreId
  );
  const setGenreId = useGameQueryStore((selector) => selector.setGenreId);

  if (error) return null;

  if (isLoading) {
    return (
      <List>
        {Array(15)
          .fill(undefined)
          .map((_, count) => (
            <ListItem key={count} paddingY="0.3em">
              <HStack>
                <Skeleton borderRadius={"0.5em"} boxSize={"32px"}></Skeleton>
                <SkeletonText width={"100px"} noOfLines={1}></SkeletonText>
              </HStack>
            </ListItem>
          ))}
      </List>
    );
  }

  return (
    <>
      <Heading fontSize={"2em"} paddingBottom={3}>
        Genres
      </Heading>
      <List>
        {genres.results.map((genre) => (
          <ListItem key={genre.id} paddingY="0.3em">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                borderRadius={"0.5em"}
                boxSize={"32px"}
              ></Image>
              <Button
                variant="link"
                fontSize="sm"
                whiteSpace={"normal"}
                textAlign={"left"}
                onClick={() => setGenreId(genre.id)}
                fontWeight={selectedGenredId === genre.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
