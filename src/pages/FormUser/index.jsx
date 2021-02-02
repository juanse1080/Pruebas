import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import useStyles from "./styles";

const FormUser = () => {

  const classes = useStyles();

  const [state, setState] = useState({
    nombre: "",
    apellido: "",
    direccion: "",
    email: "",
    pais: "",
    ciudad: "",
  });

  const handleState = (event) => {
    const { value, name } = event.target;
    setState((_state) => ({ ..._state, [name]: value }));
  };

  return (
    <div className={classes.paper}>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField 
                value={state.nombre} 
                onChange={handleState} 
                type="text" 
                name="nombre"
                label="Nombre"
                variant="outlined"
                size="small"
                fullWidth
                helperText="Nombre completo"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField 
                value={state.apellido} 
                onChange={handleState} 
                type="text" 
                name="apellido"
                label="Apellido"
                variant="outlined"
                size="small"
                fullWidth
                helperText="Apellido"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField 
                value={state.direccion} 
                onChange={handleState} 
                type="text" 
                name="direccion"
                label="Direccion"
                variant="outlined"
                size="small"
                fullWidth
                helperText="Direccion"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField 
                value={state.email} 
                onChange={handleState} 
                type="text" 
                name="email"
                label="Email"
                variant="outlined"
                size="small"
                fullWidth
                helperText="Email"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField 
                value={state.pais} 
                onChange={handleState} 
                type="text" 
                name="pais"
                label="País"
                variant="outlined"
                size="small"
                fullWidth
                helperText="País"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField 
                value={state.ciudad} 
                onChange={handleState} 
                type="text" 
                name="ciudad"
                label="Ciudad"
                variant="outlined"
                size="small"
                fullWidth
                helperText="Ciudad"
            />
          </Grid>  
        </Grid>
        <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="baseline"
            spacing={4}
        >
            <Grid item>
                <Button>Cancelar</Button>
            </Grid>
            <Grid item>
                <Button>Guardar</Button>
            </Grid>
        </Grid>
    </div>
  );
};

export default FormUser;
