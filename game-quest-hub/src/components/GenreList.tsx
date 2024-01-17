import {
  HStack,
  Image,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { genres, error, isLoading } = useGenres();
  const skeletonCount = [1, 2, 3, 4, 5, 6];
  {
    if (error) return null;

    if (isLoading) {
      return (
        <List>
          {skeletonCount.map((count) => (
            <ListItem key={count}>
              <HStack>
                <Skeleton borderRadius={"0.5em"} boxSize={"32px"}></Skeleton>
                <SkeletonText></SkeletonText>
              </HStack>
            </ListItem>
          ))}
        </List>
      );
    }
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
            <Text fontSize="md">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
