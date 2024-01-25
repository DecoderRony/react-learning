import { Grid, GridItem, HStack, Show, Stack } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./components/Navbar";
import GameList from "./components/GameList";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { GenreDetails } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: GenreDetails | undefined;
  platform: Platforms | undefined;
  sortOrder: string | undefined;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
          <Navbar
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} pt={6}>
            <GenreList
              onGenreSelect={(genre) =>
                setGameQuery({ ...gameQuery, genre: genre })
              }
              selectedGenre={gameQuery.genre}
            ></GenreList>
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
          <GameHeading gameQuery={gameQuery}></GameHeading>

          <Stack py={"0.2em"} direction={{ base: "column", md: "row" }}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform: platform })
              }
            ></PlatformSelector>

            <SortSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelectSortOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder: sortOrder })
              }
            ></SortSelector>
          </Stack>

          <GameList gameQuery={gameQuery}></GameList>
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
