import "./App.css";

import { ThemeProvider } from "@material-ui/core/styles";
// Import local theme
import theme from "./theme";

import Login from "./pages/Login";
import AppBar from "./components/AppBar";
import RouteWithAuthenticated from "./layouts/RouteWithAuthenticated";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouteWithAuthenticated navbar={<AppBar />}>
        <Login />
      </RouteWithAuthenticated>
    </ThemeProvider>
  );
}

export default App;
