import React from "react";
import "./App.css";
import { Grid } from "@material-ui/core";
import AppBar from "./containers/AppBar";
import Posts from "./containers/Posts";

function App() {
  return (
    <Grid container direction="column" className="App">
      <AppBar />
      <Posts />
    </Grid>
  );
}

export default App;
