import React, { useState, useMemo } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

import useStyles from "../Login/styles";

function createData(name, calories, fat, carbs, protein, total) {
  return { name, calories, fat, carbs, protein, total };
}

const initialRows = [
  createData("Frozen yoghurt", 0, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const TableExample = () => {
  const classes = useStyles();

  const [rows, setRows] = useState(initialRows);

  const handleRows = (index) => (event) => {
    const { value, name } = event.target;
    setRows(_rows => {
        let copy = [..._rows];
        copy[index][name] = +value;
        return copy
    })
  };

  const returnTotal = useMemo(() => {
    const otherRows = {
      name: "total",
      calories: rows.reduce((accum, next) => accum + next.calories, 0),
      fat: rows.reduce((accum, next) => accum + next.fat, 0),
      carbs: rows.reduce((accum, next) => accum + next.carbs, 0),
      protein: rows.reduce((accum, next) => accum + next.protein, 0),
    };
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  {otherRows.name}
                </TableCell>
                <TableCell align="right">{otherRows.calories}</TableCell>
                <TableCell align="right">{otherRows.fat}</TableCell>
                <TableCell align="right">{otherRows.carbs}</TableCell>
                <TableCell align="right">{otherRows.protein}</TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }, [rows]);

  return (
    <Box mt={10}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, idx) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  <TextField
                    type="number"
                    value={row.calories}
                    name="calories"
                    onChange={handleRows(idx)}
                  />
                </TableCell>
                <TableCell align="right">
                  <TextField
                    type="number"
                    value={row.fat}
                    name="fat"
                    onChange={handleRows(idx)}
                  />
                </TableCell>
                <TableCell align="right">
                  <TextField
                    type="number"
                    value={row.carbs}
                    name="carbs"
                    onChange={handleRows(idx)}
                  />
                </TableCell>
                <TableCell align="right">
                  <TextField
                    type="number"
                    value={row.protein}
                    name="protein"
                    onChange={handleRows(idx)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {returnTotal}
    </Box>
  );
};

export default TableExample;
