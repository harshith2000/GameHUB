import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { Route, Routes } from "react-router-dom";
import GameDetail from "./components/GameDetail";
import useGames from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  sortOrder: string;
  searchInput: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    sortOrder: "-metacritic",
    searchInput: "",
  });
  const { games } = useGames(
    gameQuery.genre,
    {
      params: {
        genres: gameQuery.genre?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchInput,
      },
    },
    [gameQuery]
  );
  return (
    <Routes>
      <Route path="/game/:gameId" element={<GameDetail games={games} />} />
      <Route
        path="/"
        element={
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
            <GridItem area="nav" color="red">
              <NavBar
                onSearch={(searchInput) =>
                  setGameQuery({ ...gameQuery, searchInput })
                }
              />
            </GridItem>
            <Show above="lg">
              <GridItem area="aside" paddingX="10px">
                <GenreList
                  onSelectGenre={(genre) => {
                    setGameQuery({ ...gameQuery, genre });
                  }}
                  selectedGenre={gameQuery.genre}
                />
              </GridItem>
            </Show>
            <GridItem area="main">
              <Box paddingLeft={2}>
                <GameHeading gameQuery={gameQuery} />
                <Flex paddingY={2}>
                  <SortSelector
                    sortOrder={gameQuery.sortOrder}
                    onSelectSortOrder={(sortOrder) =>
                      setGameQuery({ ...gameQuery, sortOrder })
                    }
                  />
                </Flex>
              </Box>
              <GameGrid gameQuery={gameQuery} />
            </GridItem>
          </Grid>
        }
      />
    </Routes>
  );
}

export default App;
