import React, { useState } from "react";

import Container from "@material-ui/core/Container";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import Input from "../../components/Input";

import useStyles from "./styles";

const Login = () => {
  const [state, setState] = useState({
    user: "",
    password: "",
  });

  const handleState = (event) => {
    const { value, name } = event.target;
    setState((_state) => ({ ..._state, [name]: value }));
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Input
              value={state.user}
              onChange={handleState}
              type="text"
              name="user"
              label="Username"
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              value={state.password}
              onChange={handleState}
              type="password"
              name="password"
              label="Password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button>Login</Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
