import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import GameHeading from "../components/GameHeading";
import GameList from "../components/GameList";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area={"aside"} pt={10}>
          <GenreList />
        </GridItem>
      </Show>

      <GridItem area={"main"} paddingX={"0.8em"} paddingY={5}>
        <GameHeading />

        <Stack py={"0.2em"} direction={{ base: "column", md: "row" }}>
          <PlatformSelector></PlatformSelector>

          <SortSelector></SortSelector>
        </Stack>

        <GameList />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
