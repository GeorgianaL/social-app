import React from "react";
import axios from "axios";
import { Formik } from "formik";
import {
  Grid,
  Button,
  FormControl,
  InputLabel,
  Input,
  CircularProgress,
} from "@material-ui/core";
import { toast } from "react-toastify";

export const Messaging = () => {
  const [messages, setMessages] = React.useState([]);
  const [requesting, setRequesting] = React.useState(false);

  React.useEffect(() => {
    setRequesting(true);
    axios.get("/messages").then((resp) => {
      setMessages(resp.data);
      setRequesting(false);
    });
  }, []);

  return (
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid item>
        <Formik
          initialValues={{
            name: "",
            message: "",
          }}
          onSubmit={(values, actions) => {
            axios
              .post("/messages", values)
              .then((resp) => {
                setMessages(resp.data);
                actions.setSubmitting(false);
                toast.success("Submitted succesfully");
              })
              .catch((err) => {
                console.log(err);
                toast.error("There was an error saving the message");
              });
          }}
        >
          {(prop) => {
            const { handleSubmit, handleChange, isSubmitting } = prop;
            return (
              <Grid
                container
                spacing={2}
                alignItems="flex-end"
                justify="center"
              >
                <Grid item>
                  <FormControl>
                    <InputLabel htmlFor="name-input">Name</InputLabel>
                    <Input
                      id="name-input"
                      placeholder="Enter your name"
                      onChange={handleChange("name")}
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  <FormControl>
                    <InputLabel htmlFor="message-input">Message</InputLabel>
                    <Input
                      id="message-input"
                      placeholder="Enter a message"
                      onChange={handleChange("message")}
                    />
                  </FormControl>
                </Grid>
                <Grid item>
                  {isSubmitting ? (
                    <CircularProgress />
                  ) : (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => handleSubmit()}
                    >
                      Submit
                    </Button>
                  )}
                </Grid>
              </Grid>
            );
          }}
        </Formik>
      </Grid>
      <Grid item>
        <Grid container justify="center" direction="column">
          {requesting ? (
            <CircularProgress />
          ) : (
            <>
              <h3>Messages</h3>
              {messages.map((m, index) => {
                const { name, message } = m;
                return (
                  <Grid item key={index}>
                    {name}: {message}
                  </Grid>
                );
              })}
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};
