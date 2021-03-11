import React, { useState } from "react";

import Nav from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";

import useStyles from "./styles";
import { Container } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";

const AppBar = () => {
  const classes = useStyles();

  const [search, setSearch] = useState("Pepe Perra");

  const handleValue = (e) => {
    setSearch(e.target.value);
  };

  const resetValue = () => {
    setSearch("");
  };

  return (
    <div className={classes.root}>
      <Nav position="fixed" color="transparent">
        <Container>
          <Toolbar>
            <Typography variant="h6" className={classes.title} noWrap>
              PROSTI YA!
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                value={search}
                onChange={handleValue}
              />
              <div className={classes.deleteIcon}>
                {search !== "" && <HighlightOffIcon onClick={resetValue} />}
              </div>
            </div>
            <div className={classes.pepeHablaMierda}/>
            <div className={classes.icon}>
              <IconButton
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={17} color="secondary">
                  <AccountCircle />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </Nav>
    </div>
  );
};

export default AppBar;
