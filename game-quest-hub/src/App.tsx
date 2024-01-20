import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import GameList from "./components/GameList";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { GenreDetails } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/useGames";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreDetails | undefined>(
    undefined
  );

  const [selectedPlatform, setSelectedPlatform] = useState<
    Platforms | undefined
  >(undefined);

  return (
    <>
      <Grid
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
          <GridItem area={"aside"} paddingX="0.9em">
            <GenreList
              onGenreSelect={(genre) => setSelectedGenre(genre)}
              selectedGenre={selectedGenre}
            ></GenreList>
          </GridItem>
        </Show>
        <GridItem area={"main"} paddingX={"0.8em"}>
          <PlatformSelector
            selectedPlatform={selectedPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          ></PlatformSelector>
          <GameList
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          ></GameList>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
