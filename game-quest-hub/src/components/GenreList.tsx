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
import useGenres, { GenreDetails } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onGenreSelect: (genre: GenreDetails) => void;
  selectedGenreId?: number;
}

const GenreList = ({
  onGenreSelect,
  selectedGenreId: selectedGenre,
}: Props) => {
  const { genres, error, isLoading } = useGenres();

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
                onClick={() => onGenreSelect(genre)}
                fontWeight={selectedGenre === genre.id ? "bold" : "normal"}
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
