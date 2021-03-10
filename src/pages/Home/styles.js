import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    height: "100vh",
    width: "100%",
    backgroundImage: `url(img/home.svg)`,
  },

  title: {
    fontStyle: "italic",
    marginBottom: "30px", 
  },
  subTitle: {
    lineHeight: "34px",
    marginBottom: "20px",
  },

  button:{
    textTransform: "capitalize",
    borderRadius: "0",
  },

  content: {
    color: "white",
    height: "100vh",
  },
});

export default useStyles;
