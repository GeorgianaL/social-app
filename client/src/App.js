import React from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import "./App.css";
import { Grid } from "@material-ui/core";
import AppBar from "./containers/AppBar";
import Posts from "./containers/Posts";
import { Messaging } from "./containers/Messaging";
import { requestFirebaseNotificationPermission } from "./firebaseInit";

axios.defaults.baseURL = "http://localhost:3000";

const App = () => {
  requestFirebaseNotificationPermission()
    .then((firebaseToken) => {
      // eslint-disable-next-line no-console
      console.log(firebaseToken);
    })
    .catch((err) => {
      return err;
    });

  return (
    <Grid container direction="column" className="App">
      <ToastContainer autoClose={2000} position="top-center" />
      <AppBar />
      <Messaging />
      <Posts />
    </Grid>
  );
};

export default App;
