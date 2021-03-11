import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: "white",
  },
  title: {
    marginRight: theme.spacing(3),
  },
  search: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(1),
    width: "auto",
    borderColor: theme.palette.white,
    borderStyle: "solid",
    borderWidth: theme.spacing(0.5),
    borderRadius: theme.spacing(1),
    padding: theme.spacing(0.65),
  },
  searchIcon: {
    pointerEvents: "none",
    padding: theme.spacing(0,1),
  },
  deleteIcon: {
    padding: theme.spacing(0, 1),
  },

  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    width: "100%",
  },
  icon: {
    right: theme.spacing(2),
  },
  pepeHablaMierda:{
    flexGrow: 1,
    backgroundColor: "red",
  },
}));

export default useStyles;
