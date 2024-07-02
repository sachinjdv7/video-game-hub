import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main "`,
        lg: `"nav nav" "aside main "`,
      }}
    >
      <GridItem area="nav" bg="red">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="yellow">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="goldenrod">
        Main
      </GridItem>
    </Grid>
  );
};
export default App;
