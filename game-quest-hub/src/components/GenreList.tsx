import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGenres, { GenreDetails } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onGenreSelect: (genre: GenreDetails) => void;
  selectedGenre: GenreDetails | undefined;
}

const GenreList = ({ onGenreSelect, selectedGenre }: Props) => {
  const { genres, error, isLoaded } = useGenres();

  if (error) return null;

  if (!isLoaded) {
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
    <List>
      {genres.map((genre) => (
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
              onClick={() => onGenreSelect(genre)}
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
