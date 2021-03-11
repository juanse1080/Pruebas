import { Button, Container, Grid, Hidden, Typography } from "@material-ui/core";
import React from "react";

//import styles
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid
          container
          spacing={5}
          className={classes.content}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={12} md={6} lg={5}>
            <Typography variant="h2" color="inherit" className={classes.title}>
              ¿Necesitas una?
            </Typography>
            <Typography variant="h4" className={classes.subTitle}>
              nosotros te la llevamos donde la necesites, como la necesites y a
              la hora que necesites.
            </Typography>
            <Button
              color="secondary"
              variant="contained"
              classes={{ root: classes.button }}
            >
              Empieza
            </Button>
          </Grid>
          <Hidden smDown>
            <Grid item xs={6}>
              <img
                src="img/pagos.svg"
                alt="Metodos de pago"
                title="Metodos de pago"
              />
              <Typography variant="body1" align="center">
                contamos con muchos metodos de pago
              </Typography>
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
