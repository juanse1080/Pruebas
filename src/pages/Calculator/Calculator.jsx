import React, { useState } from "react";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import useStyles from "./styles";

const Calculator = () => {
  const [state, setstate] = useState([]);
  const [current, setCurrent] = useState("0");
  const [enable, setEnabled] = useState({
    number: true,
    symbol: false,
    equal: false,
  });

  /// ["200 + 300", "100 + 4"]

  const classes = useStyles();

  const calcOperation = (operation) => {
    return eval(operation);
  };

  const addOperation = () => {
    setstate((_state) => [..._state, current]);
    setCurrent("0");
  };

  const editOperation = (event) => {
    const value = event.currentTarget.dataset.val;
    if (value === "CA") setstate([]);
    else {
      if (/^\d*$/.test(value))
        setEnabled((_enabled) => ({ ..._enabled, symbol: true, equal: true }));
      else setEnabled((_enabled) => ({ ..._enabled, symbol: false, equal: false }));
      setCurrent((_current) =>
        current === "0" ? value : `${_current}${value}`
      );
    }
  };

  return (
    <div className={classes.root}>
      <Paper
        className={classes.paper}
        elevation={3}
      >
        <Grid container>
          <Grid item xs={12} className={classes.container}>
            {state.map((item) => (
              <Typography align="right">{`${item} = ${calcOperation(
                item
              )}`}</Typography>
            ))}
            <Typography align="right">{current}</Typography>
          </Grid>
          <Grid item xs={12}>
            <hr></hr>
          </Grid>
          <Grid item xs={12} className={classes.container}>
            <Grid container>
              <Grid item xs={4}></Grid>
              <Grid item xs={4} onClick={enable.equal ? addOperation : null}>
                <Typography align="center">=</Typography>
              </Grid>
              <Grid
                item
                xs={4}
                data-val="CA"
                onClick={enable.number ? editOperation : null}
              >
                <Typography align="center">CA</Typography>
              </Grid>
              <Grid
                item
                xs={4}
                data-val="1"
                onClick={enable.number ? editOperation : null}
              >
                <Typography align="center">1</Typography>
              </Grid>
              <Grid
                item
                xs={4}
                data-val="2"
                onClick={enable.number ? editOperation : null}
              >
                <Typography align="center">2</Typography>
              </Grid>
              <Grid
                item
                xs={4}
                data-val="3"
                onClick={enable.number ? editOperation : null}
              >
                <Typography align="center">3</Typography>
              </Grid>
              <Grid
                item
                xs={4}
                data-val="4"
                onClick={enable.number ? editOperation : null}
              >
                <Typography align="center">4</Typography>
              </Grid>
              <Grid
                item
                xs={4}
                data-val="5"
                onClick={enable.number ? editOperation : null}
              >
                <Typography align="center">5</Typography>
              </Grid>
              <Grid
                item
                xs={4}
                data-val="6"
                onClick={enable.number ? editOperation : null}
              >
                <Typography align="center">6</Typography>
              </Grid>
              <Grid
                item
                xs={4}
                data-val="7"
                onClick={enable.number ? editOperation : null}
              >
                <Typography align="center">7</Typography>
              </Grid>
              <Grid
                item
                xs={4}
                data-val="8"
                onClick={enable.number ? editOperation : null}
              >
                <Typography align="center">8</Typography>
              </Grid>
              <Grid
                item
                xs={4}
                data-val="9"
                onClick={enable.number ? editOperation : null}
              >
                <Typography align="center">9</Typography>
              </Grid>
              <Grid
                item
                xs={4}
                data-val="-"
                onClick={enable.symbol ? editOperation : null}
              >
                <Typography align="center">-</Typography>
              </Grid>
              <Grid
                item
                xs={4}
                data-val="0"
                onClick={enable.number ? editOperation : null}
              >
                <Typography align="center">0</Typography>
              </Grid>
              <Grid
                item
                xs={4}
                data-val="+"
                onClick={enable.symbol ? editOperation : null}
              >
                <Typography align="center">+</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Calculator;
