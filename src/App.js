import "./App.css";

import { ThemeProvider } from "@material-ui/core/styles";
// Import local theme
import theme from "./theme";


import RouteWithAuthenticated from "./layouts/RouteWithAuthenticated";
import Home from "./pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouteWithAuthenticated>
        <Home />
      </RouteWithAuthenticated>
    </ThemeProvider>
  );
}

export default App;
