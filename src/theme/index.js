import { createMuiTheme } from "@material-ui/core/styles";

import palette from "./palette";

export default createMuiTheme({
  palette,
  spacing: 4,
  shape: {
    borderRadius: 5,
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});
