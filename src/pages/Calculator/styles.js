import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 0,
  },
  root: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  container: {
    margin: theme.spacing(2),
  },
}));

export default useStyles;
