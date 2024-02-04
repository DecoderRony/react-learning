import { Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import "./App.css";
import GameHeading from "./components/GameHeading";
import GameList from "./components/GameList";
import GenreList from "./components/GenreList";
import Navbar from "./components/Navbar";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <>
      <Grid
        px={"0.8em"}
        py={8}
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} pt={6}>
            <GenreList />
          </GridItem>
        </Show>

        <GridItem
          area={"main"}
          paddingX={"0.8em"}
          pt={{
            xs: "2em",
            sm: "5em",
            md: "5em",
            lg: "10em",
            xl: "10em",
          }}
        >
          <GameHeading />

          <Stack py={"0.2em"} direction={{ base: "column", md: "row" }}>
            <PlatformSelector></PlatformSelector>

            <SortSelector></SortSelector>
          </Stack>

          <GameList />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
