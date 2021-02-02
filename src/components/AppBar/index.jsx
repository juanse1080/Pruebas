import React from "react";

import Nav from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import useStyles from "./styles";

const AppBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Nav position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          ></IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Formulario</Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </Nav>
    </div>
  );
};

export default AppBar;
